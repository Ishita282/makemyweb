import { NextResponse } from "next/server";

import { auth } from "@/src/lib/auth";
import { prisma } from "@/src/lib/prisma";
import { services } from "@/src/data/services";

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Please log in first." },
        { status: 401 },
      );
    }

    const body = await request.json();

    const serviceId =
      typeof body.serviceId === "string"
        ? body.serviceId.trim()
        : "";

    if (!serviceId) {
      return NextResponse.json(
        { error: "Service ID is required." },
        { status: 400 },
      );
    }

    // Make sure the service actually exists.
    const service = services.find((item) => item.id === serviceId);

    if (!service) {
      return NextResponse.json(
        { error: "Service not found." },
        { status: 404 },
      );
    }

    // Coming-soon services should not be added to the cart.
    if (service.comingSoon) {
      return NextResponse.json(
        { error: "This service is coming soon." },
        { status: 400 },
      );
    }

    const customized = body.customized === true;

    const customization =
      customized && body.customization
        ? body.customization
        : null;

    const existingItem = await prisma.cartItem.findUnique({
      where: {
        userId_serviceId: {
          userId: session.user.id,
          serviceId,
        },
      },
    });

    let item;

    if (existingItem) {
      item = await prisma.cartItem.update({
        where: {
          id: existingItem.id,
        },
        data: {
          quantity: {
            increment: 1,
          },
        },
      });
    } else {
      item = await prisma.cartItem.create({
        data: {
          userId: session.user.id,
          serviceId,
          quantity: 1,
          customized,
          customization,
        },
      });
    }

    return NextResponse.json(
      {
        message: existingItem
          ? "Cart quantity updated."
          : "Added to cart.",
        item,
      },
      { status: existingItem ? 200 : 201 },
    );
  } catch (error) {
    console.error("Cart error:", error);

    return NextResponse.json(
      { error: "Unable to add item to cart." },
      { status: 500 },
    );
  }
}

import { NextResponse } from "next/server";

import { auth } from "@/src/lib/auth";
import { prisma } from "@/src/lib/prisma";

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Please log in first." },
        { status: 401 }
      );
    }

    const body = await request.json();
    const serviceId = body.serviceId?.trim();

    if (!serviceId) {
      return NextResponse.json(
        { error: "Service ID is required." },
        { status: 400 }
      );
    }

    const item = await prisma.cartItem.upsert({
      where: {
        userId_serviceId: {
          userId: session.user.id,
          serviceId,
        },
      },
      update: {
        quantity: {
          increment: 1,
        },
      },
      create: {
        userId: session.user.id,
        serviceId,
        quantity: 1,
      },
    });

    return NextResponse.json(
      {
        message: "Added to cart.",
        item,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Cart error:", error);

    return NextResponse.json(
      { error: "Unable to add item to cart." },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { auth } from "@/src/lib/auth";
import { prisma } from "@/src/lib/prisma";

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 },
      );
    }

    const { serviceId } = await request.json();

    if (!serviceId) {
      return NextResponse.json(
        { error: "Service ID is required." },
        { status: 400 },
      );
    }

    const existingItem = await prisma.wishlist.findFirst({
      where: {
        userId: session.user.id,
        serviceId,
      },
    });

    if (existingItem) {
      return NextResponse.json({
        success: true,
        wishlisted: true,
      });
    }

    await prisma.wishlist.create({
      data: {
        userId: session.user.id,
        serviceId,
      },
    });

    return NextResponse.json({
      success: true,
      wishlisted: true,
    });
  } catch (error) {
    console.error("ADD WISHLIST ERROR:", error);

    return NextResponse.json(
      { error: "Failed to add wishlist item." },
      { status: 500 },
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 },
      );
    }

    const { serviceId } = await request.json();

    if (!serviceId) {
      return NextResponse.json(
        { error: "Service ID is required." },
        { status: 400 },
      );
    }

    await prisma.wishlist.deleteMany({
      where: {
        userId: session.user.id,
        serviceId,
      },
    });

    return NextResponse.json({
      success: true,
      wishlisted: false,
    });
  } catch (error) {
    console.error("REMOVE WISHLIST ERROR:", error);

    return NextResponse.json(
      { error: "Failed to remove wishlist item." },
      { status: 500 },
    );
  }
}

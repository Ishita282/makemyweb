import { NextResponse } from "next/server";

import { auth } from "@/src/lib/auth";
import { prisma } from "@/src/lib/prisma";

export async function DELETE(request: Request) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 },
      );
    }

    const body = await request.json();

    const cartItemId = body?.cartItemId;

    if (!cartItemId || typeof cartItemId !== "string") {
      return NextResponse.json(
        { error: "Cart item ID is required." },
        { status: 400 },
      );
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id: cartItemId,
        userId: session.user.id,
      },
    });

    if (!cartItem) {
      return NextResponse.json(
        { error: "Cart item not found." },
        { status: 404 },
      );
    }

    await prisma.cartItem.delete({
      where: {
        id: cartItem.id,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("REMOVE CART ITEM ERROR:", error);

    return NextResponse.json(
      { error: "Failed to remove cart item." },
      { status: 500 },
    );
  }
}

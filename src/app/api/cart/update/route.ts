import { NextResponse } from "next/server";
import { auth } from "@/src/lib/auth";
import { prisma } from "@/src/lib/prisma";

export async function PATCH(request: Request) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 },
      );
    }

    const body = await request.json();

    const { cartItemId, quantity } = body;

    if (!cartItemId || typeof quantity !== "number") {
      return NextResponse.json(
        { error: "Invalid cart item or quantity." },
        { status: 400 },
      );
    }

    if (quantity < 1) {
      return NextResponse.json(
        { error: "Quantity must be at least 1." },
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

    const updatedItem = await prisma.cartItem.update({
      where: {
        id: cartItem.id,
      },
      data: {
        quantity,
      },
    });

    return NextResponse.json({
      success: true,
      cartItem: updatedItem,
    });
  } catch (error) {
    console.error("UPDATE CART ITEM ERROR:", error);

    return NextResponse.json(
      { error: "Failed to update cart item." },
      { status: 500 },
    );
  }
}

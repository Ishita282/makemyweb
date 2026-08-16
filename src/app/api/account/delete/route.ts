import { NextResponse } from "next/server";

import { auth } from "@/src/lib/auth";
import { prisma } from "@/src/lib/prisma";

export async function POST() {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 },
      );
    }

    const email = session.user.email.trim().toLowerCase();

    await prisma.$transaction(async (tx) => {
      await tx.signupVerification.deleteMany({
        where: {
          email,
        },
      });

      await tx.user.delete({
        where: {
          email,
        },
      });
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("ACCOUNT DELETE ERROR:", error);

    return NextResponse.json(
      { error: "Failed to delete account" },
      { status: 500 },
    );
  }
}

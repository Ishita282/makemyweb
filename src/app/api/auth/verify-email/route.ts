import { NextResponse } from "next/server";

import { prisma } from "@/src/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token");

    if (!token) {
      return NextResponse.redirect(
        new URL("/verify-email?error=invalid-token", request.url),
      );
    }

    const signupVerification =
      await prisma.signupVerification.findUnique({
        where: { token },
      });

    if (!signupVerification) {
      return NextResponse.redirect(
        new URL("/verify-email?error=invalid-token", request.url),
      );
    }

    if (signupVerification.expiresAt < new Date()) {
      await prisma.signupVerification.delete({
        where: { id: signupVerification.id },
      });

      return NextResponse.redirect(
        new URL("/verify-email?error=expired", request.url),
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: signupVerification.email },
    });

    if (existingUser) {
      await prisma.signupVerification.delete({
        where: { id: signupVerification.id },
      });

      return NextResponse.redirect(
        new URL("/verify-email?error=already-exists", request.url),
      );
    }

    const user = await prisma.user.create({
      data: {
        name: signupVerification.name,
        email: signupVerification.email,
        password: signupVerification.password,
        emailVerified: new Date(),
      },
    });

    await prisma.signupVerification.delete({
      where: { id: signupVerification.id },
    });

    return NextResponse.redirect(
      new URL(
        `/verify-email?success=true&email=${encodeURIComponent(
          user.email ?? "",
        )}`,
        request.url,
      ),
    );
  } catch (error) {
    console.error("Email verification error:", error);

    return NextResponse.redirect(
      new URL("/verify-email?error=server", request.url),
    );
  }
}

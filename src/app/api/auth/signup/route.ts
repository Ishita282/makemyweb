import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import crypto from "crypto";

import { prisma } from "@/src/lib/prisma";
import { sendVerificationEmail } from "@/src/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = body.name?.trim();
    const email = body.email?.trim().toLowerCase();
    const password = body.password;
    const confirmPassword = body.confirmPassword;

    if (!name || !email || !password || !confirmPassword) {
      return NextResponse.json(
        {
          error:
            "Name, email, password and confirm password are required.",
        },
        { status: 400 },
      );
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: "Passwords do not match." },
        { status: 400 },
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters." },
        { status: 400 },
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          error:
            "An account with this email already exists. Please log in.",
        },
        { status: 409 },
      );
    }

    await prisma.signupVerification.deleteMany({
      where: { email },
    });

    const hashedPassword = await bcrypt.hash(password, 12);

    const token = crypto.randomBytes(32).toString("hex");

    const expiresAt = new Date(Date.now() + 30 * 60 * 1000);

    await prisma.signupVerification.create({
      data: {
        name,
        email,
        password: hashedPassword,
        token,
        expiresAt,
      },
    });

    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const verificationUrl =
      `${baseUrl}/api/auth/verify-email?token=${token}`;

    await sendVerificationEmail(email, verificationUrl);

    return NextResponse.json(
      {
        message:
          "Please check your email to verify your account.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Signup error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

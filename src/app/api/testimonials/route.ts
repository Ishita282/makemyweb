import { NextResponse } from "next/server";

import { prisma } from "@/src/lib/prisma";
import { auth } from "@/src/lib/auth";

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "You must be logged in to add a testimonial." },
        { status: 401 },
      );
    }

    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const role = String(body.role ?? "").trim();
    const review = String(body.review ?? "").trim();
    const rating = Number(body.rating ?? 5);

    if (!name) {
      return NextResponse.json(
        { error: "Client name is required." },
        { status: 400 },
      );
    }

    if (!role) {
      return NextResponse.json(
        { error: "Role / company is required." },
        { status: 400 },
      );
    }

    if (!review) {
      return NextResponse.json(
        { error: "Testimonial is required." },
        { status: 400 },
      );
    }

    if (review.length < 10) {
      return NextResponse.json(
        { error: "Testimonial must be at least 10 characters." },
        { status: 400 },
      );
    }

    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: "Rating must be between 1 and 5." },
        { status: 400 },
      );
    }

    // One testimonial per logged-in user.
    const existingTestimonial = await prisma.testimonial.findUnique({
      where: {
        userId: session.user.id,
      },
    });

    if (existingTestimonial) {
      return NextResponse.json(
        { error: "You have already submitted a testimonial." },
        { status: 409 },
      );
    }

    const testimonial = await prisma.testimonial.create({
      data: {
        userId: session.user.id,
        name,
        role,
        review,
        rating,
      },
    });

    return NextResponse.json(testimonial, { status: 201 });
  } catch (error: unknown) {
    console.error("CREATE TESTIMONIAL ERROR:", error);

    return NextResponse.json(
      { error: "Something went wrong while saving the testimonial." },
      { status: 500 },
    );
  }
}

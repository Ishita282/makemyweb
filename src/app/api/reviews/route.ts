import { NextResponse } from "next/server";

import { auth } from "@/src/lib/auth";
import { prisma } from "@/src/lib/prisma";

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "You must be logged in to submit a review." },
        { status: 401 },
      );
    }

    const body = await request.json();

    const serviceId = String(body.serviceId ?? "").trim();
    const review = String(body.review ?? "").trim();
    const rating = Number(body.rating);

    if (!serviceId) {
      return NextResponse.json(
        { error: "Service ID is required." },
        { status: 400 },
      );
    }

    if (!review) {
      return NextResponse.json(
        { error: "Review is required." },
        { status: 400 },
      );
    }

    if (review.length < 10) {
      return NextResponse.json(
        { error: "Review must be at least 10 characters." },
        { status: 400 },
      );
    }

    if (review.length > 1000) {
      return NextResponse.json(
        { error: "Review must be less than 1000 characters." },
        { status: 400 },
      );
    }

    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: "Rating must be between 1 and 5." },
        { status: 400 },
      );
    }

    const existingReview = await prisma.review.findUnique({
      where: {
        userId_serviceId: {
          userId: session.user.id,
          serviceId,
        },
      },
    });

    if (existingReview) {
      return NextResponse.json(
        { error: "You have already reviewed this service." },
        { status: 409 },
      );
    }

    const newReview = await prisma.review.create({
      data: {
        userId: session.user.id,
        serviceId,
        rating,
        review,
      },
    });

    return NextResponse.json(newReview, { status: 201 });
  } catch (error) {
    console.error("CREATE REVIEW ERROR:", error);

    return NextResponse.json(
      { error: "Something went wrong while submitting your review." },
      { status: 500 },
    );
  }
}

import { NextResponse } from "next/server";

import { auth } from "@/src/lib/auth";
import { prisma } from "@/src/lib/prisma";

export async function POST(request: Request) {
  try {
    const session = await auth();

    // User must be logged in
    if (!session?.user?.id) {
      return NextResponse.json(
        {
          error: "You must be logged in to submit a review.",
        },
        { status: 401 },
      );
    }

    const body = await request.json();

    const serviceId = String(body.serviceId ?? "").trim();
    const review = String(body.review ?? "").trim();
    const rating = Number(body.rating);

    // Validate service
    if (!serviceId) {
      return NextResponse.json(
        {
          error: "Service ID is required.",
        },
        { status: 400 },
      );
    }

    // Validate review
    if (!review) {
      return NextResponse.json(
        {
          error: "Review is required.",
        },
        { status: 400 },
      );
    }

    if (review.length < 10) {
      return NextResponse.json(
        {
          error: "Review must be at least 10 characters.",
        },
        { status: 400 },
      );
    }

    if (review.length > 1000) {
      return NextResponse.json(
        {
          error: "Review must be less than 1000 characters.",
        },
        { status: 400 },
      );
    }

    // Validate rating
    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
      return NextResponse.json(
        {
          error: "Rating must be between 1 and 5.",
        },
        { status: 400 },
      );
    }

    // Check whether this user has already reviewed this service
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
        {
          error: "You have already reviewed this service.",
        },
        { status: 409 },
      );
    }

    // Create the review
    const newReview = await prisma.review.create({
      data: {
        userId: session.user.id,
        serviceId,
        rating,
        review,
      },
    });

    return NextResponse.json(
      {
        message: "Review submitted successfully.",
        review: newReview,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("CREATE REVIEW ERROR:", error);

    /*
     * The database also has:
     *
     * @@unique([userId, serviceId])
     *
     * This protects against duplicate reviews even if
     * two requests are submitted at almost the same time.
     *
     * We intentionally avoid depending on a Prisma error-class
     * import here, so this works cleanly with your generated client.
     */

    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "P2002"
    ) {
      return NextResponse.json(
        {
          error: "You have already reviewed this service.",
        },
        { status: 409 },
      );
    }

    return NextResponse.json(
      {
        error: "Something went wrong while submitting your review.",
      },
      { status: 500 },
    );
  }
}

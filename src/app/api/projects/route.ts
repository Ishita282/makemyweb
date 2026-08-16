import { NextResponse } from "next/server";

import { auth } from "@/src/lib/auth";
import { prisma } from "@/src/lib/prisma";

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        {
          error: "Please log in before submitting a project inquiry.",
        },
        { status: 401 },
      );
    }

    const body = await request.json();

    const name = body.name?.trim();
    const email = body.email?.trim().toLowerCase();
    const phone = body.phone?.trim();
    const company = body.company?.trim() || null;
    const service = body.service?.trim();
    const budget = body.budget?.trim() || null;
    const timeline = body.timeline?.trim() || null;
    const details = body.details?.trim();

    if (
      !name ||
      !email ||
      !phone ||
      !service ||
      !budget ||
      !timeline ||
      !details
    ) {
      return NextResponse.json(
        {
          error: "Please complete all required fields.",
        },
        { status: 400 },
      );
    }

    if (email !== session.user.email?.toLowerCase()) {
      return NextResponse.json(
        {
          error: "The email must match your logged-in account.",
        },
        { status: 400 },
      );
    }

    const project = await prisma.project.create({
      data: {
        userId: session.user.id,
        title: `${service} Project`,
        service,
        description: details,
        phone,
        company,
        budget,
        timeline,
        status: "PENDING",
      },
    });

    return NextResponse.json(
      {
        message: "Project inquiry submitted successfully.",
        project,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Create project error:", error);

    return NextResponse.json(
      {
        error: "Unable to submit your project inquiry. Please try again.",
      },
      { status: 500 },
    );
  }
}

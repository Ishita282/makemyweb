import { NextResponse } from "next/server";

import { prisma } from "@/src/lib/prisma";

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { error: "Testimonial ID is required." },
        { status: 400 },
      );
    }

    const testimonial = await prisma.testimonial.findUnique({
      where: { id },
    });

    if (!testimonial) {
      return NextResponse.json(
        { error: "Testimonial not found." },
        { status: 404 },
      );
    }

    await prisma.testimonial.delete({
      where: { id },
    });

    return NextResponse.json({
      message: "Testimonial deleted successfully.",
    });
  } catch (error) {
    console.error("DELETE TESTIMONIAL ERROR:", error);

    return NextResponse.json(
      { error: "Something went wrong while deleting the testimonial." },
      { status: 500 },
    );
  }
}

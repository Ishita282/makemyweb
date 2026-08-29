import { auth } from "@/src/lib/auth";
import { prisma } from "@/src/lib/prisma";

import Testimonials from "../sections/Testimonials";

export default async function TestimonialsServer() {
  const session = await auth();

  const testimonials = await prisma.testimonial.findMany({
    where: {
      published: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      userId: true,
      name: true,
      role: true,
      review: true,
      rating: true,
      image: true,

      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });

  return (
    <Testimonials
      testimonials={testimonials.map((testimonial) => ({
        id: testimonial.id,
        userId: testimonial.userId,
        name: testimonial.user?.name || testimonial.name,
        role: testimonial.role,
        review: testimonial.review,
        rating: testimonial.rating,
        image: testimonial.user?.image || testimonial.image,
      }))}
      currentUserId={session?.user?.id ?? null}
      isAdmin={session?.user?.role === "ADMIN"}
    />
  );
}

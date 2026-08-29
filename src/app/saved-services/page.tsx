import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowRight, Heart } from "lucide-react";
import Image from "next/image";

import SavedServiceHeart from "./saved-heart/SavedServiceHeart";
import { auth } from "@/src/lib/auth";
import { prisma } from "@/src/lib/prisma";
import { services } from "@/src/data/services";

export default async function SavedServicesPage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  const wishlistItems = await prisma.wishlist.findMany({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const savedServices = wishlistItems
    .map((item) =>
      services.find((service) => service.id === item.serviceId),
    )
    .filter((service): service is (typeof services)[number] => Boolean(service));

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-950">
              Saved Services
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Services you&apos;ve saved for later.
            </p>
          </div>

          <Link
            href="/services"
            className="hidden items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:inline-flex"
          >
            Explore Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Empty State */}
        {savedServices.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-10 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-pink-50 text-pink-500">
              <Heart className="h-7 w-7" />
            </div>

            <h2 className="mt-5 text-xl font-bold text-slate-950">
              No saved services yet
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              When you save a service, it will appear here so you can easily
              find it again.
            </p>

            <Link
              href="/services"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Browse Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          /* Saved Services */
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {savedServices.map((service) => (
              <div
                key={service.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-md"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="font-bold text-slate-950">
                      {service.title}
                    </h2>

                    <SavedServiceHeart serviceId={service.id} />
                  </div>

                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-500">
                    {service.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs text-slate-500">
                        Starting at
                      </p>

                      <p className="font-bold text-slate-950">
                        ₹{service.pricing.startingAt.toLocaleString("en-IN")}
                      </p>
                    </div>

                    <Link
                      href={`/services/${service.id}`}
                      className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      View Service
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

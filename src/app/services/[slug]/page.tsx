import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Check, Clock3, Star } from "lucide-react";

import { services } from "@/src/data/services";
import ServiceActions from "@/src/components/sections/ServiceActions";
import ReviewForm from "./reviews/ReviewForm";
import { auth } from "@/src/lib/auth";
import { prisma } from "@/src/lib/prisma";
interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;

  const service = services.find((item) => item.id === slug);

  if (!service) {
    notFound();
  }

  const session = await auth();

  let initialWishlisted = false;
  let initialAddedToCart = false;

  const reviews = await prisma.review.findMany({
    where: {
      serviceId: service.id,
    },
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const reviewCount = reviews.length;

  const averageRating =
    reviewCount > 0
      ? reviews.reduce((total, review) => total + review.rating, 0) /
        reviewCount
      : 0;

  if (session?.user?.id) {
    const [wishlistItem, cartItem] = await Promise.all([
      prisma.wishlist.findFirst({
        where: {
          userId: session.user.id,
          serviceId: service.id,
        },
      }),

      prisma.cartItem.findFirst({
        where: {
          userId: session.user.id,
          serviceId: service.id,
        },
      }),
    ]);

    initialWishlisted = !!wishlistItem;
    initialAddedToCart = !!cartItem;
  }

  const discount = Math.round(
    ((service.pricing.price - service.pricing.startingAt) /
      service.pricing.price) *
      100,
  );
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-blue-600"
        >
          <ArrowLeft size={16} />
          Back to Services
        </Link>

        <div className="mt-5 text-sm text-slate-500">
          Home / Services /{" "}
          <span className="font-medium text-slate-900">{service.title}</span>
        </div>
      </div>

      {/* Product Hero */}
      <section
        id="overview"
        className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover"
            />

            {service.comingSoon && (
              <div className="absolute left-5 top-5 rounded-full bg-amber-400 px-4 py-2 text-sm font-bold text-slate-950">
                Coming Soon
              </div>
            )}
          </div>

          {/* Information */}
          <div>
            <div
              className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} shadow-lg`}
            >
              <service.icon size={28} className="text-white" />
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              {service.title}
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              {service.description}
            </p>

            {/* Rating */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Star size={18} className="fill-amber-400 text-amber-400" />

                <span className="font-semibold text-slate-900">
                  {averageRating > 0 ? averageRating.toFixed(1) : "No rating"}
                </span>
              </div>

              <span className="text-slate-400">•</span>

              <a
                href="#reviews"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                {reviewCount} Reviews
              </a>
            </div>

            {/* Pricing */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs mb-8 font-medium text-red-400">
                *Comparison based on typical current market pricing*
              </p>
              <p className="text-sm font-medium text-slate-500">Starting at</p>

              <div className="mt-2 flex flex-wrap items-center gap-3">
                <span className="text-3xl font-bold text-slate-950">
                  ₹{service.pricing.startingAt.toLocaleString("en-IN")}
                </span>

                <span className="text-lg text-slate-400 line-through">
                  ₹{service.pricing.price.toLocaleString("en-IN")}
                </span>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
                  {discount}% OFF
                </span>
              </div>

              <p className="mt-2 text-sm text-slate-500">
                Final pricing depends on your project requirements.
              </p>
            </div>

            {/* Quick information */}
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm text-slate-600 ring-1 ring-slate-200">
                <Clock3 size={17} />
                {service.deliveryTime}
              </div>
            </div>

            {/* Service Actions */}
            <div className="mt-8">
              <ServiceActions
                serviceId={service.id}
                initialWishlisted={initialWishlisted}
                initialAddedToCart={initialAddedToCart}
              />

              <Link
                href={`/contact?service=${service.id}`}
                className="mt-3 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Start Project
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <nav className="sticky top-0 z-30 border-y border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-4 sm:px-6 lg:px-8">
          <a
            href="#description"
            className="whitespace-nowrap border-b-2 border-transparent py-4 text-sm font-medium text-slate-600 hover:border-blue-600 hover:text-blue-600"
          >
            Description
          </a>

          <a
            href="#features"
            className="whitespace-nowrap border-b-2 border-transparent py-4 text-sm font-medium text-slate-600 hover:border-blue-600 hover:text-blue-600"
          >
            What&apos;s Included
          </a>

          <a
            href="#how-it-works"
            className="whitespace-nowrap border-b-2 border-transparent py-4 text-sm font-medium text-slate-600 hover:border-blue-600 hover:text-blue-600"
          >
            How It Works
          </a>

          <a
            href="#ideal-for"
            className="whitespace-nowrap border-b-2 border-transparent py-4 text-sm font-medium text-slate-600 hover:border-blue-600 hover:text-blue-600"
          >
            Ideal For
          </a>

          <a
            href="#reviews"
            className="whitespace-nowrap border-b-2 border-transparent py-4 text-sm font-medium text-slate-600 hover:border-blue-600 hover:text-blue-600"
          >
            Reviews
          </a>

          <a
            href="#faq"
            className="whitespace-nowrap border-b-2 border-transparent py-4 text-sm font-medium text-slate-600 hover:border-blue-600 hover:text-blue-600"
          >
            FAQ
          </a>
        </div>
      </nav>

      {/* Description */}
      <section
        id="description"
        className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Overview
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-950">
            About {service.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {service.fullDescription}
          </p>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="scroll-mt-20 border-y border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            What&apos;s Included
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-950">
            Everything You Need
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 p-5"
              >
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100">
                  <Check size={15} className="text-green-600" />
                </div>

                <span className="font-medium text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Our Process
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-950">
            How It Works
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {service.howItWorks.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
                  {step.step}
                </div>

                <h3 className="mt-5 font-bold text-slate-950">{step.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section id="ideal-for" className="scroll-mt-20 bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-950">
            Who Is This For?
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {service.idealFor.map((item) => (
              <span
                key={item}
                className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      {/* Reviews */}
      <section id="reviews" className="scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Customer Feedback
          </p>

          <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-950">Reviews</h2>

              {reviewCount > 0 && (
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={18}
                        className={
                          index < Math.round(averageRating)
                            ? "fill-amber-400 text-amber-400"
                            : "text-slate-300"
                        }
                      />
                    ))}
                  </div>

                  <span className="text-sm font-medium text-slate-600">
                    {averageRating.toFixed(1)} ({reviewCount}{" "}
                    {reviewCount === 1 ? "review" : "reviews"})
                  </span>
                </div>
              )}
            </div>
          </div>

          {reviews.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
              <Star size={32} className="mx-auto text-slate-300" />

              <p className="mt-4 font-medium text-slate-700">No reviews yet</p>

              <p className="mt-2 text-sm text-slate-500">
                Be the first client to review this service.
              </p>
            </div>
          ) : (
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={16}
                        className={
                          index < review.rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-slate-300"
                        }
                      />
                    ))}
                  </div>

                  <p className="mt-4 leading-7 text-slate-600">
                    {review.review}
                  </p>

                  <div className="mt-5 flex items-center gap-3">
                    {review.user.image ? (
                      <Image
                        src={review.user.image}
                        alt={review.user.name || "User"}
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-600">
                        {(review.user.name?.[0] ?? "U").toUpperCase()}
                      </div>
                    )}

                    <p className="font-semibold text-slate-950">
                      {review.user.name || "User"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {session?.user?.id && <ReviewForm serviceId={service.id} />}

          {!session?.user?.id && (
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-center">
              <p className="text-sm text-slate-600">
                Please log in to leave a review.
              </p>

              <Link
                href="/login"
                className="mt-4 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Log In
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="scroll-mt-20 border-t border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Questions
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-950">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200">
            {service.faq.map((item, index) => (
              <details key={index} className="group p-6">
                <summary className="cursor-pointer list-none font-semibold text-slate-950">
                  <div className="flex items-center justify-between gap-4">
                    {item.question}

                    <span className="text-xl text-slate-400 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>

                <p className="mt-4 leading-7 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Get Started?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Let&apos;s discuss your requirements and build a solution that fits
            your business.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-slate-950 transition hover:bg-blue-500 hover:text-white"
          >
            Start Your Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

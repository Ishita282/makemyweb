import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowRight, ShoppingCart } from "lucide-react";
import Image from "next/image";

import CartItemActions from "./cart-action/CartItemActions";
import CartQuantityActions from "./cart-action/CartQuantityActions";

import { auth } from "@/src/lib/auth";
import { prisma } from "@/src/lib/prisma";
import { services } from "@/src/data/services";

export default async function CartPage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  const cartItems = await prisma.cartItem.findMany({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const cartServices = cartItems
    .map((item) => {
      const service = services.find(
        (service) => service.id === item.serviceId,
      );

      if (!service) {
        return null;
      }

      return {
        item,
        service,
      };
    })
    .filter(
      (
        entry,
      ): entry is NonNullable<typeof entry> => entry !== null,
    );

  const getUnitPrice = (
    item: (typeof cartItems)[number],
    service: (typeof services)[number],
  ) => {
    const customization = item.customization as {
      price?: number;
    } | null;

    if (
      item.customized &&
      typeof customization?.price === "number" &&
      customization.price >= 0
    ) {
      return customization.price;
    }

    return service.pricing.startingAt;
  };

  const total = cartServices.reduce((sum, { item, service }) => {
    const unitPrice = getUnitPrice(item, service);

    return sum + unitPrice * item.quantity;
  }, 0);

  const totalQuantity = cartServices.reduce(
    (sum, { item }) => sum + item.quantity,
    0,
  );

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-950">
            Your Cart
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Review the services you&apos;ve added to your cart.
          </p>
        </div>

        {/* Empty Cart */}
        {cartServices.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-10 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <ShoppingCart className="h-7 w-7" />
            </div>

            <h2 className="mt-5 text-xl font-bold text-slate-950">
              Your cart is empty
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              Add services to your cart and they will appear here.
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
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
            {/* Cart Items */}
            <div className="space-y-4">
              {cartServices.map(({ item, service }) => {
                const unitPrice = getUnitPrice(item, service);

                const customization = item.customization as {
                  answers?: Record<string, string>;
                } | null;

                return (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <div className="flex flex-col gap-5 sm:flex-row">
                      {/* Image */}
                      <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:w-40">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h2 className="font-bold text-slate-950">
                                {service.title}
                              </h2>

                              {item.customized && (
                                <span className="mt-1 inline-flex rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">
                                  Customized
                                </span>
                              )}
                            </div>

                            <CartItemActions cartItemId={item.id} />
                          </div>

                          <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                            {service.description}
                          </p>

                          {/* Custom Configuration */}
                          {item.customized &&
                            customization?.answers &&
                            Object.keys(customization.answers).length > 0 && (
                              <div className="mt-4 rounded-xl bg-blue-50 p-4">
                                <p className="text-xs font-bold uppercase tracking-wide text-blue-600">
                                  Custom Configuration
                                </p>

                                <div className="mt-3 space-y-2">
                                  {Object.entries(
                                    customization.answers,
                                  ).map(([questionId, answer]) => (
                                    <div
                                      key={questionId}
                                      className="text-sm"
                                    >
                                      <span className="font-medium text-slate-500">
                                        {questionId}:
                                      </span>

                                      <span className="ml-2 font-semibold text-slate-800">
                                        {answer}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                        </div>

                        {/* Bottom Actions */}
                        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                          <div>
                            <p className="text-xs text-slate-500">
                              {item.customized
                                ? "Customized price"
                                : "Starting price"}
                            </p>

                            <p className="mt-1 font-bold text-slate-950">
                              ₹{unitPrice.toLocaleString("en-IN")}
                            </p>

                            {item.quantity > 1 && (
                              <p className="mt-1 text-xs text-slate-400">
                                ₹
                                {(
                                  unitPrice * item.quantity
                                ).toLocaleString("en-IN")}{" "}
                                for {item.quantity} items
                              </p>
                            )}
                          </div>

                          <CartQuantityActions
                            cartItemId={item.id}
                            quantity={item.quantity}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cart Summary */}
            <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-bold text-slate-950">
                Cart Summary
              </h2>

              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>Items</span>

                  <span>{cartServices.length}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>Quantity</span>

                  <span>{totalQuantity}</span>
                </div>

                <div className="border-t border-slate-200 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-950">
                      Total
                    </span>

                    <span className="text-xl font-bold text-blue-600">
                      ₹{total.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href="/start-project"
                className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Continue
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/services"
                className="mt-3 flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Continue Shopping
              </Link>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}

import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowRight, ShoppingCart } from "lucide-react";
import CartItemActions from "./cart-action/CartItemActions";
import CartQuantityActions from "./cart-action/CartQuantityActions";

import Image from "next/image";
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
      const service = services.find((service) => service.id === item.serviceId);

      if (!service) return null;

      return {
        item,
        service,
      };
    })
    .filter(Boolean);

  const total = cartServices.reduce((sum, entry) => {
    if (!entry) return sum;

    return sum + entry.service.pricing.startingAt * entry.item.quantity;
  }, 0);

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-950">Your Cart</h1>

          <p className="mt-2 text-sm text-slate-500">
            Review the services you&apos;ve added to your cart.
          </p>
        </div>

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
            <div className="space-y-4">
              {cartServices.map((entry) => {
                if (!entry) return null;

                const { item, service } = entry;

                return (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <div className="flex flex-col gap-5 sm:flex-row">
                      <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:w-40">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>

                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-4">
                            <h2 className="font-bold text-slate-950">
                              {service.title}
                            </h2>

                            <CartItemActions cartItemId={item.id} />
                          </div>

                          <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                            {service.description}
                          </p>
                        </div>

                        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                          <div>
                            <p className="text-xs text-slate-500">
                              Starting price
                            </p>

                            <p className="mt-1 font-bold text-slate-950">
                              ₹
                              {service.pricing.startingAt.toLocaleString(
                                "en-IN",
                              )}
                            </p>
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

            <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-bold text-slate-950">Cart Summary</h2>

              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>Items</span>
                  <span>{cartServices.length}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>Quantity</span>
                  <span>
                    {cartServices.reduce(
                      (sum, entry) => sum + (entry?.item.quantity ?? 0),
                      0,
                    )}
                  </span>
                </div>

                <div className="border-t border-slate-200 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-950">Total</span>

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
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}

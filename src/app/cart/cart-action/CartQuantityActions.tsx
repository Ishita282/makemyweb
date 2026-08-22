"use client";

import { Minus, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type CartQuantityActionsProps = {
  cartItemId: string;
  quantity: number;
};

export default function CartQuantityActions({
  cartItemId,
  quantity,
}: CartQuantityActionsProps) {
  const router = useRouter();
  const [isUpdating, setIsUpdating] = useState(false);

  async function updateQuantity(newQuantity: number) {
    if (isUpdating || newQuantity < 1) return;

    setIsUpdating(true);

    try {
      const response = await fetch("/api/cart/update", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cartItemId,
          quantity: newQuantity,
        }),
      });

      const data = await response.json();

      console.log("CART UPDATE RESPONSE:", {
        status: response.status,
        data,
      });

      if (!response.ok) {
        if (response.status === 401) {
          window.location.href = "/login";
          return;
        }

        throw new Error(data.error || "Failed to update cart quantity.");
      }

      router.refresh();
    } catch (error) {
      console.error("UPDATE CART QUANTITY ERROR:", error);
    } finally {
      setIsUpdating(false);
    }
  }

  return (
    <div className="flex items-center rounded-lg border border-slate-200">
      <button
        type="button"
        onClick={() => updateQuantity(quantity - 1)}
        disabled={isUpdating || quantity <= 1}
        className="p-2 text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
        title="Decrease quantity"
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>

      <span className="min-w-10 text-center text-sm font-semibold">
        {quantity}
      </span>

      <button
        type="button"
        onClick={() => updateQuantity(quantity + 1)}
        disabled={isUpdating}
        className="p-2 text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
        title="Increase quantity"
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}

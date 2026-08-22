"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

type CartItemActionsProps = {
  cartItemId: string;
};

export default function CartItemActions({
  cartItemId,
}: CartItemActionsProps) {
  const router = useRouter();
  const [isRemoving, setIsRemoving] = useState(false);

  async function handleRemove() {
    if (isRemoving) return;

    setIsRemoving(true);

    try {
      const response = await fetch("/api/cart/remove", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cartItemId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to remove cart item.");
      }

      router.refresh();
    } catch (error) {
      console.error("REMOVE CART ITEM ERROR:", error);
      setIsRemoving(false);
    }
  }

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={handleRemove}
        disabled={isRemoving}
        className="text-slate-400 transition hover:text-red-500 disabled:cursor-not-allowed disabled:opacity-50"
        title="Remove from cart"
        aria-label="Remove from cart"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  );
}

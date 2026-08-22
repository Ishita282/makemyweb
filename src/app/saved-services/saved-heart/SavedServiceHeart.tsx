"use client";

import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type SavedServiceHeartProps = {
  serviceId: string;
};

export default function SavedServiceHeart({
  serviceId,
}: SavedServiceHeartProps) {
  const router = useRouter();
  const [isRemoving, setIsRemoving] = useState(false);

  async function handleRemove() {
    if (isRemoving) return;

    setIsRemoving(true);

    try {
      const response = await fetch("/api/wishlist", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          serviceId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to remove from wishlist.");
      }

      router.refresh();
    } catch (error) {
      console.error("REMOVE WISHLIST ERROR:", error);
      setIsRemoving(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleRemove}
      disabled={isRemoving}
      className="rounded-full p-1 text-pink-500 transition hover:bg-pink-50 hover:text-pink-600 disabled:cursor-not-allowed disabled:opacity-50"
      title="Remove from saved services"
      aria-label="Remove from saved services"
    >
      <Heart className="h-5 w-5 fill-current" />
    </button>
  );
}

"use client";

import { useState } from "react";
import { Check, Heart, ShoppingCart } from "lucide-react";

import Button from "@/src/components/ui/Button";

interface ServiceActionsProps {
  serviceId: string;
  initialWishlisted: boolean;
  initialAddedToCart: boolean;
}

export default function ServiceActions({
  serviceId,
  initialWishlisted,
  initialAddedToCart,
}: ServiceActionsProps) {
  const [wishlistLoading, setWishlistLoading] = useState(false);
  const [cartLoading, setCartLoading] = useState(false);

  // Initialize directly from server props.
  // No useEffect needed.
  const [wishlisted, setWishlisted] = useState(initialWishlisted);
  const [addedToCart, setAddedToCart] = useState(initialAddedToCart);

  async function toggleWishlist() {
    if (wishlistLoading) return;

    try {
      setWishlistLoading(true);

      if (wishlisted) {
        // REMOVE
        const response = await fetch("/api/wishlist", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            serviceId,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          if (response.status === 401) {
            window.location.href = "/login";
            return;
          }

          throw new Error(
            data.error || "Unable to remove from wishlist.",
          );
        }

        setWishlisted(false);
      } else {
        // ADD
        const response = await fetch("/api/wishlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            serviceId,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          if (response.status === 401) {
            window.location.href = "/login";
            return;
          }

          throw new Error(
            data.error || "Unable to add to wishlist.",
          );
        }

        setWishlisted(true);
      }
    } catch (error) {
      console.error("Wishlist error:", error);
      alert("Unable to update your wishlist.");
    } finally {
      setWishlistLoading(false);
    }
  }

  async function addToCart() {
    if (cartLoading || addedToCart) return;

    try {
      setCartLoading(true);

      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          serviceId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          window.location.href = "/login";
          return;
        }

        throw new Error(data.error || "Unable to add to cart.");
      }

      setAddedToCart(true);
    } catch (error) {
      console.error("Cart error:", error);
      alert("Unable to add this service to your cart.");
    } finally {
      setCartLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button
        variant="outline"
        size="lg"
        onClick={toggleWishlist}
        disabled={wishlistLoading}
        className="flex-1"
      >
        {wishlisted ? (
          <>
            <Heart className="mr-2 h-5 w-5 fill-current text-pink-500" />
            {wishlistLoading ? "Removing..." : "Saved"}
          </>
        ) : (
          <>
            <Heart className="mr-2 h-5 w-5" />
            {wishlistLoading ? "Saving..." : "Add to Wishlist"}
          </>
        )}
      </Button>

      <Button
        variant="secondary"
        size="lg"
        onClick={addToCart}
        disabled={cartLoading || addedToCart}
        className="flex-1"
      >
        {addedToCart ? (
          <>
            <Check className="mr-2 h-5 w-5" />
            Added to Cart
          </>
        ) : (
          <>
            <ShoppingCart className="mr-2 h-5 w-5" />
            {cartLoading ? "Adding..." : "Add to Cart"}
          </>
        )}
      </Button>
    </div>
  );
}

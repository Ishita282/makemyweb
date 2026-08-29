"use client";

import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";

import ServiceCustomizationModal from "./ServiceCustomizationModal";

interface MCQOption {
    label: string;
    value: string;
    price: number;
}

interface MCQ {
    id: string;
    question: string;
    options: MCQOption[];
}

interface Props {
    serviceId: string;
    serviceTitle: string;
    basePrice: number;
    mcqs: MCQ[];
    initialWishlisted: boolean;
    initialAddedToCart: boolean;
}

export default function ServiceActions({
    serviceId,
    serviceTitle,
    basePrice,
    mcqs,
    initialWishlisted,
    initialAddedToCart,
}: Props) {
    const [wishlisted, setWishlisted] = useState(initialWishlisted);
    const [addedToCart, setAddedToCart] = useState(initialAddedToCart);
    const [customizeOpen, setCustomizeOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const toggleWishlist = async () => {
        setLoading(true);

        try {
            const response = await fetch("/api/wishlist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    serviceId,
                }),
            });

            if (!response.ok) {
                return;
            }

            const data = await response.json();

            setWishlisted(Boolean(data.wishlisted));
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="flex flex-wrap gap-3">
                <button
                    type="button"
                    onClick={() => setCustomizeOpen(true)}
                    disabled={addedToCart}
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                >
                    <ShoppingCart size={18} />

                    {addedToCart
                        ? "Customized Service in Cart"
                        : "Customize & Add to Cart"}
                </button>

                <button
                    type="button"
                    onClick={toggleWishlist}
                    disabled={loading}
                    className={`inline-flex items-center gap-2 rounded-xl border px-5 py-4 font-semibold transition ${
                        wishlisted
                            ? "border-red-200 bg-red-50 text-red-600"
                            : "border-slate-200 bg-white text-slate-700 hover:border-red-200 hover:text-red-600"
                    }`}
                >
                    <Heart
                        size={18}
                        className={wishlisted ? "fill-current" : ""}
                    />

                    {wishlisted ? "Wishlisted" : "Wishlist"}
                </button>
            </div>

            <ServiceCustomizationModal
                open={customizeOpen}
                onClose={() => setCustomizeOpen(false)}
                serviceId={serviceId}
                serviceTitle={serviceTitle}
                basePrice={basePrice}
                mcqs={mcqs}
                onAddedToCart={() => setAddedToCart(true)}
            />
        </>
    );
}

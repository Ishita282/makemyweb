"use client";

import { useState } from "react";
import { Star } from "lucide-react";

type ReviewFormProps = {
  serviceId: string;
};

export default function ReviewForm({ serviceId }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage("");

    if (rating === 0) {
      setMessage("Please select a rating.");
      return;
    }

    if (review.trim().length < 10) {
      setMessage("Review must be at least 10 characters.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          serviceId,
          rating,
          review: review.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error || "Failed to submit review.");
        return;
      }

      setReview("");
      setRating(0);
      setMessage("Review submitted successfully.");

      window.location.reload();
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
    >
      <h3 className="text-xl font-bold text-slate-950">
        Leave a Review
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        Share your experience with this service.
      </p>

      {/* Rating */}
      <div className="mt-6">
        <p className="mb-3 text-sm font-semibold text-slate-700">
          Your Rating
        </p>

        <div className="flex gap-2">
          {Array.from({ length: 5 }).map((_, index) => {
            const star = index + 1;

            return (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className="rounded-md p-1 transition hover:scale-110"
                aria-label={`${star} star${star > 1 ? "s" : ""}`}
              >
                <Star
                  size={28}
                  className={
                    star <= rating
                      ? "fill-amber-400 text-amber-400"
                      : "text-slate-300"
                  }
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Review */}
      <div className="mt-6">
        <label
          htmlFor="review"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Your Review
        </label>

        <textarea
          id="review"
          value={review}
          onChange={(event) => setReview(event.target.value)}
          placeholder="Tell us about your experience..."
          rows={5}
          maxLength={1000}
          className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />

        <p className="mt-2 text-right text-xs text-slate-400">
          {review.length}/1000
        </p>
      </div>

      {/* Message */}
      {message && (
        <p className="mt-4 text-sm font-medium text-slate-600">
          {message}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="mt-6 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Submitting..." : "Submit Review"}
      </button>
    </form>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";
import { Plus, Quote, Star, X, Trash2 } from "lucide-react";

import { Card, Section, SectionTitle } from "@/src/components/ui";
import { Marquee, Reveal } from "@/src/components/effects";

type Testimonial = {
  id: string;
  userId: string | null;
  name: string;
  role: string;
  review: string;
  rating: number;
  image?: string | null;
};

type TestimonialsProps = {
  testimonials: Testimonial[];
  currentUserId: string | null;
  isAdmin: boolean;
};

export default function Testimonials({
  testimonials,
  currentUserId,
  isAdmin,
}: TestimonialsProps) {
  const [showForm, setShowForm] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSaveTestimonial() {
    setMessage("");

    if (!name.trim()) {
      setMessage("Client name is required.");
      return;
    }

    if (!role.trim()) {
      setMessage("Role or company is required.");
      return;
    }

    if (review.trim().length < 10) {
      setMessage("Testimonial must be at least 10 characters.");
      return;
    }

    setSaving(true);

    try {
      const response = await fetch("/api/testimonials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          role: role.trim(),
          review: review.trim(),
          rating,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error || "Failed to save testimonial.");
        return;
      }

      setName("");
      setRole("");
      setReview("");
      setRating(5);

      setShowForm(false);

      window.location.reload();
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDeleteTestimonial(id: string, name: string) {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${name}'s testimonial?`,
    );

    if (!confirmed) return;

    setDeletingId(id);

    try {
      const response = await fetch(`/api/testimonials/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error || "Failed to delete testimonial.");
        return;
      }

      window.location.reload();
    } catch {
      setMessage("Something went wrong while deleting the testimonial.");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <Section className="bg-slate-50">
      {/* Header */}
      <div className="mb-8">
        <div className="mb-5 flex justify-end">
          <button
            type="button"
            onClick={() => {
              setMessage("");
              setShowForm(true);
            }}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-600"
          >
            <Plus size={18} />
            Add Testimonial
          </button>
        </div>

        <SectionTitle
          badge="Testimonials"
          title="What Our Clients Say"
          description="We're proud to help businesses launch, grow, and succeed with modern digital solutions."
        />
      </div>

      {/* Testimonials */}
      <Reveal>
        {testimonials.length > 0 ? (
          <Marquee duration={20} duplicate={testimonials.length > 1}>
            {testimonials.map((item) => (
              <Card
                key={item.id}
                className="group relative w-[380px] flex-shrink-0 overflow-hidden"
              >
                {/* Quote icon */}
                <div className="pointer-events-none absolute right-6 top-6 text-blue-100 transition-transform duration-300 group-hover:scale-110">
                  <Quote size={42} />
                </div>

                {/* Delete button */}
                {(isAdmin || item.userId === currentUserId) && (
                  <button
                    type="button"
                    onClick={() => handleDeleteTestimonial(item.id, item.name)}
                    disabled={deletingId === item.id}
                    className="absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-400 shadow-sm ring-1 ring-slate-200 transition hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50 sm:opacity-0 sm:group-hover:opacity-100"
                    aria-label={`Delete ${item.name}'s testimonial`}
                    title="Delete testimonial"
                  >
                    <Trash2 size={17} />
                  </button>
                )}

                {/* Author */}
                <div className="mb-6 flex items-center gap-3">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      height={44}
                      width={44}
                      className="h-11 w-11 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                      {item.name.charAt(0).toUpperCase()}
                    </div>
                  )}

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {item.name}
                    </h3>

                    <p className="text-sm text-slate-500">{item.role}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="mb-6 flex gap-1 pr-12">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < item.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-slate-200"
                      }
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="leading-8 text-slate-600">{item.review}</p>
              </Card>
            ))}
          </Marquee>
        ) : (
          <p className="text-center text-slate-500">No testimonials yet.</p>
        )}
      </Reveal>

      {/* Add Testimonial Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 px-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-950">
                  Add Testimonial
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Add a testimonial from one of your clients.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form */}
            <div className="mt-6 space-y-5">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Client Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="e.g. Muskan Joshi"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Role */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Role / Company
                </label>

                <input
                  type="text"
                  value={role}
                  onChange={(event) => setRole(event.target.value)}
                  placeholder="e.g. CEO, Protech Medical System"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Testimonial */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Testimonial
                </label>

                <textarea
                  rows={5}
                  value={review}
                  onChange={(event) => setReview(event.target.value)}
                  placeholder="Write what the client said..."
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Rating */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Rating
                </label>

                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="cursor-pointer rounded-md p-1 transition hover:scale-110"
                      aria-label={`Rate ${star} out of 5`}
                    >
                      <Star
                        size={26}
                        strokeWidth={2}
                        className={
                          star <= rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-transparent text-slate-300"
                        }
                      />
                    </button>
                  ))}
                </div>

                <p className="mt-2 text-xs text-slate-500">{rating} out of 5</p>
              </div>
            </div>

            {/* Error / status */}
            {message && (
              <p className="mt-4 text-sm font-medium text-red-600">{message}</p>
            )}

            {/* Actions */}
            <div className="mt-7 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                disabled={saving}
                className="rounded-xl px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleSaveTestimonial}
                disabled={saving}
                className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving ? "Saving..." : "Save Testimonial"}
              </button>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}

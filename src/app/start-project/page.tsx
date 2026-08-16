"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  Card,
  Input,
  Section,
  SectionTitle,
  Textarea,
} from "@/src/components/ui";

export default function StartProjectPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    details: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  setError("");
  setLoading(true);

  try {
    const response = await fetch("/api/project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error || "Unable to submit your project.");
      return;
    }

    router.push("/dashboard?projectCreated=true");
    router.refresh();
  } catch {
    setError("Unable to connect to the server. Please try again.");
  } finally {
    setLoading(false);
  }
}

  return (
    <Section>
      <SectionTitle
        badge="Start Project"
        title="Tell Us About Your Project"
        description="Share your project requirements and we'll get back to you as soon as possible."
      />

      <Card className="mx-auto max-w-4xl">
        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Input
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <Input
              name="company"
              placeholder="Company Name (Optional)"
              value={form.company}
              onChange={handleChange}
            />
          </div>

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
          >
            <option value="">Select Service</option>
            <option>Website Development</option>
            <option>Web Applications</option>
            <option>E-Commerce</option>
            <option>AI Integration</option>
            <option>Mobile Apps</option>
            <option>SEO & Branding</option>
            <option>Data Analytics</option>
          </select>

          <div className="grid gap-6 md:grid-cols-2">
            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
              required
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
            >
              <option value="">Estimated Budget</option>
              <option>Under ₹50,000</option>
              <option>₹50,000 - ₹2,00,000</option>
              <option>₹2,00,000 - ₹5,00,000</option>
              <option>₹5,00,000+</option>
            </select>

            <select
              name="timeline"
              value={form.timeline}
              onChange={handleChange}
              required
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
            >
              <option value="">Project Timeline</option>
              <option>ASAP</option>
              <option>Within 1 Month</option>
              <option>1 - 3 Months</option>
              <option>Just Exploring</option>
            </select>
          </div>

          <Textarea
            name="details"
            placeholder="Tell us about your project..."
            value={form.details}
            onChange={handleChange}
            rows={6}
            required
          />

          <Button type="submit" size="lg" disabled={loading}>
            {loading ? "Submitting..." : "Submit Project Inquiry"}
          </Button>
        </form>
      </Card>
    </Section>
  );
}

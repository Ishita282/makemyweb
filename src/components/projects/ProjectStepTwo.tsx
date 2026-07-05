"use client";

import {
  Briefcase,
  CalendarClock,
  DollarSign,
  Globe,
} from "lucide-react";

import { Button } from "@/src/components/ui";

interface Props {
  form: {
    service: string;
    budget: string;
    timeline: string;
    website: string;
  };

  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => void;

  onNext: () => void;
  onBack: () => void;
  onSubmit: () => void;
}

export default function ProjectStepTwo({
  form,
  onChange,
  onNext,
  onBack,
  onSubmit,
}: Props) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-slate-900">
          Project Details
        </h2>

        <p className="mt-2 text-slate-600">
          Tell us a little about your project.
        </p>
      </div>

      {/* Service */}

      <div className="relative">
        <Briefcase
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <select
          name="service"
          value={form.service}
          onChange={onChange}
          className="h-12 w-full rounded-xl border border-slate-300 bg-white pl-11 pr-4 outline-none transition focus:border-blue-600"
        >
          <option value="">Select Service</option>
          <option>Website Development</option>
          <option>Web Applications</option>
          <option>Mobile Apps</option>
          <option>AI Integration</option>
          <option>E-Commerce</option>
          <option>SEO & Branding</option>
          <option>Data Analytics</option>
        </select>
      </div>

      {/* Budget */}

      <div className="relative">
        <DollarSign
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <select
          name="budget"
          value={form.budget}
          onChange={onChange}
          className="h-12 w-full rounded-xl border border-slate-300 bg-white pl-11 pr-4 outline-none transition focus:border-blue-600"
        >
          <option value="">Estimated Budget</option>
          <option>Under ₹10,000</option>
          <option>₹10,000 - ₹25,000</option>
          <option>₹25,000 - ₹50,000</option>
          <option>₹50,000 - ₹70,000</option>
          <option>₹70,000+</option>
        </select>
      </div>

      {/* Timeline */}

      <div className="relative">
        <CalendarClock
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <select
          name="timeline"
          value={form.timeline}
          onChange={onChange}
          className="h-12 w-full rounded-xl border border-slate-300 bg-white pl-11 pr-4 outline-none transition focus:border-blue-600"
        >
          <option value="">Project Timeline</option>
          <option>ASAP</option>
          <option>Within 1 Month</option>
          <option>1 - 3 Months</option>
          <option>3+ Months</option>
          <option>Just Exploring</option>
        </select>
      </div>

      {/* Existing Website */}

      <div className="relative">
        <Globe
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="url"
          name="website"
          placeholder="Existing Website (Optional)"
          value={form.website}
          onChange={onChange}
          className="h-12 w-full rounded-xl border border-slate-300 pl-11 pr-4 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
        />
      </div>

      {/* Navigation */}

      <div className="flex justify-between gap-4">
        <Button
          variant="outline"
          onClick={onBack}
        >
          ← Back
        </Button>

        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={onSubmit}
          >
            Submit Now
          </Button>

          <Button onClick={onNext}>
            Continue →
          </Button>
        </div>
      </div>
    </div>
  );
}

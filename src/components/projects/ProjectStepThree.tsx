"use client";

import { ProjectForm } from "@/src/types";
import { motion } from "framer-motion";

interface Props {
  form: ProjectForm;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

export default function ProjectStepThree({
  form,
  onChange,
  onBack,
  onNext,
  onSubmit,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      {/* Title */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Final Details
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Almost done — share a few final preferences.
        </p>
      </div>

      {/* Country */}
      <div>
        <label className="text-sm font-medium text-slate-700">Country</label>
        <input
          type="text"
          name="country"
          value={form.country}
          onChange={onChange}
          placeholder="India"
          className="mt-1 w-full rounded-lg border border-slate-200 p-3 outline-none focus:border-blue-500"
        />
      </div>

      {/* City */}
      <div>
        <label className="text-sm font-medium text-slate-700">City</label>
        <input
          type="text"
          name="city"
          value={form.city}
          onChange={onChange}
          placeholder="Delhi"
          className="mt-1 w-full rounded-lg border border-slate-200 p-3 outline-none focus:border-blue-500"
        />
      </div>

      {/* Reference website */}
      <div>
        <label className="text-sm font-medium text-slate-700">
          Reference Website
        </label>
        <input
          type="text"
          name="reference"
          value={form.reference}
          onChange={onChange}
          placeholder="https://example.com"
          className="mt-1 w-full rounded-lg border border-slate-200 p-3 outline-none focus:border-blue-500"
        />
      </div>

      {/* Notes */}
      <div>
        <label className="text-sm font-medium text-slate-700">
          Additional Notes
        </label>
        <textarea
          name="notes"
          value={form.notes}
          onChange={onChange}
          placeholder="Anything else you'd like us to know..."
          rows={4}
          className="mt-1 w-full rounded-lg border border-slate-200 p-3 outline-none focus:border-blue-500"
        />
      </div>

      {/* Actions */}
      <div className="flex justify-between pt-4">
        <button
          onClick={onBack}
          className="rounded-lg border border-slate-200 px-5 py-2 text-slate-700 hover:bg-slate-50"
        >
          Back
        </button>

        <div className="flex gap-3">
          <button
            onClick={onNext}
            className="rounded-lg bg-slate-900 px-5 py-2 text-white hover:bg-slate-800"
          >
            Preview
          </button>

          <button
            onClick={onSubmit}
            className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-500"
          >
            Submit
          </button>
        </div>
      </div>
    </motion.div>
  );
}

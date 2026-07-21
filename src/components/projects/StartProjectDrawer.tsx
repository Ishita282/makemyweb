"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Clock3, Shield, Sparkles, X } from "lucide-react";

import { ProjectProgress, ProjectStepOne, ProjectStepTwo, ProjectStepThree } from ".";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function StartProjectDrawer({ open, onClose }: Props) {
  const [step, setStep] = useState(1);

  const prevOpen = useRef(open);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    website: "",
    details: "",
    goals: "",
    contact: "",
    country: "",
    city: "",
    reference: "",
    notes: "",
  });

  // reset step when drawer opens
  useEffect(() => {
    if (prevOpen.current && !open) {
      setStep(1);
    }

    prevOpen.current = open;
  }, [open]);

  // lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleClose() {
    setStep(1);
    onClose();
  }

  function submit() {
    const message = `
🚀 *New Project Inquiry*

👤 *Personal Information*

• Name: ${form.name}
• Email: ${form.email}
• Phone: ${form.phone}
• Company: ${form.company || "N/A"}

💼 *Project Details*

• Service: ${form.service || "N/A"}
• Budget: ${form.budget || "N/A"}
• Timeline: ${form.timeline || "N/A"}
• Website: ${form.website || "N/A"}

📝 *Project Description*

${form.details || "N/A"}

🎯 Goals

${form.goals || "N/A"}

📞 Preferred Contact

${form.contact || "N/A"}

🌍 Location

${form.country || "N/A"}, ${form.city || "N/A"}

🔗 Reference Website

${form.reference || "N/A"}

📝 Additional Notes

${form.notes || "N/A"}
`;

    window.open(
      `https://wa.me/919899420626?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 24,
              stiffness: 220,
            }}
            className="fixed right-0 top-0 z-50 flex h-screen w-full max-w-5xl bg-white shadow-2xl"
          >
            <button
              onClick={handleClose}
              className="absolute right-6 top-6 rounded-full p-2 hover:bg-slate-100"
            >
              <X size={22} />
            </button>

            {/* Left */}
            <div className="hidden w-2/5 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-12 text-white lg:flex lg:flex-col">
              <Sparkles size={40} />

              <h2 className="mt-8 text-4xl font-black">
                Let&apos;s Build Your Next Project
              </h2>

              <p className="mt-5 leading-8 text-blue-100">
                Tell us about your idea and we&apos;ll reach out within 24
                hours.
              </p>

              <div className="mt-12 space-y-5">
                <div className="flex gap-3">
                  <CheckCircle2 />
                  Free Consultation
                </div>

                <div className="flex gap-3">
                  <Clock3 />
                  2 Hour Response
                </div>

                <div className="flex gap-3">
                  <Shield />
                  NDA Available
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex-1 overflow-y-auto p-10">
              <ProjectProgress step={step} totalSteps={4} />

              <div className="mt-10">
                {step === 1 && (
                  <ProjectStepOne
                    form={form}
                    onChange={handleChange}
                    onNext={() => setStep(2)}
                    onSubmit={submit}
                  />
                )}

                {step === 2 && (
                  <ProjectStepTwo
                    form={form}
                    onChange={handleChange}
                    onBack={() => setStep(1)}
                    onNext={() => setStep(3)}
                    onSubmit={submit}
                  />
                )}
                {step === 3 && (
                  <ProjectStepThree
                    form={form}
                    onChange={handleChange}
                    onBack={() => setStep(2)}
                    onNext={submit}
                    onSubmit={submit}
                  />
                )}
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

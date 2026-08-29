"use client";

import { useMemo, useState } from "react";
import { X, ArrowLeft, ArrowRight, Check } from "lucide-react";

type MCQOption = {
    label: string;
    value: string;
    price: number;
};

type MCQ = {
    id: string;
    question: string;
    options: MCQOption[];
};

interface Props {
    open: boolean;
    onClose: () => void;
    serviceId: string;
    serviceTitle: string;
    basePrice: number;
    mcqs: MCQ[];
    onAddedToCart: () => void;
}

export default function ServiceCustomizationModal({
    open,
    onClose,
    serviceId,
    serviceTitle,
    basePrice,
    mcqs,
    onAddedToCart,
}: Props) {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const currentQuestion = mcqs[currentStep];

    const selectedOption = currentQuestion
        ? answers[currentQuestion.id]
        : undefined;

    const customPrice = useMemo(() => {
        return mcqs.reduce((total, question) => {
            const selectedValue = answers[question.id];

            const selected = question.options.find(
                (option) => option.value === selectedValue,
            );

            return total + (selected?.price ?? 0);
        }, basePrice);
    }, [answers, basePrice, mcqs]);

    if (!open) return null;

    const selectOption = (value: string) => {
        setAnswers((previous) => ({
            ...previous,
            [currentQuestion.id]: value,
        }));

        setError("");
    };

    const next = () => {
        if (!selectedOption) {
            setError("Please select an option.");
            return;
        }

        setError("");

        if (currentStep < mcqs.length - 1) {
            setCurrentStep((step) => step + 1);
        }
    };

    const previous = () => {
        setError("");

        if (currentStep > 0) {
            setCurrentStep((step) => step - 1);
        }
    };

    const addToCart = async () => {
        if (!selectedOption) {
            setError("Please select an option.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const response = await fetch("/api/cart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    serviceId,
                    quantity: 1,
                    customized: true,
                    customization: {
                        answers,
                        price: customPrice,
                    },
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Unable to add item to cart.");
            }

            onAddedToCart();
            onClose();

            setCurrentStep(0);
            setAnswers({});
        } catch (error) {
            setError(
                error instanceof Error
                    ? error.message
                    : "Unable to add item to cart.",
            );
        } finally {
            setLoading(false);
        }
    };

    const isLastStep = currentStep === mcqs.length - 1;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
            <div className="w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                            Customize Service
                        </p>

                        <h2 className="mt-1 text-xl font-bold text-slate-950">
                            {serviceTitle}
                        </h2>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Progress */}
                <div className="px-6 pt-6">
                    <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-slate-600">
                            Question {currentStep + 1} of {mcqs.length}
                        </span>

                        <span className="font-bold text-blue-600">
                            ₹{customPrice.toLocaleString("en-IN")}
                        </span>
                    </div>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                        <div
                            className="h-full rounded-full bg-blue-600 transition-all duration-300"
                            style={{
                                width: `${((currentStep + 1) / mcqs.length) * 100}%`,
                            }}
                        />
                    </div>
                </div>

                {/* Question */}
                <div className="px-6 py-8">
                    <h3 className="text-2xl font-bold text-slate-950">
                        {currentQuestion.question}
                    </h3>

                    <div className="mt-6 grid gap-3">
                        {currentQuestion.options.map((option) => {
                            const selected =
                                selectedOption === option.value;

                            return (
                                <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => selectOption(option.value)}
                                    className={`flex items-center justify-between rounded-2xl border p-4 text-left transition ${
                                        selected
                                            ? "border-blue-600 bg-blue-50 ring-2 ring-blue-100"
                                            : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
                                    }`}
                                >
                                    <div>
                                        <p className="font-semibold text-slate-900">
                                            {option.label}
                                        </p>

                                        {option.price > 0 && (
                                            <p className="mt-1 text-sm text-slate-500">
                                                +₹
                                                {option.price.toLocaleString(
                                                    "en-IN",
                                                )}
                                            </p>
                                        )}
                                    </div>

                                    {selected && (
                                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white">
                                            <Check size={16} />
                                        </div>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {error && (
                        <p className="mt-4 text-sm font-medium text-red-600">
                            {error}
                        </p>
                    )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-6 py-5">
                    <button
                        type="button"
                        onClick={previous}
                        disabled={currentStep === 0}
                        className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        <ArrowLeft size={17} />
                        Back
                    </button>

                    <div className="text-right">
                        <p className="text-xs text-slate-500">
                            Estimated total
                        </p>

                        <p className="text-xl font-bold text-slate-950">
                            ₹{customPrice.toLocaleString("en-IN")}
                        </p>
                    </div>

                    {!isLastStep ? (
                        <button
                            type="button"
                            onClick={next}
                            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                        >
                            Next
                            <ArrowRight size={17} />
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={addToCart}
                            disabled={loading}
                            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? "Adding..." : "Add to Cart"}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

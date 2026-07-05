"use client";

import {
  Building2,
  Mail,
  Phone,
  User,
} from "lucide-react";

import {
  Button,
  Input,
} from "@/src/components/ui";

interface Props {
  form: {
    name: string;
    email: string;
    phone: string;
    company: string;
  };

  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;

  onNext: () => void;

  onSubmit: () => void;
}

export default function ProjectStepOne({
  form,
  onChange,
  onNext,
  onSubmit,
}: Props) {
  return (
    <div className="space-y-6">
      <div className="grid gap-5">
        <Input
          icon={<User size={18} />}
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={onChange}
        />

        <Input
          icon={<Mail size={18} />}
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={onChange}
        />

        <Input
          icon={<Phone size={18} />}
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={onChange}
        />

        <Input
          icon={<Building2 size={18} />}
          name="company"
          placeholder="Company (Optional)"
          value={form.company}
          onChange={onChange}
        />
      </div>

      <div className="flex gap-4">
        <Button
          className="flex-1"
          onClick={onNext}
        >
          Continue
        </Button>

        <Button
          variant="outline"
          className="flex-1"
          onClick={onSubmit}
        >
          Submit Now
        </Button>
      </div>
    </div>
  );
}

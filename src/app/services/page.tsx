import {
  Services,
  CTA,
} from "@/src/components/sections";

export const metadata = {
  title: "Services | MakeMyWeb",
  description:
    "Explore our web development, AI, mobile app, and digital services.",
};

export default function ServicesPage() {
  return (
    <>
      <Services />

      <CTA />
    </>
  );
}

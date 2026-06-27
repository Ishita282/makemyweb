import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8">
      <Container>
        <p className="text-center text-sm text-slate-500">
          © {new Date().getFullYear()} MakeMyWeb. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

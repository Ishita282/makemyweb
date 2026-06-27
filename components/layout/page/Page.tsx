interface PageProps {
  children: React.ReactNode;
}

export function Page({
  children,
}: PageProps) {
  return (
    <main className="min-h-screen">
      {children}
    </main>
  );
}

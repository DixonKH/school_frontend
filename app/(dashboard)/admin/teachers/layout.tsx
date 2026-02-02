export default function TeachersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-6 p-6 bg-zinc-50 min-h-full">
      <div>{children}</div>
    </section>
  );
}
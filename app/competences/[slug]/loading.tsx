export default function Loading() {
  return (
    <main className="min-h-screen bg-[#f6f4ef]">
      <section className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-10 lg:px-16 lg:py-16">
        <div className="animate-pulse space-y-6">
          <div className="h-10 w-48 rounded-full bg-black/8" />
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="h-[420px] rounded-[32px] bg-white" />
            <div className="h-[420px] rounded-[32px] bg-black/8" />
          </div>
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="h-[240px] rounded-[32px] bg-white" />
            <div className="h-[240px] rounded-[32px] bg-white" />
          </div>
        </div>
      </section>
    </main>
  );
}

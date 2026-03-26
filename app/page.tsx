import { NavigationBar } from "@/components/navigation-bar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <NavigationBar />

      <section className="mx-auto flex min-h-[calc(100vh-5.5rem)] w-full max-w-7xl items-center px-6 pb-16 pt-12 sm:px-10 lg:px-16">
        <div className="max-w-4xl">
          <h1 className="text-[64px] leading-none font-semibold tracking-[-0.06em] text-black sm:text-[88px] lg:text-[120px]">
            Lucas Delanier
          </h1>
          <p className="mt-4 text-[20px] font-medium text-black/50 sm:text-[24px] lg:text-[28px]">
            Développeur
          </p>
        </div>
      </section>
    </main>
  );
}

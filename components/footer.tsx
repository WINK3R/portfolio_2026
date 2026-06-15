export function Footer() {
  return (
    <footer className="border-t border-black/8 bg-white px-6 py-8 text-black sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 text-sm text-black/58 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold text-black">Lucas Delanier</p>
        <a
          href="mailto:delanierlucas@gmail.com"
          className="w-fit transition hover:text-black"
        >
          delanierlucas@gmail.com
        </a>
      </div>
    </footer>
  );
}

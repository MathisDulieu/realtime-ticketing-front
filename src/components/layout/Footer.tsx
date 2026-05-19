export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <p className="text-sm text-zinc-500">
          © 2026 Realtime Ticketing Platform
        </p>

        <div className="flex items-center gap-4 text-sm text-zinc-500">
          <a
            href="https://github.com"
            target="_blank"
            className="transition hover:text-white"
          >
            GitHub
          </a>

          <a href="#" className="transition hover:text-white">
            Documentation
          </a>
        </div>
      </div>
    </footer>
  )
}

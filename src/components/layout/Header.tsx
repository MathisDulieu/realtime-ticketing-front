import { Ticket } from 'lucide-react'

export default function Header() {
    return (
        <header className="border-b border-zinc-800 bg-zinc-950">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-white p-2 text-zinc-950">
                        <Ticket size={18} />
                    </div>

                    <div>
                        <h1 className="text-sm font-semibold text-white">
                            Realtime Ticketing
                        </h1>

                        <p className="text-xs text-zinc-400">
                            Event-driven ticketing platform
                        </p>
                    </div>
                </div>

                <nav className="flex items-center gap-6 text-sm text-zinc-300">
                    <a
                        href="/"
                        className="transition hover:text-white"
                    >
                        Home
                    </a>

                    <a
                        href="/events"
                        className="transition hover:text-white"
                    >
                        Events
                    </a>

                    <a
                        href="/about"
                        className="transition hover:text-white"
                    >
                        About
                    </a>
                </nav>
            </div>
        </header>
    )
}
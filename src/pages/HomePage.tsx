export default function HomePage() {
  return (
    <div className="flex min-h-[calc(100vh-128px)] items-center justify-center px-6">
      <div className="space-y-6 text-center">
        <div className="space-y-3">
          <h1 className="text-6xl font-bold tracking-tight">
            Realtime Ticketing Platform
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            A modern event-driven ticketing system powered by Java, Kafka,
            MongoDB and React.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button className="rounded-xl bg-white px-6 py-3 font-medium text-zinc-950 transition hover:opacity-90">
            Explore Events
          </button>

          <button className="rounded-xl border border-zinc-700 px-6 py-3 font-medium text-white transition hover:border-zinc-500">
            View Architecture
          </button>
        </div>
      </div>
    </div>
  )
}

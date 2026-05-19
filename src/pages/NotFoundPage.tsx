import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[calc(100vh-128px)] items-center justify-center px-6">
      <div className="max-w-xl space-y-6 text-center">
        <p className="text-sm font-medium tracking-[0.3em] text-zinc-500 uppercase">
          404
        </p>

        <div className="space-y-3">
          <h1 className="text-5xl font-bold tracking-tight text-white">
            Page not found
          </h1>

          <p className="text-lg text-zinc-400">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex rounded-xl bg-white px-6 py-3 font-medium text-zinc-950 transition hover:opacity-90"
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}

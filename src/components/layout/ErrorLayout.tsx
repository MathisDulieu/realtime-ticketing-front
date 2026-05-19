import Footer from './Footer'
import Header from './Header'

type ErrorLayoutProps = {
  children: React.ReactNode
}

export default function ErrorLayout({ children }: ErrorLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-white">
      <Header />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  )
}

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Approach from './components/Approach'
import Podcast from './components/Podcast'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-emerald-300/30 selection:text-white">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(1200px_600px_at_10%_10%,rgba(56,189,248,0.15),transparent),radial-gradient(1200px_600px_at_90%_20%,rgba(16,185,129,0.12),transparent)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <Approach />
        <Podcast />
        <Blog />
        <Contact />
        <footer className="mx-auto max-w-7xl px-6 py-16 text-white/60">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Studio Dr. Riccardo F. Tutti i diritti riservati.</p>
            <div className="text-sm">P.IVA 00000000000 • Milano</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App

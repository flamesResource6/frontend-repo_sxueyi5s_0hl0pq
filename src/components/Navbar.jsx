import { Menu, Mail, Calendar, Mic, Newspaper } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Chi sono', href: '#about' },
    { label: 'Specializzazioni', href: '#services' },
    { label: 'Approccio', href: '#approach' },
    { label: 'Podcast', href: '#podcast' },
    { label: 'Blog/News', href: '#blog' },
    { label: 'Contatti', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/10">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-400 via-cyan-400 to-emerald-400 ring-1 ring-white/30 shadow-md" />
              <div className="text-left">
                <p className="text-sm tracking-wide text-white/70">Psicoterapeuta costruttivista</p>
                <p className="font-semibold text-white">Studio Dr. Riccardo F.</p>
              </div>
            </a>

            <nav className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-2">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-sky-400 to-emerald-400 px-4 py-2 text-sm font-medium text-slate-900 shadow-lg shadow-emerald-500/20 ring-1 ring-white/30 hover:brightness-110 transition">
                  <Calendar className="h-4 w-4" /> Prenota
                </a>
                <a href="#podcast" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition ring-1 ring-white/20">
                  <Mic className="h-4 w-4" /> Ascolta
                </a>
              </div>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 p-2 text-white">
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {open && (
            <div className="grid gap-2 border-t border-white/10 p-4 md:hidden">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/10">
                  {item.label}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-sky-400 to-emerald-400 px-4 py-2 text-sm font-medium text-slate-900 ring-1 ring-white/30">
                  <Calendar className="h-4 w-4" /> Prenota
                </a>
                <a href="#podcast" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20">
                  <Newspaper className="h-4 w-4" /> Contenuti
                </a>
              </div>
              <a href="mailto:studio@riccardof.it" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
                <Mail className="h-4 w-4" /> studio@riccardof.it
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

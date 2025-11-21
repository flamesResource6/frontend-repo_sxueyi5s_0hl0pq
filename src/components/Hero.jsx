import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Zn7XRxnnbSat5OJG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 ring-1 ring-white/20 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Presa in carico clinica e divulgazione
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-5 text-5xl font-semibold tracking-tight text-white md:text-6xl">
            Psicoterapia costruttivista con sguardo contemporaneo
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="mt-6 text-lg leading-relaxed text-white/80">
            Lavoro con ADHD, PTSD complessi, DOC, ansia e depressione. Integro rigore clinico, cultura e media per costruire percorsi di cura personalizzati e umani.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-xl bg-gradient-to-br from-sky-400 via-cyan-400 to-emerald-400 px-5 py-3 text-slate-900 font-medium ring-1 ring-white/40 shadow-lg shadow-emerald-500/20 hover:brightness-110 transition">Prenota una consulenza</a>
            <a href="#podcast" className="rounded-xl bg-white/10 px-5 py-3 text-white font-medium ring-1 ring-white/20 hover:bg-white/20 transition">Ascolta il podcast</a>
          </motion.div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950/80" />
    </section>
  )
}

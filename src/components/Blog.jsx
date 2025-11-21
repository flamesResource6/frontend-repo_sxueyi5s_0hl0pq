import { motion } from 'framer-motion'

const posts = [
  {
    title: 'Costruire significati: appunti di clinica costruttivista',
    date: 'Ottobre 2025',
    excerpt: 'Perché parlare di “mappe” e non di “difetti”: prospettive per un lessico più umano.'
  },
  {
    title: 'ADHD oltre gli stereotipi',
    date: 'Settembre 2025',
    excerpt: 'Diagnosi come chiave di lettura, non etichetta: funzionamento esecutivo e ambienti abilitanti.'
  },
  {
    title: 'Trauma complesso e cultura',
    date: 'Agosto 2025',
    excerpt: 'Come la società plasma memoria e identità: implicazioni per la terapia.'
  }
]

export default function Blog() {
  return (
    <section id="blog" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight text-white">Blog e riflessioni</h2>
        <p className="mt-3 text-white/80">Articoli con riferimenti scientifici e sguardi culturali.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((p, idx) => (
          <motion.article key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="rounded-3xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10">
            <div className="aspect-[16/10] w-full rounded-2xl bg-gradient-to-br from-sky-400/20 via-cyan-400/10 to-emerald-400/20 ring-1 ring-white/20" />
            <p className="mt-4 text-xs text-white/60">{p.date}</p>
            <h3 className="mt-1 text-lg font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-white/80">{p.excerpt}</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-300">Leggi di più →</div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

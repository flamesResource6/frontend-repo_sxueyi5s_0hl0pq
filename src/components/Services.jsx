import { motion } from 'framer-motion'
import { Brain, Zap, ShieldCheck, Activity, CloudSun } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'ADHD in età adulta',
    desc: 'Valutazione e trattamento mirato delle difficoltà attentive ed esecutive, con interventi integrati e training su organizzazione e regolazione.'
  },
  {
    icon: ShieldCheck,
    title: 'PTSD complessi',
    desc: 'Approcci focalizzati sul trauma, stabilizzazione, lavoro sulle parti e rinarrazione coerente dell’esperienza.'
  },
  {
    icon: Activity,
    title: 'DOC',
    desc: 'Interventi evidence-based su ossessioni e compulsioni con integrazione di tecniche di esposizione e prevenzione della risposta.'
  },
  {
    icon: CloudSun,
    title: 'Ansia e depressione',
    desc: 'Percorsi personalizzati per comprendere e modulare ansia, umore e stress, con strumenti pratici per la vita quotidiana.'
  },
  {
    icon: Zap,
    title: 'Supervisione e formazione',
    desc: 'Supporto a professionisti e team clinici, progettazione di format divulgativi e consulenza su progetti media.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight text-white">Specializzazioni e servizi</h2>
        <p className="mt-3 text-white/80">Unire scienza, ascolto e creatività per interventi realmente utili.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, idx) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="group rounded-3xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10 hover:bg-white/10 transition">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-emerald-400/90 text-slate-900 ring-1 ring-white/40">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-white/80 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

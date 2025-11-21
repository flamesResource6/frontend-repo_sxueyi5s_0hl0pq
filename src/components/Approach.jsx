import { motion } from 'framer-motion'

export default function Approach() {
  return (
    <section id="approach" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-8 ring-1 ring-white/10">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-semibold tracking-tight text-white">Approccio terapeutico</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              Il costruttivismo vede la mente come un sistema che attribuisce significati: non cerco “correzioni”, ma co-costruisco con la persona nuove mappe per orientarsi. Integro tecniche basate su evidenze con pratiche narrative, metacognitive e di regolazione.
            </p>
            <ul className="mt-6 grid gap-3 text-white/80">
              {['Valutazione condivisa e definizione degli obiettivi','Interventi focalizzati e misurabili','Uso di strumenti digitali per monitoraggio e journaling','Alleanza terapeutica calda e diretta'].map((p)=> (
                <li key={p} className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-emerald-400"/> <span>{p}</span></li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="grid gap-4">
            {[
              { t: 'Sedute individuali', d: 'In studio e online, 50 minuti, setting chiaro e flessibile.' },
              { t: 'Psicoeducazione', d: 'Materiali e micro-contenuti per capire come funzioniamo.' },
              { t: 'Tecniche sul trauma', d: 'Stabilizzazione, grounding, lavoro sulle parti, rinarrazione.' },
              { t: 'Follow-up', d: 'Mantenimento e prevenzione delle ricadute con piani personalizzati.' }
            ].map((c) => (
              <div key={c.t} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <p className="text-sm text-white/60">{c.t}</p>
                <p className="mt-1 text-white/90">{c.d}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

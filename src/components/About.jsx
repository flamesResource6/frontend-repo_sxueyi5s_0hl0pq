import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-10 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="prose prose-invert">
          <h2 className="text-3xl font-semibold tracking-tight text-white">Chi sono</h2>
          <p className="text-white/80 leading-relaxed">
            Sono psicoterapeuta costruttivista con esperienza in contesti psichiatrici e privati. Il mio lavoro coniuga la precisione clinica con una forte vocazione divulgativa: conduco un podcast settimanale, scrivo per media nazionali e dirigo la linea artistica di un'emittente radiofonica urban.
          </p>
          <p className="text-white/80 leading-relaxed">
            Credo che ogni persona costruisca la propria esperienza: per questo i percorsi nascono dall'ascolto profondo delle storie e si sviluppano con metodologie basate sull'evidenza e sensibili alla cultura.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: 'Anni di pratica', v: '12+' },
              { k: 'Ambiti clinici', v: 'ADHD, CPTSD, DOC, ansia, depressione' },
              { k: 'Podcast', v: 'Taccuini — ogni settimana' },
              { k: 'Newsletter', v: 'Approfondimenti mensili' },
            ].map((i) => (
              <div key={i.k} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-xs text-white/60">{i.k}</p>
                <p className="mt-1 text-lg font-medium text-white">{i.v}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

const episodes = [
  {
    title: 'ADHD: tra funzione esecutiva e immaginazione',
    date: 'Settimana 42 · 2025',
    description: 'Cosa significa davvero “attenzione”? Strategie pratiche e cornici teoriche senza miti.' ,
    url: 'https://open.spotify.com/'
  },
  {
    title: 'Trauma complesso: stabilizzare prima di scavare',
    date: 'Settimana 41 · 2025',
    description: 'Quando la memoria è frammentata: perché servono ancoraggi e ritmi.' ,
    url: 'https://open.spotify.com/'
  },
  {
    title: 'DOC: interrompere i circuiti di conferma',
    date: 'Settimana 40 · 2025',
    description: 'Dalla compulsione alla possibilità: esposizione, tolleranza dell’incertezza, responsabilità.' ,
    url: 'https://open.spotify.com/'
  }
]

export default function Podcast() {
  return (
    <section id="podcast" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-white">Taccuini — il podcast</h2>
          <p className="mt-3 text-white/80">Ascolta gli ultimi episodi e iscriviti per non perderne uno.</p>
        </div>
        <a href="https://open.spotify.com/" className="hidden rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 hover:bg-white/20 md:block">Apri su Spotify</a>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {episodes.map((e, idx) => (
          <motion.a key={e.title} href={e.url} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="group rounded-3xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10 hover:bg-white/10">
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-400/30 via-sky-400/20 to-cyan-400/30 ring-1 ring-white/20" />
            <p className="mt-4 text-xs text-white/60">{e.date}</p>
            <h3 className="mt-1 text-lg font-semibold text-white">{e.title}</h3>
            <p className="mt-2 text-white/80">{e.description}</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-300 group-hover:gap-3 transition-all">Ascolta l'episodio →</div>
          </motion.a>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-white">Iscriviti alla newsletter</h3>
            <p className="mt-2 text-white/80">Ricevi articoli, letture e contenuti extra una volta al mese.</p>
          </div>
          <form onSubmit={(e)=> e.preventDefault()} className="flex gap-3">
            <input type="email" required placeholder="la-tua@email.it" className="w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/50 ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
            <button className="rounded-xl bg-gradient-to-br from-sky-400 to-emerald-400 px-5 py-3 font-medium text-slate-900 ring-1 ring-white/40">Iscriviti</button>
          </form>
        </div>
      </div>
    </section>
  )
}

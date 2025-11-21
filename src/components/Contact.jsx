import { motion } from 'framer-motion'
import { Calendar, Mail, Phone, Instagram, Twitter, Radio, MessageSquare } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 ring-1 ring-white/10">
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-semibold tracking-tight text-white">Consulenze e collaborazioni</h2>
            <p className="mt-3 text-white/80">Ricevo su appuntamento, in studio a Milano e online. Per media e progetti editoriali, scrivimi con una breve descrizione.</p>

            <div className="mt-6 grid gap-3">
              <a href="mailto:studio@riccardof.it" className="inline-flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-white ring-1 ring-white/20 hover:bg-white/20">
                <Mail className="h-5 w-5" /> studio@riccardof.it
              </a>
              <a href="tel:+39020000000" className="inline-flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-white ring-1 ring-white/20 hover:bg-white/20">
                <Phone className="h-5 w-5" /> +39 02 0000 000
              </a>
              <a href="#" className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-br from-sky-400 to-emerald-400 px-4 py-3 font-medium text-slate-900 ring-1 ring-white/40">
                <Calendar className="h-5 w-5" /> Prenota una prima visita
              </a>
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} onSubmit={(e)=> e.preventDefault()} className="grid gap-3">
            <div className="grid gap-2">
              <label className="text-sm text-white/80">Nome e cognome</label>
              <input required className="rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/50 ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Nome Cognome" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm text-white/80">Email</label>
              <input type="email" required className="rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/50 ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="nome@mail.it" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm text-white/80">Messaggio</label>
              <textarea rows="4" required className="rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/50 ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Raccontami brevemente di cosa hai bisogno..." />
            </div>
            <button className="mt-2 rounded-xl bg-white/10 px-5 py-3 text-white ring-1 ring-white/20 hover:bg-white/20">Invia</button>

            <div className="mt-4 flex flex-wrap gap-3 text-white/70">
              <a href="https://instagram.com" className="inline-flex items-center gap-2"><Instagram className="h-4 w-4"/> Instagram</a>
              <a href="https://twitter.com" className="inline-flex items-center gap-2"><Twitter className="h-4 w-4"/> X/Twitter</a>
              <a href="https://substack.com" className="inline-flex items-center gap-2"><MessageSquare className="h-4 w-4"/> Newsletter</a>
              <a href="https://open.spotify.com" className="inline-flex items-center gap-2"><Radio className="h-4 w-4"/> Podcast</a>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

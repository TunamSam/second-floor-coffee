import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import { places } from '../data/brand'
export default function Locations() {
  return (
    <>
      <section className="px-5 pb-16 pt-36 md:px-10">
        <Reveal as="h1" onLoad delay={0.9} lines={['Locations']} className="font-display text-[20vw] uppercase leading-[0.9] text-navy md:text-[12vw]" />
      </section>
      <ul className="px-5 pb-28 md:px-10">
        {places.map(p => (
          <li key={p.name} className="grid gap-4 border-t border-ink/20 py-10 md:grid-cols-12">
            <Reveal as="h2" lines={[p.name]} className="font-display text-6xl uppercase leading-none md:col-span-5 md:text-8xl" />
            <div className="md:col-span-4">
              <p className="text-lg">{p.status}</p>
              <p className="mt-2 text-ink/70">{p.address ?? 'Address to be confirmed'}</p>
              <p className="text-ink/70">{p.hours ?? 'Hours to be confirmed'}</p>
            </div>
            <a href={p.maps} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 underline underline-offset-8 md:col-span-3 md:justify-end">Open in Google Maps <ArrowUpRight size={18} aria-hidden="true" /></a>
          </li>
        ))}
      </ul>
    </>
  )
}

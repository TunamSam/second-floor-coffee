import Reveal from '../components/Reveal'
import Parallax from '../components/Parallax'
import { menu } from '../data/brand'
export default function Menu() {
  return (
    <>
      <section className="px-5 pb-16 pt-36 md:px-10">
        <Reveal as="h1" onLoad delay={0.9} lines={['Menu']} className="font-display text-[22vw] uppercase leading-[0.9] text-wine md:text-[13vw]" />
        <p className="mt-6 max-w-md text-lg leading-relaxed">Artisanal single-origin coffee, easy to drink and naturally sweetened with fruits and flowers.</p>
      </section>
      <ul className="px-5 md:px-10">
        {menu.map(m => (
          <li key={m.name} className="group grid items-center gap-6 border-t border-ink/20 py-10 md:grid-cols-12">
            <Reveal as="h2" lines={[m.name]} className="font-display text-7xl uppercase leading-none transition-transform duration-500 group-hover:translate-x-4 md:col-span-6 md:text-[8vw]" />
            <p className="text-lg md:col-span-3">{m.note}</p>
            <p className="md:col-span-1">{m.price ?? ''}</p>
            <Parallax src={m.photo} alt={m.name} label={m.photo.slice(1)} className="aspect-square w-full md:col-span-2" />
          </li>
        ))}
      </ul>
    </>
  )
}

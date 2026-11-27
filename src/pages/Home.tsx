import Reveal from '../components/Reveal'
import Parallax from '../components/Parallax'
import { TLink } from '../components/Transition'
import { menu, places } from '../data/brand'
export default function Home() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden px-5 pb-10 pt-32 md:px-10">
        <Reveal as="h1" onLoad delay={0.9} lines={['Second', 'Floor', 'Coffee']} className="relative z-10 font-display text-[20vw] uppercase leading-[0.9] text-teal md:text-[15vw]" />
        <Parallax src="/photos/hero.png" alt="Coffee being poured at Second Floor Coffee" label="photos/hero.jpg" className="absolute bottom-10 right-5 h-[38svh] w-[58vw] md:right-10 md:h-[62svh] md:w-[34vw]" tone="bg-wood" />
      </section>
      <section className="grid gap-10 px-5 py-28 md:grid-cols-12 md:px-10">
        <Reveal as="h2" lines={['Single-origin coffee,', 'sweetened by fruit', 'and flowers.']} className="font-display text-5xl uppercase leading-none md:col-span-7 md:text-8xl" />
        <p className="max-w-md text-lg leading-relaxed md:col-span-4 md:col-start-9 md:self-end">Second Floor opened its first Bali shop in 2018, after five years of research. Its signature is artisanal single-origin coffee that is easy to drink and naturally sweet.</p>
      </section>
      <section aria-label="Featured drinks" className="space-y-24 px-5 pb-28 md:px-10">
        {menu.map((m, i) => (
          <article key={m.name} className={`flex flex-col gap-6 md:items-end ${i % 2 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            <Parallax src={m.photo} alt={m.name} label={m.photo.slice(1)} tone={['bg-wood', 'bg-wine', 'bg-navy'][i]} shift={7 + i * 3} className={`aspect-[4/5] w-full md:w-[38vw] ${i === 1 ? 'md:mt-24' : ''}`} />
            <div>
              <Reveal as="h3" lines={[m.name]} className="font-display text-7xl uppercase leading-none md:text-[9vw]" />
              <p className="mt-3 text-lg">{m.note}</p>
            </div>
          </article>
        ))}
        <TLink to="/menu" className="inline-block bg-ink px-6 py-3 text-paper hover:bg-teal">See the menu</TLink>
      </section>
      <section className="relative h-[90svh] bg-navy">
        <Parallax src="/photos/amarena.png" alt="Amarena Fabbri jar with cherries" label="photos/amarena.jpg" tone="bg-navy" shift={14} className="absolute inset-0" />
        <Reveal as="p" lines={['Italian heritage', 'Indonesian treasure']} className="absolute bottom-10 left-5 font-display text-5xl uppercase leading-none text-white md:left-10 md:text-8xl" />
      </section>
      <section className="px-5 py-28 md:px-10">
        <Reveal as="h2" lines={['Where to find us']} className="font-display text-6xl uppercase md:text-9xl" />
        <ul className="mt-12 divide-y divide-ink/20 border-y border-ink/20">
          {places.map(p => <li key={p.name} className="flex flex-wrap items-baseline justify-between gap-2 py-5"><span className="font-display text-4xl uppercase">{p.name}</span><span>{p.status}</span></li>)}
        </ul>
        <TLink to="/locations" className="mt-8 inline-block underline underline-offset-8">All locations</TLink>
      </section>
    </>
  )
}

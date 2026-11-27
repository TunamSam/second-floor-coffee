import Reveal from '../components/Reveal'
import Parallax from '../components/Parallax'
export default function About() {
  return (
    <>
      <section className="px-5 pb-16 pt-36 md:px-10">
        <Reveal as="h1" onLoad delay={0.9} lines={['Coffee', 'is the act', 'of socialising']} className="font-display text-[12vw] uppercase leading-[0.95] text-teal md:text-[9vw]" />
      </section>
      <Parallax src="/photos/about.png" alt="Baristas at work" label="photos/about.jpg" tone="bg-wood" shift={12} className="h-[80svh] w-full" />
      <section className="grid gap-10 px-5 py-28 md:grid-cols-12 md:px-10">
        <Reveal as="h2" lines={['Bali, 2018']} className="font-display text-6xl uppercase md:col-span-5 md:text-8xl" />
        <div className="max-w-xl space-y-6 text-lg leading-relaxed md:col-span-6 md:col-start-7">
          <p>The first Second Floor Coffee opened in Bali in 2018. A hobby became a business after five years of research.</p>
          <p>Its signature is artisanal single-origin coffee, easily digestible and naturally sweetened with fruits and flowers. The team likes to explain at the table how each coffee should be enjoyed.</p>
          <p>Today the brand works with Indonesian specialty coffee, and is growing to Sanur and Makassar.</p>
        </div>
      </section>
    </>
  )
}

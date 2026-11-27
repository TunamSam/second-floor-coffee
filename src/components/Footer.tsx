import { TLink } from './Transition'
import Reveal from './Reveal'
export default function Footer() {
  return (
    <footer className="bg-wine px-5 pb-8 pt-28 text-paper md:px-10">
      <Reveal as="p" lines={['Come up', 'for a cup.']} className="font-display text-[16vw] uppercase leading-[0.9]" />
      <div className="mt-16 flex flex-wrap items-end justify-between gap-6 text-sm">
        <TLink to="/locations" className="underline underline-offset-8">Find a Second Floor</TLink>
        <a href="https://www.instagram.com/secondfloorcoffee/" target="_blank" rel="noreferrer" className="underline underline-offset-8">@secondfloorcoffee on Instagram</a>
      </div>
    </footer>
  )
}

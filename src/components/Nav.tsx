import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Instagram, Menu, X } from 'lucide-react'
import { TLink } from './Transition'
import { nav } from '../data/brand'
import Logo from './Logo'
const IG = 'https://www.instagram.com/secondfloorcoffee/'
// Desktop: a slim vertical rail on the left with the links set sideways. Mobile: top bar with a dropdown.
export default function Nav() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  const cur = (to: string) => (pathname === to ? 'page' : undefined)
  return (
    <header>
      <aside className="fixed inset-y-0 left-0 z-50 hidden w-20 flex-col items-center justify-between border-r border-ink/15 bg-paper py-6 md:flex">
        <TLink to="/" className="block"><span className="sr-only">Second Floor Coffee, home</span><Logo className="w-14" /></TLink>
        <nav aria-label="Main" className="flex flex-col gap-8">
          {nav.map(n => (
            <TLink key={n.to} to={n.to} className={`font-display text-2xl uppercase tracking-wide transition-colors [writing-mode:vertical-rl] rotate-180 hover:text-teal ${pathname === n.to ? 'text-teal' : ''}`}>
              <span aria-current={cur(n.to)}>{n.label}</span>
            </TLink>
          ))}
        </nav>
        <a href={IG} target="_blank" rel="noreferrer" aria-label="Second Floor Coffee on Instagram" className="hover:text-teal"><Instagram size={20} /></a>
      </aside>
      <div className="fixed inset-x-0 top-0 z-50 border-b border-ink/15 bg-paper md:hidden">
        <div className="flex h-16 items-center justify-between px-5">
          <TLink to="/" onClick={close} className="block"><span className="sr-only">Second Floor Coffee, home</span><Logo className="w-14" /></TLink>
          <button aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(o => !o)}>{open ? <X /> : <Menu />}</button>
        </div>
        <nav id="mobile-nav" aria-label="Mobile" hidden={!open} className="border-t border-ink/15 px-5 pb-6 pt-2">
          {nav.map(n => <TLink key={n.to} to={n.to} onClick={close} className={`block border-b border-ink/10 py-3 font-display text-5xl uppercase ${pathname === n.to ? 'text-teal' : ''}`}><span aria-current={cur(n.to)}>{n.label}</span></TLink>)}
        </nav>
      </div>
    </header>
  )
}

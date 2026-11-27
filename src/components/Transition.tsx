import { createContext, useCallback, useContext, useLayoutEffect, useRef, type MouseEvent, type ReactNode } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { gsap, ScrollTrigger, reducedMotion } from '../lib/gsap'

const Ctx = createContext<(to: string) => void>(() => undefined)
const PANELS = ['bg-teal', 'bg-wine', 'bg-navy', 'bg-wood', 'bg-ink']

// Five colored panels rise from the bottom in a stagger to cover the page, the route swaps,
// then they retract upward. Back/forward reuse the retract from a covered state set before paint.
export function TransitionProvider({ children }: { children: ReactNode }) {
  const wrap = useRef<HTMLDivElement>(null)
  const busy = useRef(false)
  const nav = useNavigate()
  const loc = useLocation()
  const panels = () => (wrap.current ? Array.from(wrap.current.children) : [])
  const go = useCallback((to: string) => {
    if (busy.current || to === loc.pathname) return
    if (reducedMotion() || !wrap.current) { nav(to); return }
    busy.current = true
    gsap.fromTo(Array.from(wrap.current.children), { scaleY: 0, transformOrigin: '50% 100%' },
      { scaleY: 1, duration: 0.6, ease: 'expo.inOut', stagger: 0.07, onComplete: () => nav(to) })
  }, [loc.pathname, nav])
  useLayoutEffect(() => {
    const p = panels()
    window.scrollTo(0, 0)
    ScrollTrigger.refresh()
    if (reducedMotion()) { gsap.set(p, { scaleY: 0 }); busy.current = false; return }
    gsap.set(p, { scaleY: 1, transformOrigin: '50% 0%' })
    const t = gsap.to(p, { scaleY: 0, duration: 0.7, delay: 0.15, ease: 'expo.inOut', stagger: 0.07, onComplete: () => { busy.current = false } })
    return () => { t.kill() }
  }, [loc.key])
  return (
    <Ctx.Provider value={go}>
      {children}
      <div ref={wrap} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100] flex">
        {PANELS.map(c => <div key={c} className={`h-full flex-1 ${c}`} style={{ transform: 'scaleY(1)', transformOrigin: '50% 0%' }} />)}
      </div>
    </Ctx.Provider>
  )
}
export function TLink({ to, children, className, onClick }: { to: string; children: ReactNode; className?: string; onClick?: () => void }) {
  const go = useContext(Ctx)
  const h = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
    e.preventDefault(); onClick?.(); go(to)
  }
  return <Link to={to} onClick={h} className={className}>{children}</Link>
}

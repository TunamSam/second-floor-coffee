import { useLayoutEffect, useRef, type ElementType } from 'react'
import { gsap, reducedMotion } from '../lib/gsap'
interface Props { lines: string[]; as?: ElementType; className?: string; onLoad?: boolean; delay?: number }
// Each line sits in an overflow-hidden mask and slides up from behind it.
export default function Reveal({ lines, as: Tag = 'div', className = '', onLoad = false, delay = 0 }: Props) {
  const ref = useRef<HTMLElement>(null)
  useLayoutEffect(() => {
    const el = ref.current
    if (!el || reducedMotion()) return
    const ctx = gsap.context(() => {
      gsap.to('.line', { y: 0, yPercent: 0, duration: 1.1, ease: 'expo.out', stagger: 0.12, delay,
        scrollTrigger: onLoad ? undefined : { trigger: el, start: 'top 88%', once: true } })
    }, el)
    return () => ctx.revert()
  }, [onLoad, delay])
  return (
    <Tag ref={ref} className={className}>
      {lines.map(l => <span className="mask" key={l}><span className="line">{l}</span></span>)}
    </Tag>
  )
}

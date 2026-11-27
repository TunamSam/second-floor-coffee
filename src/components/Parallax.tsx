import { useLayoutEffect, useRef } from 'react'
import { gsap, reducedMotion } from '../lib/gsap'
import Photo from './Photo'
interface Props { src: string; alt: string; label: string; tone?: string; className?: string; shift?: number }
export default function Parallax({ src, alt, label, tone, className = '', shift = 9 }: Props) {
  const wrap = useRef<HTMLDivElement>(null)
  const inner = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    if (!wrap.current || !inner.current || reducedMotion()) return
    const ctx = gsap.context(() => {
      gsap.fromTo(inner.current, { yPercent: -shift, scale: 1.12 }, { yPercent: shift, scale: 1, ease: 'none',
        scrollTrigger: { trigger: wrap.current, start: 'top bottom', end: 'bottom top', scrub: true } })
    }, wrap)
    return () => ctx.revert()
  }, [shift])
  return (
    <div ref={wrap} className={`${className.includes("absolute") ? "" : "relative"} overflow-hidden ${className}`}>
      <div ref={inner} className="absolute inset-x-0 -top-[12%] h-[124%] will-change-transform">
        <Photo src={src} alt={alt} label={label} tone={tone} className="h-full w-full" />
      </div>
    </div>
  )
}

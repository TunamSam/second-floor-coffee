import { useState } from 'react'
interface Props { src: string; alt: string; label: string; tone?: string; className?: string }
// Real photo from /public/photos; if the file is missing, a labelled color block stands in.
export default function Photo({ src, alt, label, tone = 'bg-wood', className = '' }: Props) {
  const [failed, setFailed] = useState(false)
  if (failed) return <div role="img" aria-label={alt} className={`${tone} flex items-end p-4 text-xs text-white/70 ${className}`}>Placeholder: add {label}</div>
  return <img src={src} alt={alt} loading="lazy" decoding="async" onError={() => setFailed(true)} className={`object-cover ${className}`} />
}

// Brand logo (public/logo.jpg). The source is a square with white padding, so the image is cropped to the
// mark and multiplied onto the page color to hide the white background.
export default function Logo({ className = 'w-14' }: { className?: string }) {
  return (
    <span className={`relative block overflow-hidden ${className}`} style={{ aspectRatio: '765 / 480' }}>
      <img src="/logo.jpg" alt="" aria-hidden="true" width={1080} height={1080} className="pointer-events-none absolute left-[-22.8%] top-[-62.8%] w-[141%] max-w-none mix-blend-multiply" />
    </span>
  )
}

// Only facts seen on Instagram / reported in press. Anything unknown is left undefined on purpose.
export interface MenuItem { name: string; note: string; price?: string; category?: string; photo: string }
export interface Place { name: string; status: string; address?: string; hours?: string; maps: string }
const q = (s: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s)}`
export const menu: MenuItem[] = [
  {
    name: 'Cortado',
    note: 'A quiet balance. Rich espresso meets silky steamed milk, creating a smooth, full-bodied cup where neither takes the spotlight.',
    photo: '/photos/cortado.png'
  },
  {
    name: 'Red Queen',
    note: 'A little sweetness, a little drama. Bright strawberry notes come together in a refreshing iced drink made for slower afternoons.',
    photo: '/photos/red-queen.png'
  },
  {
    name: 'Litchi',
    note: 'Light, floral, and effortlessly refreshing. Delicate lychee sweetness meets a hint of citrus, bringing a little brightness to every sip.',
    photo: '/photos/litchi.png'
  }
]
export const places: Place[] = [
  { name: 'Bali', status: 'Open since 2018', maps: q('Second Floor Coffee Bali'), address: 'Jl. Bypass Ngurah Rai No.86, Kesiman, Denpasar', hours: '08.00 - 17.00' },
  { name: 'SF Sanur', status: 'Opening Q4 2026', maps: q('Second Floor Coffee Sanur'), address: 'Jl. Danau Poso No.27, Sanur, Denpasar', hours: '08.00 - 17.00' },
  { name: 'SF Makassar', status: 'Opening Q1 2027', maps: q('Second Floor Coffee Makassar'), address: 'Jl. Metro Tanjung Bunga, Makassar', hours: '08.00 - 17.00' },
]
export const nav = [{ to: '/', label: 'Home' }, { to: '/menu', label: 'Menu' }, { to: '/about', label: 'About' }, { to: '/locations', label: 'Locations' }]

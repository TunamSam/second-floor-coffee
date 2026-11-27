import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { TransitionProvider } from './components/Transition'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Locations from './pages/Locations'
export default function App() {
  return (
    <TransitionProvider>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-paper focus:p-3">Skip to content</a>
      <Nav />
      <div className="md:pl-20">
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </main>
      <Footer />
      </div>
    </TransitionProvider>
  )
}

import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 backdrop-blur px-4 py-3">
            <a href="#" className="text-white font-semibold">SILAP GUEST HOUSE TUMU</a>
            <nav className="hidden sm:flex items-center gap-6 text-emerald-100/80">
              <a href="#services" className="hover:text-white">Landscaping</a>
              <a href="#gallery" className="hover:text-white">Gallery</a>
              <a href="#location" className="hover:text-white">Location</a>
              <a href="/test" className="hover:text-white">System</a>
            </nav>
            <a href="#booking" className="px-3 py-1.5 rounded-lg bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600">Book now</a>
          </div>
        </div>
      </header>

      <main className="pt-24">
        <Hero />
        <div id="gallery"><Gallery /></div>
        <Services />
      </main>

      <Footer />
    </div>
  )
}

export default App

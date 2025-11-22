import { Leaf, Trees, MapPin } from 'lucide-react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-900 via-slate-900 to-emerald-950" />
      <div className="absolute inset-0 -z-10 opacity-30" style={{
        backgroundImage:
          'radial-gradient(1000px 500px at 10% -10%, rgba(16,185,129,0.25), transparent 60%), radial-gradient(800px 400px at 90% 110%, rgba(56,189,248,0.25), transparent 60%)'
      }} />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-24 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-emerald-400/10 border border-emerald-400/30 text-emerald-200 px-3 py-1 rounded-full text-xs mb-5">
              <Leaf className="w-4 h-4" />
              <span>Eco‑friendly outdoor spaces</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              SILAP GUEST HOUSE TUMU
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-emerald-100/90 max-w-2xl">
              A serene sanctuary surrounded by thoughtfully designed landscapes. Experience modern comfort set within lush greenery, native plants, and tranquil outdoor lounges.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#services" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition">
                Explore Landscaping
              </a>
              <a href="#location" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transition border border-white/20">
                <MapPin className="w-4 h-4 mr-2" /> Find us in Tumu
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 text-emerald-100/80">
              <div>
                <p className="text-3xl font-bold text-white">2.5+</p>
                <p className="text-xs uppercase tracking-wide">Acres of green</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">40+</p>
                <p className="text-xs uppercase tracking-wide">Native species</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="text-xs uppercase tracking-wide">Calm & privacy</p>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1800&auto=format&fit=crop"
                alt="Lush courtyard garden with stone paths and tropical plants"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/10" />
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-3">
                <img
                  src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=800&auto=format&fit=crop"
                  alt="Outdoor lounge"
                  className="h-24 w-full object-cover rounded-lg border border-white/10"
                />
                <img
                  src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop"
                  alt="Pathway"
                  className="h-24 w-full object-cover rounded-lg border border-white/10"
                />
                <img
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop"
                  alt="Native plants"
                  className="h-24 w-full object-cover rounded-lg border border-white/10"
                />
              </div>
              <div className="absolute top-4 right-4 hidden sm:flex items-center gap-2 bg-black/40 text-white px-3 py-2 rounded-lg backdrop-blur border border-white/10">
                <Trees className="w-4 h-4" />
                <span className="text-sm">Modern courtyard concept</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

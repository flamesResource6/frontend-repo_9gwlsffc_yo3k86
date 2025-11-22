import { Sprout, TreePine, Droplets, Sun, Ruler, Home } from 'lucide-react'

function Services() {
  const items = [
    {
      icon: <Sprout className="w-5 h-5" />, 
      title: 'Native Planting',
      desc: 'Sustainable species adapted to Tumu’s climate for low‑maintenance beauty.'
    },
    {
      icon: <Droplets className="w-5 h-5" />, 
      title: 'Smart Irrigation',
      desc: 'Water‑efficient drip systems with seasonal programming and rain sensing.'
    },
    {
      icon: <Sun className="w-5 h-5" />, 
      title: 'Outdoor Lighting',
      desc: 'Warm, discreet fixtures that highlight paths, courtyards, and key features.'
    },
    {
      icon: <Ruler className="w-5 h-5" />, 
      title: 'Stonework & Paths',
      desc: 'Textured walkways and seating edges using local stone and clean lines.'
    },
    {
      icon: <TreePine className="w-5 h-5" />, 
      title: 'Shade & Canopies',
      desc: 'Pergolas and trees creating calm microclimates for relaxation.'
    },
    {
      icon: <Home className="w-5 h-5" />, 
      title: 'Courtyard Design',
      desc: 'Private green rooms for dining, reading, and conversation.'
    },
  ]

  return (
    <section id="services" className="relative bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_20%,rgba(16,185,129,0.15),transparent),radial-gradient(600px_300px_at_90%_80%,rgba(56,189,248,0.15),transparent)] opacity-60" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20 relative">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Landscaping crafted for calm</h2>
          <p className="mt-3 text-emerald-100/80">Every element is chosen to feel natural, timeless, and welcoming for guests.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition backdrop-blur">
              <div className="w-9 h-9 rounded-md bg-emerald-500/15 text-emerald-300 flex items-center justify-center border border-emerald-400/20">
                {item.icon}
              </div>
              <h3 className="mt-4 text-white font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-emerald-100/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

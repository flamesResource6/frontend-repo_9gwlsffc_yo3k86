function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1523419409543-a7ea0c57cad8?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop',
  ]

  return (
    <section className="bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Spaces to wander</h2>
            <p className="mt-3 text-emerald-100/80 max-w-xl">Layers of texture, shade, and movement. Explore a few moments from around the grounds.</p>
          </div>
          <a href="#booking" className="hidden sm:inline-flex px-4 py-2 rounded-lg border border-white/10 text-white/90 hover:bg-white/10">Book a stay</a>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="relative group">
              <img src={src} alt="Garden view" className="h-52 sm:h-56 md:h-64 w-full object-cover rounded-lg border border-white/10" />
              <div className="absolute inset-0 rounded-lg bg-black/0 group-hover:bg-black/20 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery

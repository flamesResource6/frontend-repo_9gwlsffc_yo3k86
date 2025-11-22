import { Phone, Mail, MapPin } from 'lucide-react'

function Footer() {
  return (
    <footer id="location" className="relative bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <h3 className="text-white font-bold text-xl">SILAP GUEST HOUSE TUMU</h3>
            <p className="mt-3 text-emerald-100/80 max-w-sm">Modern guest house with tranquil landscape design. Crafted for relaxation and gatherings.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold">Contact</h4>
            <ul className="mt-3 space-y-2 text-emerald-100/80">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +233 55 000 0000</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> bookings@silapguesthouse.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Address</h4>
            <p className="mt-3 text-emerald-100/80 flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1" />
              Tumu, Upper West Region, Ghana
            </p>
            <a href="#" className="inline-block mt-4 px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600">Get Directions</a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-emerald-100/60 text-sm flex items-center justify-between">
          <p>© {new Date().getFullYear()} SILAP Guest House. All rights reserved.</p>
          <p>Landscaping by SILAP</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

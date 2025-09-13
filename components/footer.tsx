import Link from "next/link"
import { Apple, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted py-10 lg:py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Apple className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-primary">Gupta Fruits</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for premium quality fresh fruits, delivered with care and commitment to excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/shop" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Shop
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 8767073276</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-12" />
                <span>Shop Number 1, Savitri Bhavan, Kasar Compound, Quarry Rd, behind Mangatram Petrol Pump, Bhandup West, Mumbai, Maharashtra 400078</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Business Hours</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Mon - Sun: 9:30 AM - 10:00 PM</div>
              <div>We are open all days of the week to serve you fresh fruits!</div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Gupta Fruits. All rights reserved. Made with care for fresh fruit lovers.
          </p>
        </div>
      </div>
    </footer>
  )
}

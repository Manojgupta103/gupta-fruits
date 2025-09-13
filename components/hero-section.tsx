import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Leaf, Apple, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-yellow-50 py-5 lg:py-5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                <span className="text-primary">Fresh Fruits</span>
                <br />
                Direct from Our
                <br />
                <span className="text-secondary">Fruit Shop</span>
              </h1>
              <p className="text-lg text-muted-foreground text-pretty max-w-lg">
                Experience the finest selection of premium quality fruits at Gupta Fruits. We handpick the freshest
                seasonal and exotic varieties, ensuring you get nature's best straight from our trusted fruit shop.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/shop" className="flex items-center gap-2">
                  Shop Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Leaf className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">100% Fresh</h3>
                  <p className="text-xs text-muted-foreground">Handpicked daily</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Apple className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Wide Variety</h3>
                  <p className="text-xs text-muted-foreground">Seasonal & exotic fruits</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Quality Assured</h3>
                  <p className="text-xs text-muted-foreground">Premium selection</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 lg:p-12">
              <img
                src="/home.png"
                alt="Fresh fruit basket with variety of colorful fruits"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Premium Quality
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Farm Fresh
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

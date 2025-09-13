import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const featuredFruits = [
  {
    name: "Premium Apples",
    description: "Crisp and sweet, various varieties available",
    image: "/red-apple-fruit.png",
    popular: true,
  },
  {
    name: "Fresh Bananas",
    description: "Perfectly ripe, rich in potassium",
    image: "/bunch-of-yellow-bananas-on-white-background.jpg",
    popular: false,
  },
  {
    name: "Juicy Oranges",
    description: "Sweet and tangy, vitamin C rich",
    image: "/fresh-orange-citrus-fruits-on-white-background.jpg",
    popular: true,
  },
  {
    name: "Sweet Grapes",
    description: "Seedless varieties, perfect for snacking",
    image: "/bunch-of-purple-grapes-on-white-background.jpg",
    popular: false,
  },
]

export function FeaturedFruits() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Our <span className="text-primary">Featured</span> Fruits
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Discover our handpicked selection of the finest fruits, sourced directly from trusted farms and available
            fresh at our shop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredFruits.map((fruit, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <img
                    src={fruit.image || "/placeholder.svg"}
                    alt={fruit.name}
                    className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  {fruit.popular && (
                    <div className="absolute top-2 right-2 bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-card-foreground">{fruit.name}</h3>
                  <p className="text-sm text-muted-foreground">{fruit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/shop">View All Fruits</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

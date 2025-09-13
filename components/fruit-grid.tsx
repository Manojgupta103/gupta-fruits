"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, MessageCircle, ShoppingCart } from "lucide-react"
import { useState, useMemo } from "react"

const fruits = [
  {
    name: "Apple",
    tagline: "Various Variety Available - Crisp Sweet",
    image: "/red-apple-fruit.png",
    popular: true,
    seasonal: false,
    units: ["Kg", "Pieces"],
  },
  {
    name: "Pear",
    tagline: "Sweet Juicy Refreshing Delight",
    image: "/fresh-pear-fruit.jpg",
    popular: true,
    seasonal: false,
    units: ["Kg", "Pieces"],
  },
  {
    name: "Pomegranate",
    tagline: "Antioxidant Rich Ruby Gems",
    image: "/pomegranate-fruit.jpg",
    popular: true,
    seasonal: false,
    units: ["Kg", "Pieces"],
  },
  {
    name: "Bananas",
    tagline: "Various Variety Available - Energy Boost",
    image: "/bunch-of-yellow-bananas-on-white-bacKground.jpg",
    popular: true,
    seasonal: false,
    units: ["Dozen"],
  },
  {
    name: "Muskmelon",
    tagline: "Sweet Refreshing Summer Treat",
    image: "/muskmelon-cantaloupe-fruit.jpg",
    popular: false,
    seasonal: true,
    units: ["Pieces"],
  },
  {
    name: "Watermelon",
    tagline: "Juicy Summer Hydrating Delight",
    image: "/watermelon-fruit-slice.jpg",
    popular: true,
    seasonal: true,
    units: ["Pieces"],
  },
  {
    name: "Papaya",
    tagline: "Tropical Sweetness Digestive Aid",
    image: "/papaya-fruit.jpg",
    popular: false,
    seasonal: false,
    units: ["Pieces"],
  },
  {
    name: "Grapes",
    tagline: "Various Variety Available - Sweet Clusters",
    image: "/bunch-of-purple-grapes-on-white-bacKground.jpg",
    popular: true,
    seasonal: false,
    units: ["Kg"],
  },
  {
    name: "Orange",
    tagline: "Vitamin C Powerhouse Citrus",
    image: "/fresh-orange-citrus-fruits-on-white-bacKground.jpg",
    popular: true,
    seasonal: false,
    units: ["Kg", "Pieces", "Dozen"],
  },
  {
    name: "Kiwi (Green/Golden)",
    tagline: "Exotic Nutritious Tangy Superfruit",
    image: "/kiwi-fruit.png",
    popular: false,
    seasonal: false,
    units: ["Box"],
  },
  {
    name: "Dragon Fruits (Red/White)",
    tagline: "Exotic Superfruit Mild Sweet",
    image: "/vibrant-dragon-fruit.png",
    popular: true,
    seasonal: false,
    units: ["Pieces"],
  },
  {
    name: "Avocados",
    tagline: "Creamy Healthy Heart Good",
    image: "/avocado-fruit.jpg",
    popular: true,
    seasonal: false,
    units: ["Pieces"],
  },
  {
    name: "Pineapple",
    tagline: "Tropical Paradise Sweet Tangy",
    image: "/pineapple-fruit.jpg",
    popular: false,
    seasonal: false,
    units: ["Pieces"],
  },
  {
    name: "Sweet Lime",
    tagline: "Refreshing Citrus Vitamin Rich",
    image: "/sweet-lime-fruit.jpg",
    popular: false,
    seasonal: true,
    units: ["Kg", "Pieces", "Dozen"],
  },
  {
    name: "Custard Apple",
    tagline: "Creamy Delight Natural Sweetness",
    image: "/custard-apple-fruit.jpg",
    popular: false,
    seasonal: true,
    units: ["Kg", "Pieces"],
  },
  {
    name: "Mango",
    tagline: "King of Fruits Tropical",
    image: "/mango-fruit.jpg",
    popular: true,
    seasonal: true,
    units: ["Kg", "Pieces", "Dozen"],
  },
  {
    name: "Blueberry",
    tagline: "Antioxidant Rich Tiny Powerhouse",
    image: "/fresh-blueberries.jpg",
    popular: false,
    seasonal: false,
    units: ["Box"],
  },
  {
    name: "Litchi",
    tagline: "Sweet Floral Seasonal Delicacy",
    image: "/fresh-litchi-fruit.jpg",
    popular: false,
    seasonal: true,
    units: ["Kg"],
  },
{
    name: "Guava",
    tagline: "Vitamin C Rich Tropical Goodness",
    image: "/fresh-guava-fruit.jpg",
    popular: false,
    seasonal: false,
    units: ["Kg", "Pieces"],
  },
]

export function FruitGrid() {
  const [quantities, setQuantities] = useState<{ [key: string]: string }>({})
  const [selectedUnits, setSelectedUnits] = useState<{ [key: string]: string }>({})

  const selectedItems = useMemo(() => {
    return Object.entries(quantities)
      .filter(([_, quantity]) => quantity && Number.parseFloat(quantity) > 0)
      .map(([fruitName, quantity]) => {
        const unit = selectedUnits[fruitName] || fruits.find((f) => f.name === fruitName)?.units[0] || "Kg"
        return { name: fruitName, quantity, unit }
      })
  }, [quantities, selectedUnits])

  const hasSelectedItems = selectedItems.length > 0

  const handleQuantityChange = (fruitName: string, quantity: string) => {
    setQuantities((prev) => ({
      ...prev,
      [fruitName]: quantity,
    }))
  }

  const handleUnitChange = (fruitName: string, unit: string) => {
    setSelectedUnits((prev) => ({
      ...prev,
      [fruitName]: unit,
    }))
  }

  const generateWhatsAppMessage = () => {
    if (selectedItems.length === 0) {
      alert("Please enter quantities for the fruits you want to order.")
      return
    }

    const message = `Hello, I would like to order:\n${selectedItems.map((item) => `- ${item.quantity} ${item.unit} ${item.name}`).join("\n")}`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/918767073276?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-4 lg:py-4 bg-bacKground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {fruits.map((fruit, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border bg-card overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={fruit.image || "/placeholder.svg"}
                    alt={fruit.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {fruit.popular && <Badge className="bg-secondary text-secondary-foreground">Popular</Badge>}
                    {fruit.seasonal && (
                      <Badge variant="outline" className="bg-bacKground/80 backdrop-blur-sm">
                        Seasonal
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg text-card-foreground">{fruit.name}</h3>
                    <p className="text-sm text-muted-foreground">{fruit.tagline}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Input
                        type="number"
                        placeholder="Qty"
                        min="0"
                        step="0.5"
                        value={quantities[fruit.name] || ""}
                        onChange={(e) => handleQuantityChange(fruit.name, e.target.value)}
                        className="flex-1"
                      />
                      <Select
                        value={selectedUnits[fruit.name] || fruit.units[0]}
                        onValueChange={(value) => handleUnitChange(fruit.name, value)}
                      >
                        <SelectTrigger className="w-25">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {fruit.units.map((unit) => (
                            <SelectItem key={unit} value={unit}>
                              {unit}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-balance mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We have many more varieties available! Contact us directly to inquire about specific fruits or seasonal
            specialties.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <a href="/contact" className="flex items-center gap-2">
            Contact Us for More Options
            </a>
          </Button>
        </div>
      </div>

     {hasSelectedItems && (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-2 duration-300">
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white shadow-3xl hover:shadow-3xl transition-all duration-300 rounded-full px-12 py-6 text-lg font-semibold"
            onClick={generateWhatsAppMessage}
          >
            <ShoppingCart className="h-7 w-7 mr-3" />
            Ready to Order ({selectedItems.length})
            <MessageCircle className="h-6 w-6 ml-3" />
          </Button>
        </div>
      )}
    </section>
  )
}

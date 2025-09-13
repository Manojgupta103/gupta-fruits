import { FruitGrid } from "@/components/fruit-grid"
import { Footer } from "@/components/footer"

export default function ShopPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-gradient-to-br from-green-50 to-yellow-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">
              Our <span className="text-primary">Fresh</span> Fruit Collection
            </h1>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Explore our wide variety of premium quality fruits, carefully selected and delivered fresh to ensure the
              best taste and nutrition.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="bg-gradient-to-r from-green-100 to-yellow-100 rounded-lg p-6 mb-8 border border-green-200">
          <div className="text-center space-y-2">
            <h2 className="text-xl font-semibold text-green-800">How to Order</h2>
            <p className="text-green-700 text-balance">
              Select your desired quantity and unit for each fruit, then click the
              <span className="font-semibold text-primary mx-1">"Ready to Order"</span>
              button that appears to send your order via WhatsApp.
            </p>
            <p className="text-sm text-green-600">You can add multiple fruits before placing your order!</p>
          </div>
        </div>
      </div>

      <FruitGrid />
      <Footer />
    </main>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Clock, CheckCircle } from "lucide-react"

export function WhatsAppSection() {
  const whatsappNumber = "918767073276"
  const whatsappMessage = "Hi%20I%20want%20to%20order%20fruits"
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <section className="py-8 lg:py-12 bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Order Instantly on <span className="text-primary">WhatsApp</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Skip the wait! Order your favorite fruits directly through WhatsApp for quick and convenient service.
            </p>
            <p className="text-lg font-bold text-primary">*Currently delivering in Bhandup*</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center border-border bg-card">
              <CardContent className="p-6">
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">1. Click & Chat</h3>
                <p className="text-sm text-muted-foreground">
                  Click the WhatsApp button to start a conversation with us instantly.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-card">
              <CardContent className="p-6">
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">2. Tell Us Your Needs</h3>
                <p className="text-sm text-muted-foreground">
                  Share your fruit requirements, quantities, and delivery preferences.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-card">
              <CardContent className="p-6">
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">3. Get Fresh Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Receive fresh fruits at your doorstep with our reliable delivery service.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="inline-block border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="p-4 bg-green-500 rounded-full w-fit mx-auto">
                    <MessageCircle className="h-12 w-12 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-card-foreground">Ready to Order?</h3>
                    <p className="text-muted-foreground">
                      Start your WhatsApp conversation now and get fresh fruits delivered today!
                    </p>
                  </div>
                  <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white" asChild>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5" />
                      Order on WhatsApp
                    </a>
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Available during business hours: Mon-Sun 10AM-10PM, Same-day delivery in Bhandup.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Clock, Store } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="flex items-center justify-center min-h-screen">
  <section className="py-8 lg:py-12 bg-background w-full">
    <div className="container mx-auto px-4 flex justify-center">
      <div className="w-full max-w-2xl">
        <div className="grid grid-cols-1 gap-12 items-start">
          {/* Store Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Visit Our <span className="text-primary">Store</span>
              </h2>
              <p className="text-muted-foreground text-pretty">
                Come and experience our fresh fruit selection in person. Our friendly staff will help you choose the
                best fruits for your needs.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Store className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-card-foreground">Gupta Fruits</h3>
                      <p className="text-sm text-muted-foreground">
                        Shop Number 1, Savitri Bhavan, Kasar Compound, Quarry Rd, behind Mangatram Petrol Pump, Bhandup West, Mumbai, Maharashtra 400078
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-card-foreground">Phone Number</h3>
                      <Button variant="link" className="p-0 h-auto text-primary" asChild>
                        <a href="tel:+918767073276">+91 8767073276</a>
                      </Button>
                      <p className="text-xs text-muted-foreground">Click to call on mobile</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-card-foreground">Business Hours</h3>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div>Monday - Sunday: 9:30 AM - 10:00 PM</div>
                        <div>We are open all days of the week to serve you fresh fruits!</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    </div>
  )
}

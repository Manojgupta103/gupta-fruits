import { ContactInfo } from "@/components/contact-info"
import { ContactMap } from "@/components/contact-map"
import { WhatsAppSection } from "@/components/whatsapp-section"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-gradient-to-br from-green-50 to-yellow-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Visit our store, call us, or order directly through WhatsApp. We're here to serve you with the freshest
              fruits.
            </p>
          </div>
        </div>
      </div>

      <ContactInfo />
      <ContactMap />
      <WhatsAppSection />
      <Footer />
    </main>
  )
}

export function ContactMap() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-3xl font-bold text-foreground">
            Find Us on the <span className="text-primary">Map</span>
          </h2>
          <p className="text-muted-foreground">
            Located in the heart of the city, easily accessible by all modes of transport.
          </p>
        </div>

<div className="flex justify-center">
        <div className="bg-card rounded-lg overflow-hidden shadow-lg w-110 h-110">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d675.0788894091567!2d72.92983602159424!3d19.139400161049167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8768cf207f1%3A0xdac9837d295f72c3!2sGupta%20Fruit!5e0!3m2!1sen!2sin!4v1757784307372!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Gupta Fruits Store Location"
    className="w-full h-full"
  />
</div>
</div>
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Can't find us? Call us at{" "}
            <a href="tel:+918767073276" className="text-primary hover:underline">
              +91 8767073276
            </a>{" "}
            for directions.
          </p>
        </div>
      </div>
    </section>
  )
}

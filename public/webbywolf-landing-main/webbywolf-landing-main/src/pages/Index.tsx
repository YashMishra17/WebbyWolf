import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import LogoStrip from '@/components/LogoStrip';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <LogoStrip />
          <Features />
          <section id="quote" className="py-20">
            <div className="max-w-3xl mx-auto bg-section-bg rounded-2xl p-8 md:p-12 shadow-xl border border-border">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 font-heading gradient-heading">Request a Quote</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Tell us about your project and we'll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

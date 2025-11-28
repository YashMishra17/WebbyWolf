import Hero from '../components/hero';
import SectionTwo from '../components/section-two';
import Brands from '../components/brands';
import ContentGrid from '../components/content-grid';
import ContactForm from '../components/contact-form';



export default function Page() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-14">
        <Hero />
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionTwo />
      </section>

      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Brands />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <ContentGrid />
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <ContactForm />
      </section>
    </>
  );
}

import { 
  Header,
  Hero,
  Services,
  About,
  InstagramShowcase,
  Testimonials,
  Contact,
  Footer,
  WhatsAppSticky
} from '@/components';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      <Header />
      <Hero />
      <Services />
      {/* <About />
      <InstagramShowcase />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppSticky /> */}
    </main>
  );
}
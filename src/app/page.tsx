// Page.tsx
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Popular from '@/components/Popular';
import Products from '@/components/Products';
import Sobre from '@/components/Sobre';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Nav />
      <Hero />
      <Popular />
      <Products />
      <Sobre />
      <Contact />
      <Footer />
    </main>
  );
}
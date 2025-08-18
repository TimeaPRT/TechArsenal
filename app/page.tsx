import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import Features from '@/components/Features';
import Stats from '@/components/Stats';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <FeaturedProperties />
      <Features />
    </main>
  );
}
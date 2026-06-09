import Hero from '../components/Hero';
import ProvidersStrip from '../components/ProvidersStrip';
import BrandStatement from '../components/BrandStatement';
import CorePrinciples from '../components/CorePrinciples';
import Products from '../components/Products';
import Architecture from '../components/Architecture';
import Ecosystem from '../components/Ecosystem';
import Research from '../components/Research';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <ProvidersStrip />
      <BrandStatement />
      <CorePrinciples />
      <Products />
      <Architecture />
      <Ecosystem />
      <Research />
      <Contact />
    </>
  );
}

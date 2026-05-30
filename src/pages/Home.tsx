import Hero from '../components/Hero';
import ProvidersStrip from '../components/ProvidersStrip';
import BrandStatement from '../components/BrandStatement';
import Metrics from '../components/Metrics';
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
      <Metrics />
      <Products />
      <Architecture />
      <Ecosystem />
      <Research />
      <Contact />
    </>
  );
}

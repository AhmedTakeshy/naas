import About from "@/components/about";
import Chart from "@/components/chart";
import Hero from "@/components/hero";
import News from "@/components/news";
import Partners from "@/components/partners";
import Pricing from "@/components/pricing";
import Services from "@/components/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <About />
      <Services />
      {/* <Chart /> */}
      <News />
      <Pricing />
    </main>
  );
}

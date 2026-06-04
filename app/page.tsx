import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Engines } from "./components/Engines";
import { Problem } from "./components/Problem";
import { Process } from "./components/Process";
import { Services } from "./components/Services";
import { Why } from "./components/Why";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Engines />
        <Problem />
        <Process />
        <Services />
        <Why />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

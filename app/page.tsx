import Approch from "@/components/Approch";
import Client from "@/components/Client";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative  bg-black-100 flex  justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <FloatingNav navItems={navItems} className=" bg-black-100" />
      <Hero />
      <Grid />
      <Projects />
      <Client />
      <Experience />
      <Approch />
      <Footer />
    </main>
  );
}

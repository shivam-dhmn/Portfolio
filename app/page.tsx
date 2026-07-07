import Header from "@/section/header";
import Hero from "@/section/hero";
import Technologies from "@/section/technologies";
import Featured_projects from "@/section/featured_projects";
import Footer from "@/section/footer";
import DevProcess from "@/section/dev-process";
import About from "@/section/skill-about";
import CTA from "@/section/connect";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Technologies />
      <Featured_projects />
      <DevProcess />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}

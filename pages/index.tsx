import About from "@/components/About";
import Contact from "@/components/Contact";
import Main from "@/components/Main";
import Plans from "@/components/Plans";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Why from "@/components/Why";

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Services />
      <Plans />
      <Why />
      <Testimonials />
      <Contact />
    </>
  );
}

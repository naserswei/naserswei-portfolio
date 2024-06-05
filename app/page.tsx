import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Skills from "@/components/Skills";
import Works from "@/components/Works";
import Image from "next/image";

export default function Homepage() {
  return (
    <main className=" mx-auto flex flex-col min-h-screen max-w-7xl">
      {/* Home */}
      <Home />
      {/* about */}
      <About />
      {/* skills  */}
      <Skills />
      {/* works  */}
      <Works />
      {/* contact me*/}
      <Contact />
      {/* Footer */}
      <Footer />
    </main>
  );
}

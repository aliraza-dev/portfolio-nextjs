import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Products from "@/components/projects/projects";
import Skills from "@/components/skills/skills";

export default function Home() {
  return (
    <main>
      {/* About section */}
      <About />
      <Products />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

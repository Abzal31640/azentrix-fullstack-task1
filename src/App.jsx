import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import Socials from "./components/Socials";

function App() {
  return (
    <main className="overflow-x-hidden">
      <ScrollProgress />

      <Navbar />

      <Socials />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </main>
  );
}

export default App;
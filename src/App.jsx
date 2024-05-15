import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VirtualTryons from "./components/VirtualTryons";
import WhyDigitalPlayground from "./components/WhyDigitalPlayground";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VirtualTryons />
        <WhyDigitalPlayground />
        <Contact />
        <Features />
      </main>
      <Footer />
    </>
  );
}

export default App;

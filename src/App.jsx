import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VirtualTryons from "./components/VirtualTryons";
import WhyDigitalPlayground from "./components/WhyDigitalPlayground";
import "./App.css";

function App() {
  return (
    <div className="font-roboto">
      <Header />
      <main>
        <Hero />
        <WhyDigitalPlayground />
        <VirtualTryons />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

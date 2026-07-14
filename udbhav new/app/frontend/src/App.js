import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { WhyUs } from "@/components/WhyUs";
import { Contact } from "@/components/Contact";

function App() {
  return (
    <div className="App font-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyUs />
        <Contact />
      </main>
    </div>
  );
}

export default App;

import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Menu from "./components/Menu";
import Info from "./components/Info";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutUs />
      <Menu />
      <Info />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;

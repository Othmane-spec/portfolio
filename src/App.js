import "bootstrap/dist/css/bootstrap.min.css";
// import Particles from "react-tsparticles";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import './App.css'
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';



function App() {
   


  return (
    <>
    
    <Navbar />
    <Header />
    <About />
    <Portfolio />
    <Services />
    <Blog />
    <Contact />
    <Footer />
    
    </>
  );
}

export default App;

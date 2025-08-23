import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Festivals from "./Pages/Festivals";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Faq from "./Pages/Faq";
import Gallery from "./Pages/Gallery";
import Sitemap from "./Pages/Sitemap";
import NotFound from "./Pages/NotFound";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
export function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Festivals />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;

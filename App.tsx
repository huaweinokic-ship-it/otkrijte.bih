import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Destinations } from "./pages/Destinations";
import { Discover } from "./pages/Discover";
import { Sarajevo } from "./pages/cities/Sarajevo";
import { Mostar } from "./pages/cities/Mostar";
import { Bihac } from "./pages/cities/Bihac";
import { Jajce } from "./pages/cities/Jajce";
import { Blagaj } from "./pages/cities/Blagaj";
import { Neum } from "./pages/cities/Neum";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/city/sarajevo" element={<Sarajevo />} />
            <Route path="/city/mostar" element={<Mostar />} />
            <Route path="/city/bihac" element={<Bihac />} />
            <Route path="/city/jajce" element={<Jajce />} />
            <Route path="/city/blagaj" element={<Blagaj />} />
            <Route path="/city/neum" element={<Neum />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
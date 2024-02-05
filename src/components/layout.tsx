import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Konten1 from "../pages/konten1";
import Konten2 from "../pages/konten4";
import Konten3 from "../pages/konten3";
import Konten4 from "../pages/konten2";

function Layout() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/konten1" element={<Konten1 />} />
        <Route path="/konten2" element={<Konten2 />} />
        <Route path="/konten3" element={<Konten3 />} />
        <Route path="/konten4" element={<Konten4 />} />
    </Routes>
  )
}

export default Layout
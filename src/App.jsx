// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import TentangKami from "./pages/About";
// import KetuaSektor from "./pages/Ketua";
// import AnggotaSektor from "./pages/Anggota";
// import SektorPage from "./pages/SektorPage";
// import Footer from "./components/Footer";
// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/tentang" element={<TentangKami />} />
//         <Route path="/ketua" element={<KetuaSektor />} />
//         <Route path="/anggota" element={<AnggotaSektor />} />
//         <Route path="/anggota/:sektorName" element={<SektorPage />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
// App.js

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TentangKami from "./pages/About";
import KetuaSektor from "./pages/Ketua";
// import AnggotaSektor from "./pages/Anggota";
import SektorPage from "./pages/SektorPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<TentangKami />} />
        <Route path="/ketua" element={<KetuaSektor />} />
        {/* <Route path="/anggota" element={<AnggotaSektor />} /> */}
        <Route path="/anggota/:sektorName" element={<SektorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

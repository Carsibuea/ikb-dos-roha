// import { Link } from "react-router-dom";
// import { useState } from "react";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   // Daftar sektor, bisa diubah sesuai kebutuhan
//   const sectors = ["sektor-1", "sektor-2", "sektor-3", "sektor-4", "sektor-5", "sektor-6", "sektor-7", "sektor-8", "sektor-9", "sektor-10", "sektor-11", "sektor-12", "sektor-13", "sektor-14", "sektor-15"];

//   const toggleDropdown = () => {
//     setDropdownOpen((prevState) => !prevState);
//   };

//   const handleSectorClick = (sector) => {
//     // Menutup dropdown setelah klik
//     setDropdownOpen(false);
//     // Arahkan ke halaman yang sesuai
//     // Ini akan mengarah ke halaman sesuai sektor yang dipilih
//     window.location.href = `/anggota/${sector}`;
//   };

//   return (
//     <nav className="bg-blue-600 text-white px-4 py-3 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo & Brand */}
//         <Link to="/" className="flex items-center space-x-2">
//           <img src={`${import.meta.env.BASE_URL}ikb.jpg`} alt="Logo" className="h-8 w-8" />
//           <span className="text-xl font-bold hover:text-gray-200 transition-colors duration-200">IKB DOS ROHA</span>
//         </Link>

//         {/* Tombol hamburger (untuk mobile) */}
//         <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
//           ☰
//         </button>

//         {/* Menu Desktop */}
//         <ul className="hidden md:flex gap-6 text-sm font-medium">
//           <li>
//             <Link to="/" className="hover:text-gray-200">
//               Beranda
//             </Link>
//           </li>
//           <li>
//             <Link to="/tentang" className="hover:text-gray-200">
//               Tentang Kami
//             </Link>
//           </li>
//           <li>
//             <Link to="/ketua" className="hover:text-gray-200">
//               Daftar Ketua Sektor
//             </Link>
//           </li>

//           {/* Dropdown untuk "Daftar Anggota Sektor" */}
//           <li className="relative">
//             <button className="hover:text-gray-200" onClick={toggleDropdown}>
//               Daftar Anggota Sektor
//             </button>
//             {dropdownOpen && (
//               <ul className="absolute left-0 mt-2 bg-blue-700 text-white rounded-md shadow-lg w-48 space-y-2 text-sm font-medium">
//                 {sectors.map((sector, index) => (
//                   <li key={index}>
//                     <button onClick={() => handleSectorClick(sector)} className="block w-full px-4 py-2 text-left hover:bg-blue-600">
//                       {sector}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         </ul>
//       </div>

//       {/* Menu Mobile */}
//       {menuOpen && (
//         <ul className="md:hidden mt-3 bg-blue-700 rounded-md p-4 space-y-2 text-sm font-medium">
//           <li>
//             <Link to="/" onClick={() => setMenuOpen(false)}>
//               Beranda
//             </Link>
//           </li>
//           <li>
//             <Link to="/tentang" onClick={() => setMenuOpen(false)}>
//               Tentang Kami
//             </Link>
//           </li>
//           <li>
//             <Link to="/ketua" onClick={() => setMenuOpen(false)}>
//               Daftar Ketua Sektor
//             </Link>
//           </li>

//           {/* Dropdown untuk "Daftar Anggota Sektor" di Mobile */}
//           <li className="relative">
//             <button onClick={() => setDropdownOpen(!dropdownOpen)} className="w-full text-left px-4 py-2 hover:bg-blue-600">
//               Daftar Anggota Sektor
//             </button>
//             {dropdownOpen && (
//               <ul className="mt-2 bg-blue-700 text-white rounded-md shadow-lg space-y-2">
//                 {sectors.map((sector, index) => (
//                   <li key={index}>
//                     <button
//                       onClick={() => {
//                         setMenuOpen(false); // Menutup menu mobile
//                         handleSectorClick(sector);
//                       }}
//                       className="block w-full px-4 py-2 text-left hover:bg-blue-600"
//                     >
//                       {sector}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const sectors = Array.from({ length: 15 }, (_, i) => `sektor-${i + 1}`);

  const handleSectorClick = (sector) => {
    setDropdownOpen(false);
    setMenuOpen(false);
    navigate(`/anggota/${sector}`);
  };

  const renderSectorList = () => (
    <ul className="bg-blue-700 text-white rounded-md shadow-lg space-y-2 text-sm font-medium mt-2">
      {sectors.map((sector, index) => (
        <li key={index}>
          <button onClick={() => handleSectorClick(sector)} className="block w-full px-4 py-2 text-left hover:bg-blue-600">
            {sector.replace("-", " ").toUpperCase()}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={`${import.meta.env.BASE_URL}ikb.jpg`} alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-bold hover:text-gray-200 transition-colors duration-200">IKB DOS ROHA</span>
        </Link>

        {/* Hamburger Menu */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li>
            <Link to="/" className="hover:text-gray-200">
              Beranda
            </Link>
          </li>
          <li>
            <Link to="/tentang" className="hover:text-gray-200">
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link to="/ketua" className="hover:text-gray-200">
              Daftar Ketua Sektor
            </Link>
          </li>
          <li className="relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="hover:text-gray-200">
              Daftar Anggota Sektor
            </button>
            {dropdownOpen && <div className="absolute left-0 z-10">{renderSectorList()}</div>}
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-3 bg-blue-700 rounded-md p-4 space-y-2 text-sm font-medium">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Beranda
            </Link>
          </li>
          <li>
            <Link to="/tentang" onClick={() => setMenuOpen(false)}>
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link to="/ketua" onClick={() => setMenuOpen(false)}>
              Daftar Ketua Sektor
            </Link>
          </li>
          <li>
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="w-full text-left px-4 py-2 hover:bg-blue-600">
              Daftar Anggota Sektor
            </button>
            {dropdownOpen && <div className="pl-2">{renderSectorList()}</div>}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

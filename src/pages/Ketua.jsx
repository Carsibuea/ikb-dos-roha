export default function KetuaSektor() {
  const ketuaSektor = [
    { nama: "Op.Felicia Manullang br Nainggolan", sektor: "Koordinator Sektor 1", foto: `${import.meta.env.BASE_URL}1.jpg` },
    { nama: "Tampubolon br barutu", sektor: "Koordinator Sektor 2", foto: `${import.meta.env.BASE_URL}2.jpg` },
    { nama: "Simbolon br Rumapea", sektor: "Koordinator Sektor 3", foto: `${import.meta.env.BASE_URL}3.jpg` },
    { nama: "Pakpahan br Siringo-ringo", sektor: "Koordinator Sektor 4", foto: `${import.meta.env.BASE_URL}4.jpg` },
    { nama: "Siahaan br Hutahaean", sektor: "Koordinator Sektor 5", foto: `${import.meta.env.BASE_URL}5.jpg` },
    { nama: "Lumban Batu br Tambunan", sektor: "Koordinator Sektor 6", foto: `${import.meta.env.BASE_URL}6.jpg` },
    { nama: "Siregar br Munthe", sektor: "Koordinator Sektor 7", foto: `${import.meta.env.BASE_URL}7.jpg` },
    { nama: "Sinaga br Sihombing", sektor: "Koordinator Sektor 8", foto: `${import.meta.env.BASE_URL}8.jpg` },
    { nama: "Situmorang br Sumbayak", sektor: "Koordinator Sektor 9", foto: `${import.meta.env.BASE_URL}9.jpg` },
    { nama: "Gultom br Sinaga", sektor: "Koordinator Sektor 10", foto: `${import.meta.env.BASE_URL}10.jpg` },
    { nama: "Manullang br Nadeak", sektor: "Koordinator Sektor 11", foto: `${import.meta.env.BASE_URL}11.jpg` },
    { nama: "Sitompul br Habeahan", sektor: "Koordinator Sektor 12", foto: `${import.meta.env.BASE_URL}12.jpg` },
    { nama: "Sinaga br Siahaan", sektor: "Koordinator Sektor 13", foto: `${import.meta.env.BASE_URL}13.jpg` },
    { nama: "Marbun br Malau", sektor: "Koordinator Sektor 14", foto: `${import.meta.env.BASE_URL}14.jpg` },
    { nama: "Situmorang br Sihombing", sektor: "Koordinator Sektor 15", foto: `${import.meta.env.BASE_URL}15.jpg` },
  ];

  return (
    <div className="p-6 md:p-12 bg-white min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">Daftar Ketua Sektor</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {ketuaSektor.map((ketua, index) => (
          <div key={index} className="bg-white border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center">
            {/* Gambar Ketua */}
            <img src={ketua.foto} alt={ketua.nama} className="w-60 h-60 object-cover rounded-full mb-4 border-2 border-blue-500" />

            {/* Nama dan Sektor */}
            <h2 className="text-lg font-semibold text-gray-800 mb-1 text-center">{ketua.nama}</h2>
            <p className=" text-lg text-center">{ketua.sektor}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="p-6 md:p-12 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Judul Halaman */}
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6 text-center">Tentang Kami</h1>
        {/* Paragraf Deskripsi */}
        <p className="text-lg text-gray-700 mb-6 leading-relaxed indent-8">
          Parsahutaon ini terbentuk pada tanggal 1 Mei 1993 dengan nama IKB DOS ROHA (Ikatan Keluarga Batak) yang awal berdiri, terdiri dari 6 sektor hingga saat ini sudah terdiri dari 15 sektor ,adapun wilayah IKB DOS ROHA mencakup wilayah
          Cikande Permai, Cikande Grya Asri, Cikande Puri teratai, dan Senopati.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">Tujuan dibentuk:</p>
        <ol className="list-decimal list-outside text-black  text-lg  mb-6 leading-relaxed">
          <li>Untuk menyatukan ataupun wadah untuk menyatukan Bangso batak</li>
          <li>Untuk saling membantu,bahu-membahu,wadah untuk saling sharing tentang adat baik itu saat duka cita dan suka cita</li>
        </ol>
        <p className="text-lg text-gray-700 leading-relaxed indent-8">
          Dengan struktur kepemimpinan yang terdiri dari Ketua Umum, Ketua Sektor, dan Koordinator Anggota, kami memastikan setiap sektor mendapatkan perhatian yang seimbang serta arah yang strategis dalam pencapaian tujuan bersama.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed indent-8">Paguyuban/Parsahutaon IKB DOS ROHA berazaskan kekeluargaan yang berdasarkan pancasila dan UUD 1945, dan tidak menganut aliran politik tertentu.</p>
      </div>
    </div>
  );
}

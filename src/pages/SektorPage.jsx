// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// // Mapping sheetId dan gid untuk setiap sektor
// const sektorSheetInfo = {
//   "sektor-1": { sheetId: "1WaHAcw9Lh8eBi28Zu2MLk3K95O5TiFZJ86NnotrcdSo", gid: "0" },
//   "sektor-2": { sheetId: "1WaHAcw9Lh8eBi28Zu2MLk3K95O5TiFZJ86NnotrcdSo", gid: "1503085902" },
//   "sektor-3": { sheetId: "1WaHAcw9Lh8eBi28Zu2MLk3K95O5TiFZJ86NnotrcdSo", gid: "1071936089" },
//   // Tambahkan sektor lain sesuai kebutuhan
// };

// const SektorPage = () => {
//   const { sektorName } = useParams();
//   const [anggota, setAnggota] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const sektor = sektorSheetInfo[decodeURIComponent(sektorName).toLowerCase()];

//   useEffect(() => {
//     if (!sektor) {
//       setError("Sektor tidak ditemukan. Pastikan nama sektor di URL valid.");
//       setLoading(false);
//       return;
//     }

//     const CSV_URL = `https://docs.google.com/spreadsheets/d/${sektor.sheetId}/gviz/tq?tqx=out:csv&gid=${sektor.gid}`;

//     const fetchCSV = async () => {
//       try {
//         const response = await fetch(CSV_URL);
//         if (!response.ok) throw new Error("Gagal mengambil data");

//         const text = await response.text();
//         const rows = text.split("\n").map((row) => row.split(","));
//         const [header, ...data] = rows;

//         const anggotaFormatted = data
//           .filter((row) => row.length >= 12) // Hindari baris kosong/rusak
//           .map((row) => ({
//             Kel: row[2] ?? "-",
//             Tanggungan: row[11] ?? "-",
//             Alamat: row[9] ?? "-",
//           }));

//         setAnggota(anggotaFormatted);
//       } catch (err) {
//         setError(`Gagal mengambil data: ${err.message}`);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCSV();
//   }, [sektor]);

//   if (loading) {
//     return (
//       <div className="container mx-auto px-4 py-8">
//         <p className="text-gray-500">Mengambil data...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
//         <p className="text-gray-600">{error}</p>
//       </div>
//     );
//   }

//   if (!anggota.length) {
//     return (
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-2xl font-bold text-blue-700 mb-4">Daftar Anggota {sektorName}</h1>
//         <p className="text-gray-700">Tidak ada data anggota pada sektor ini.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold text-blue-700 mb-4">Daftar Anggota {sektorName}</h1>
//       <div className="overflow-x-auto w-full">
//         <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden text-sm">
//           <thead className="bg-blue-600 text-white">
//             <tr>
//               <th className="py-2 px-3 text-left">No</th>
//               <th className="py-2 px-3 text-left">Keluarga</th>
//               <th className="py-2 px-3 text-left">Tanggungan</th>
//               <th className="py-2 px-3 text-left">Alamat</th>
//             </tr>
//           </thead>
//           <tbody>
//             {anggota.map((item, index) => (
//               <tr key={index} className="border-b hover:bg-blue-50">
//                 <td className="py-2 px-3 text-left">{index + 1}</td>
//                 <td className="py-2 px-3 font-bold text-left">{item.Kel}</td>
//                 <td className="py-2 px-3 text-left">{item.Tanggungan}</td>
//                 <td className="py-2 px-3 text-left max-w-xs truncate">{item.Alamat}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default SektorPage;
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const sektorSheetInfo = {
  "sektor-1": { sheetId: "1WaHAcw9Lh8eBi28Zu2MLk3K95O5TiFZJ86NnotrcdSo", gid: "0" },
  "sektor-2": { sheetId: "1WaHAcw9Lh8eBi28Zu2MLk3K95O5TiFZJ86NnotrcdSo", gid: "1503085902" },
  "sektor-3": { sheetId: "1WaHAcw9Lh8eBi28Zu2MLk3K95O5TiFZJ86NnotrcdSo", gid: "1071936089" },
  "sektor-4": { sheetId: "1WaHAcw9Lh8eBi28Zu2MLk3K95O5TiFZJ86NnotrcdSo", gid: "658471550" },
  "sektor-5": { sheetId: "1WaHAcw9Lh8eBi28Zu2MLk3K95O5TiFZJ86NnotrcdSo", gid: "1658699611" },
  "sektor-6": { sheetId: "1WaHAcw9Lh8eBi28Zu2MLk3K95O5TiFZJ86NnotrcdSo", gid: "400182173" },
  "sektor-7": { sheetId: "1WaHAcw9Lh8eBi28Zu2MLk3K95O5TiFZJ86NnotrcdSo", gid: "1803907536" },
  "sektor-8": { sheetId: "1WaHAcw9Lh8eBi28Zu2MLk3K95O5TiFZJ86NnotrcdSo", gid: "1879219681" },
  "sektor-9": { sheetId: "1WaHAcw9Lh8eBi28Zu2MLk3K95O5TiFZJ86NnotrcdSo", gid: "3765257" },
  "sektor-10": { sheetId: "1WaHAcw9Lh8eBi28Zu2MLk3K95O5TiFZJ86NnotrcdSo", gid: "980070593" },
  "sektor-11": { sheetId: "1WaHAcw9Lh8eBi28Zu2MLk3K95O5TiFZJ86NnotrcdSo", gid: "261778474" },
  "sektor-12": { sheetId: "1WaHAcw9Lh8eBi28Zu2MLk3K95O5TiFZJ86NnotrcdSo", gid: "1055020555" },
  "sektor-13": { sheetId: "1WaHAcw9Lh8eBi28Zu2MLk3K95O5TiFZJ86NnotrcdSo", gid: "1645640206" },
  "sektor-14": { sheetId: "1WaHAcw9Lh8eBi28Zu2MLk3K95O5TiFZJ86NnotrcdSo", gid: "1359597577" },
  "sektor-15": { sheetId: "1WaHAcw9Lh8eBi28Zu2MLk3K95O5TiFZJ86NnotrcdSo", gid: "1815461193" },
};

const SektorPage = () => {
  const { sektorName } = useParams();
  const [anggota, setAnggota] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sektor = sektorSheetInfo[decodeURIComponent(sektorName).toLowerCase()];

  useEffect(() => {
    if (!sektor) {
      setError("Sektor tidak ditemukan.");
      setLoading(false);
      return;
    }

    const jsonURL = `https://docs.google.com/spreadsheets/d/${sektor.sheetId}/gviz/tq?tqx=out:json&gid=${sektor.gid}`;

    const fetchData = async () => {
      try {
        const res = await fetch(jsonURL);
        if (!res.ok) throw new Error("Gagal mengambil data");

        const text = await res.text();
        const json = JSON.parse(text.substring(47).slice(0, -2));
        const rows = json.table.rows;

        const anggotaFormatted = rows.map((row) => ({
          Kel: row.c[2]?.v ?? "-",
          Tanggungan: row.c[11]?.v ?? "-",
          Alamat: row.c[9]?.v ?? "-",
        }));

        setAnggota(anggotaFormatted);
      } catch (err) {
        setError(`Gagal mengambil data: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [sektor]);

  if (loading) return <p>Mengambil data...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!anggota.length) return <p>Data kosong.</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Daftar Anggota {sektorName}</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b">No</th>
              <th className="px-4 py-2 border-b">Keluarga</th>
              <th className="px-4 py-2 border-b">Tanggungan</th>
              <th className="px-4 py-2 border-b">Alamat</th>
            </tr>
          </thead>
          <tbody>
            {anggota.map((item, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{i + 1}</td>
                <td className="px-4 py-2 border-b">{item.Kel}</td>
                <td className="px-4 py-2 border-b">{item.Tanggungan}</td>
                <td className="px-4 py-2 border-b">{item.Alamat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SektorPage;

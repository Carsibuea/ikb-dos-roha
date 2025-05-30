import HeroImage from "../assets/hero.jpg";
import ImageKetua from "../assets/ketum.jpg";
export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4" style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className=" bg-opacity-50 p-6 rounded">
          <h1 className="text-3xl md:text-5xl font-bold text-white">WELCOME TO IKB DOSROHA</h1>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 mt-4 items-center">
        <div
          className="flex flex-col items-center p-6 border rounded-xl shadow-2xl bg-white max-w-md mx-auto"
          style={{
            backgroundColor: "#bfdbfe",
            clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)",
            WebkitClipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)",
          }}
        >
          <img src={ImageKetua} alt="ketua" className="w-60 h-60 rounded-full object-cover object-[0%_30%] shadow-md " />
          <h2 className="text-xl font-semibold text-gray-900">K.Sianturi br Silalahi</h2>
          <p className="text-black">Ketua Umum</p>
        </div>
        <div className="mx-2 md:mx-0 lg:mx-0">
          <p className="text-black font bold text-5xl">HORAS ......</p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">Salam Sejahtera bagi kita semua.....</p>
          <p className="italic mt-2 text-black font-bold text-lg md:text-xl max-w-3xl mx-auto">"Marsiamin-aminan songon lampaok ni gaol</p>
          <p className="italic text-black font-bold text-lg md:text-xl max-w-3xl mx-auto">Marstiungkol-tungkolan songon Suhat ni robean "</p>
          <p className="mt-2 text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">Sada ma rohatta di nalaho mangalugahon dohot pamajuhon parsahutaon IKB DOS ROHA na tahaholongi on</p>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mt-2">Kami adalah organisasi yang menyatukan 15 sektor berbeda untuk berkolaborasi dan membangun masa depan bersama.</p>
          <p className="font-bold text-lg md:text-xl max-w-3xl mx-auto mt-2 text-black">Horas... Horas....Horas....</p>
        </div>
      </div>
    </>
  );
}

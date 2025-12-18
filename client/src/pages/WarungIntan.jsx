import React from "react";
import { useNavigate } from "react-router-dom";
import { UlasanSection } from "../components/UlasanSection";

const FALLBACK_FOOD_IMAGE =
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop";

const menuItems = [
  {
    id: 1,
    name: "Nasi Uduk Komplit",
    price: "Rp 14.000",
    imageUrl:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Ayam Goreng Kremes",
    price: "Rp 15.000",
    imageUrl:
      "https://images.unsplash.com/photo-1604908176997-1251884b08a3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Tahu Tempe Goreng",
    price: "Rp 5.000",
    imageUrl:
      "https://images.unsplash.com/photo-1604908553833-1e03c4a0e4a9?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Es Teh Manis",
    price: "Rp 4.000",
    imageUrl:
      "https://images.unsplash.com/photo-1582571352032-448f7928eca3?q=80&w=800&auto=format&fit=crop",
  },
];

export const DetailWarungIntan = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="fixed top-0 left-0 right-0 z-50 h-16 sm:h-20 flex items-center justify-between px-4 sm:px-8 transition-all duration-300 bg-linear-to-b from-black/60 to-transparent">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center bg-white/95 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all text-[#b91c1c] font-bold text-lg"
        >
          2
        </button>
      </header>

      <div className="relative h-[350px] sm:h-[450px]">
        <img
          src="https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=2000&auto=format&fit=crop"
          alt="Warung Intan"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#b91c1c] via-transparent to-transparent opacity-90" />

        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8">
          <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-4xl mx-auto border-b-4 border-[#b91c1c]">
            <h1 className="text-3xl sm:text-5xl font-black text-[#b91c1c] font-serif text-center mb-2">
              Warung Intan
            </h1>
            <p className="text-center text-gray-500 font-medium mb-4 text-lg">
              Nasi Uduk & Lauk Nusantara
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm font-bold text-white">
              <span className="bg-[#FACC15] text-[#b91c1c] px-4 py-1.5 rounded-full shadow-sm">
                0.0 3
              </span>
              <span className="bg-[#b91c1c] px-4 py-1.5 rounded-full shadow-sm">
                06:00 - 11:00 4
              </span>
              <span className="bg-[#b91c1c] px-4 py-1.5 rounded-full shadow-sm">
                Sarapan Pagi
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 sm:mt-20 pb-20">
        <section className="px-4 sm:px-8 max-w-6xl mx-auto">
          <h2 className="font-serif font-black text-[#b91c1c] text-2xl sm:text-3xl mb-6 border-l-4 border-[#FACC15] pl-4">
            Daftar Menu
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {menuItems.map((item) => (
              <article
                key={item.id}
                className="group rounded-3xl bg-white shadow-lg p-4 flex flex-col items-center text-center transition-all hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 mb-4 rounded-full overflow-hidden flex items-center justify-center bg-linear-to-br from-[#fecaca] to-[#f87171] shadow-inner group-hover:scale-110 transition-transform">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    onError={(e) => {
                      if (e.target.src !== FALLBACK_FOOD_IMAGE) {
                        e.target.onerror = null;
                        e.target.src = FALLBACK_FOOD_IMAGE;
                      }
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif font-bold text-gray-800 text-lg mb-1 leading-tight">
                  {item.name}
                </h3>
                <p className="text-[#b91c1c] font-bold bg-red-50 px-4 py-1 rounded-full text-sm mt-2">
                  {item.price}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 sm:px-8 max-w-5xl mx-auto mt-12">
          {/* gunakan warungId fiktif, misal 7 */}
          <UlasanSection warungId={7} />
        </section>
      </div>
    </div>
  );
};

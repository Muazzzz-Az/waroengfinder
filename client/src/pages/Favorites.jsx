import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowBack } from "../components/icons/ArrowBack";
import { DummyImage } from "../components/shared/DummyImage";
import { Search } from "../components/icons/Search";

export const Favorite = () => {
  const navigate = useNavigate();
  const [favoriteWarungs, setFavoriteWarungs] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");

  React.useEffect(() => {
    try {
      let key = "favoriteWarungs";
      try {
        const user = JSON.parse(localStorage.getItem("authUser") || "null");
        if (user && user.email) {
          key = `favoriteWarungs_${user.email}`;
        }
      } catch {
        // fallback ke key default
      }

      const stored = JSON.parse(localStorage.getItem(key) || "[]");
      setFavoriteWarungs(Array.isArray(stored) ? stored : []);
    } catch {
      setFavoriteWarungs([]);
    }
  }, []);

  const filteredWarungs = favoriteWarungs.filter((warung) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      warung.name.toLowerCase().includes(q) ||
      (warung.location || "").toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="h-20 flex items-center gap-3 px-4 sm:px-8 shadow-[0px_5px_4px_#00000040] bg-[linear-gradient(90deg,rgba(56,118,71,1)_0%,rgba(255,232,135,1)_100%)]">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center justify-center w-9 h-9 text-white hover:text-emerald-100 transition"
          aria-label="Kembali"
        >
          <span className="text-2xl leading-none">&#8592;</span>
        </button>

        <div className="flex-1 flex flex-col gap-2">
          <div className="w-full h-10 sm:h-11 rounded-full bg-white flex items-center gap-3 px-4 shadow-[0px_5px_8px_rgba(0,0,0,0.25)] border border-white/70">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#387647]" aria-hidden="true" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-[#387647] placeholder:text-gray-400 font-['Playfair-Black',Helvetica] text-xs sm:text-sm"
              placeholder="Cari waroeng favorite kamu..."
            />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 px-4 sm:px-8 lg:px-16 py-8 sm:py-10 space-y-8">
        <section className="max-w-6xl mx-auto space-y-6 animate-fade-up" style={{ "--animation-delay": "0.05s" }}>
          <div className="w-full h-14 rounded-full shadow-[0px_7px_4px_#00000040] bg-[linear-gradient(90deg,rgba(56,118,71,1)_0%,rgba(255,232,135,1)_100%)] flex items-center justify-center">
            <h2 className="font-['Playfair-Black',Helvetica] font-black text-white text-xl sm:text-2xl">
              Waroeng Favorite Kamu
            </h2>
          </div>

          <div className="space-y-5">
            {favoriteWarungs.length === 0 ? (
              <p className="text-center text-sm sm:text-base text-[#454545] font-['Playfair-Black',Helvetica] font-black bg-white/80 rounded-2xl py-6 px-4 shadow-[0px_5px_4px_#00000020]">
                Kamu belum menambahkan waroeng ke favorite. Buka salah satu waroeng lalu tekan ikon favorite untuk menambahkannya di sini.
              </p>
            ) : filteredWarungs.length === 0 ? (
              <p className="text-center text-sm sm:text-base text-[#454545] font-['Playfair-Black',Helvetica] font-black bg-white/80 rounded-2xl py-6 px-4 shadow-[0px_5px_4px_#00000020]">
                Tidak ada waroeng yang cocok dengan pencarianmu.
              </p>
            ) : (
              filteredWarungs.map((warung) => (
                <article
                  key={warung.id}
                  className="rounded-[30px] shadow-[0px_7px_4px_#00000040] bg-[linear-gradient(180deg,rgba(104,220,132,1)_0%,rgba(56,118,71,1)_100%)] p-4 sm:p-5 flex flex-col sm:flex-row items-stretch gap-4 text-white"
                >
                  <Link to={warung.link} className="w-full sm:w-auto sm:shrink-0">
                    <DummyImage
                      className="w-full sm:w-40 md:w-48 aspect-4/3 rounded-[20px] object-cover"
                      alt={warung.name}
                    />
                  </Link>

                  <div className="flex-1 flex flex-col justify-center">
                    <Link
                      to={warung.link}
                      className="font-['Playfair-Black',Helvetica] font-black text-2xl sm:text-3xl text-center sm:text-left mb-1"
                    >
                      {warung.name}
                    </Link>

                    <p className="font-['Playfair-Black',Helvetica] font-black text-sm sm:text-base text-center sm:text-left">
                      {warung.price}
                    </p>
                    <p className="font-['Playfair-Black',Helvetica] font-black text-sm sm:text-base text-center sm:text-left mt-1">
                      {warung.location}
                    </p>
                  </div>
                </article>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

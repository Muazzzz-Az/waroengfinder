import React from "react";
import { Link } from "react-router-dom";
import { DummyImage } from "./DummyImage";

export const FeaturedRestaurantsSection = () => {
  const warungImageUrl =
    "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1200&auto=format&fit=crop";

  const menuItems = [
    {
      id: 1,
      name: "Ayam S. Ijo",
      price: "Rp 10.000",
      imageUrl:
        "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Ayam Gulai",
      price: "Rp 10.000",
      imageUrl:
        "https://images.unsplash.com/photo-1633945274405-95f397d20267?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Ayam Geprek",
      price: "Rp 10.000",
      imageUrl:
        "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Ayam Penyet",
      price: "Rp 10.000",
      imageUrl:
        "https://images.unsplash.com/photo-1604908176997-1251884b08a3?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto rounded-[25px] overflow-hidden shadow-[0px_7px_4px_#00000040] bg-[linear-gradient(180deg,rgba(104,220,132,1)_0%,rgba(56,118,71,1)_100%)] px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="lg:w-1/3 flex justify-center lg:justify-start">
          <div className="w-44 sm:w-52 lg:w-56 rounded-[25px] bg-[linear-gradient(180deg,rgba(104,220,132,1)_0%,rgba(56,118,71,1)_100%)] shadow-[0px_5px_4px_#00000040] p-3 flex flex-col items-center">
            <DummyImage
              className="w-full aspect-[1] rounded-[20px] object-cover mb-3"
              alt="Warung Muaz featured restaurant"
              src={warungImageUrl}
            />

            <h2 className="[font-family:'Playfair-Black',Helvetica] font-black text-white text-xl sm:text-2xl text-center leading-tight">
              Warung Muaz
            </h2>
            <p className="[font-family:'Playfair-Black',Helvetica] font-black text-white text-xs sm:text-sm mt-1 text-center">
              Mulai dari Rp10.000
            </p>
            <address className="not-italic [font-family:'Playfair-Black',Helvetica] font-black text-white text-xs sm:text-sm mt-1 text-center">
              📍Jalan Dr. Mansyur
            </address>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 overflow-x-auto pb-2">
              {menuItems.map((item) => (
                <article
                  key={item.id}
                  className="min-w-[140px] sm:min-w-[170px] lg:min-w-[190px] rounded-[20px] bg-[linear-gradient(180deg,rgba(255,232,135,1)_0%,rgba(56,118,71,1)_100%)] shadow-[0px_5px_4px_#00000040] p-3 flex flex-col items-center text-white"
                >
                  <DummyImage
                    className="w-full aspect-[1] rounded-[16px] mb-3 object-cover"
                    alt={item.name}
                    src={item.imageUrl}
                  />
                  <h3 className="[font-family:'Playfair-Black',Helvetica] font-black text-lg text-center leading-tight mb-1">
                    {item.name}
                  </h3>
                  <p className="[font-family:'Playfair-Black',Helvetica] font-black text-sm text-center">
                    {item.price}
                  </p>
                </article>
              ))}
            </div>

            <Link
              to="/warung/muaz"
              className="w-full h-11 sm:h-12 rounded-full bg-[linear-gradient(360deg,rgba(56,118,71,1)_0%,rgba(255,232,135,1)_100%)] shadow-[0px_5px_4px_#00000040] flex items-center justify-center transition-transform duration-150 hover:-translate-y-0.5 active:scale-95"
              aria-label="Lihat semua menu Warung Muaz"
            >
              <span className="[font-family:'Playfair-Black',Helvetica] font-black text-white text-base sm:text-lg">
                Lihat Semua (12)
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

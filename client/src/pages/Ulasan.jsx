import React from "react";
import { ArrowBack } from "../components/icons/ArrowBack";
import { DummyImage } from "../components/shared/DummyImage";

export const Ulasan = () => {
  const reviews = [
    {
      id: 1,
      name: "Jennifer",
      rating: 5,
      imageAlt: "Reviewer avatar",
      text: "Dari pertama kali datang aja udah terasa suasananya nyaman banget. Pelayanannya cepat, ramah, dan bikin betah. Menu andalannya, ayam sambal ijonya, bener-bener juara! Rasanya gurih, pedasnya pas, dan nasinya selalu hangat. Tempatnya juga bersih dan rapi, jadi makin nyaman buat makan bareng teman atau keluarga. Udah beberapa kali ke sini dan rasanya selalu konsisten. Pokoknya kalau lagi lapar, ini tempat pertama yang langsung kepikiran!",
      topPosition: "221px",
      cardTopPosition: "186px",
    },
    {
      id: 2,
      name: "Joshua",
      rating: 5,
      imageAlt: "Reviewer avatar",
      text: "Warung ini definisi 'murah tapi nggak murahan'. Dengan harga yang super terjangkau, porsinya banyak dan rasanya luar biasa! Bumbunya meresap, lauknya selalu fresh, dan sambalnya tuh bikin nagih banget. Minumannya juga segar, cocok banget buat nemenin makan siang panas-panas. Ditambah lagi pelayannya cepat tanggap dan ramah banget. Buat mahasiswa kayak aku, ini udah jadi tempat langganan tiap minggu!",
      topPosition: "632px",
      cardTopPosition: "597px",
    },
    {
      id: 3,
      name: "Wonwoo",
      rating: 5,
      imageAlt: "Reviewer avatar",
      text: "Awalnya nggak sengaja nemu warung ini pas lewat, tapi ternyata enaknya di luar ekspektasi. Suasananya adem, ada musik pelan, dan pelayannya sopan banget. Aku pesen pecel lele sambal korek, dan sumpah sambalnya tuh mantap banget! Gurih, pedas, tapi nggak bikin sakit perut. Tempatnya juga bersih dan nyaman, cocok buat nongkrong santai atau makan malam bareng keluarga. Sekarang malah jadi tempat wajib tiap weekend!",
      topPosition: "1043px",
      cardTopPosition: "1008px",
    },
  ];

  const renderStars = (rating) => {
    return "⭐".repeat(rating);
  };

  return (
    <div className="relative w-[1366px] h-[1727px] bg-transparent">
      <button
        type="button"
        className="absolute top-6 left-6 inline-flex items-center justify-center w-9 h-9 text-white hover:text-emerald-100 transition"
        aria-label="Kembali ke halaman sebelumnya"
        onClick={() => window.history.back()}
      >
        <span className="text-2xl leading-none">&#8592;</span>
      </button>

      <header className="top-[63px] left-[calc(50.00%-596px)] w-[1258px] h-[63px] rounded-[50px] bg-[linear-gradient(90deg,rgba(56,118,71,1)_0%,rgba(255,232,135,1)_100%)] absolute shadow-[0px_7px_4px_#00000040] bg-variable-collection-hijau">
        <div className="absolute top-0 left-[calc(50.00%-513px-(50.00%-596px))] text-white text-5xl font-['Playfair-Black',Helvetica] font-black tracking-[0] leading-[normal]">
          5/5
        </div>
        <div className="absolute top-[13px] left-[calc(50.00%-421px-(50.00%-596px))] text-[#387647] text-[36.6px] whitespace-nowrap font-['Playfair-Black',Helvetica] font-black tracking-[0] leading-[normal]">
          {renderStars(5)}
        </div>
        <div className="absolute top-0 left-[calc(50.00%+446px-(50.00%-596px))] font-['Playfair-Black',Helvetica] font-black text-[#387647] text-5xl tracking-[0] leading-[normal]">
          3 ulasan
        </div>
      </header>

      {reviews.map((review, index) => {
        const nameTopOffset =
          index === 0 ? "228px" : index === 1 ? "639px" : "1050px";
        const starsTopOffset =
          index === 0 ? "312px" : index === 1 ? "723px" : "1134px";
        const textTopOffset =
          index === 0 ? "398px" : index === 1 ? "809px" : "1220px";

        return (
          <article
            key={review.id}
            className="absolute left-[calc(50.00%-662px)] w-[1324px] h-[381px]"
            style={{ top: review.cardTopPosition }}
          >
            <div className="w-full h-full rounded-[25px] bg-[linear-gradient(180deg,rgba(104,220,132,1)_0%,rgba(56,118,71,1)_100%)] shadow-[0px_7px_4px_#00000040]" />

            <DummyImage
              className="absolute left-[58px] w-[147px] h-[147px]"
              style={{
                top: `calc(${review.topPosition} - ${review.cardTopPosition})`,
              }}
              alt={`Foto profil ${review.name}`}
            />

            <h2
              className="absolute left-[calc(50.00%-419px-(50.00%-662px))] font-['Playfair-Black',Helvetica] font-black text-white text-[66px] tracking-[0] leading-[normal] whitespace-nowrap"
              style={{
                top: `calc(${nameTopOffset} - ${review.cardTopPosition})`,
              }}
            >
              {review.name}
            </h2>

            <div
              className="absolute left-[calc(50.00%-420px-(50.00%-662px))] text-[#387647] text-[36.6px] whitespace-nowrap font-['Playfair-Black',Helvetica] font-black tracking-[0] leading-[normal]"
              style={{
                top: `calc(${starsTopOffset} - ${review.cardTopPosition})`,
              }}
              role="img"
              aria-label={`Rating ${review.rating} dari 5 bintang`}
            >
              {renderStars(review.rating)}
            </div>

            <p
              className="absolute left-[calc(50.00%-625px-(50.00%-662px))] w-[1249px] font-['Playfair-Black',Helvetica] font-black text-white text-2xl tracking-[0] leading-[normal]"
              style={{
                top: `calc(${textTopOffset} - ${review.cardTopPosition})`,
              }}
            >
              {review.text}
            </p>
          </article>
        );
      })}
    </div>
  );
};

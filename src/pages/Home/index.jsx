import React, { useEffect, useState } from "react";
import { Navbar } from "../../components";
import beachImg from "../../assets/beach.jpg";
import meghamalaiImg from "../../assets/meghamalai.avif";
import kanyakumariImg from "../../assets/kanyakumari.jpg";
import thanjavurImg from "../../assets/thanjavur.jpeg";
import coutrallamImg from "../../assets/coutrallam.jpg";

const images = [
  { img: meghamalaiImg, label: "Meghamalai" },
  { img: kanyakumariImg, label: "Kanyakumari" },
  { img: thanjavurImg, label: "Thanjavur" },
  { img: coutrallamImg, label: "Coutrallam" },
];

export const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <section
        className="relative bg-cover bg-center min-h-screen pt-[80px]"
        style={{ backgroundImage: `url(${beachImg})` }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between h-full">
          {/* Quotes */}
          <div className="text-background max-w-xl space-y-6 mb-10 md:mb-0 md:mr-10">
            <h1 className="text-5xl font-bold">Enjoy your</h1>
            <h2 className="text-5xl font-semibold italic text-primary">Moment</h2>
            <p className="text-lg text-baground leading-relaxed ">
              Travel isn't about places, it's about moments. <br />
              Moments that make you feel alive and free. <br />
              Create memories that last a lifetime. <br />
              Begin your adventure with us.
            </p>
            <button className="bg-primary hover:bg-primary-hover px-6 py-3 text-primary-foreground font-semibold rounded-md transition-all">
              Explore
            </button>
          </div>

          {/* Deck of cards spread horizontally */}
         <div className="relative w-[400px]   h-[320px] overflow-visible">
  {images.map((card, i) => {
    const index = (i - activeIndex + images.length) % images.length;

    const offsetX = index * 10 - 30;
    const offsetY = index * 6;
    const scale = 1 - index * 0.03;
    const rotate = index === 0 ? 0 : index * 6; 
    const zIndex = images.length - index;
    const isDisappearing = index === images.length - 1;

    // Transform for disappearing card
    const transform = isDisappearing
      ? `translate(-300px, ${offsetY}px) scale(${scale}) rotate(-45deg)`
      : `translate(-50%, ${offsetY}px) translateX(${offsetX}px) scale(${scale}) rotate(${rotate}deg)`;

    return (
      <div
        key={i}
        className="absolute top-0 left-1/2  transition-all duration-[800ms] ease-in-out"
        style={{
          transform,
          opacity: isDisappearing ? 0 : 1,
          zIndex,
        }}
      >
        <div className="bg-card p-2  rounded-2xl shadow-2xlb text-center w-[300px] text-card-foreground">
  <img
    src={card.img}
    alt={card.label}
    className="w-full h-52 object-cover rounded-lg"
  />
  <p className="mt-3 text-lg font-semibold">{card.label}</p>
</div>

      </div>
    );
  })}
</div>




        </div>
      </section>
    </div>
  );
};

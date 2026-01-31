import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { cld } from "../../lib/cloudinary";
import { AdvancedImage } from "@cloudinary/react";
import { useNavigate } from "react-router-dom";
import { cld } from "../../lib/cloudinary";


export default function Hero({ bottomRef }) {
   const image1 = cld.image("left-arrow_x1isev");
   const image2 = cld.image("right-arrow_aa4mil");
  const Navigate = useNavigate();
  const root = useRef(null);
  const vedeoref = useRef(null);
  const imageref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".box1", {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          vedeoref.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.6",
        )
        .from(
          imageref.current,
          {
            x: 100,
            opacity: 0,
            duration: 1,
            ease: "back.in",
          },
          "-=0.7",
        );
    }, root);

    return () => ctx.revert();
  }, []);

  const CLOUD_NAME = "dmiq5tzsr";
  const B_URL = `https://res.cloudinary.com/${CLOUD_NAME}`;

  const vedeos = [
    `${B_URL}/video/upload/f_auto,q_auto/vedeo3_jtvt7n`,
    `${B_URL}/video/upload/f_auto,q_auto/uhd_30fps_awjwcj`,
    `${B_URL}/video/upload/f_auto,q_auto/13127448_1920_1080_60fps_hxknba`,
  ];

  const tesla1 = cld.image("tesla1_g1edps");
  const tesla2 = cld.image("tesla2_yu3zuv");
  const ferari1 = cld.image("ferari1_xbr6v2");
  const ferari2 = cld.image("ferari2_l6vkud");

  const Images = [tesla1, ferari1, tesla2, ferari2];

  const [indexImage, setIndexImage] = useState(0);
  const [indexVedeo, setIndexVedeo] = useState(0);

  useEffect(() => {
    const intervalle = setInterval(() => {
      setIndexVedeo((prev) => (prev + 1) % vedeos.length);
      setIndexImage((prev) => (prev + 1) % Images.length);
    }, 7000);
    return () => clearInterval(intervalle);
  }, []);

  function changerImage() {
    setTimeout(() => {
      setIndexImage((prev) => (prev + 1) % Images.length);
    }, 200);
  }

  function changerpage() {
    Navigate("newsCars");
    window.scrollTo(0,0);
  }

  const goToBottomSection = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={root} className="w-full bg-bg-main mt-[5px]">
      <div className="mx-auto px-6 py-4 lg:px-12 lg:py-8 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 items-center">
        <div className="flex flex-col gap-8">
          <div className="box1">
            <h1 className="text-3xl md:text-5xl font-extrabold text-text leading-tight">
              Find Your <span className="text-primary">Dream Car</span>
            </h1>

            <p className="mt-4 text-text-muted text-lg max-w-xl">
              Modern, sporty, electric. Pick your favorite and test drive today
            </p>

            <div className="mt-4 lg:mt-6 flex gap-4">
              <button
                onClick={() => changerpage()}
                className="bg-primary hover:bg-primary-hover text-white px-4 py-2 lg:px-6 lg:py-3 rounded-xl font-semibold shadow-md transition-all duration-100 active:scale-95"
              >
                Browse New Cars
              </button>

              <button
                onClick={() => {
                  goToBottomSection();
                }}
                className="bg-surface hover:bg-surface-hover border border-border-custom py-2 px-4 lg:px-6 lg:py-3 rounded-2xl font-semibold text-primary transition active:scale-95"
              >
                Latest Car News
              </button>
            </div>
          </div>

          <div
            ref={vedeoref}
            className="relative  rounded-2xl overflow-hidden border border-border-custom shadow-lg"
          >
            <video
              key={vedeos[indexVedeo]}
              src={vedeos[indexVedeo]}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[260px] object-cover"
            />
          </div>
        </div>

        <div
          ref={imageref}
          className="group lg:ml-5 relative flex py-6 justify-center items-center bottom-0"
        >
          <AdvancedImage
            cldImg={Images[indexImage]}
            className="w-full h-full object-cover max-h-[550px] rounded-xl border border-border-custom shadow-xl hover:scale-[1.01] transition duration-300"
          />

          <div
            onClick={changerImage}
            className="absolute top-1/2 transition-all duration-200 group-hover:opacity-100 opacity-0 left-10 h-10 w-10 hover:cursor-pointer"
          >
             <AdvancedImage
            cldImg={image1}
          />
          </div>

          <div
            onClick={changerImage}
            className="absolute top-1/2 transition-all duration-200 group-hover:opacity-100 opacity-0  h-10 w-10 right-10 hover:cursor-pointer"
          >
             <AdvancedImage
            cldImg={image2}
          />
          </div>

          <div className="flex flex-row absolute bottom-0 gap-4 mt-2">
            {Images.map((_, i) => {
              return (
                <div
                  key={i}
                  className={
                    indexImage == i
                      ? "h-3 w-3 rounded-full transition-colors bg-primary"
                      : "h-3 w-3 rounded-full transition-colors bg-blue-400"
                  }
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import { cld } from "../lib/cloudinary";
import { AdvancedImage } from "@cloudinary/react";
import { UseCars } from "../Context/ContextProvider";
import Car from "../Components/Component/Car";
import {useState, useMemo, useEffect } from "react";
import Spinner from "../Components/Component/Spinner";
import rightArrow from "../assets/right.png"; 
import { CheckCircle2, Star } from "lucide-react"; // Importation d'icônes


export default function NewsCars() {
  const [isLoad,setLoad] = useState(false);
  let { cars: Cars } = UseCars();
  
  const image1 = cld.image(
    "f1b5b9d3-8c63-435d-80c0-62b85d6613d7-removebg-preview_shkjrb"
  );

  const expertImage = cld.image(
    "Gemini_Generated_Image_dsezmvdsezmvdsez_kxipnv",
  );

  const choix = ["Hyundai", "Tesla"];

  const category = [
    "All",
    "BMW",
    "ferrari",
    "Dacia",
    "Toyota",
    "Mercedes",
    "Tesla",
  ];

const [active, setActive] = useState("All");

const CategoryCars = useMemo(() => {
  if (active === "All") return Cars;
  return Cars.filter((car) => car.category === active);
}, [Cars, active]);


 useEffect(()=>{
    setLoad(true);
    setTimeout(()=>{
        setLoad(false);
    },500)
    return clearTimeout;
 },[active]);
  

 const expertOpinion = [
   "Excellent rapport qualité/prix pour un usage quotidien.",
   "SUV pratique et solide sans exploser le budget.",
   "Une référence pour l’off-road et les longs trajets.",
   "Voiture plaisir : style + performance, peu pratique au quotidien.",
 ];


  return (
    <section className="w-full absolute top-0 left-0">
      <div className="w-full">
        <div className="relative min-h-screen w-full bg-[#1a1f1f] overflow-hidden flex items-center">
          {/* Petit effet de lumière en arrière-plan pour le côté moderne */}
          <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full -mr-20 -mt-20 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 py-12 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">
            {/* BLOC TEXTE */}
            <div className="flex flex-col items-start gap-6 md:gap-8 z-10 order-2 lg:order-1">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                Find your <br />
                <span className="inline-block mt-1">
                  next <span className="text-blue-400">new car</span>
                </span>
              </h1>

              <p className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed">
                Discover a premium selection of vehicles tailored to your
                lifestyle. Quality and performance meet here.
              </p>

              {/* BOUTONS DE FILTRE (CHOIX) */}
              <div className="flex flex-wrap gap-3 md:gap-4 w-full">
                {choix.map((item, index) => (
                  <button
                    key={index}
                    className="flex-1 min-w-[120px] md:min-w-[160px] px-6 py-3 bg-white/5 border border-white/10 text-gray-300 rounded-xl hover:bg-white/10 hover:text-white transition-all duration-300 font-semibold backdrop-blur-sm"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* BLOC IMAGE */}
            <div className="relative flex justify-center items-center order-1 lg:order-2 group">
              {/* Ombre réaliste sous la voiture */}
              <div className="absolute bottom-6 md:bottom-10 w-[70%] h-6 bg-black/50 blur-2xl rounded-[100%] transition-transform duration-500 group-hover:scale-x-110" />

              <AdvancedImage
                cldImg={image1}
                className="w-full max-w-[500px] lg:max-w-none h-auto object-contain transform transition-transform duration-700 ease-out group-hover:-translate-y-3"
              />
            </div>
          </div>
        </div>

        <div className="w-full min-h-[700px]  flex flex-col gap-4 lg:gap-6 bg-bg-main px-6 py-4 lg:px-12 lg:py-8">
          <div className="flex flex-wrap mt-10  justify-center gap-2">
            {category.map((chois) => (
              <button
                key={chois}
                onClick={() => setActive(chois)}
                className={`  px-2 py-2 w-[100px] lg:w-[170px] rounded-xl  font-extrabold transition-all duration-300
                         ${
                           active === chois
                             ? "bg-primary text-white shadow-lg scale-[1.01]"
                             : "bg-surface border-blue-600 border-solid border text-text "
                         } `}
              >
                {chois}
              </button>
            ))}
          </div>

          {isLoad ? (
            <Spinner />
          ) : (
            <div className="mt-8 w-full justify-content-center h-auto grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
              {CategoryCars?.slice(0, 8).map((car) => (
                <Car key={car.id} id={car.id} />
              ))}
            </div>
          )}

          <div className="flex w-full justify-end">
            {CategoryCars.length > 8 && (
              <button
                type="button"
                className="mt-8 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-base font-medium text-text transition hover:underline"
              >
                More Cars
                <img src={rightArrow} alt="arrow" className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="flex w-full flex-col lg:flex-row items-center px-6 py-4 lg:px-12 lg:py-8  gap-16 bg-gradient-to-br from-white to-gray-50 rounded-[2.5rem]">
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] blur-2xl transition-all group-hover:bg-primary/10"></div>
              <AdvancedImage
                cldImg={expertImage}
                className="relative w-full h-auto rounded-3xl shadow-2xl shadow-gray-200/50 object-cover pointer-events-none transform transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

            {/* Section Contenu / Avis */}
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
                  L'avis de nos{" "}
                  <span className="text-primary">spécialistes</span>
                </h2>
              </div>

              <div className="grid gap-4">
                {expertOpinion.map((el, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-2 bg-white border border-gray-100 rounded-2xl shadow-sm transition-all hover:shadow-md hover:border-primary/20 group"
                  >
                    <div className="mt-1 bg-green-50 rounded-full p-1 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                      <CheckCircle2 size={20} />
                    </div>
                    <p className="text-gray-700 leading-relaxed font-medium">
                      {el}
                    </p>
                  </div>
                ))}
              </div>

              {/* Petit badge de confiance en bas */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 animate-pulse"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-500 font-medium">
                  Validé par plus de{" "}
                  <span className="text-gray-900 font-bold">50+ experts</span>{" "}
                  automobiles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


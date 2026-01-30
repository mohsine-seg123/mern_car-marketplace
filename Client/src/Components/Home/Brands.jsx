import { cld } from "../../lib/cloudinary";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { BrandCard } from "../Component/BrandCard";

const toyota = cld.image("toyota_wyz71r");
const chevrolet = cld.image("chevrolet_utqbui");
const dacia = cld.image("dacia_diuerw");
const ford = cld.image("ford_w386qf");
const honda = cld.image("honda_d7fvda");
const mercedes = cld.image("mercedes_mglxd7");
const nissan = cld.image("nissan_l4fm8z");
const peugeot = cld.image("pegeot_vf7fej");
const renault = cld.image("renault_scz1qw");
const rover = cld.image("rover_mhv7k9");
const tesla = cld.image("tesla_s3udhk");
const volkswagen = cld.image("volsvagn_qeno2n");
const ferari = cld.image("R_ojmubo");

export default function Brands() {

  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const tl1 = useRef(null);
  const tl2 = useRef(null);

  const brandsData = [
    { id: 1, name: "Chevrolet", logo: chevrolet },
    { id: 2, name: "Dacia", logo: dacia },
    { id: 3, name: "Ford", logo: ford },
    { id: 4, name: "Honda", logo: honda },
    { id: 5, name: "Mercedes", logo: mercedes },
    { id: 6, name: "Nissan", logo: nissan },
    { id: 7, name: "Peugeot", logo: peugeot },
    { id: 8, name: "Renault", logo: renault },
    { id: 9, name: "Rover", logo: rover },
    { id: 10, name: "Tesla", logo: tesla },
    { id: 11, name: "Toyota", logo: toyota },
    { id: 12, name: "Volkswagen", logo: volkswagen },
    { id: 13, name: "ferari", logo: ferari },
  ];

   const index=Math.ceil(brandsData.length/2);
   const firstLine=brandsData.slice(0,index);
   const secondLine=brandsData.slice(index);


   useEffect(()=>{
     const ctx = gsap.context(() => {
       tl1.current = gsap.to(line1Ref.current, {
         xPercent: -50,
         repeat: -1,
         duration: 25,
         ease: "none",
       });

       gsap.set(line2Ref.current, { xPercent: -50 });
       tl2.current = gsap.to(line2Ref.current, {
         xPercent: 0,
         repeat: -1,
         duration: 25,
         ease: "none",
       });
     });
     
     return () => ctx.revert(); 
   },[]);


   const pauseAnim = () => {
     tl1.current?.pause();
     tl2.current?.pause();
   };

   const resumeAnim = () => {
     tl1.current?.play();
     tl2.current?.play();
   };

  return (
    <section className=" mx-auto w-full  px-6 py-4 lg:px-12 lg:py-8  overflow-hidden flex flex-col gap-12">
      <h2 className="font-extrabold text-3xl text-text">Top Brands</h2>
      <div
        className="relative flex flex-col gap-10 group"
        onMouseEnter={pauseAnim}
        onMouseLeave={resumeAnim}
      >
  
       
        <div className="flex whitespace-nowrap">
          <div ref={line1Ref} className="flex gap-8 pr-8">
            {[...firstLine, ...firstLine].map((brand, idx) => (
              <BrandCard key={`line1-${brand.id}-${idx}`} brand={brand} />
            ))}
          </div>
        </div>

        <div className="flex whitespace-nowrap">
          <div ref={line2Ref} className="flex gap-8 pr-8">
            {[...secondLine, ...secondLine].map((brand, idx) => (
              <BrandCard key={`line2-${brand.id}-${idx}`} brand={brand} />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}

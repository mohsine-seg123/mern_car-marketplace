import { AdvancedImage } from "@cloudinary/react";
import { useNavigate, useParams } from "react-router-dom";
import { cld } from "../../lib/cloudinary";

export default function CarDetailleHeader({ car }) {
  const Navigate=useNavigate();
  const {id}=useParams();

  function goContactseller(id){
    window.scrollTo(0,0);
     Navigate(`/Contactseller/${id}`);
  };


  return (
    <div className="w-full flex lg:flex-row flex-col border border-solid bg-[#e9ecf1f3] rounded-xl border-blue-400">
      <div className="lg:w-1/2 w-full flex flex-col justify-center gap-2 lg:gap-6 px-8">
        <div>
          <span className="text-sm text-gray-500">Year</span>
          <p className="text-2xl font-semibold text-blue-700">2026</p>
        </div>
        <h2 className="text-3xl font-bold text-text">{car.title}</h2>
        <p className="text-text-muted text-base">{car.description}</p>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-lg text-gray-500">Start at:</span>
          <span className="text-2xl font-bold text-primary">{car.price}</span>
        </div>
        <button onClick={()=>(goContactseller(id*1))} className="py-2 px-4 mt-4 lg:px-8 lg:py-3 lg:mt-10 w-fit rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold shadow-lg hover:scale-[1.01] transition-transform self-start">
          Contact seller
        </button>
      </div>
      <div className="lg:w-1/2 w-full">
        <AdvancedImage
          cldImg={cld.image(car.image)}
          alt={car.description}
          className="h-full hover:scale-[1.1] hover:cursor-pointer rounded-xl w-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}

import { UseCars } from "../../Context/ContextProvider";
import { AdvancedImage } from "@cloudinary/react";
import { useNavigate } from "react-router-dom";
import { cld } from "../../lib/cloudinary";



export default function Car({ id }) {
  const navigate=useNavigate();

  const { cars: Cars } = UseCars();
  const car = Cars.find((car) => car.id == id);

  if (!car) return null;

  function DetailleCar(id){
       navigate(`/newsCars/${id}`);
        window.scrollTo(0, 0)
  };

  return (
    <div className="w-full lg:w-[290px] border border-solid border-blue-300 bg-surface-avbare rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="h-1/2] p-1 w-full  flex items-center justify-center overflow-hidden">
        <AdvancedImage
          cldImg={cld.image(car.images[0].src)}
          className="h-full rounded-xl w-full object-contain group-hover:scale-[1.01] transition-transform duration-500"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <p className="text-lg font-bold text-blue-600">{car.price}</p>

        <p className="text-base font-semibold text-gray-900 leading-tight">
          {car.title}
        </p>

        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-gray-500">{car.category}</span>

          <span className="text-sm font-medium text-yellow-500">
            ⭐ {car.rating}
          </span>
        </div>

        <button
          onClick={() => DetailleCar(car.id)}
          className="mt-4 w-full py-2 rounded-xl bg-primary text-white font-semibold transition-all duration-300 hover:bg-primary-hover"
        >
          View details
        </button>
      </div>
    </div>
  );
}

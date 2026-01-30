import { useParams } from "react-router-dom"
import { UseCars } from "../Context/ContextProvider";
import { useMemo } from "react";
import CarDetailleHeader from "../Components/Component/CarDetailleHeader";
import PhotosCar from "../Components/Component/PhotosCar";
import Propreties from "../Components/Component/PropretiesCar";
import SameCategoryCar from "../Components/Component/SameCategoryCar";

export default function DetailleCar(){
    const {id}=useParams();
    const { cars} = UseCars();
    const car = useMemo(() => cars.find((car) => car.id === id*1), [cars, id]);


   const sameCategory = useMemo(() => {
     if (!car) return []; 
     return cars.filter(c => c.category === car.category && c.id !== car.id);
    }, [cars, car]);

    

    return (
      <section className="w-full h-auto ">
        <div className="w-full px-6 py-4 lg:py-8 lg:px-12 flex flex-col gap-8">
          
          <p className="ml-4 text-lg lg:text-xl">
            <span className="underline">Home</span> /{" "}
            <span className="underline">new Cars</span> / {car.title}
          </p>

          <CarDetailleHeader car={car}/>
          <Propreties car={car}/>
          <PhotosCar car={car}/>
          <SameCategoryCar sameCategory={sameCategory} car={car}/>
        </div>
      </section>
    );
}
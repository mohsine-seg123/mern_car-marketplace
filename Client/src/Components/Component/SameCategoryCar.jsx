import Car from "./Car";

export default function SameCategoryCar({sameCategory,car}){
    return (
      <div className="w-full max-w-8xl p-4 flex flex-col">
        <p className="text-xl font-extrabold text-primary">
          The same Category Cars {car.category}
        </p>
        <div className="flex w-full gap-8 flex-wrap">
          {sameCategory.map((car) => (
            <div className="mt-8 h-auto flex flex-wrap gap-6">
              {<Car key={car.id} id={car.id} />}
            </div>
          ))}
        </div>
      </div>
    );
}
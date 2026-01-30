import React, { useState } from "react";
import { AdvancedImage } from "@cloudinary/react";
import  { cld } from "../../lib/cloudinary";

export default function PhotosCar({ car }) {
  const [index, setIndex] = useState(0);
  return (
    <div className="w-full max-w-8xl p-4  rounded-xl border border-solid border-blue-500 bg-surface mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="group overflow-hidden rounded-2xl">
        <AdvancedImage
          cldImg={cld.image(car.images[index].src)}
          className="w-full h-full object-contain rounded-2xl 
                 transition-transform duration-500 
                 group-hover:scale-105 cursor-pointer"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {car.images.map((img, index) => (
          <div
            key={index}
            onClick={() => setIndex(index)}
            className="group overflow-hidden rounded-xl"
          >
            <AdvancedImage
              cldImg={cld.image(img.src)}
              className="w-full h-full object-contain rounded-xl
                     transition-transform duration-500 
                     group-hover:scale-105 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

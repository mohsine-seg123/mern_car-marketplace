import { cld } from "../lib/cloudinary";
import { AdvancedImage } from "@cloudinary/react";

const image1 = cld.image("byd_ckuc6m");

export default function ElectriqueCars() {
  return (
    <div className="w-full h-auto flex flex-col">
      {/* Image Section with Stats Overlay */}
      <div className="w-full relative h-screen ">
        <AdvancedImage
          cldImg={image1}
          className="w-full h-full object-cover pointer-events-none"
        />

        {/* Cyan Overlay with Stats */}
        <div className="absolute inset-0 mb-4">
          <div className="w-full h-full flex items-end justify-around px-8 md:px-16">
            {/* Range - Left */}
            <div className="flex flex-col items-center text-white">
              <h2 className="text-xl  lg:text-3xl font-bold leading-tight">
                Up to 312
              </h2>
              <h2 className="text-xl  lg:text-3xl font-bold mb-4">
                km
              </h2>
            </div>

            {/* Acceleration - Center */}
            <div className="flex flex-col items-center text-white">
              <h2 className="text-xl lg:text-3xl font-bold mb-4">
                7.9 s
              </h2>
              <p className="text-2xl lg:text-3xl font-light">0-100 km/h</p>
            </div>

            {/* Top Speed - Right */}
            <div className="flex flex-col items-center text-white">
              <h2 className="text-xl lg:text-3xl font-bold mb-4">
                160 km/h
              </h2>
              <p className="text-2xl lg:text-3xl font-light">Top speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

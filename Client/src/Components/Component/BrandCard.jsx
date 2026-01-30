import { AdvancedImage } from "@cloudinary/react";

export function BrandCard({ brand }) {
  return (
    <div className="flex flex-col border border-solid border-blue-500 rounded-2xl items-center gap-2 lg:gap-4 shrink-0">
      <div className="h-20 w-30 md:h-32 md:w-40 flex items-center  justify-center p-6 rounded-2xl shadow-sm transition-colors duration-300">
        <AdvancedImage
          cldImg={brand.logo}
          className="w-full h-full object-contain transition-all duration-500"
        />
      </div>
      <p className="text-xs lg:text-sm font-semibold  text-text-muted uppercase ">
        {brand.name}
      </p>
    </div>
  );
}

import { cld } from "../../lib/cloudinary";
import { AdvancedImage } from "@cloudinary/react";

export default function About() {
  const imageAbout = cld.image(
    "pexels-aaronmcurtis-119435-removebg-preview_sqsgxy"
  );

  const tableau = [
    { titre: "Global Market", value: "31+" },
    { titre: "Clients satisfaits", value: "98%" },
    { titre: "Voitures vendues", value: "1200+" },
  ];

  return (
    <section className="w-full m-0 px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row lg-10 lg:gap-0">
        <div className="flex gap-6 sm:gap-8 flex-col w-full lg:w-1/2 justify-center items-start">
          <p className="self-start text-2xl sm:text-3xl ml-4 font-extrabold text-text">
            About us
          </p>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
            Our mission is to make car buying safer and more accessible by
            offering inspected vehicles, responsive customer support, and
            complete transparency.
          </p>

          <div className="flex flex-row gap-6 sm:gap-12 w-full">
            {tableau.map((el) => (
              <div
                key={el.titre}
                className="flex flex-col gap-2 sm:gap-3 border-l-2 border-l-primary pl-4 sm:pl-6"
              >
                <p className="text-xs sm:text-sm font-medium text-gray-500">
                  {el.titre}
                </p>
                <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  {el.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center w-full pr-10 lg:pr-0 lg:w-1/2">
          <AdvancedImage
            cldImg={imageAbout}
            className="w-full max-w-[560px] lg:h-[350px] rounded-2xl  p-3 sm:p-4  hover:scale-[1.02] transition duration-300"
          />
        </div>
      </div>
    </section>
  );
}

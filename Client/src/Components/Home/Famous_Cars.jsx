import { AdvancedImage } from "@cloudinary/react";
import { cld } from "../../lib/cloudinary";
import { Link } from "react-router-dom";
import { UseCars } from "../../Context/ContextProvider";

export default function Famous_Cars() {
  const { bottomRef2 }=UseCars();
  const dacia = cld.image("dacia-famous-removebg-preview_ixuepa");

  return (
    <section ref={bottomRef2} className="w-full  bg-bg-main">
      <div className=" rounded-xl w-full px-6 py-4 lg:px-12 lg:py-8 border-spacing-2 border-solid border-primary flex flex-col  lg:flex-row justify-center items-center">
        <div className="lg:w-1/2 w-full  p-5 flex justify-start items-center">
          <AdvancedImage
            cldImg={dacia}
            className=" lg:w-[500px] lg:h-[400px] lg:object-cover object-contain rounded-xl transition-all duration-75 hover:scale-[1.01] hover:cursor-pointer"
          />
        </div>

        <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-10  flex flex-col justify-center">
          <div className="hover:cursor-pointer flex items-center gap-3">
            <span className="hover:bg-primary-hover transition-all duration-75 p-1 rounded-[8px] inline-flex items-center bg-primary text-white">
              Famous Car in Morroco
            </span>
          </div>

          <h2 className="mt-4 text-2xl sm:text-3xl font-bold leading-tight text-text">
            Dacia Duster — Best Value SUV
          </h2>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-text-muted">
            Un SUV robuste et abordable, connu pour son excellent rapport
            qualité/prix, une garde au sol généreuse et une utilisation pratique
            au quotidien.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="cursor-pointer rounded-xl border border-primary bg-bg-main p-4">
              <p className="text-xs font-semibold text-text-muted">Carburant</p>
              <p className="mt-1 text-sm font-semibold text-text">
                Essence / Diesel
              </p>
            </div>
            <div className="cursor-pointer rounded-xl border border-primary bg-bg-main p-4">
              <p className="text-xs font-semibold text-gray-500">Boîte</p>
              <p className="mt-1 text-sm font-semibold text-gray-900">
                Manuelle / Auto
              </p>
            </div>
            <div className="rounded-xl border cursor-pointer border-primary bg-bg-main p-4">
              <p className="text-xs font-semibold text-gray-500">
                Transmission
              </p>
              <p className="mt-1 text-sm font-semibold text-gray-900">
                4x2 / 4x4
              </p>
            </div>
            <div className="rounded-xl border cursor-pointer bg-bg-main border-primary p-4">
              <p className="text-xs font-semibold text-gray-500">
                Prix indicatif
              </p>
              <p className="mt-1 text-sm font-semibold text-gray-900">
                À partir de 18 000€
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/dacia"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white
                           hover:bg-primary-hover "
            >
              Buy Dacia
            </Link>

            <Link
              onClick={() => window.scroll(0, 0)}
              to="/newsCars"
              className="inline-flex border-solid border-primary items-center justify-center rounded-xl border bg-bg-main px-5 py-3 text-sm font-semibold text-gray-900
                          transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              News Cars
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

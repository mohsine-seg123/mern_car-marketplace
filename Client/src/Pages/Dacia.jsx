import { useState } from "react";
import { cld } from "../lib/cloudinary";
import { AdvancedImage } from "@cloudinary/react";
import { Link } from "react-router-dom";
export default function Dacia(){

    const dacia1 = cld.image("dacia_gris-removebg-preview_1_uasonu");
    const dacia2 = cld.image("blue_dacia-removebg-preview_p74t5p");
    const dacia3 = cld.image("dacia_noir-removebg-preview_1_teplzd");
    const dacia4 = cld.image("dacia_rouge-removebg-preview_wvk8cl");


 
    const [image,setImage]=useState(dacia1);

    return (
      <section className="w-full h-auto">
        <div className="px-6 py-4 lg:px-12 lg:py-8 flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="w-full lg:w-1/2 flex justify-center">
              <AdvancedImage
                cldImg={image}
                className="w-full h-[280px] sm:h-[360px] lg:h-[450px] object-contain"
              />
            </div>

            <div className="flex flex-col w-full lg:w-1/2 justify-center items-start gap-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight text-text">
                Dacia Duster — Best Value SUV
              </h2>

              <div className="flex flex-wrap items-center gap-3">
                <p className="text-3xl sm:text-4xl font-extrabold text-text">
                  189,000 MAD
                </p>
                <span className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
                  Best deal
                </span>
                <span className="text-xs text-text-muted">
                  (starting price)
                </span>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-text-muted max-w-xl">
                The Dacia Duster stands out as one of the best value SUVs on the
                market, offering a robust design, reliable performance, and
                modern features at an affordable price. Built for both city
                driving and off-road adventures, it delivers practicality,
                comfort, and efficiency without compromise.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white
        hover:bg-primary-hover transition w-full sm:w-auto"
                >
                  Contact Seller
                </Link>

                <Link
                  to="/test-drive"
                  className="inline-flex items-center justify-center rounded-xl border border-border-custom bg-surface px-5 py-3 text-sm font-semibold text-text
        hover:bg-surface-hover transition w-full sm:w-auto"
                >
                  Book a Test Drive
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="hover:cursor-pointer flex items-center gap-3 rounded-xl border border-border-custom bg-surface p-4">
              <svg
                className="h-5 w-5 text-primary"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12h14M7 8h10M7 16h10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <div>
                <p className="text-xs text-text-muted">Engine</p>
                <p className="text-sm font-semibold text-text">1.3 TCe</p>
              </div>
            </div>

            <div className="flex hover:cursor-pointer items-center gap-3 rounded-xl border border-border-custom bg-surface p-4">
              <svg
                className="h-5 w-5 text-primary"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7 7h10v10H7V7Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M9 9h6v6H9V9Z" stroke="currentColor" strokeWidth="2" />
              </svg>
              <div>
                <p className="text-xs text-text-muted">Transmission</p>
                <p className="text-sm font-semibold text-text">Manual / Auto</p>
              </div>
            </div>

            <div className="flex hover:cursor-pointer items-center gap-3 rounded-xl border border-border-custom bg-surface p-4">
              <svg
                className="h-5 w-5 text-primary"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 14l8-8 8 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M6 14v6h12v-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <div>
                <p className="text-xs text-text-muted">Drive</p>
                <p className="text-sm font-semibold text-text">4x2 / 4x4</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex hover:cursor-pointer items-center gap-3 rounded-xl border border-border-custom bg-surface p-4">
              <svg
                className="h-5 w-5 text-primary"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M5 18H3V6h14l4 5v7h-2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <div>
                <p className="text-xs text-text-muted">Body</p>
                <p className="text-sm font-semibold text-text">SUV</p>
              </div>
            </div>

            <div className="flex hover:cursor-pointer items-center gap-3 rounded-xl border border-border-custom bg-surface p-4">
              <svg
                className="h-5 w-5 text-primary"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 3v18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M7 8h10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M7 16h10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <div>
                <p className="text-xs text-text-muted">Fuel</p>
                <p className="text-sm font-semibold text-text">
                  Gasoline / Diesel
                </p>
              </div>
            </div>

            <div className="flex hover:cursor-pointer items-center gap-3 rounded-xl border border-border-custom bg-surface p-4">
              <svg
                className="h-5 w-5 text-primary"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 6v6l4 2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              <div>
                <p className="text-xs text-text-muted">0–100 km/h</p>
                <p className="text-sm font-semibold text-text">~10.5s</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text">
              Design your vehicle
            </h2>

            <div className="w-full flex flex-col lg:flex-row rounded-2xl border border-border-custom bg-surface shadow-lg overflow-hidden">
              <div className="w-full lg:w-2/3 flex justify-center items-center">
                <AdvancedImage
                  cldImg={image}
                  className=" y-[450px] lg:w-[550px]  lg:h-[450px] object-contain"
                />
              </div>



              <div className="w-full lg:w-1/3 px-6 py-8 sm:px-8 sm:py-10 flex flex-col gap-8 justify-center items-center">
                <div className="flex gap-4 sm:gap-6">
                  <p
                    onClick={() => setImage(dacia3)}
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black cursor-pointer border-2 border-transparent hover:border-primary hover:scale-105 transition"
                  ></p>
                  <p
                    onClick={() => setImage(dacia4)}
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-red-700 cursor-pointer border-2 border-transparent hover:border-primary hover:scale-105 transition"
                  ></p>
                  <p
                    onClick={() => setImage(dacia1)}
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gray-500 cursor-pointer border-2 border-transparent hover:border-primary hover:scale-105 transition"
                  ></p>
                  <p
                    onClick={() => setImage(dacia2)}
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-blue-600 cursor-pointer border-2 border-transparent hover:border-primary hover:scale-105 transition"
                  ></p>
                </div>

                <div
                  className="px-5 py-3 text-sm font-semibold text-primary bg-primary-soft border border-primary rounded-xl cursor-pointer
                      hover:bg-surface hover:shadow-sm transition-all duration-150"
                >
                  continue your design
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

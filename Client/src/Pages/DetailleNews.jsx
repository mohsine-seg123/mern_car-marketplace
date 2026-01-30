import { useParams } from "react-router-dom";
import {UseCars} from "../Context/ContextProvider"; 
import { AdvancedImage } from "@cloudinary/react";
import { useMemo } from "react";
import { cld } from "../lib/cloudinary";

export default function DetailleNews() {
  const { _id } = useParams();
  const { News_Review_Data: latestNews } = UseCars();

  const InfoLatest= useMemo(()=>{
     return latestNews.filter((latest)=>(latest._id==_id));
  }, [latestNews,_id]);


 if (!InfoLatest) {
   return (
     <section className="min-h-screen flex items-center justify-center">
       <p className="text-gray-500">Loading...</p>
     </section>
   );
 }

  return (
    <section className="min-h-screen w-full bg-white">
      <div className="mx-auto w-full lg:px-12 lg:py-8 px-6 py-4 flex gap-6 min-h-screen  flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className=" w-full lg:h-2/3 overflow-hidden">
            <AdvancedImage
              cldImg={cld.image(InfoLatest[0].img)}
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-6 py-8  pr-2 lg:px-10 lg:py-12 flex flex-col justify-center">
          <div className="space-y-4">
            <p className="text-xl hover:underline font-bold leading-tight lg:text-4xl">
              {InfoLatest[0].title}
            </p>
            <p className="text-sm leading-relaxed text-gray-600 lg:text-base">
              {InfoLatest[0].desc}
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-primary bg-surface p-5">
            <p className="text-xl font-semibold text-text-muted">Infos clés</p>

            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <p className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-gray-900" />
                {InfoLatest[0].info1}
              </p>
              <p className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-gray-900" />
                {InfoLatest[0].info2}
              </p>
              <p className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-gray-900" />
                {InfoLatest[0].info3}
              </p>
              <p className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-gray-900" />
                {InfoLatest[0].info4}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

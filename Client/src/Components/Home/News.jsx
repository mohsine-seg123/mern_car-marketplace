import { UseCars } from "../../Context/ContextProvider";
import { NavLink} from "react-router-dom";
import { AdvancedImage } from "@cloudinary/react";
import { cld } from "../../lib/cloudinary";

export default function News({bottomRef}) {
  
  const { News_Review_Data: latestNews } = UseCars();

  return (
    <section
      ref={bottomRef}
      className="w-full mt-0 min-h-[300px] mx-auto px-6 py-4 lg:px-12 lg:py-8"
    >
      <div className="flex items-end justify-between gap-6 mb-3 lg:mb-10">
        <div>
          <h2 className="text-2xl lg:text-3xl mb-4 font-extrabold text-text">
            Latest News & Reviews
          </h2>
          <p className="text-text-muted mt-2">
            Stay updated with the newest models, launches and expert reviews.
          </p>
        </div>

        <button className="text-primary font-semibold hover:underline">
          View all →
        </button>
      </div>

      {latestNews.length===0 ? (
        <div className="flex h-[60vh] w-full items-center justify-center">
          <div className="h-[60px] w-[60px] animate-spin rounded-full border-[6px] border-[#ddd] border-t-primary" />
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {latestNews.slice(0, 6).map((item) => (
            <article
              key={item.id}
              className="bg-surface border border-primary hover:cursor-pointer  rounded-xl overflow-hidden  hover:shadow-sm hover:-translate-y-1 transition-all duration-150"
            >
              <div className="relative h-48">
                <AdvancedImage
                  cldImg={cld.image(item.img)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <span className="absolute top-4 left-4 bg-white/80 backdrop-blur px-4 py-1 rounded-full text-sm font-semibold">
                  {item.category}
                </span>
              </div>

              <div className="p-6">
                <NavLink
                  onClick={() => window.scroll(0, 0)}
                  to={`Reviews_cars/${item._id}`}
                  className="text-lg font-extrabold hover:underline hover:cursor-pointer transition-all duration-100 text-text leading-snug"
                >
                  {item.title}
                </NavLink>

                <p className="text-text-muted line-clamp-2 mt-3 text-sm leading-relaxed">
                  {item.desc}
                </p>

                <div className="flex justify-between items-center mt-6 text-sm text-muted">
                  <span>{item.date}</span>
                  <span>{item.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}


import { useParams, Link, useNavigate } from "react-router-dom";
import { UseCars } from "../Context/ContextProvider";
import { useMemo, useState } from "react";
import { cld } from "../lib/cloudinary";
import { AdvancedImage } from "@cloudinary/react";
import { postContact } from "../services/serviceContact";
import { toast } from "react-hot-toast";


export default function Contactseller() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { cars: cars } = UseCars();

  const car = useMemo(() => {
    const numericId = Number(id);
    return cars?.find((c) => c.id === numericId);
  }, [cars, id]);

  console.log(car);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit =(e) => {
    e.preventDefault();
      try{
           postContact({ ...form, carId: car.id });
         toast.success("Successfully sent message !", {
          duration: 2000,
          position: "top-center",
          style: {
            border: "1px solid #10B981",
            padding: "16px",
            color: "#065F46",
            borderRadius: "10px",
            background: "#ECFDF5",
          },
        });
       
        // On attend que le toast soit visible avant de naviguer
        setTimeout(() => {
          navigate("/");
          window.scrollTo(0,0);
          setForm({ fullName: "", email: "", phone: "", message: "" });
        }, 1500);
      }catch(err){
        toast.error("Failed to send message. Please try again later.", {
          duration: 4000,
          position: "top-center",
        });
      }
  };

  
  if (!cars || cars.length === 0) {
    return (
      <section className="min-h-[60vh] grid place-items-center bg-bg-main">
        <p className="text-text-muted">Loading car details...</p>
      </section>
    );
  }


  if (!car) {
    return (
      <section className="min-h-[60vh] grid place-items-center bg-bg-main px-4">
        <div className="rounded-2xl border border-border-custom bg-surface p-6 text-center">
          <p className="text-text font-semibold">Car not found</p>
          <p className="mt-1 text-sm text-text-muted">
            The car you’re looking for doesn’t exist.
          </p>
          <Link
            to="/"
            className="mt-4 inline-flex rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-hover"
          >
            Back to Home
          </Link>
        </div>
      </section>
    );
  }


  return (
    <section className="bg-bg-main">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-text sm:text-2xl">
              Contact Seller
            </h1>
            <p className="mt-1 text-sm text-text-muted">
              Ask about availability, price, documents, or a test drive.
            </p>
          </div>

          <Link
            to="/"
            className="text-sm font-medium text-primary hover:underline"
          >
            ← Back
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border flex flex-col gap-16 border-primary bg-surface p-4 shadow-sm sm:p-6">
            <div className="overflow-hidden rounded-2xl border border-blue-500 bg-bg-main">
                <AdvancedImage
                  cldImg={cld.image(car.images[0].src)}
                  className="h-[240px] w-full object-cover sm:h-[340px]"
                />
            </div>

            <div className="flex  flex-col items-center justify-between flex- gap-3">
              <div>
                <p className="text-xl font-semibold text-text">{car.title}</p>
              </div>
              <div className="rounded-xl px-8 bg-primary  py-2 text-xl font-semibold text-white">
                {car.price}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-primary bg-surface p-4 shadow-sm sm:p-6">
            <h2 className="text-lg font-semibold text-text">Send a message</h2>
            <p className="mt-2 text-sm text-text-muted">
              The seller will contact you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-text">
                    Full name
                  </label>
                  <input
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-xl border border-primary bg-white px-3 py-2 text-sm text-text outline-none transition focus:border-primary"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-text">Email</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    type="email"
                    className="mt-2 w-full rounded-xl border border-primary bg-white px-3 py-2 text-sm text-text outline-none transition focus:border-primary"
                    placeholder="you@email.com"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-text">Phone</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-primary bg-white px-3 py-2 text-sm text-text outline-none transition focus:border-primary"
                    placeholder="+212 ..."
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-text">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="mt-2 w-full resize-none rounded-xl border border-primary bg-white px-3 py-2 text-sm text-text outline-none transition focus:border-primary"
                  placeholder={`Hi, I'm interested in ${car.title}. Is it still available?`}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
              >
                Send message
              </button>

              <p className="text-xs text-muted">
                Tip: Ask about mileage, documents, warranty, and a test drive.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

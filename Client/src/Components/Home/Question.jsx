import { useState } from "react";

export default function Question() {
  const faqData = [
    {
      id: 1,
      question: "How can I list my car for sale?",
      answer:
        "Go to the 'Sell Your Car' page, fill in the car details (brand, model, year, mileage, price), upload photos, and click 'Publish Listing'. Your car will appear instantly in the marketplace.",
    },
    {
      id: 2,
      question: "How do I contact a seller?",
      answer:
        "Open the car details page and use the 'Contact Seller' button. You can send a message directly, call, or use WhatsApp if available.",
    },
    {
      id: 3,
      question: "How do I search and filter cars?",
      answer:
        "Use the search bar and filters on the Vehicles page. You can filter by brand, price, year, mileage, fuel type, city, and more.",
    },
    {
      id: 4,
      question: "How are cars verified?",
      answer:
        "We verify key details like price, model, and seller identity whenever possible. Some listings may also include verified inspection reports to increase buyer trust.",
    },
  ];

  const [openId, setOpenId] = useState(null);

  function toggleAnswer(id) {
    setOpenId((current) => (current === id ? null : id));
  }

  return (
    <section className="w-full  mx-auto px-6 lg:px-12 py-4  py-8 flex flex-col gap-6">
      <h2 className="text-3xl ml-6 font-extrabold text-text">FAQ</h2>
      <div className="flex flex-col gap-4">
        {faqData.map((item) => (
          <div
            key={item.id}
            className="bg-surface border border-border-custom rounded-2xl p-3 shadow-sm hover:bg-surface-hover transition"
          >
            <button
              onClick={() => toggleAnswer(item.id)}
              className="w-full flex items-center justify-between text-left"
            >
              <span className="font-bold text-text text-lg">
                {item.question}
              </span>

              <img
                src="/src/assets/down-arrow.png"
                alt="toggle"
                className={`w-5 h-5 transition-transform duration-300 ${
                  openId === item.id ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openId === item.id
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0 mt-0"
              }`}
            >
              <div className="overflow-hidden text-text-muted leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

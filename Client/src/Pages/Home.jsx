import React, { useRef } from "react";
import Brands from "../Components/Home/Brands";
import Hero from "../Components/Home/Hero";
import Question from "../Components/Home/Question";
import News from "../Components/Home/News";
import Leaflet from "../Components/Home/Leaflet";
import Famous_Cars from "../Components/Home/Famous_Cars";
import About from "../Components/Home/About";
import Footer from "../Components/layaut/Footer";

export default function Home() {
  const bottomRef = useRef(null);

  return (
    <>
      <Hero bottomRef={bottomRef} />
      <About />
      <News bottomRef={bottomRef} />
      <Leaflet />
      <Question />
      <Famous_Cars />
      <Brands />
      <Footer />
    </>
  );
}

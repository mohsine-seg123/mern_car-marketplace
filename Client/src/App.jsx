import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ErreurPage from "./Pages/ErreurPage";
import DetailleNews from "./Pages/DetailleNews";
import Layaut from "./Pages/Layaut";
import NewsCars from "./Pages/NewsCars";
import Dacia from "./Pages/Dacia";
import DetailleCar from "./Pages/DetailleCar";
import ElectriqueCars from "./Pages/ElectriqueCars";
import Contactseller from "./Pages/Contactseller";
import Login from "./Pages/authentification/Login";
import Register from "./Pages/authentification/Register";
import { Toaster } from "react-hot-toast";


export default function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layaut />}>
          <Route index element={<Home />} />
          <Route path="Reviews_cars/:_id" element={<DetailleNews />} />
          <Route path="*" element={<ErreurPage />} />
          <Route path="electric" element={<ElectriqueCars />} />
          <Route path="newsCars" element={<NewsCars />} />
          <Route path="newsCars/:id" element={<DetailleCar />} />
          <Route path="dacia" element={<Dacia />} />
          <Route path="Contactseller/:id" element={<Contactseller />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbare from "./Components/layaut/Navbare";
// import Home from "./Pages/Home"
// import ErreurPage from "./Pages/ErreurPage";
// import DetailleNews from "./Pages/DetailleNews";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Navbare />
//       <Routes>
//         <Route index element={<Home />} />
//         <Route path="/" element={<Home />} />
//         <Route path=":tesla" element={<DetailleNews />} />
//         <Route path="*" element={<ErreurPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

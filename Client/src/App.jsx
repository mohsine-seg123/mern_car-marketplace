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
import {useEffect, useState } from "react";


export default function App() {
  const [connecter, setConnecter] = useState(false);
  const [user, setuser] = useState("");

  useEffect(()=>{
     (async ()=>{
      try{
            const res=await api.get('/users/me');
            console.log(res);
             setConnecter(true);
            setuser(res.data.data.user.name);
      }  catch(err){
        setConnecter(false);
        setuser(null);
      }   
     })()
  },[]);

  
  return (
    <BrowserRouter>
      <Toaster />
        <Routes>
        <Route path="/" element={<Layaut connecter={connecter} username={user} />}>
          <Route index element={<Home />} />
          <Route path="Reviews_cars/:_id" element={<DetailleNews />} />
          <Route path="electric" element={<ElectriqueCars />} />
          <Route path="newsCars" element={<NewsCars />} />
          <Route path="newsCars/:id" element={<DetailleCar />} />
          <Route path="dacia" element={<Dacia />} />
          <Route path="Contactseller/:id" element={<Contactseller />} />
          <Route path="login" element={<Login setConnecter={setConnecter} setuser={setuser} />} />
          <Route path="register" element={<Register setConnecter={setConnecter} setuser={setuser} />} />
        </Route>
           <Route path="*" element={<ErreurPage />} />
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

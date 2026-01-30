import { Outlet} from "react-router-dom";
import Navbare from "../Components/layaut/Navbare";



export default function Layaut(){

    return (
      <>
         <Navbare />
         <Outlet />
      </>
    );
}
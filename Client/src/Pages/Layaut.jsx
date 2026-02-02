import { Outlet} from "react-router-dom";
import Navbare from "../Components/layaut/Navbare";



export default function Layaut({connecter,username}) {

    return (
      <>
         <Navbare connecter={connecter} username={username} />
         <Outlet />
      </>
    );
}

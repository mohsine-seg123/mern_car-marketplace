import { Outlet} from "react-router-dom";
import Navbare from "../Components/layaut/Navbare";



export default function Layaut({connecter,username,setconnecter,setuser}) {

    return (
      <>
         <Navbare connecter={connecter} username={username} setConnecter={setconnecter} setuser={setuser} />
         <Outlet />
      </>
    );
}

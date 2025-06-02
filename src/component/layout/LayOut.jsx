import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const LayOut = () => {
    return (  
        <>
       
        <div>
             <Navbar/>
        </div>
       <div>
         <Outlet/>
       </div>
    
        
        
        </>
    );
}
 
export default LayOut;
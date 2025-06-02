import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import LayOut from "./component/layout/LayOut";
import About from "./component/About/About";
import Portfolio from "./component/portfolio/Portfolio";
import Contact from "./component/contact/Contact";


        

const App = () => {

   let router = createBrowserRouter([
    {path:"" , element:<LayOut/> , children:[
      {path:"" , element:<Home/>} ,
      {path:"about" , element:<About/>} ,
      {path:"portfolio" , element:<Portfolio/>} ,
      {path:"contact" , element:<Contact/>}
    ]}
   ])
  return ( 
 
    <>
   <RouterProvider router={router} />
   

    
    </>
   );
}
 
export default App;
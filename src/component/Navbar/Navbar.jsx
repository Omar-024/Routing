import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <>
         <nav className=" fixed left-0 right-0 top-0 z-50 py-4 border-gray-200 bg-[#2C3E50] text-white">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    
                    <span className=" text-white font-bold font-sans self-center text-2xl  uppercase  whitespace-nowrap dark:text-white">start framework</span>
                    </a>
                    <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                    <ul className=" text-white flex flex-col font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                        <li>
                        <NavLink to="about" className="block py-2 px-3 md:p-0 text-white" aria-current="page">About</NavLink>
                        </li>
                        <li>
                        <NavLink to="portfolio" className="block py-2 px-3 md:p-0 text-white" aria-current="page">Portfolio</NavLink>
                        </li>
                        <li>
                        <NavLink to="contact" className="block py-2 px-3 md:p-0 text-white" aria-current="page">Contact</NavLink>
                        </li>
                        
                     
                    </ul>
                    </div>
                </div>
         </nav>


                                                 

        </>
     );
}
 
export default Navbar;
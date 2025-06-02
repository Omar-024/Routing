

import logoHome from '../../assets/avataaars.svg'

const Home = () => {
    return ( 
        <>
          <section className="font-sans h-screen bg-[#1ABC9C]  flex  justify-center items-center">
                   <div className="text-center mx-auto">
                     <img src={logoHome} className=" text-center mx-auto w-[60%]" alt="" />
                     <h2 className="text-4xl text-white uppercase mt-4 font-bold ">start Framework</h2>
                      <div className="flex items-center justify-center gap-4 mt-2">
                        <span className="block h-[4px] w-16 bg-white"></span>
                        <span className="text-white text-[32px]">★</span>
                        <span className="block h-[4px] w-16 bg-white"></span>
                      </div>
                      <p className="text-white">  Graphic Artist - Web Designer - Illustrator</p>
        
                   </div>
          </section>
        
        </>
     );
}
 
export default Home;
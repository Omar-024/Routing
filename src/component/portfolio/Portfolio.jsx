import { useState } from 'react'
import img1 from '../../assets/portfolio/poert1.png'
import img2 from '../../assets/portfolio/port2.png'
import img3 from '../../assets/portfolio/port3.png'

const Portfolio = () => {

    const [isOpen, setisOpen] = useState(false)
    const [slectedImage, setslectedImage] = useState(null)


    const handelImage=(e)=>{
      let imageSrc =  e.target.src;
      setslectedImage(imageSrc)
      setisOpen(true)
     
    }
    const close = ()=>{
           setslectedImage(null)
      setisOpen(false)
    }

    return ( 
        <>
           <section className="font-sans pt-12 bg-white   ">
                <div className="text-center mx-auto pt-10 text-[#2C3E50]">

                    <h2 className="text-4xl  uppercase pt-12 font-bold ">portfolio component</h2>
                    <div className="flex items-center justify-center gap-4 mt-2">
                        <span className="block h-[4px] w-16 bg-[#2C3E50]"></span>
                        <span className=" text-[32px]">★</span>
                        <span className="block h-[4px] w-16 bg-[#2C3E50] "></span>
                    </div>

                  
                   
                   

                </div>

                  <div className="container mx-auto xl:px-24">
                        <div className=" grid gap-5 lg:grid-cols-3 md:grid-cols-2 ">
                         <div className='  cursor-pointer relative group'>
                           <img onClick={handelImage} src={img1} className=' w-full' alt="" />
                           <div className="layer absolute inset-0 opacity-0 bg-[linear-gradient(rgba(26,186,159,0.7)_0%_100%),url(../src/assets/portfolio/download.svg)] bg-cover bg-center group-hover:opacity-100 duration-[0.5s] transition-all pointer-events-none">

                           </div>
                         </div>
                         <div  className=' cursor-pointer relative group'>
                           <img onClick={handelImage}  src={img2} className=' w-full' alt="" />
                           <div className="layer absolute inset-0 opacity-0 bg-[linear-gradient(rgba(26,186,159,0.7)_0%_100%),url(../src/assets/portfolio/download.svg)] bg-cover bg-center group-hover:opacity-100 duration-[0.5s] transition-all pointer-events-none">

                           </div>
                         </div>
                         <div  className=' cursor-pointer relative group'>
                           <img onClick={handelImage} src={img3} className=' w-full' alt="" />
                           <div className="layer absolute inset-0 opacity-0 bg-[linear-gradient(rgba(26,186,159,0.7)_0%_100%),url(../src/assets/portfolio/download.svg)] bg-cover bg-center group-hover:opacity-100 duration-[0.5s] transition-all pointer-events-none">

                           </div>
                         </div>
                         <div  className=' cursor-pointer relative group'>
                           <img onClick={handelImage} src={img1} className=' w-full' alt="" />
                           <div className="layer absolute inset-0 opacity-0 bg-[linear-gradient(rgba(26,186,159,0.7)_0%_100%),url(../src/assets/portfolio/download.svg)] bg-cover bg-center group-hover:opacity-100 duration-[0.5s] transition-all pointer-events-none">

                           </div>
                         </div>
                         <div  className=' cursor-pointer relative group'>
                           <img onClick={handelImage} src={img2} className=' w-full' alt="" />
                           <div className="layer absolute inset-0 opacity-0 bg-[linear-gradient(rgba(26,186,159,0.7)_0%_100%),url(../src/assets/portfolio/download.svg)] bg-cover bg-center group-hover:opacity-100 duration-[0.5s] transition-all pointer-events-none">

                           </div>
                         </div>
                         <div  className=' cursor-pointer relative group'>
                           <img onClick={handelImage} src={img3} className=' w-full' alt="" />
                           <div className="layer absolute inset-0 opacity-0 bg-[linear-gradient(rgba(26,186,159,0.7)_0%_100%),url(../src/assets/portfolio/download.svg)] bg-cover bg-center group-hover:opacity-100 duration-[0.5s] transition-all pointer-events-none">

                           </div>
                         </div>
                         
                        </div>
                 </div>

                 
            </section>

            { slectedImage && isOpen ? (
                <div onClick={close} className=' slider fixed inset-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]'>
            <div onClick={(e)=>e.stopPropagation()} className='slider-item relative  h-[70vh] w-1/2 bg-cover bg-center'  style={{backgroundImage:`url(${slectedImage}) `}} >
                    
               
            </div>

         </div> 
            ):null}


          



  
        </>
     );
}
 
export default Portfolio;
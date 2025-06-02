const About = () => {
    return (
        <>
            <section className="font-sans h-screen bg-[#1ABC9C]  flex  justify-center items-center">
                <div className="text-center mx-auto">

                    <h2 className="text-4xl text-white uppercase mt-4 font-bold ">about component</h2>
                    <div className="flex items-center justify-center gap-4 mt-2">
                        <span className="block h-[4px] w-16 bg-white"></span>
                        <span className="text-white text-[32px]">★</span>
                        <span className="block h-[4px] w-16 bg-white"></span>
                    </div>

                   <div className=" container mx-auto flex justify-center gap-5 ">
                     <div className="xl:w-1/4 md:w-1/2 sm: w-full">
                        <p className=" leading-normal text-white text-start ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nulla soluta maiores ullam corrupti praesentium.</p>
                    </div>
                    <div  className="xl:w-1/4 md:w-1/2 sm: w-full">
                        <p className=" leading-normal text-white text-start ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nulla soluta maiores ullam corrupti praesentium.</p>
                    </div>
                   </div>

                </div>
            </section>

        </>
    );
}

export default About;
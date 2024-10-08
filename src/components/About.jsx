import { Link } from "react-router-dom"

const About = () => {
    return (
        <div className="w-[100vw] h-screen bg-[#075985] overflow-clip font-roboto">
            <div className="w-[100%] h-[50%] translate-y-[-11%]  rounded-bl-[50vw] bg-[#d9d9d9] flex flex-col justify-between">
                <div className="w-[100%] h-[45%]  flex items-center justify-end lg:pr-32 pr-10 pt-24">
                    <Link to='/' className="p-3 bg-[#d9d9d9] rounded-md border-2 border-black">
                        <button>Back To Home</button>
                    </Link>
                </div>
                <div className="w-[100%] h-[45%] flex items-end justify-center">
                    <h1 className="text-center mt-12 mb-12 pb-5 font-roboto text-[32px] font-extrabold text-[#075985] underline-offset-4 underline">
                        About Us
                    </h1>
                </div>

            </div>
            <div className="w-[100%] min-h-[50%] flex flex-col justify-between *:*:text-center">
                <div className="w-[100%] h-[45%]  flex justify-center">
                    <p className="w-[70%] text-center text-[22px] text-white">We specialize in providing unforgettable experiences in Ethiopia, from breathtaking landscapes to rich cultural heritage.</p>
                </div>
                <div className="w-[100%] h-[45%] flex items-start justify-evenly *:gap-3">

                    <div className="lg:w-[10%] w-[20%] *:w-[100%] flex flex-col items-center justify-between ">
                        <p className="pt-3 pb-3  bg-white text-[#075985] rounded-lg text-center text-[20px] font-bold">100+</p>
                        <p className="text-white text-[18px] font-bold">Tour Travels</p>
                    </div>
                    <div className="lg:w-[10%] w-[20%] *:w-[100%]  flex flex-col items-center justify-between">
                        <p className="pt-3 pb-3  bg-white text-[#075985] rounded-lg text-center text-[20px] font-bold">500+</p>
                        <p className="text-white text-[18px] font-bold">Tour Sites</p>
                        
                    </div>
                    <div className="lg:w-[10%] w-[20%] *:w-[100%]  flex flex-col items-center justify-between">
                        <p className="pt-3 pb-3  bg-white text-[#075985] rounded-lg text-center text-[20px] font-bold">3500+</p>
                        <p className="text-white text-[18px] font-bold">Total Clients</p>
                        
                    </div>
                </div>

            </div>
        </div>
    )

}

export default About
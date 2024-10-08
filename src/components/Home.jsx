import { useState } from "react";
import { useEffect } from "react";
import data from "../assets/data.json"
import { Link } from "react-router-dom";

const Home = () => {
    console.log(data);
    const description = data.map((item, index) => <Description key={index} desc={item.desc} image={item.image} side={index % 2 ? 'right' : 'left'} />)
    return (
        <div className="w-[99vw] min-h-[100vh] bg-[#d9d9d9] gap-10">
            <NavBar />
            <h1 className="text-center mt-12 mb-12 pb-5 font-roboto text-[32px] font-extrabold text-[#075985] ">
                Explore Ethiopia
                </h1>
            <div className=" w-[100%] flex flex-col gap-16">
                {description}
            </div>
            <div className="w-[100%] flex justify-center">
                <Link to='/about'>
                    <button
                        className="p-3 pr-10 pl-10  mt-10 mb-16 self-center font-roboto bg-[#075985] text-white"
                    >
                        Learn More...
                    </button>
                </Link>
            </div>
            
        </div>)
}

const NavBar = () => {
    return (
        <div className="w-[100%] h-24 p-4 flex justify-between border-b-[#075985] border-b-[2px]">
            <div>
                <img src="/logo2.webp" alt="company logo" className="w-[120%] h-[120%] radius-[50%] rounded-[50%]" />
            </div>
            <div className="w-[35%] flex items-center justify-evenly  pt-[-5px] *:font-roboto">
                <a href="#"> Contact us</a>
                <a href="#"> Services</a>
            </div>
        </div>
    )
}

const Description = ({ desc, image, side }) => {
    return <div
        className={`flex ${side == 'left' ? "justify-start" : "flex-row-reverse"} items-center w-[100%] h-64 gap-36 *:shadow-md`}>
        <div className={`w-[50%] p-5 h-[100%] flex justify-center items-center font-roboto text-[20px] text-white bg-[#075985] ${side == 'left' ? "rounded-r-xl" : "rounded-l-xl"}`}>
            <p>{desc}</p>
        </div>
        <img className='h-[100%] rounded-xl' src={image} alt="axum image" width='450px'/>
    </div>
}

export default Home
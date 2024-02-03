import React from "react";
import NavBar from "./components/navBar";
import landingPageImage from '../src/images/landing-page-image.png'
import WhatWeOffer from './components/whatWeOffer'
import LandingPageImage2 from '../src/images/ladingimg2.png'
import { FaPeopleRoof } from "react-icons/fa6";
import { RiUserFollowLine } from "react-icons/ri";



const HomePage = () => {

    const BookButton = () => {
        return(
            <button 
            type="submit"
            className="text-[#FFFF] bg-primary right-2 py-2 px-4 rounded-lg text-md mr-6">
            Book now
            </button>
        );
    }
    
    
    return (
        <div className="w-full">
            <NavBar />
            <div className="mt-2">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg-grid-cols-2">
                    <div className="md:col-span-1 m-10 pl-10">
                        <h1 className="font-bold text-primary text-5xl">Care for your Pets</h1>
                        <h3 className="text-1xl pt-6 pb-10">
                        Your to-go pet care, shop, adopt and <br>
                        </br>we will serve the best we can
                         </h3>

                    <BookButton/>

                    </div>
                    
                    <div className="md:col-span-1 ">
                        <img src={landingPageImage} alt="Landing Image" className=""></img>
                    </div>

                </div>

                <WhatWeOffer/>

                <div className="mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        <div className="md:col-span-1 flex justify-center items-center">
                            <img src={LandingPageImage2}></img>
                        </div>
                            <div className="md:col-span-1 ">
                                <h1 className="font-bold text-primary text-5xl flex justify-center items-center">Why choose us?</h1>
                                <h3 className="text-1xl p-10 ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat sagittis sapien.
                                 Nullam tincidunt auctor  mauris non molestie. Orci varius natoque penatibus et magnisquis malesuada mauris
                                 dis parturient montes, nascetur  ridiculus mus. Praesent quis enim odio. Aliquam vitae vehicula eros
                            
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-2 gap-4">
                                    <div className="md:col-span-1 flex  justify-center items-center ">
                                        <div className="h-50 w-[350px] p-4 bg-primary flex rounded-md justify-center items-center">
                                            <FaPeopleRoof size={50} style={{color: "white"}}/>
                                            <h2 className="pl-10 font-bold text-[#FFFF] ">100+ Staff and employee</h2>
                                        
                                        </div>

                                    </div>
                                    <div className="md:col-span-1 flex justify-center items-center ">
                                        <div className="h-50 w-[350px] p-4 bg-primary flex rounded-md justify-center items-center">
                                            <RiUserFollowLine size={50} style={{color: "white"}}/>
                                            <h2 className="pl-10 font-bold text-[#FFFF] ">10k Subscriber</h2>
                                        
                                        </div>
                                    </div>
                                    

                                   

                                </div>
                            </div>  

                    </div>

                </div>

               
            </div>
          
        </div>
    );
};

export default HomePage;
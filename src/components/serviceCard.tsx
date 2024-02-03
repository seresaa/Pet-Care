import React from "react";
import Adopt from '../images/adopt.png'
import Shop from '../images/shop.png'
import Vet from '../images/vet.png'

interface ServiceCardProps{
    imgSrc: string;
    title: string;
    description: string;
}

    export default function ServiceCard ({imgSrc, title, description}: ServiceCardProps){
        return(
            <div className="flex flex-col p-6 justify-center items-center bg-[#F4F4F4] shadow-md rounded-md hover:bg-secondary">
                <img src={imgSrc} alt={title}
                className=""
                >
                </img>
                <h2 className="font-bold text-primary ">{title}</h2>
                <h3 className="text-1xl p-5">
                {description}<br>
                    
                    </br>
                </h3>
        </div>
        )
   
}
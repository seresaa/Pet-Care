import React from "react";
import Adopt from '../images/adopt.png'
import Shop from '../images/shop.png'
import Vet from '../images/vet.png'
import ServiceCard from "./serviceCard";


const WhatWeOffer = () => {
    return (
        <div className="flex flex-col items-center justify-center">
        <div>
            <h2 className="font-bold text-primary text-2xl mt-10">What we offer</h2>
        </div>
        
        <h3 className="text-1xl p-5">
            These are the available services of Koomi pet care
        </h3>
    
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 p-6 gap-6">
           <ServiceCard 
           imgSrc={Vet} 
           title={"Vet Clinic"} 
           description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in enim eu dolor hendrerit porta non at lacus. Duis sed odio id magna cursus congue. Sed vel volutpat mi, sit amet condimentum urna. Quisque molestie libero tristique, commodo felis sed, placerat neque. Aliquam at sagittis sapien."}> 
           </ServiceCard>
           
           <ServiceCard 
           imgSrc={Adopt} 
           title={"Adoption"} 
           description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in enim eu dolor hendrerit porta non at lacus. Duis sed odio id magna cursus congue. Sed vel volutpat mi, sit amet condimentum urna. Quisque molestie libero tristique, commodo felis sed, placerat neque. Aliquam at sagittis sapien."}> 
           </ServiceCard>

           <ServiceCard 
           imgSrc={Shop} 
           title={"Shop"} 
           description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in enim eu dolor hendrerit porta non at lacus. Duis sed odio id magna cursus congue. Sed vel volutpat mi, sit amet condimentum urna. Quisque molestie libero tristique, commodo felis sed, placerat neque. Aliquam at sagittis sapien."}> 
           </ServiceCard>

            
        </div>
    </div>
    
    );
}

export default WhatWeOffer;
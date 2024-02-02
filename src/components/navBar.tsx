import React from "react";
import PetCareLogo from '../images/koomi-logo.png';

const NavBar = () => {

    const navLinks = [
        {href: "#HomePage", label: "Home"},
        {href: "#Services", label: "Services"},
        {href: "#Adopt", label: "Adop"},
        {href: "#Shop", label: "Shop"},
        {href: "#ContactUs", label: "Contact Us"},
    ]
    return (
        <div className="sm:px-8 px-4 py-2 z-10 w-full">
        <nav className="flex flex-col justify-between items-center max-container">
            <div className="">
                <img
                        src={PetCareLogo}
                        alt="Koomi pet care logo"
                        className="h-16 w-16"
                        style={{ cursor: 'pointer' }}
                        />
                </div>
                
                <div className="flex flex-1 flex-col">
                    <div className="flex justify-center items-center gap-16 max-lg:hidden">
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className="font-montserrat leading-normal text-lg text-slate-gray"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </div>
                </div>
               
            </nav>

        </div>
      
    );
};

export default NavBar;  
import React from "react";
import PetCareLogo from '../images/koomi-logo.png';

const NavBar = () => {
    const navLinks = [
        { href: "#HomePage", label: "Home" },
        { href: "#Services", label: "Services" },
        { href: "#Adopt", label: "Adopt" },
        { href: "#Shop", label: "Shop" },
        { href: "#ContactUs", label: "Contact Us" },
    ];

    const LoginButton = () => {
        return(
            <button type="submit"
            className="text-[#FFFF] bg-primary right-2 py-2 px-4 rounded-lg text-md mr-6"
            >Log in
    
            </button>
        );
      
    }

    return (
        <header className="flex items-center justify-between">
            <div className="m-4">
                <img
                    src={PetCareLogo}
                    alt="Koomi pet care logo"
                    className="w-100"
                    height={150}
                    width={100}
                    style={{ cursor: 'pointer' }}
                />
            </div>
            <ul className="flex justify-center items-center text-[16px] gap-16 max-lg:hidden">
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
            </ul>

            <LoginButton/>


        </header>
    );
};

export default NavBar;

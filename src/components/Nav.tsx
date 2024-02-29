"use client"

import { useState } from "react";
import NavLink from "./NavLink";

type NavStateProps = "home" | "sobre" | "categorias" | "contato";

const Nav = () => {
    const [ currentNav, setCurrentNav ] = useState<NavStateProps>("home");

    return (
        <nav className="h-11 hidden lg:flex items-center ">
            <ul className="flex gap-6 font-medium text-white items-center justify-center">
                <li>
                    <NavLink onClick={() => setCurrentNav("home")} active={currentNav === "home"} href="/">Home</NavLink>
                </li>
                <li>
                    <NavLink onClick={() => setCurrentNav("sobre")} active={currentNav === "sobre"} href="#about">Sobre</NavLink>
                </li>
                <li>
                    <NavLink onClick={() => setCurrentNav("categorias")} active={currentNav === "categorias"} href="#categories">Categorias</NavLink>
                </li>
                <li>
                    <NavLink onClick={() => setCurrentNav("contato")} active={currentNav === "contato"} href="#contact">Contato</NavLink>
                </li>
            </ul>
        </nav>
    );
}
 
export default Nav;
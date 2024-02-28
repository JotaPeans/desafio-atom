"use client"

import { ArrowUp } from "lucide-react";
import { white } from "tailwindcss/colors";

const BackToTop = () => {
    return (
        <a href="#" className="absolute bottom-4 bg-principal-purple/80 hover:bg-principal-purple/90 transition-all p-2 rounded-full right-4">
            <ArrowUp size={20} color={white} strokeWidth={2.5}/>
        </a>
    );
}
 
export default BackToTop;
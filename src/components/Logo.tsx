"use client"

import { useRef } from "react";
import Arrow from "./icons/Arrow";

const Logo = () => {
    // Transforma a string em um array para torná-lo iterável para cada letra;
    const letters = Array.from("The Blog.");

    const colors = [ "#998FC7", "#D4C2FC", "#F9F9F9", "#FF3E41", "#92AD94", "#F8C630", "#0E4749"];

    const lettersRef = useRef<HTMLSpanElement[]>([]);

    // Função para, quando o mouse estiver em cima de uma letra qualquer e, a partir do índice dela no array, mudar a cor
    function randomizeColors(index: number) {
        const colorIndex = Math.floor(Math.random() * 7);
        lettersRef.current[index].style.color = colors[colorIndex];
    }

    return (
        <div className="relative ">
            <div className="hidden absolute w-32 h-12 left-36 -top-12 lg:flex items-center gap-2 -rotate-12">
                <Arrow className="rotate-90 fill-white/30 h-3/4"/>
                <p aria-label="hover logo" className="font-semibold text-white/30 text-xs -translate-y-2">Hover me!</p>
            </div>
            
            <a href="/" id="logo" className="tracking-wider font-bold text-4xl select-none text-white flex max-w-fit">

                {
                    letters.map((letter, key) => (
                        <span
                            ref={el => el ? lettersRef.current[key] = el : null}
                            data-string={letter}
                            key={key}
                            onMouseEnter={() => randomizeColors(key)}
                            className="data-[string='.']:text-green-500 hover:-translate-y-2 transition-all"
                        >
                            { letter !== " " ? letter : "\u00A0" }
                        </span>
                        // "\u00A0" é utilizado para adicionar um espaço em branco.
                    ))
                }
            </a>
        </div>
    );
}
 
export default Logo;
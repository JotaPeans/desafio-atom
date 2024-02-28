"use client"

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { white } from "tailwindcss/colors";

const BackToTop = () => {
    const [ show, setShow ] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            // A expressão verifica se a soma da quantidade de pixels que o documento foi rolado verticalmente (window.scrollY) com a altura da área de visualização da janela (window.innerHeight) é maior ou igual à altura total do conteúdo do corpo do documento (document.body.offsetHeight) - 50 pixels. Com isso, ativa o botão de voltar ao topo e, caso contrário, desativa.
            if(window.scrollY + window.innerHeight >= document.body.offsetHeight - 50) setShow(true);
            else setShow(false);
        });
    }, []);

    return (
        <a href="#" data-show={show} className="fixed data-[show=false]:opacity-0 data-[show=true]:opacity-1 bottom-4 bg-principal-purple/80 hover:bg-principal-purple/90 transition-all p-2 rounded-full right-4">
            <ArrowUp size={20} color={white} strokeWidth={2.5}/>
        </a>
    );
}
 
export default BackToTop;
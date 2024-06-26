"use client"

import { cn } from "@/utils/functions";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { X } from "lucide-react";

interface ModalProps {
    children?: ReactNode
    triggerText: string | ReactElement
    classNames?: {
        root?: string
        content?: string
        trigger?: string
        close?: string
    }
    onOpenChange?: () => void
}

const Modal = ({ children, triggerText, classNames, onOpenChange }: ModalProps) => {
    // armazena o estado do modal
    const [ show, setShow ] = useState(false);

    useEffect(() => {
        // esconde todos os elementos da tela para desabilitar o scroll da página enquanto o modal estiver aberto.
        if(show) {
            document.getElementsByTagName("html")[0]?.classList.add("overflow-hidden");
        }
        else {
            document.getElementsByTagName("html")[0]?.classList.remove("overflow-hidden");
        }

        // chama, se existir, algum callback quando o estado do modal muda.
        onOpenChange && onOpenChange();
    }, [show]);

    return (
        <>
            <div
                data-show={show}
                className={cn("group/modal fixed top-0 left-0 z-50 w-full min-h-screen data-[show=false]:opacity-0 data-[show=false]:pointer-events-none transition-all data-[show=true]:opacity-1 bg-black/50", classNames?.root)}
            >
                <div
                    className={cn("absolute group-data-[show=true]/modal:animate-modal left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[90%] md:w-[600px] min-h-96 h-auto bg-zinc-100 rounded-lg flex flex-col p-2 transition-all overflow-hidden", classNames?.content)}
                >
                    <button aria-label="fechar modal" className="ml-auto" onClick={() => setShow(false)}>
                        <X size={18} strokeWidth={2.8} className={cn("text-zinc-600", classNames?.close)}/>
                    </button>

                    { children }
                    
                </div>
            </div>

            <button
                onClick={() => setShow(true)}
                className={cn("px-6 py-2 font-medium rounded-xl bg-principal-purple/90 hover:bg-principal-purple/80 transition-all text-white", classNames?.trigger)}
            >
                { triggerText }
            </button>
        </>
    );
}
 
export default Modal;
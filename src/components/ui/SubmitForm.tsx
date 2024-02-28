"use client"

import { useFormStatus } from "react-dom";
import { cn } from "@/utils/functions";
import { ButtonHTMLAttributes } from "react";
import Loading from "./Loading";

interface SubmitFormProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const SubmitForm = ({ ...rest }: SubmitFormProps) => {
    const { pending } = useFormStatus();

    return (
        <button {...rest} disabled={pending} className={cn("px-6 py-2 h-10 font-medium rounded-xl disabled:opacity-60 bg-principal-purple/90 hover:bg-principal-purple/80 transition-all text-white", rest.className)}>
            {
                pending ? (
                    <Loading className="mx-auto border-white border-t-transparent"/>
                ) : (
                    rest.children
                )
            }
        </button>
    );
}
 
export default SubmitForm;
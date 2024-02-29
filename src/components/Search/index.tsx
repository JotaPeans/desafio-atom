"use client"

import Input from "@/components/ui/Input";
import Loading from "@/components/ui/Loading";

import { Search as SearchIcon } from "lucide-react";
import { white } from "tailwindcss/colors";

import searchOnDB from "./action/searchOnDB";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import SubmitForm from "../ui/SubmitForm";


const Search = () => {
    const [ error, setError ] = useState<string | null>(null);

    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        // busca, no search params, o parametro de busca "search" que contem o termo de busca imposto na página "/"
        const searchParamsTerm = searchParams.get("search");

        if(searchParamsTerm) {
            const form = new FormData();
            form.append("search", searchParamsTerm);
    
            performSearch(form);
        }
    }, []);


    async function performSearch(formData: FormData) {
        const searchTerm = formData.get("search") as string;

        if(searchTerm.trim() === "") {
            setError("Digite algo!");
            return;
        };
        
        const elements = document.querySelectorAll("p, a, h1, h2, h3");
        var finded = 0;

        elements.forEach(element => {
            // Pula o logo
            if(element.id === "logo") return;

            let innerHTML = element.innerHTML;

            // Verifica a existência de algum <svg></svg> dentro do elemento para guardar, retirar e fazer a busca
            const svgContent: string[] = [];
            innerHTML = innerHTML.replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/g, match => {
                svgContent.push(match);
                return ""; // Substituir o <svg></svg> por uma string vazia
            });
            
            // Remove os highlights antigos
            innerHTML = innerHTML.replace(/<span class="highlight">|<\/span>/g, "");
            
            // verifica se o conteúdo dentro do elemento possui o termo de busca
            if (element.innerHTML.toLowerCase().includes(searchTerm.trim().toLowerCase())) {
                // troca apenas o termo de busca achado no conteúdo do elemento por um span com uma classe highlight
                const replacedHTML = innerHTML.replace(new RegExp(searchTerm, "gi"), match => `<span class="highlight">${match}</span>`);
                
                innerHTML = replacedHTML;
                
                // faz o rolamento do scroll para o elemento que foi achado pela busca
                element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                finded++;
            }

            
            // Repõe o svg de volta ao elemento após a busca
            svgContent.forEach((svg) => {
                innerHTML += svg;
            });
            
            // atribui ao elemento html o novo texto do html
            element.innerHTML = innerHTML;
        });
        
        
        if(finded === 0) {
            // chama a server action para buscar pelo primeiro artigo que contenha o termo de busca em seu contúdo ou título e retorna o id do artigo encontrado
            const articleId = await searchOnDB(searchTerm);
            
            if(articleId) {
                // cria uma URL com o id do artigo
                const url = new URL("/article/" + articleId, window.location.origin);
                // Adiciona ao search params da url, o termo de busca
                url.searchParams.set("search", searchTerm);

                // redireciona para a url criada com o termo de busca
                router.push(url.toString())
            }
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setError(null);
        }, 5000);
    }, [error]);

    return (
        <form
            action={performSearch}
            className="relative flex items-center justify-center gap-3"
        >
            <Input type="text" name="search" placeholder="Buscar na página" />

            <SubmitForm aria-label="buscar" className="bg-principal-light-purple hover:bg-principal-light-purple/80 min-w-11 min-h-11 p-0 flex items-center justify-center">
                <SearchIcon strokeWidth={2.5} color={white}/>
            </SubmitForm>

            <div data-active={Boolean(error)} className="h-[34px] min-w-[104px] opacity-0 data-[active=true]:animate-error transition-all absolute right-1/2 translate-x-1/2 -bottom-10 bg-red-300 text-red-600 py-1.5 px-3 rounded-xl font-medium text-sm">
                <p>{ error }</p>
            </div>
        </form>
    );
}
 
export default Search;
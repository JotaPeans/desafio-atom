"use client"

import { useState } from "react";
import InView from "@/components/InView";
import Loading from "@/components/ui/Loading";
import Article from "@/components/Article";
import { Article as ArticleModel } from "@prisma/client";
import getMoreArticles from "./actions/getMoreArticles";

interface FinalSectionProps {
    data: ArticleModel[]
}

const FinalSection = ({ data }: FinalSectionProps) => {
    const [ articles, setArticles ] = useState(data);

    async function handleInView() {
        // pega o artigo na última posição do array
        const lastArticle = [...articles].pop();

        if(lastArticle) {
            const cursor = lastArticle.id;
            // Chama a server action responsável por buscar por mais artigos no banco de dados.
            const paginatedArticles = await getMoreArticles(cursor);

            // Uso do spread operator para copiar os artigos dos estado.
            let currentArticles = [ ...articles ];
            // Adiciona os artigos que foram retornados da server action aos artigos copiados do estato.
            currentArticles.push(...paginatedArticles);
            // Muda o estato dos artigos, redenzirando o componente novamente.
            setArticles(currentArticles)
        }

    }

    return (
        <section className="flex flex-col w-full">
            <div className="flex flex-wrap items-center justify-between gap-8 w-full">
                {
                    articles.map((article, key) => (
                        <Article key={key} {...article}/>
                    ))
                }
            </div>
            
            {/* Verifica se o componente de loading está em tela, se estiver, chama a função handleInView que aciona uma server action para procurar por mais artigos no banco de dados. Isso é interessante para fazer uma paginação com scroll infinito */}
            <InView callback={handleInView}>
                <Loading className="mx-auto"/>
            </InView>
        </section>
    );
}
 
export default FinalSection;
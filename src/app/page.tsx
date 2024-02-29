import BackToTop from "@/components/ui/BackToTop";
import Article from "@/components/Article";
import HeaderArticle from "@/components/HeaderArticle";
import CreateArticle from "@/components/CreateArticle";
import Logo from "@/components/Logo";
import Search from "@/components/Search";
import FinalSection from "@/components/FinalSection";
import Nav from "@/components/Nav";

import { db } from "@/utils/database";

const App = async () => {
    // pega 7 artigos do banco de dados e ordena de forma decrescente
    const articles = await db.article.findMany({
        take: 7,
        orderBy: {
            createdAt: "desc"
        }
    });

    // pega o primeiro artigo do array
    const headerArticle = articles[0];
    // pega o segundo artigo do array
    const secondArticle = articles[1];
    
    return (
        <>
            <header className="w-full px-6 lg:px-32 py-16 bg-principal-purple flex flex-col gap-16 border-b-[6px] border-b-green-500">
                <div className="relative flex w-full max-w-[1185px] mx-auto gap-10 items-center justify-center lg:justify-between bg-principal-purple">
                    <Logo/>    

                    <Nav/>

                    <Search/>
                </div>

                {/* Usando o spread operator do obejto articles para atribuir automaticamente aos atributos do componente */}
                <HeaderArticle { ...headerArticle }/>
            </header>

            <BackToTop/>

            <main className="flex-1 px-6 pt-8 py-14 lg:px-32">
                <article className="flex flex-col gap-4 w-full max-w-[1185px] mx-auto">
                    <section className="w-full flex flex-col lg:flex-row items-start justify-between lg:gap-32">
                        {/* Usando o spread operator do obejto articles para atribuir automaticamente aos atributos do componente */}
                        <Article { ...secondArticle }/>

                        <div className="flex-1 flex flex-row xl:flex-col flex-wrap xl:gap-0 divide-y-2">
                            {
                                // Seleciona, do array dos artigos, o terceiro e quarto para percorrer e retornar o componente dos artigos
                                articles.slice(2, 4).map((article, key) => (
                                    <Article key={key} {...article} className="mx-4" disableImage/>
                                ))
                            }
                        </div>
                    </section>

                    <CreateArticle/>
                    
                    {/* Seleciona, do array de artigos, do quinto ao sétimo para percorrer e retornar o componente dos artigos */}
                    <FinalSection data={articles.slice(4, 7)}/>
                </article>
            </main>
        </>
    );
}
 
export default App;
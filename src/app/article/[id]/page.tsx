import { ContentsProps } from "@/components/CreateArticle";
import Logo from "@/components/Logo";
import Nav from "@/components/Nav";
import TiltAny from "@/components/TiltAny";
import Search from "@/components/Search";
import { db } from "@/utils/database";
import { redirect } from "next/navigation";

interface ArticlePageProps {
    params: {
        id: string
    }
}

const ArticlePage = async ({ params: { id } }: ArticlePageProps) => {

    // verifica se o id inserido pode ser transformado em um inteiro para ser rastreado pelo ORM de banco de dados. Caso não seja possível transformá-lo, é redirecionado para a página principal;
    if(isNaN(parseInt(id))) redirect("/");

    const article = await db.article.findUnique({
        where: { id: parseInt(id) }
    });

    // caso o artigo não seja encontrado, é redirecionado para a página principal;
    if(!article) redirect("/");

    const articleContent: ContentsProps[]| null = article.content ? JSON.parse(article.content) : null;

    return (
        <>
            <header className="w-full px-6 lg:px-32 py-16 bg-principal-purple flex flex-col gap-16 border-b-[6px] border-b-green-500">
                <div className="relative flex w-full max-w-[1185px] mx-auto gap-10 items-center justify-center lg:justify-between bg-principal-purple">
                    <Logo/>    

                    <Nav/>

                    <Search/>
                </div>
            </header>
        
            <main className="flex-1 px-6 pt-8 py-14 lg:px-32">
                <article className="flex flex-col gap-4 w-full max-w-[1185px] mx-auto">
                    <section aria-label="presentation" className="flex flex-col gap-10 w-full">
                        {
                            article.imageUrl && (
                                <TiltAny tiltRotation={5} className="mx-auto">
                                    <div className="rounded-xl overflow-hidden">
                                        <img src={article.imageUrl} alt={article.title.substring(1, 20)} width={500} height={420} />
                                    </div>
                                </TiltAny>
                            )
                        }

                        <h1 className="text-center font-semibold text-2xl text-purple-950">{ article.title }</h1>
                        
                        <div className="prose text-justify mx-auto w-full">
                            {
                                articleContent && articleContent.map((content, key) => (
                                    <>
                                        { content.type === "p" && <p key={key}>{content.value}</p> }
                                    </>
                                ))
                            }
                        </div>
                    </section>
                </article>
            </main>
        </>
    );
}
 
export default ArticlePage;
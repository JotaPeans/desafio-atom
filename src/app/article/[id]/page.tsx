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

    return (
        <main>
            { article.title }
        </main>
    );
}
 
export default ArticlePage;
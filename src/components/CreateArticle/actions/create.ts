"use server"

import { db } from "@/utils/database";
import { revalidatePath } from "next/cache";
import getUser from "@/utils/getUser";
import { v4 } from "uuid";

export default async function CreateArticleAction(formData: FormData) {
    const userId = getUser();
    
    // pega os dados dos formulário
    const imageUrl = formData.get("image") as string;
    const title = formData.get("title") as string;
    const summary = formData.get("summary") as string;

    await db.article.create({
        data: {
            title,
            summary,
            imageUrl,
            author: userId ?? v4()
        }
    });

    // revalida o cache da pagina
    revalidatePath("/");
    
    return;
}
"use server"

import { db } from "@/utils/database";
import getUser from "@/utils/getUser";
import { revalidatePath } from "next/cache";

export default async function likeOrDislikeAction(articleId: number, action: "like" | "dislike", pathname?: string) {
    const user = getUser();

    const article = await db.article.findUnique({ where: { id: articleId } });

    if(!user || !article) return;

    var likes = article.likes;

    if(action === "like") {
        likes?.push(user);
    }
    else {
        const userLikeIndex = likes.findIndex(id => id === user);
        likes.splice(userLikeIndex, 1);
    }

    await db.article.update({
        where: { id: articleId },
        data: {
            likes: {
                set: likes
            }
        }
    });

    pathname && revalidatePath(pathname);
}
"use server"

import { db } from "@/utils/database";

export default async function searchOnDB(search: string) {
    const article = await db.article.findFirst({
        where: {
            OR: [
                {
                    title: {
                        contains: search,
                        mode: "insensitive"
                    }
                },
                {
                    content: {
                        contains: search,
                        mode: "insensitive"
                    }
                }
            ]
        }
    });

    return article?.id;
}
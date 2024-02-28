"use server"

import { db } from "@/utils/database";

export default async function getMoreArticles(cursor: number) {
    const articles = await db.article.findMany({
        skip: 1,
        cursor: {
            id: cursor
        },
        take: 6,
        orderBy: {
            createdAt: "desc"
        }
    });

    return articles;
}
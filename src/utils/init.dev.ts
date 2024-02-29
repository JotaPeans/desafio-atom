import { db } from "./database";
import { v4 } from "uuid";

import imageLinks from "@/assets/imageLinks.json";
import titles from "@/assets/titles.json";
import summaries from "@/assets/summaries.json";
import contents from "@/assets/contents.json";

// função para popular o banco de dados
async function populateDatabase() {

    for (let i = 0; i < titles.length; i++) {
        const title = titles[i];
        const imageLink = imageLinks[i];
        const summary = summaries[i];
        const content = contents[i];

        await db.article.create({
            data: {
                title: title,
                imageUrl: imageLink,
                author: v4(),
                summary: summary,
                content: JSON.stringify(content)
            }
        });
    }

    console.log("Posts adicionados com sucesso!");
}

populateDatabase();
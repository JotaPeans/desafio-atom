import { db } from "./database";
import { v4 } from "uuid";

// função para popular o banco de dados
async function populateDatabase() {
    const titles = [
        "Use essas dicas nas suas aplicações mobile",
        "Deixe seu código mais semântico com essas dicas",
        "10 dicas para conseguir a vaga desejada",
        "Veja a evolução do Front-end na prática",
        "Conheça as principais técnicas para conseguir uma vaga internacional em programação",
        "Começando no ReactJS em 2024",
        "Veja o guia definitivo para conquistar seus objetivos como DEV em 2024"
    ];

    const summaries = [
        "Recomendações e insights sobre como aprimorar o desenvolvimento de aplicativos móveis, cobrindo aspectos de design, desempenho e usabilidade para oferecer experiências de usuário excepcionais em dispositivos móveis.",
        "Dicas e práticas recomendadas para escrever código mais claro, legível e semântico, promovendo uma melhor compreensão e manutenção do software em projetos de desenvolvimento de software.",
        "Um conjunto de orientações práticas e conselhos úteis para ajudar os candidatos a emprego a se prepararem e se destacarem em suas buscas por oportunidades profissionais, cobrindo desde a elaboração de currículos até a preparação para entrevistas.",
        "Uma análise prática e detalhada das tendências e avanços recentes no desenvolvimento Front-end, com exemplos concretos e casos de uso que ilustram as mudanças significativas neste campo dinâmico da tecnologia.",
        "Um guia abrangente que explora as melhores práticas e estratégias para desenvolvedores que buscam oportunidades de emprego no exterior, fornecendo dicas valiosas sobre como se destacar em entrevistas e processos seletivos internacionais.",
        "Um ponto de partida direto e prático para aqueles que desejam ingressar no mundo do ReactJS neste ano, com insights sobre como iniciar, recursos recomendados e passos iniciais para dominar esta poderosa biblioteca JavaScript.",
        "Um guia completo para orientar desenvolvedores em busca de alcançar seus objetivos profissionais em 2024, abrangendo estratégias, ferramentas e práticas essenciais para o sucesso no campo do desenvolvimento de software."
    ];

    const imageLinks = [
        "https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702425600&semt=ais",
        "https://qdrant.tech/blog/case-study-bloop/preview/title.jpg",
        "https://img.freepik.com/fotos-gratis/negocios-conceito-de-entrevista-de-emprego_1421-77.jpg?w=1380&t=st=1709074549exp=1709075149hmac=cd6cd6f581f83fbadeedad7f9c6a1529e7a8749990d30555f89cddf888c4dacf",
        null,
        null,
        "https://i.pinimg.com/564x/11/73/a0/1173a0970b02ff178bb6eadf98ebbd96.jpg",
        "https://qdrant.tech/blog/case-study-bloop/preview/title.jpg"
    ];

    for (let i = 0; i < titles.length; i++) {
        const title = titles[i];
        const imageLink = imageLinks[i];
        const summary = summaries[i];

        await db.article.create({
            data: {
                title: title,
                imageUrl: imageLink,
                author: v4(),
                summary: summary,
            }
        });
    }

    console.log("Posts adicionados com sucesso!");
}

populateDatabase();
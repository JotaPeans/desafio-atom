import { cookies } from "next/headers";

// função para fazer uma abstração de um login
export default function getUser() {
    return cookies().get("uuid")?.value;
}
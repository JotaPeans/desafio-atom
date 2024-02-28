import { cookies } from "next/headers";

export default function getUser() {
    return cookies().get("uuid")?.value;
}
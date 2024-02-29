"use server"
 
import { cookies } from "next/headers"

export default async function createCookie(key: string, value: string) {
  cookies().set(key, value, {
    secure: true,
    httpOnly: true
  });
}
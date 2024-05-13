"use server"

import { setSessionCookie } from "@/lib/auth";
import { createUser } from "@/lib/users";
import { redirect } from "next/navigation";


export async function signUpAction(formData) {
    console.log("[signUpAction] formData:", formData);

  const data = {
    email:formData.get("email"),
    name:formData.get("name"),
    password:formData.get("password"),
  
  }

  const user = await createUser(data);
  console.log("[signUpAction] user", user);

   await setSessionCookie(user)
  redirect("/")
}
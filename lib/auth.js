import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { cache } from "react";

const JWT_COOKIE = "sessionToken";
const JWT_DURATION = 14 *  24* 60 *60 *1000;
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);


export async function deleteSessionCookie(){
    cookies().delete(JWT_COOKIE);

}

const decodeSessionToken = cache(async (sessionToken) =>{
try {
      const { payload } = await jwtVerify(sessionToken, JWT_SECRET);
      return payload;
    } catch (e) {
      console.warn("Invalid session token", e);
    }
})

export function getUserFromSessionToken() {
    const sessionToken = cookies().get(JWT_COOKIE)?.value;
    if (!sessionToken) return null;
  
    return decodeSessionToken(sessionToken);
  }


export async function setSessionCookie({id,email,name}){
    const expirationTime = new Date(Date.now()+JWT_DURATION)
    const sessionToken = await  new SignJWT({id,email,name})
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(expirationTime)
    .sign(JWT_SECRET)
    cookies().set(JWT_COOKIE, sessionToken,{
        expires: expirationTime,
        httpOnly: true,
        sameSite: "lax",
    });
}
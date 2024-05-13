import { db } from "./db";

export async function getComments(slug){

    //Simulate a delay
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    return await db.comment.findMany({
        where: {slug},
        orderBy: {postedAt:"desc"},
        include: {user:{
            select: {name:true},
        }},
    });
}

export async function createComment({slug,userId,message}){

    return await db.comment.create({
        data: {slug,userId,message},
      });
}
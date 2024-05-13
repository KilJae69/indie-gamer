"use server"

import { getUserFromSessionToken } from "@/lib/auth";
import { createComment } from "@/lib/comments";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createCommentAction(formData){
    const user = await getUserFromSessionToken();

    if(!user) throw new Error("User not authenticated")

    const data = {
         slug:formData.get("slug"),
         userId:user.id,
        message:formData.get("message")
    }

    const error = validate(data);
    if(error) return {isError:true, message:error}

    const newComment= await createComment(data)
    console.log("New comment created: ", newComment);
    revalidatePath(`/reviews/${data.slug}`);
    redirect(`/reviews/${data.slug}`);
}


function validate(data){

    if(!data.message) return "Message field is required"

    if(data.message.length > 500) return "Message field is too long. Max 500 characters."
}
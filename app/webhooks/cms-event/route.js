import { CACHE_TAG_REVIEWS } from "@/lib/reviews";
import { revalidateTag } from "next/cache";


export async function POST(request){
    const payload = await request.json()
    if(payload.model==="review") {
        revalidateTag(CACHE_TAG_REVIEWS)
        console.log("Revalidated cache tag",CACHE_TAG_REVIEWS);
    }


    // console.log("Received payload",payload);
    return new Response(null,{status:204});
}
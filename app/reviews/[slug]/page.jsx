import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { getReview, getSlugs } from "@/lib/reviews";
import Image from "next/image";

export const dynamic = "force-dynamic";

//  export async function generateStaticParams() {

//    const slugs = await getSlugs();
//    return slugs.map((slug) => ({ slug }));
//  }

export async function generateMetadata({params: {slug}}){
 const review = await getReview(slug);
 return {
   title: review.title,
   
 };
}

export default async function ReviewPage({ params: { slug } }) {
  console.log("[ReviewPage] rendering: ", slug);
  const review = await getReview(slug);

  return (
    <>
      <Heading>{review.title}</Heading>
      <p className="font-semibold mb-3">{review.subtitle}</p>
      <div className="flex gap-3 items-baseline">
         <p className="italic mb-2">{review.date}</p>
      <ShareLinkButton/>
      </div>
     
      <Image
      priority
        src={review.image}
        width={640}
        height={360}
        alt="Stardew Valley"
        className="rounded mb-2"
      />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className="prose prose-slate max-w-screen-sm "
      />
    </>
  );
}

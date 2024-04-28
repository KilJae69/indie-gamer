
import Link from "next/link";
import Heading from "../../components/Heading";
import { getReviews } from "@/lib/reviews";

export const metadata = {
  title: "Reviews",
  description: "More indie game reviews.",
};

export default async function ReviewsPage() {
const reviews = await getReviews();

  return (
    <>

    <Heading>Reviews</Heading>
    <p>Here we will list all the reviews</p>
    <ul className="flex flex-wrap gap-3 ">
    {reviews.map(review => (
      <li key={review.slug} className="border w-80 bg-white rounded shadow hover:shadow-xl">
        <Link href={`/reviews/${review.slug}`}>
        <img src={review.image} width={320} height={180} alt={review.title} className="rounded-t block" />
        <h2 className="py-1 text-center font-orbitron font-semibold">{review.title}</h2>
        </Link>
      </li>
    
    ))}
     
    </ul>
    </>
  );
  
}
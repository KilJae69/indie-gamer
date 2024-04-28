import Link from "next/link";
import Heading from "../components/Heading";
import { getFeaturedReview } from "@/lib/reviews";


export default async function HomePage() {

  const featuredReview = await getFeaturedReview();
  console.log(featuredReview);

  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you.</p>
      <div className="border w-80 bg-white rounded sm:w-full shadow hover:shadow-xl">
        <Link
        className="flex flex-col sm:flex-row"
         href={`/reviews/${featuredReview.slug}`}>
        <img src={`/images/${featuredReview.slug}.jpg`} width={320} height={180} alt={featuredReview.title} className="rounded-t sm:rounded-l block sm:rounded-t-none" />
        <h2 className="py-1 text-center font-orbitron font-semibold sm:px-2">{featuredReview.title}</h2>
        </Link> 
      </div>
    </>
  );
}

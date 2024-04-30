import Link from "next/link";
import Heading from "../components/Heading";
import { getReviews } from "@/lib/reviews";
import Image from "next/image";



export default async function HomePage() {
  const {reviews} = await getReviews(3);
  console.log("[HomePage] rendering",reviews.map(review=>review.slug).join(", "));

  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you.</p>
      <ul className="flex flex-col gap-2">
        {reviews.map((review, index) => (
          <li
            className="border w-80 bg-white rounded sm:w-full shadow hover:shadow-xl"
            key={review.slug}
          >
            <Link
              className="flex flex-col sm:flex-row"
              href={`/reviews/${review.slug}`}
            >
              <Image
                priority={index === 0}
                src={review.image}
                width={320}
                height={180}
                alt={review.title}
                className="rounded-t sm:rounded-l block sm:rounded-t-none"
              />
              <div className="px-2 py-1 text-center sm:text-left">
                <h2 className=" font-orbitron font-semibold">
                  {review.title}
                </h2>
                <p className="hidden mt-2 sm:block">{review.subtitle}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

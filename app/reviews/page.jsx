import Link from "next/link";
import Heading from "../../components/Heading";
import { getReviews, getSearchableReviews } from "@/lib/reviews";
import Image from "next/image";
import PaginationBar from "@/components/PaginationBar";
import SearchBox from "@/components/SearchBox";

export const metadata = {
  title: "Reviews",
  description: "More indie game reviews.",
};

const PAGE_SIZE = 6;

export default async function ReviewsPage({ searchParams }) {
  const page = parsePageParams(searchParams.page);
  const { reviews, pageCount } = await getReviews(PAGE_SIZE, page);


  return (
    <>
      <Heading>Reviews</Heading>
      <div className="flex justify-between items-baseline pb-3">
        <PaginationBar href="/reviews" page={page} pageCount={pageCount} />
        <SearchBox />
      </div>
      <p>Here we will list all the reviews</p>
      <ul className="flex flex-wrap gap-3 ">
        {reviews.map((review, index) => (
          <li
            key={review.slug}
            className="border w-80 bg-white rounded shadow hover:shadow-xl"
          >
            <Link href={`/reviews/${review.slug}`}>
              <Image
                src={review.image}
                priority={index === 0}
                width={320}
                height={180}
                alt={review.title}
                className="rounded-t block"
              />
              <h2 className="py-1 text-center font-orbitron font-semibold">
                {review.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function parsePageParams(paramValue) {
  if (paramValue) {
    const page = parseInt(paramValue);
    if (isFinite(page) && page > 0) {
      return page;
    }
  }
  return 1;
}

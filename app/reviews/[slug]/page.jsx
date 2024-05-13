import CommentForm from "@/components/CommentForm";
import CommentList from "@/components/CommentList";
import CommentListSkeleton from "@/components/CommentListSkeleton";
import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { getUserFromSessionToken } from "@/lib/auth";
import { getReview, getSlugs } from "@/lib/reviews";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  const review = await getReview(slug);
  if (!review) return notFound();
  return {
    title: review.title,
  };
}

export default async function ReviewPage({ params: { slug } }) {
  const user = await getUserFromSessionToken();
  console.log("[ReviewPage] user: ", user);
  // console.log("[ReviewPage] rendering: ", slug);
  const review = await getReview(slug);
  if (!review) return notFound();

  return (
    <>
      <Heading>{review.title}</Heading>
      <div className="font-semibold mb-3">{review.subtitle}</div>
      <div className="flex gap-3 items-baseline">
        <p className="italic mb-2">{review.date}</p>
        <ShareLinkButton />
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
      <section className="border-dashed border-t  max-w-screen-sm mt-3 py-3">
        <h2 className="font-bold flex gap-2 items-center text-xl">
          <ChatBubbleBottomCenterTextIcon className="h-6 w-6" />
          Comments
        </h2>
        {user ? (
          <CommentForm title={review.title} slug={review.slug} userName={user.name} />
        ) : (
          <div className="text-md text-center mt-3">
            Please{" "}
            <Link className="text-orange-800 hover:underline" href="/sign-in">
              Sign In
            </Link>{" "}
            to leave a comment
          </div>
        )}

        <Suspense fallback={<CommentListSkeleton />}>
          <CommentList slug={review.slug} />
        </Suspense>
      </section>
    </>
  );
}

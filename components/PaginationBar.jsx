import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function PaginationBar({ href, page, pageCount }) {
  return (
    <div className="flex items-center gap-2">
      <PaginationLink enabled={page > 1} href={`${href}?page=${page - 1}`}>
        <ChevronLeftIcon className="w-5 h-5" />
        <span className="sr-only">Previous Page</span>
      </PaginationLink>
      <span>
        Page {page} of {pageCount}
      </span>
      <PaginationLink
      enabled={page < pageCount}
        href={`${href}?page=${page <= pageCount ? page + 1 : page}`}
      >
        <ChevronRightIcon className="w-5 h-5" />
        <span className="sr-only">Next Page</span>
      </PaginationLink>
    </div>
  );
}

function PaginationLink({ children, enabled, href }) {
  if (!enabled)
    return (
      <span
        className="cursor-not-allowed border rounded text-slate-300 text-sm "
      >
        {children}
      </span>
    );

  return (
    <Link
      href={href}
      className="border rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700"
    >
      {children}
    </Link>
  );
}

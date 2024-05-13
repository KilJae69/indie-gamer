"use client";

import { createCommentAction } from "@/app/reviews/[slug]/actions";

import { useFormState } from "@/lib/hooks";
import { useEffect } from "react";




export default function CommentForm({ slug, title,userName }) {
  const [state, handleSubmit] = useFormState(createCommentAction);

 

  return (
    <form
      onSubmit={handleSubmit}
      className="border bg-white flex flex-col gap-2 mt-3 px-3 py-3 rounded"
    >
      <p className="pb-1">
        Already played <strong>{title}</strong>? Have your say!
      </p>
      <input type="hidden" name="slug" value={slug} />
      <div className="flex">
        <label htmlFor="userField" className="shrink-0 w-32">
          Your name
        </label>
       <span>{userName}</span>
      </div>
      <div className="flex">
        <label htmlFor="messageField" className="shrink-0 w-32">
          Your comment
        </label>
        <textarea
          id="messageField"
          name="message"
          className="border px-2 py-1 rounded w-full"
        />
      </div>
      {state.error && <p className="text-rose-600 font-bold">{state.error}</p>}
      <button
      disabled={state.loading}
        type="submit"
        className="bg-orange-800 rounded px-2 py-1 self-center
                     text-slate-50 w-32 hover:bg-orange-700 disabled:bg-slate-500 disabled:cursor-not-allowed"
      >
        Submit
      </button>
    </form>
  );
}

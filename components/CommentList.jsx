import { getComments } from '@/lib/comments';
import { UserCircleIcon } from '@heroicons/react/24/outline';


export default async function CommentList({slug}) {
    const comments = await getComments(slug);

    if(!comments.length) return (
        <p className="text-center italic mt-3">No comments yet. Be the first to comment!</p>
    );
    
console.log("Comments: ", comments);

  return (
    <ul className="border mt-3 rounded">
      {comments.map((comment) => (
        <li key={comment.id}
          className="border-b px-3 py-2 last:border-none odd:bg-orange-100">
          <div className="flex gap-3 pb-1 text-slate-500">
            <UserCircleIcon className="h-6 w-6" />
            {comment.user.name}
          </div>
          <p className="italic">
            {comment.message}
          </p>
        </li>
      ))}
    </ul>
  );
}
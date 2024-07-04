import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import Link from "next/link"

export default async function Page() {
    const user = await authUserSession()
    const comments = await prisma.comment.findMany({ where: { user_email: user.email } })

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h3 className="font-bold text-xl mt-3">My Comment :</h3>
            <div className="grid grid-cols-1 py-4 gap-4">
            {comments.map(comment => {
                return (
                    <Link href={`/anime/${comment.anime_mal_id}`} key={comment.id} className="p-4 rounded bg-indigo-950 text-gray-300">
                        <p className="font-bold">{comment.anime_title}</p>
                        <p>{comment.comment}</p>
                    </Link>
                )
            })}
            </div>
        </div>
    )
}
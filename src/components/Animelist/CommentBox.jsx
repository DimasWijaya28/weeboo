import prisma from "@/libs/prisma"
import { comment } from "postcss"

export default async function CommentBox({anime_mal_id, user_image}) {
    const comments = await prisma.comment.findMany({where: { anime_mal_id }})
    return (
        <div className="grid grid-cols-1 gap-4 mb-4">
            {comments.map(comment => {
                return(
                    <div key={comment.id} className="flex justify-between gap-5 p-5 rounded-lg">
                        <img className="object-cover rounded-xl w-20 h-20 border border-gray-300" src={user_image} />
                        <div className="w-full">
                        <p className="font-semibold mb-3">{comment.username}</p>
                        <p>{comment.comment}</p>
                        </div>
                        
                    </div>
                )
            })}
        </div>

    )
}
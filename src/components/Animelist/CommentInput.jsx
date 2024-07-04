"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CommentInput({ anime_mal_id, user_email, username, anime_title, user_image }) {

    const [isCreated, setIsCreated] = useState(false)
    const [comment, setComment] = useState("")

    const router = useRouter()

    const handleInput = (event) => {
        setComment(event.target.value)
    }

    const handlePosting = async (event) => {
        event.preventDefault()
        const data = { anime_mal_id, user_email, comment, username, anime_title }
        const response = await fetch("/api/v1/comment", {
            method: "POST",
            body: JSON.stringify(data)
        })
        const postComment = await response.json()
        if (postComment.status == 200) {
            setIsCreated(true)
            setComment("")
            router.refresh()
        }
        return

    }

    return (
        <div className="flex flex-col gap-2">
            {isCreated && <p className="">postingan terkirim</p>}
            <div className="flex justify-between gap-5">
                <img className="object-cover rounded-xl w-20 h-20 border border-gray-300" src={user_image} />
                <div className="w-full">
                <textarea className="border-2 border-black w-full h-32 p-3 rounded-lg" value={comment} name="" id="" onChange={handleInput} />
                <button className="w-32 font-bold py-2 px-3 rounded bg-indigo-300 hover:bg-indigo-600 transition-all" onClick={handlePosting}>Komentar</button>
                </div>
            </div>
        </div>
    )
}
"use client"

import { useState } from "react"
export default function CollectionButton({ anime_mal_id, user_email, anime_image, anime_title }) {

    const [isCreated, setIsCreated] = useState()

    const handleCollection = async (event) => {
        event.preventDefault()
        const data = { anime_mal_id, user_email, anime_image, anime_title }
        const response = await fetch("/api/v1/collection", {
            method: "POST",
            body: JSON.stringify(data)
        })
        const collection = await response.json()
        if (collection.status == 200) {
            setIsCreated(true)
        }
        return
    }

    return (
        <>
            { isCreated ? <p>Berhasil di Tambahkan ke Koleksi</p> :
                <button onClick={handleCollection} className="bg-indigo-400 hover:bg-indigo-200 px-4 py-3 rounded-md font-bold">Add Collection</button>
            }
        </>
    )
}
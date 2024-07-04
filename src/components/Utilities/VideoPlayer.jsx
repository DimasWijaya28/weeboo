"use client"

import { XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import YouTube from "react-youtube"

export default function VideoPlayer({ youtubeId }) {
    const [isOpen, setIsOpen] = useState(true)

    const handleButton = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "360",
        height: "250"
    }

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2">
                <button onClick={handleButton} className="float-right bg-slate-300 mb-1 p-1 rounded-full cursor-pointer hover:bg-slate-600 transition-all"><XMarkIcon className="block h-6 w-6 font-bold" /></button>
                <YouTube videoId={youtubeId} onReady={(event) => event.target.pauseVideo()} opts={option} />
            </div>
        )
    }

    const ButtonOpenTrailer = () => {
        return (
            <button onClick={handleButton} className="fixed bottom-2 right-2 w-32 bg-slate-300 hover:bg-slate-600 cursor-pointer font-bold p-2 transform hover:-translate-y-4 duration-300 rounded">Video Trailer</button>
        )
    }

    return isOpen ? <Player /> : <ButtonOpenTrailer/>
}
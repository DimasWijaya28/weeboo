"use client"

import { Input } from "@headlessui/react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useRouter } from "next/navigation";
import { useRef } from 'react'

export default function SearchInput() {

    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        const keyword = searchRef.current.value
        if (!keyword || keyword.trim() == "") return

        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault()
        
        router.push(`/search/${keyword}`)
        }    
    }
    return (
        <>
            <div className="relative">
                <Input className="w-full p-2 rounded" placeholder='Search Anime...' ref={searchRef} onKeyDown={handleSearch} />
                <button className="absolute top-2 end-2 size-6 text-blue-500" onClick={handleSearch}>
                    <MagnifyingGlassIcon />
                </button>
            </div>
        </>
    )
}
"use client"

import Animelist from "@/components/Animelist";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "../../libs/api-libs";

export default function Page() {

    const [page, setPage] = useState(1)
    const [topAnimes, setTopAnimes] = useState([])

    const fetchData = async () => {
        const dataTopAnimes = await getAnimeResponse("top/anime", `page=${page}`) 
        setTopAnimes(dataTopAnimes)
    }

    useEffect(() => {
        fetchData()
    }, [page])
    return (
        <>
            <HeaderMenu title={`Anime Terpopuler ${page}`}/>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <Animelist api={topAnimes}/>
            <Pagination page={page} lastPage={topAnimes.pagination?.last_visible_page} setPage={setPage} />
            </div>
        </>
    )
}
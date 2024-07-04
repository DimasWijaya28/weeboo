import Link from "next/link"


export default function Animelist({ api }) {
    return (
        <>
            <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4'>
                {api.data?.map((anime) => {
                    return (
                        // <div key={anime.mal_id} className='max-w-sm rounded overflow-hidden shadow-md transform hover:-translate-y-1 duration-300 hover:shadow-xl hover:bg-slate-500 cursor-pointer'>
                        //     <Link href={`/anime/${anime.mal_id}`} className="max-h-140 overflow-hidden">
                        //         <img className="w-full max-h-64 duration-300" src={anime.images.webp.image_url} alt="Sunset in the mountains" />
                        //         <h3 className="px-6 py-4 font-bold md:text-lg text-sm text-wrap">{anime.title}</h3>
                        //     </Link>
                        // </div>
                        <Link key={anime.mal_id} href={`/anime/${anime.mal_id}`} className="relative rounded shadow-lg hover:transform transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl border-2 border-indigo-600">
                            <img src={anime.images.webp.image_url} alt="test" className="h-64 w-full" />
                            <div className="absolute bottom-0 flex justify-center items-center w-full bg-opacity-55 bg-indigo-300 h-20">
                                <h5 className="font-bold p-2 text-sm text-center">{anime.title}</h5>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}
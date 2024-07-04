import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import CollectionButton from "@/components/Animelist/CollectionButton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import CommentInput from "@/components/Animelist/CommentInput";
import CommentBox from "@/components/Animelist/CommentBox";

export default async function Page({ params: { id } }) {
    const anime = await getAnimeResponse(`anime/${id}/full`)
    const user = await authUserSession()
    const collection = await prisma.collection.findFirst({
        where: { user_email: user?.email, anime_mal_id: id}
    })

    return (
        <>
            <header className="bg-gray-100">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 border-b-4 border-slate-700">
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold md:text-lg text-sm">{anime.data.title} - {anime.data.year}</h3>
                        {!collection && user && <CollectionButton anime_mal_id={id} user_email={user?.email} anime_image={anime.data.images?.webp.image_url} anime_title={anime.data.title}/>}
                    </div>
                </div>
            </header >
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="flex md:flex-row flex-col gap-2">
                    <div className="">
                        <img className="rounded object-cover w-full max-h-64" src={anime.data.images?.webp.image_url} alt={anime.data.images?.jpg.image_url} />
                    </div>
                    <table className="border-separate border-spacing-2 md:text-lg text-md">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>Judul</td>
                                <td>:</td>
                                <td>{anime.data.title}</td>
                            </tr>
                            <tr>
                                <td>Japanese</td>
                                <td>:</td>
                                <td>{anime.data.title_japanese}</td>
                            </tr>
                            <tr>
                                <td>Skor</td>
                                <td>:</td>
                                <td>{anime.data.score}</td>
                            </tr>
                            <tr>
                                <td>Total Episode</td>
                                <td>:</td>
                                <td>{anime.data.episodes}</td>
                            </tr>
                            <tr>
                                <td>Durasi</td>
                                <td>:</td>
                                <td>{anime.data.duration}</td>
                            </tr>
                            <tr>
                                <td>Rating</td>
                                <td>:</td>
                                <td>{anime.data.rating}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="bg-gray-100 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 border-y-4 border-slate-700">
                <h3 className="font-bold md:text-lg text-sm">Synopsis</h3>
            </div>
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-2">
                <p className="text-justify md:text-lg text-sm">{anime.data.synopsis}</p>
            </div>
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-2">
                <h3 className="font-bold text-xl mb-4">Komentar Penonton :</h3>
                
                
                {user && <CommentInput anime_mal_id={id} user_image={user?.image} user_email={user?.email} username={user?.name} anime_title={anime.data.title}/>}
                <div className="mt-5">
                <CommentBox anime_mal_id={id} user_image={user?.image} />
                </div>
                
            </div>

            <div>
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
            </div>

        </>
    )
}
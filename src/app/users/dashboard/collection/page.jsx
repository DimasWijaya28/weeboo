import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";
import prisma from "@/libs/prisma";


export default async function Page() {

    const user = await authUserSession()
    const collection = await prisma.collection.findMany({ where: { user_email: user.email } })

    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl my-2 font-bold">Halaman My Collection</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {collection.map((collect, index) => {
                    return (
                        <Link key={index} href={`/anime/${collect.anime_mal_id}`} className="relative rounded shadow-lg hover:transform transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl border-2 border-indigo-600">
                        <img src={collect.anime_image} alt="test" className="h-64 w-full" />
                        <div className="absolute bottom-0 flex justify-center items-center w-full bg-opacity-55 bg-indigo-300 h-20">
                            <h5 className="font-bold p-2 text-sm text-center">{collect.anime_title}</h5>
                        </div>
                    </Link>
                    )
                })}
            </div>
        </section>
    )
}
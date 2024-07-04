import { redirect } from 'next/navigation'
import { authUserSession } from "@/libs/auth-libs"
import Link from "next/link";

export default async function Page() {
    const user = await authUserSession();
    if(!user) {redirect('/')}
    return (
        <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mt-8 flex flex-col justify-center items-center">
                    <h5 className="mb-2 text-2xl font-bold">Welcome, {user.name}</h5>
                    <img className="rounded border-2 border-indigo-600 object-cover w-52 h-64" src={user.image} alt="foto profil" />
                    <div className="flex flex-wrap gap-4 py-8">
                        <Link href="/users/dashboard/collection" className="rounded hover:bg-indigo-700 transition-all bg-indigo-950 text-gray-300 font-bold px-4 py-3 text-xl">
                            My Collection
                        </Link>
                        <Link href="/users/dashboard/comment" className="rounded hover:bg-indigo-700 transition-all bg-indigo-950 text-gray-300 font-bold px-4 py-3 text-xl">
                            My Comment
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";

export default async function UserActionButton() {
    const user = await authUserSession();

    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin"
    return (
        <div className="py-3">
            { user ? <Link href="/users/dashboard" className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>
                My Profile
            </Link> : null}
        <Link href={actionUrl} className="text-gray-300 md:text-sm text-md md:p-2 font-medium hover:bg-gray-700 hover:text-white rounded-md">{actionLabel}</Link>
        </div>
    )
}
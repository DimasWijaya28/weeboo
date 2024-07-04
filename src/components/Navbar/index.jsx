import SearchInput from './SearchInput'
import Link from 'next/link'
import UserActionButton from './UserActionButton'
import { authUserSession } from "@/libs/auth-libs";

export default function Navbar() {
    return (
        <>
        <div className='bg-indigo-950'>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between gap-20">
                    <div className="flex-shrink-0">
                        <Link href="/" className='text-gray-300 font-bold text-2xl'>
                            WEEBOO
                        </Link>
                    </div>
                    <div className='w-full'>
                        <SearchInput />
                    </div>
                    <div className='w-64'>
                        <UserActionButton />
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
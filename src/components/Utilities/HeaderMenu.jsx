export default function HeaderMenu({title}) {
    return (
        <>
         <header className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center">
                <h1 className="text-xl font-bold tracking-tight text-gray-900">{title}</h1>
                {/* {linkHref && linkTitle ? <Link href={linkHref} className="md:text-md text-sm underline hover:text-indigo-500 transition-all">{linkTitle}</Link> : null } */}
                </div>
            </div>
        </header>
        </>
    )
}
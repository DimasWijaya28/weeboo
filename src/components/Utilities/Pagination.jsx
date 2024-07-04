import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Pagination({ page, lastPage, setPage }) {

    const scrollTop = () => {
        scrollTo({
            behavior: "auto",
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }

    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1)
        scrollTop()
    }

    return (
        <>
            <div className="flex justify-between border-y border-gray-500 items-center mt-7 py-4 px-2 gap-4 text-xl">
                <div>
                    {page <= 1 ? null : <button onClick={handlePrevPage} className="border border-gray-500 p-2 rounded transition-all hover:bg-slate-200">
                        <ChevronLeftIcon className="block h-6 w-6" />
                    </button>}
                </div>
                <div>
                    <p className="text-lg">Showing {page} of {lastPage}</p>
                </div>
                <div>
                    {page >= lastPage ? null : <button onClick={handleNextPage} className="border border-gray-500 p-2 rounded transition-all hover:bg-slate-200">
                        <ChevronRightIcon className="block h-6 w-6" />
                    </button>}
                </div>
            </div>
        </>
    )
}
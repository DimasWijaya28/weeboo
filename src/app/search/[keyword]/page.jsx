import Animelist from '@/components/Animelist';
import Header from '@/components/Header';
import { getAnimeResponse } from '@/libs/api-libs';

export default async function Page({ params }) {
    //   const [topAnimes, setTopAnimes] = useState([]);

    //   useEffect(() => {
    //     async function fetchData(keyword) {
    //       try {
    //         const {keyword} = params
    //         console.log(keyword)
    //         const res = await axios('https://api.jikan.moe/v4/anime?q=${keyword}');
    //         setTopAnimes(res.data);
    //       } catch (err) {
    //         console.log(err);
    //       }
    //     }
    //     fetchData();
    //   }, []);

    const { keyword } = params
    const decodedKeyword = decodeURI(keyword)
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`
    )
    const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)

    return (
        <>
            <div className="min-h-full">
                <section>
                    <Header title={`Pencarian untuk ${decodedKeyword}...`} />
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <Animelist api={searchAnime} />
                    </div>
                </section>
            </div>
        </>
    )
}

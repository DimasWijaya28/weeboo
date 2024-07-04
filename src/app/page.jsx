import './globals.css'
import NavBar from '@/components/Navbar';
import Animelist from '@/components/Animelist';
import Header from '@/components/Header';
import axios from 'axios';
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from '../libs/api-libs';

export default async function Page() {
  // const [topAnimes, setTopAnimes] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await axios.get('https://api.jikan.moe/v4');
  //       setTopAnimes(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchData();
  // }, []);

  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  // )
  const topAnimes = await getAnimeResponse("top/anime", "limit=10")
  let recommendedAnimes = await getNestedAnimeResponse("recommendations/anime", "entry")
  recommendedAnimes = reproduce(recommendedAnimes, 10)
  return (
    <>
      <div className="min-h-full">
        <section>
          <Header title="Paling Populer" linkHref="/populer" linkTitle="Lihat Semua" />
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <Animelist api={topAnimes} />
          </div>
        </section>
        <section>
          <Header title="Rekomendasi Anime" />
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <Animelist api={recommendedAnimes} />
          </div>
        </section>
      </div>
    </>
  )
}

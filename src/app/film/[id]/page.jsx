import Image from "next/image";
import Link from "next/link";

export default async function movieDetail({ params, searchParams }) {
  const ID = params.id;
  const { contentType } = searchParams;
  console.log(ID, contentType);
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const res = await fetch(`https://api.themoviedb.org/3/${contentType}/${ID}?api_key=${key}`);
  const result = await res.json();
  console.log(result);
  return (
    <>
      {result.length === 0 ? (
        <h1 className="flex justify-center items-center h-screen text-2xl font-bold">
          Loading...
        </h1>
      ) : (
        <div className="flex flex-col mx-2 md:flex-row md:justify-between items-center h-[50%]">
          <div className="flex flex-col items-center md:w-[50%] my-2">
            <Image
              className="my-2 rounded-lg md:w-[300px] overflow-hidden"
              src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
              alt={result.title || result.name}
              width={200}
              height={400}
            />
          </div>
          <div className="flex flex-col items-center md:w-[50%] my-2">
            <div>
              <h1 className="text-center text-2xl font-bold mx-2">
                {result.title}{result.name}
              </h1>
              <hr className="my-2" />
              <h1 className="md:text-xl">Description: {result.overview}</h1>
              <hr className="my-2" />
              <h1 className="md:text-xl">
                Release Date: {result.release_date}{result.first_air_date}
              </h1>
              <h1 className="md:text-lg">Rate: {result.vote_average}</h1>
            </div>
            <div>
              <Link href={`/film/${ID}/player?contentType=${contentType}`}>
                <button className="px-2 py-4 md:px-5 bg-sky-500 font-bold text-white rounded-lg text-xl hover:bg-sky-700 transition-[.3s] hover:scale-105">
                  Watch Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

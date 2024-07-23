import Image from "next/image";
import Link from "next/link";

export default async function movieDetail({ params }) {
  const ID = params.id;
  const movieAPI = "https://api.themoviedb.org/3/movie";
  const key = "6ad31d36e6a7a2531245c6e227d95e83";
  const movieRES = await fetch(`${movieAPI}/${ID}?api_key=${key}`);
  const movie = await movieRES.json();
  console.log(movie);
  return (
    <>
      {movie.length === 0 ? (
        <h1 className="flex justify-center items-center h-screen text-2xl font-bold">
          Loading...
        </h1>
      ) : (
        <div className="flex flex-col mx-2 md:flex-row md:justify-between items-center h-[50%]">
          <div className="flex flex-col items-center md:w-[50%] my-2">
            <Image
              className="my-2 rounded-lg md:w-[300px] overflow-hidden"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={200}
              height={400}
            />
          </div>
          <div className="flex flex-col items-center md:w-[50%] my-2">
            <div>
              <h1 className="text-center text-2xl font-bold mx-2">
                {movie.title}
              </h1>
              <hr className="my-2" />
              <h1 className="md:text-xl">Description: {movie.overview}</h1>
              <hr className="my-2" />
              <h1 className="md:text-xl">
                Release Date: {movie.release_date}
              </h1>
              <h1 className="md:text-lg">Rate: {movie.vote_average}</h1>
            </div>
            <div>
              <Link href={`/film/${ID}/player`}>
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

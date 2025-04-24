"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SearchResults({ params }) {
  const searchKeyword = params.searchTerm;
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const searchMovieAPI = 'https://api.themoviedb.org/3/search/movie';
  const searchTvAPI = 'https://api.themoviedb.org/3/search/tv';
  const [result, setResult] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const getSearchResult = async () => {
    try {
      const [movieRes, tvRes] = await Promise.all([
        fetch(`${searchMovieAPI}?api_key=${key}&query=${searchKeyword}`),
        fetch(`${searchTvAPI}?api_key=${key}&query=${searchKeyword}`)
      ])
      const movieData = await movieRes.json();
      const tvData = await tvRes.json();

      // combine the results
      const combinedResults = [
        ...movieData.results.map(movie => ({ ...movie, type: 'movie' })),
        ...tvData.results.map(tv => ({ ...tv, type: 'tv' }))
      ]
      const sortedResults = combinedResults.sort((a, b) => b.popularity - a.popularity);
      setResult(sortedResults);
      console.log(result);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(true);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }
  React.useEffect(() => {
    getSearchResult();
  }, []);
  return (
    <div>
      <div>
        <div className="flex justify-center items-center">
          {loading && <p className="text-2xl">Loading...</p>}
          {error && <p className="text-2xl">Something went wrong</p>}
        </div>
        {!loading && !error && (
          <div className="mx-4 my-4 flex items-center justify-between flex-wrap">
            {result.map((movie, index) => (
              <Link href={`/film/${movie.id}?contentType=${movie.type}`} key={index}>
                <div>
                  <button className="hover:scale-105 transition-[.3s]">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title || movie.name}
                      className="my-4 rounded-lg w-[150px] h-[25vh] md:w-[250px] md:h-auto"
                      width={250}
                      height={150}
                    />
                    <p className="text-left w-[25vw]">{movie.title}{movie.name}</p>
                  </button>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

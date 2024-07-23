import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function SearchResults({ params }) {
  const searchKeyword = params.searchTerm;
  const key = "6ad31d36e6a7a2531245c6e227d95e83";
  const searchAPI = "https://api.themoviedb.org/3/search/movie";
  const res = await fetch(`${searchAPI}?api_key=${key}&query=${searchKeyword}`);
  const data = await res.json();
  const result = await data.results;
  console.log(result)
  return (
    <div>
      <div className="mx-4 my-4 flex items-center justify-between flex-wrap">
        {result.map((movie, index) => (
          <Link href={`/film/${movie.id}`} key={index}>
            <div>
              <button className="hover:scale-105 transition-[.3s]">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="my-4 rounded-lg w-[150px] h-[25vh] md:w-[250px] md:h-auto"
                  width={250}
                  height={150}
                />
                <p className="text-left w-[25vw]">{movie.title}</p>
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

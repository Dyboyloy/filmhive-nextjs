import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function GetDetail({ params, searchParams }) {
    const ID = params.id;
    const { contentType } = searchParams;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/${contentType}/${ID}`) 
    const result = await res.json();
  return (
    <>
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
    </>
  )
}

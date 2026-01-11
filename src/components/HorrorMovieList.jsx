"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";

export default function HorrorMovieList() {
    const [movies, setMovie] = useState([]);
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const animeMovie = async () => {
    const res = await fetch("/api/movies/horror");
    const movies = await res.json();
    setMovie(movies.results);
  };
  useEffect(() => {animeMovie()}, []);
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };

  return (
    <div className="mx-2 my-5">
      <h1 className="text-2xl font-bold">Horror</h1>
      <div className="w-[90vw] m-auto md:w-[95vw]">
        <Slider {...settings}>
          {movies.map((movie, index) => (
            <Link href={`/film/${movie.id}?contentType=movie`} key={index}>
              <div className="flex justify-center items-center mx-2">
                <button
                  key={movie.id}
                  className="hover:scale-105 transition-[.3s]"
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    className="my-4 rounded-lg w-[150px] h-auto md:w-[180px]"
                    alt={movie.title}
                    width={350}
                    height={150}
                  />
                  <p>{movie.title}</p>
                </button>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
}

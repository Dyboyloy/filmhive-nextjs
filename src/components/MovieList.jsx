"use client";

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

export default function MovieList({ movies }) {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };
  return (
    <div className="mx-2 my-5">
      <div>
        <h1 className="text-2xl font-bold">Trending Movie</h1>
        <div className="w-[90vw] m-auto md:w-[95vw]">
          <Slider {...settings}>
            {movies.map((movie, index) => (
              <Link href={`/film/${movie.id}`} key={index}>
                <div className="flex justify-center items-center mx-2">
                  <button
                    key={movie.id}
                    className="hover:scale-105 transition-[.3s]"
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                      className="my-4 rounded-lg w-[350px] h-[20vh] md:w-[350px] md:h-auto"
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
    </div>
  );
}

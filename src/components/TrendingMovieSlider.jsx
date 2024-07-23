"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

export default function TrendingMovieSlider() {
  const [trendMovies, setTrendMovies] = useState([]);
  const trendMoviesAPI = "https://api.themoviedb.org/3/trending/movie/week";
  const key = "6ad31d36e6a7a2531245c6e227d95e83";
  const getAllTrendMovies = async () => {
    const res = await fetch(`${trendMoviesAPI}?api_key=${key}`);
    const trendMovies = await res.json();
    setTrendMovies(trendMovies.results);
    console.log(trendMovies);
  };
  useEffect(() => {
    getAllTrendMovies();
  }, []);
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  return (
    <div className="mx-2 my-20 md:my-5">
      <div className="w-[90vw] m-auto md:w-[95vw]">
        <Slider {...settings}>
          {trendMovies.map((movie, index) => (
            <Link href={`/film/${movie.id}`} key={index}>
              <div className="flex justify-center items-center mx-2">
                <button
                  key={movie.id}
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={movie.title}
                    className="my-4 bg-cover rounded-lg w-[98vw] h-[25vh] md:h-[96vh]"
                    width={350}
                    height={150}
                  />
                  <p className="font-bold text-xl">{movie.title}</p>
                </button>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
}

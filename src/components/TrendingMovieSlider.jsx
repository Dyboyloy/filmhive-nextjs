"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

export default function TrendingMovieSlider() {
  const [trendMovies, setTrendMovies] = useState([]);
  const getAllTrendMovies = async () => {
    const res = await fetch("/api/movie/trending");
    const movies = await res.json();
    setTrendMovies(movies);
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
          {trendMovies.map((tm, index) => (
            <Link href={`/film/${tm.id}?contentType=${tm.media_type}`}>
              <div className="flex justify-center items-center mx-2">
                <button
                >
                  <Image
                      src={`https://image.tmdb.org/t/p/w500${tm.backdrop_path}`}
                    alt={tm.title || tm.name}
                    className="my-4 bg-cover rounded-lg w-[98vw] h-[25vh] md:h-[96vh]"
                    width={350}
                    height={150}
                  />
                    <p className="font-bold text-xl">{tm.title}{tm.name}</p>
                </button>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
}

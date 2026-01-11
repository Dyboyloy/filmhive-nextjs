'use client';
import { useEffect, useState } from 'react';
import TrendingMovieSlider from '@/components/TrendingMovieSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimationMovieList from '@/components/AnimationMovieList';
import HorrorMovieList from '@/components/HorrorMovieList';
import Footer from '@/components/Footer';
import TVList from '@/components/TVList';
import AnimeList from '@/components/AnimeList';

export default function Page() {
  const [movies, setMovie] = useState([]);
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const getAllMovies = async () => {
    const res = await fetch("/api/movies/discover");
    const movies = await res.json();
    setMovie(movies.results);
  };
  useEffect(() => {getAllMovies();}, []);
  return (
    <div>
      <>
      {movies.length === 0 ? (
        <h1 className="flex justify-center items-center h-[450px] text-2xl font-bold">
          Loading...
        </h1>
      ) : (
        <div>
          <TrendingMovieSlider/>
          <AnimationMovieList />
          <HorrorMovieList />
          <TVList />
          <AnimeList />
          <Footer />
        </div>
      )}
      </>
    </div>
  )
}

'use client';
import { use, useEffect, useState } from 'react';
import TrendingMovieSlider from '@/components/TrendingMovieSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimationMovieList from '@/components/AnimationMovieList';
import HorrorMovieList from '@/components/HorrorMovieList';
import Footer from '@/components/Footer';
import TVList from '@/components/TVList';
import AnimeList from '@/components/AnimeList';

export default function Page() {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/movie/discover`, {
      cache: 'no-store',
    });
    const data = await res.json();
    setMovies(data)
  };

  useEffect(() => {getMovies()}, []);
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

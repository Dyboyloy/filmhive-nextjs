'use client';
import { useEffect, useState } from 'react';
import MovieList from '../components/MovieList'
import TrendingMovieSlider from '@/components/TrendingMovieSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimationMovieList from '@/components/AnimationMovieList';
import HorrorMovieList from '@/components/HorrorMovieList';
import Footer from '@/components/Footer';

export default function Page() {
  const [movies, setMovie] = useState([]);
  const key = '6ad31d36e6a7a2531245c6e227d95e83';
  const getAllMovies = async () => {
    const moviesAPI = 'https://api.themoviedb.org/3/discover/movie';
    const res = await fetch(`${moviesAPI}?api_key=${key}`);
    const movies = await res.json();
    setMovie(movies.results);
    console.log(movies)
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
          <MovieList movies={movies}/>
          <AnimationMovieList />
          <HorrorMovieList />
          <Footer />
        </div>
      )}
      </>
    </div>
  )
}

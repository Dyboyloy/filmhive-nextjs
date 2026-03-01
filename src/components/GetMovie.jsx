"use client";
import { useState, useEffect } from "react";

export default async function GetMovie(request, { params }) {
    const [movies, setMovies] = useState([]);
    const [discover, animation, horror, trending] = params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/movie/${discover || animation || horror || trending}`);
    const data = await res.json();
    setMovies(data.results);

    return movies;

};
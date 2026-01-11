import { NextResponse } from "next/server";

export async function GET() {
    const res = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}`, { cache: 'no-store' });
    const movies = await res.json();
    return NextResponse.json(movies);
}
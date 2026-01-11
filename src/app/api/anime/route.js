import { NextResponse } from "next/server";

export async function GET() {
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const res = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_origin_country=JP&with_genres=16`);
  const data = await res.json();
  return NextResponse.json(data);
}

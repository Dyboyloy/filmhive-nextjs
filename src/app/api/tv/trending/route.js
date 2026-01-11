import { NextResponse } from "next/server";

export async function GET() {
    const key = process.env.NEXT_PUBLIC_API_KEY;
    const res = await fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${key}`);
    const data = await res.json();
    return NextResponse.json(data);
}
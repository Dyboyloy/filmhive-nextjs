import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const key = process.env.API_KEY;
    const id = params.id;
    const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${key}`, {
        cache: 'force-cache'
    });
    const result = await res.json();
    return NextResponse.json(result);
}
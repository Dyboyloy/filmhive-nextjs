import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const key = process.env.NEXT_PUBLIC_API_KEY;
    const searchKeyword = searchParams.get('query');
    const searchMovieAPI = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchKeyword}`;
    const searchTvAPI = `https://api.themoviedb.org/3/search/tv?api_key=${key}&query=${searchKeyword}`;
    try {
        const [movieRes, tvRes] = await Promise.all([
            fetch(searchMovieAPI),
            fetch(searchTvAPI)
        ]);
        const movieData = await movieRes.json();
        const tvData = await tvRes.json();

        // combine the results
        const combinedResults = [
            ...movieData.results.map(movie => ({ ...movie, type: 'movie' })),
            ...tvData.results.map(tv => ({ ...tv, type: 'tv' }))
        ];
        const sortedResults = combinedResults.sort((a, b) => b.popularity - a.popularity);
        return NextResponse.json(sortedResults);
    } catch (error) {
        console.error('Error fetching search results:', error);
        return NextResponse.json({ error: 'Failed to fetch search results' }, { status: 500 });
    }
}
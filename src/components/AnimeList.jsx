    "use client";
    import Image from "next/image";
    import Link from "next/link";
    import React from "react";
    import Slider from "react-slick";

    export default function AnimeList() {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const [tvList, setTvList] = React.useState([]);
    const getTvShow = async (totalPages = 5) => {
        const fetches = [];
        for (let page = 1; page <= totalPages; page++) {
            fetches.push(
                fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}&page=${page}`)
                    .then(res => res.json())
                    .then(data => data.results)
            )
        }
        const pages = await Promise.all(fetches);
        const results = pages.flat();
        const animeFromJapan = results.filter(
            (item) =>
                item.origin_country.includes("JP") &&
                item.genre_ids.includes(16) // genre 16 = Animation
        );
        setTvList(animeFromJapan); 
    };
    React.useEffect(() => {
        getTvShow();
    }, []);

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 2,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 5,
            slidesToScroll: 2,
            infinite: true,
            },
        },
        {
            breakpoint: 800,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            },
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            nextArrow: false,
            prevArrow: false,
            },
        },
        ],
    };

    return (
        <div className="mx-2 my-5">
        <h1 className="text-2xl font-bold">Anime</h1>
        <div className="w-[90vw] m-auto md:w-[95vw]">
            <Slider {...settings}>
            {tvList.map((tv, index) => (
                <Link
                href={`/film/${tv.id}?contentType=tv`}
                key={index}
                >
                <div className="flex justify-center items-center mx-2">
                    <button
                    key={tv.id}
                    className="hover:scale-105 transition-[.3s]"
                    >
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                        className="my-4 rounded-lg w-[150px] h-auto md:w-[180px]"
                        alt={tv.name}
                        width={350}
                        height={150}
                    />
                    <p>{tv.name}</p>
                    </button>
                </div>
                </Link>
            ))}
            </Slider>
        </div>
        </div>
    );
}

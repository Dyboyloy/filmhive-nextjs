"use client";

import axios from "axios";

export default function MoviePlayer({ params }) {
  const ID = params.id;
  const moviePlayer = `https://vidsrc.xyz/embed/movie/${ID}`;
  return (
    <div className="my-2">
      <iframe
        src={moviePlayer}
        allowFullScreen
        height={"800px"}
        width={"405"}
        className="mx-2 h-[90vh] w-[96vw] md:h-[98vh] md:mx-4"
      >
      </iframe>
    </div>
  );
}

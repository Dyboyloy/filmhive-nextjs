"use client";
import React from "react";

export default function MoviePlayer({ params, searchParams }) {
  const ID = params.id;
  const { contentType } = searchParams;
  const [player, setPlayer] = React.useState("");
  const [seasons, setSeasons] = React.useState([]);
  const [episodes, setEpisodes] = React.useState([]);
  const [selectedSeason, setSelectedSeason] = React.useState(1);
  const [selectedEpisode, setSelectedEpisode] = React.useState(1);
  const servers = [
    { id: 0, name: "VidSrc", baseUrl: process.env.NEXT_PUBLIC_ANIME_STREAMING_API },
    { id:1, name: "Embed.pro", baseUrl: process.env.NEXT_PUBLIC_STREAMING_API },
  ];
  const [selectedServer, setSelectedServer] = React.useState(servers[0]);

  React.useEffect(() => {
    let fullURL = "";
    if (contentType === "movie") {
      fullURL = `${selectedServer.baseUrl}/${contentType}/${ID}`;
      setPlayer(fullURL);
    } else if (contentType === "tv") {
      // fetch the seasons for the selected TV show
      fetch(
        `https://api.themoviedb.org/3/tv/${ID}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setSeasons(data.seasons || []);
        });
      // fetch the episodes for the selected season
      fetch(
        `https://api.themoviedb.org/3/tv/${ID}/season/${selectedSeason}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setEpisodes(data.episodes || []);
        });
      fullURL = `${selectedServer.baseUrl}/${contentType}/${ID}/${selectedSeason}/${selectedEpisode}?ds_lang=en`;
      setPlayer(fullURL);
    }
    console.log("Updated player URL:", fullURL);
  }, [
    contentType,
    ID,
    selectedEpisode,
    selectedSeason,
    seasons,
    episodes,
    selectedServer,
  ]);
  return (
    <div className="my-2">
      <iframe
        key={player}
        src={player}
        allowFullScreen
        height={"800px"}
        width={"405"}
        className="mx-2 h-[90vh] w-[96vw] md:h-[98vh] md:mx-4"
      ></iframe>
      <div className="flex gap-2 my-2 mx-4">
        {servers.map((server, index) => (
          <button
            key={index}
            onClick={() => setSelectedServer(server)}
            className={`px-3 py-2 rounded-md font-semibold ${
              selectedServer.name === server.name
                ? "bg-blue-500 text-white"
                : "bg-gray-800"
            }`}
          >
            {server.name}
          </button>
        ))}
      </div>
      {contentType === "tv" && (
        <div className="p-4 flex flex-col gap-4">
          <div>
            <label className="font-bold mr-2">Season:</label>
            <select
              className="p-2 rounded border"
              onChange={(e) => {
                setSelectedSeason(Number(e.target.value));
                setSelectedEpisode(1); // Reset to episode 1
              }}
              value={selectedSeason}
            >
              {seasons.map((season) => (
                <option key={season.id} value={season.season_number}>
                  Season {season.season_number}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-bold">Episodes:</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {episodes.map((episode) => (
                <button
                  key={episode.id}
                  className={`px-3 py-1 rounded ${
                    episode.episode_number === selectedEpisode
                      ? "bg-sky-600 text-white"
                      : "bg-gray-800 hover:bg-gray-900"
                  }`}
                  onClick={() => setSelectedEpisode(episode.episode_number)}
                >
                  {episode.episode_number}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

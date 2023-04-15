import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCardNew = ({ song, isPlaying, activeSong, i, data }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, i, data }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.item?.title || activeSong?.title === song.item?.name
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img src={song.item?.header_image_thumbnail_url || song.item?.cover_art_thumbnail_url} alt="song_img" />
        <div className="mt-4 flex flex-col">
          <p className="font-semibold text-lg text-white truncate">
            <Link to={`/songs/${song.item.id}`}>{song.item.title || song.item.name}</Link>
          </p>
          <p className="text-sm truncate text-gray-300 mt-1">
            <Link
              to={
                song.item.artists_names
                  ? `/artists/${song?.item.primary_artist?.id || song?.item.artist.id}`
                  : "/top-artists"
              }
            >
              {song.item.artist_names || song.item.artist.name}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SongCardNew;

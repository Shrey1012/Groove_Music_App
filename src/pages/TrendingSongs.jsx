import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { SongCardNew, Error, Loader} from "../components";
import { useGetTrendingSongsQuery } from "../redux/services/shazamCountry";

const TrendingSongs = () => {
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, error, isFetching } = useGetTrendingSongsQuery();

  if (isFetching && loading) return <Loader title="Loading Trending Songs..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Trending Songs
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-16">
        {data?.chart_items?.slice(0, 6).concat(data?.chart_items?.slice(7)).map((song, i) => (
          <SongCardNew
            key={song.item.id}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingSongs;

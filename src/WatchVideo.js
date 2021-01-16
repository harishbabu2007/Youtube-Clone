import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./WatchVideo.css";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import Search from "./Search";

function WatchVideo() {
  const { id } = useParams();
  const [results, setResults] = useState(false);
  const [stats, setStats] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyBRclFEYyh3Ispb5lN6m2FrIMy616CV9Uw`;
      await fetch(url)
        .then((res) => res.json())
        .then((data) => setResults(data));
    };
    const getStats = async () => {
      const url = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=AIzaSyBRclFEYyh3Ispb5lN6m2FrIMy616CV9Uw`;
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setStats(data);
        });
    };
    getStats();
    getData();
  }, []);

  const GetSearch = () => {
    try {
      return <Search query={results && results.items[0].snippet.tags[0]} />;
    } catch {
      return <Search query={results && results.items[0].snippet.title} />;
    }
  };

  return (
    <div className="watch">
      <div className="container_main">
        <div className="video_main_this">
          <div className="video-container">
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </div>
          <br />
          <h1>{results && results.items[0].snippet.title}</h1>
          <br />
          <div className="watch__stats">
            <p className="watch__views">
              {stats && stats.items[0].statistics.viewCount} views
            </p>
            <div className="watch_stats_likes">
              <div className="box">
                <div className="watch__one__stats">
                  <ThumbUpAltIcon />
                  <p className="like_dislike">
                    {stats && stats.items[0].statistics.likeCount}
                  </p>
                </div>
                <div className="watch__one__stats">
                  <ThumbDownIcon />
                  <p className="like_dislike">
                    {stats && stats.items[0].statistics.dislikeCount}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <hr />
          <div className="desc">
            <p>{results && results.items[0].snippet.description}</p>
          </div>
          <br />
          <hr />
        </div>
        <div className="all_search_results">
          <GetSearch />
        </div>
      </div>
    </div>
  );
}

export default WatchVideo;

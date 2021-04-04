import React, { useState, useEffect } from "react";
import "./Videos.css";
import VideoGen from "./VideoGen";

function Videos() {
  const api_key = "";
  const url = "https://www.googleapis.com/youtube/v3";
  const [results, setResults] = useState(false);

  useEffect(() => {
    const getData = async () => {
      await fetch(
        url +
          `/search?q=reactjs&key=${api_key}&part=snippet&maxResults=50&type=video&order=viewCount&videoEmbeddable=any`
      )
        .then((res) => res.json())
        .then((data) => {
          setResults(data.items);
        });
    };
    getData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <div className="videos">
      <h1>Recommended</h1>

      <div className="videos__sub">
        <div className="videos__container">
          {results &&
            results.map((item) => (
              <VideoGen
                img={item.snippet.thumbnails.medium.url}
                title={truncate(item.snippet.title, 50)}
                channel={item.snippet.channelTitle}
                id={item.id.videoId}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Videos;

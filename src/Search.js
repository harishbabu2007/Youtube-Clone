import React, { useEffect, useState } from "react";
import "./Videos.css";
import "./Search.css";

const Generator = ({ id, img, title, channel }) => {
  return (
    <div className="search__every">
      <a href={`/watch/${id}`}>
        <img alt="" src={img} />
      </a>

      <div className="search__info">
        <h3>{title}</h3>
        <h4>{channel}</h4>
      </div>
    </div>
  );
};

function Search({ query }) {
  const api_key = "AIzaSyBRclFEYyh3Ispb5lN6m2FrIMy616CV9Uw";
  const url = "https://www.googleapis.com/youtube/v3";
  const [results, setResults] = useState(false);

  useEffect(() => {
    const getData = async () => {
      await fetch(
        url +
          `/search?q=${query}&key=${api_key}&part=snippet&maxResults=50&type=video&order=viewCount&videoEmbeddable=any`
      )
        .then((res) => res.json())
        .then((data) => {
          setResults(data.items);
        });
    };
    getData();
  }, []);

  return (
    <div className="videos">
      {results &&
        results.map((item) => {
          return (
            <Generator
              title={item.snippet.title}
              img={item.snippet.thumbnails.medium.url}
              channel={item.snippet.channelTitle}
              id={item.id.videoId}
            />
          );
        })}
    </div>
  );
}

export default Search;

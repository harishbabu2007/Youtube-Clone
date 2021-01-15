import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Videos.css";
import "./Search.css";

const Generator = ({ img, title, channel, desc }) => {
  return (
    <div className="search__every">
      <img alt="" src={img} />
      <div className="search__info">
        <h3>{title}</h3>
        <h4>{channel}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

function SearchVideo() {
  const { query } = useParams();
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
              desc={item.snippet.description}
            />
          );
        })}
    </div>
  );
}

export default SearchVideo;

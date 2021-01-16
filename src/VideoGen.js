import React from "react";
import "./Videos.css";
import { Link } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function VideoGen({ id, img, title, channel, views, uploade }) {
  return (
    <div className="video">
      <a href={`/watch/${id}`}>
        <img src={img} alt="img"></img>
      </a>
      <div className="video__info">
        <div className="vido__info__vid">
          <h3>{title}</h3>
          <h5 className="video__channel">{channel}</h5>
        </div>
        <div className="video__dots">
          <MoreVertIcon />
        </div>
      </div>
    </div>
  );
}

export default VideoGen;

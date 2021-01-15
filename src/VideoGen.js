import React from "react";
import "./Videos.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function VideoGen({ img, title, channel, views, uploade }) {
  return (
    <div className="video">
      <img src={img} alt="img"></img>
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

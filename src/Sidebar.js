import React from "react";
import "./Sidebar.css";
import SidebarGen from "./SidebarGen";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

function Sidebar() {
  return (
    <div className="sidebar">
      <hr />
      <SidebarGen defaultSel={true} Icon={HomeIcon} title="Home" />
      <SidebarGen Icon={WhatshotIcon} title="Trending" />
      <SidebarGen Icon={SubscriptionsIcon} title="Subscription" />
      <hr />
      <SidebarGen Icon={VideoLibraryIcon} title="Library" />
      <SidebarGen Icon={HistoryIcon} title="History" />
      <SidebarGen Icon={OndemandVideoIcon} title="Your Videos" />
      <SidebarGen Icon={WatchLaterIcon} title="Watch Later" />
      <SidebarGen Icon={ThumbUpIcon} title="Liked videos" />
      <hr />
    </div>
  );
}

export default Sidebar;

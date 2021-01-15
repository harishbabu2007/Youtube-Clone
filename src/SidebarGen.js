import React from "react";
import "./Sidebar.css";

function SidebarGen({ defaultSel, Icon, title }) {
  return (
    <div className={`sidebar__component ${defaultSel && "default"}`}>
      <Icon className="icon" />
      <p className="title">{title}</p>
    </div>
  );
}

export default SidebarGen;

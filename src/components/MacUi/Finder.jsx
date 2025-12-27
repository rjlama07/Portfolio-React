import React from "react";
import WindowWrapper from "../../HOC/WindowWrapper";
import WindowControl from "./WindowControl";
import { Search } from "lucide-react";
import { locations } from "../../constants";
import useLocationStore from "../../store/UseLocationStore";
import clsx from "clsx";
import useWindowStore from "../../store/window";

const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();
  const openItem = (item) => {
    console.log(item.fileType);
    if (item.fileType === "pdf") {
      return openWindow("resume");
    }

    if (item.kind === "folder") {
      return setActiveLocation(item);
    }
    if (["fig", "url"].includes(item.fileType) && item.href) {
      return window.open(item.href);
    }

    if (item.fileType === "txt") {
      console.log("txtfile");
      return openWindow("txtfile", item);
    }
    if (item.fileType === "img") {
      console.log("cha");
      return openWindow("imgfile", item);
    }
  };
  return (
    <div>
      <div id="window-header">
        <WindowControl target="finder" />
        <Search className="icon" />
      </div>
      <div className="bg-white flex h-full">
        <div className="sidebar">
          <div>
            <h3>Favourites</h3>
            <ul>
              {Object.values(locations).map((e) => {
                return (
                  <li
                    key={e.id}
                    className={clsx(
                      e.id === activeLocation.id ? "active" : "not-active"
                    )}
                    onClick={() => {
                      setActiveLocation(e);
                    }}
                  >
                    <img className="w-4" src={"." + e.icon} alt="" />
                    <p className="text-sm font-medium truncate">{e.name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3>Work</h3>
            <ul>
              {locations.work.children.map((e) => {
                return (
                  <li
                    key={e.id}
                    className={clsx(
                      e.id === activeLocation.id ? "active" : "not-active"
                    )}
                    onClick={() => {
                      setActiveLocation(e);
                    }}
                  >
                    <img className="w-4" src={"." + e.icon} alt="" />
                    <p className="text-sm font-medium truncate">{e.name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <ul className="content">
          {activeLocation.children.map((e) => {
            return (
              <li
                key={e.id}
                className={e.position}
                onClick={() => {
                  openItem(e);
                }}
              >
                <img src={"." + e.icon} alt="" />
                <p>{e.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default WindowWrapper(Finder, "finder");

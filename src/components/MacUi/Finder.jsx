import React from "react";
import WindowWrapper from "../../HOC/WindowWrapper";
import WindowControl from "./WindowControl";
import { Search } from "lucide-react";
import { locations } from "../../constants";
import useLocationStore from "../../store/UseLocationStore";
import clsx from "clsx";

const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();
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
      </div>
    </div>
  );
};

export default WindowWrapper(Finder, "finder");

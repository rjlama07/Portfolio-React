import React from "react";
import { navIcons, navLinks } from "../../constants";
import dayjs from "dayjs";
import useWindowStore from "../../store/window";

const MacNavBar = () => {
  const { openWindow } = useWindowStore();
  return (
    <nav>
      <div>
        <img src="./images/logo.svg"></img>
        <p className="font-bold">Ritesh's Portfolio</p>
        <ul>
          {navLinks.map((e) => {
            return (
              <li
                key={e.id}
                onClick={() => {
                  openWindow(e.type);
                }}
              >
                <p>{e.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map((e) => {
            return (
              <li key={e.id}>
                <img src={"." + e.img} className="icon" alt={`icon-${e.id}`} />
              </li>
            );
          })}
        </ul>
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default MacNavBar;

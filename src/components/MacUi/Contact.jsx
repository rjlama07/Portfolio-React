import React from "react";
import WindowWrapper from "../../HOC/WindowWrapper";
import { socials } from "../../constants";
import WindowControl from "./WindowControl";

const MacContact = () => {
  return (
    <div>
      <div id="window-header">
        <WindowControl target="contact" />
        <h2>Contact Me</h2>
      </div>
      <div className="p-5 space-y-5 w-full">
        <img
          className="w-16 rounded-full contain-content"
          src="./images/rj.png"
          alt=""
        />
        <h3>Lets Connect</h3>
        <p>Got an Idea? A bug to squash? Or wanna talk tech? I'm in.</p>
        <p>riteshlama5@gmail.com</p>
        <ul>
          {socials.map((e) => {
            return (
              <li key={e.id} style={{ backgroundColor: e.bg }}>
                <a href={e.link} target="_blank" title={e.text}>
                  <img src={"." + e.icon} alt="" />
                  <p>{e.text}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default WindowWrapper(MacContact, "contact");

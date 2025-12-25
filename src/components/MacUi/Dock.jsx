import React, { useRef } from "react";
import { dockApps } from "../../constants";
import { Tooltip } from "react-tooltip";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useWindowStore from "../../store/window";

const MacDock = () => {
  const docRef = useRef(null);
  useGSAP(() => {
    const dock = docRef.current;
    if (!dock) {
      return;
    }
    const icons = dock.querySelectorAll(".dock-icon");
    const animateIcons = (mouseX) => {
      const { left } = dock.getBoundingClientRect();
      icons.forEach((icon) => {
        const { left: iconLLeft, width } = icon.getBoundingClientRect();
        const center = iconLLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);
        const intensity = Math.exp(-(distance * distance) / 2000);
        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };
    const handleMouseMove = (e) => {
      const { left } = dock.getBoundingClientRect();
      animateIcons(e.clientX - left);
    };

    const resetIcons = () => {
      icons.forEach((icon) => {
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.out",
        });
      });
    };

    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", resetIcons);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", resetIcons);
    };
  }, []);

  const { openWindow, closeWindow, windows } = useWindowStore();
  const toggleApp = (app) => {
    if (app.canOpen) {
      const w = windows[app.id];
      if (w.isOpen) {
        closeWindow(app.id);
      } else {
        openWindow(app.id);
      }
    }
    console.log(windows);
  };
  return (
    <section id="dock">
      <div ref={docRef} className="dock-container">
        {dockApps.map((app) => {
          return (
            <div key={app.id} className="relative flex justify-center">
              <button
                type="button"
                className="dock-icon"
                aria-label={app.name}
                data-tooltip-id="dock-tooltip"
                data-tooltip-content={app.name}
                data-tooltip-delay-show={150}
                disabled={!app.canOpen}
                onClick={() => {
                  const id = app.id;
                  const canOpen = app.canOpen;
                  toggleApp(app);
                }}
              >
                <img
                  src={`./images/${app.icon}`}
                  loading="lazy"
                  className={app.canOpen ? "" : "opacity-60"}
                  alt=""
                />
              </button>
            </div>
          );
        })}
        <Tooltip id="dock-tooltip" place="top" className="tooltip"></Tooltip>
      </div>
    </section>
  );
};

export default MacDock;

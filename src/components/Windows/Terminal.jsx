import React, { useState, useEffect } from "react";
import WindowWrapper from "../../HOC/WindowWrapper";
import { techStack } from "../../constants";
import { Check, Flag } from "lucide-react";
import WindowControl from "../MacUi/WindowControl";

const Terminal = () => {
  const [showCommand, setShowCommand] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);
  const [showFootnote, setShowFootnote] = useState(false);

  useEffect(() => {
    // First show the command prompt
    const commandTimer = setTimeout(() => {
      setShowCommand(true);
    }, 500);

    // Then start showing tech stack items one by one
    const startItemsTimer = setTimeout(() => {
      let currentIndex = 0;
      const totalItems = techStack.length;

      const interval = setInterval(() => {
        if (currentIndex < totalItems) {
          setVisibleItems((prev) => [...prev, currentIndex]);
          currentIndex++;
        } else {
          clearInterval(interval);
          // Show footnote after all items are loaded
          setTimeout(() => setShowFootnote(true), 300);
        }
      }, 200); // Speed between each item

      return () => clearInterval(interval);
    }, 1500); // Wait for command to finish typing

    return () => {
      clearTimeout(commandTimer);
      clearTimeout(startItemsTimer);
    };
  }, []);

  return (
    <>
      <div id="window-header">
        <WindowControl target="terminal"></WindowControl>
        <h2>Tech Stack</h2>
      </div>
      <div className="techstack">
        <p className="terminal-prompt">
          <span className="font-bold">@riteshjunglama</span>
        </p>

        {showCommand && (
          <p className="command-text typing-text">show tech stack</p>
        )}

        <div
          className="label"
          style={{
            opacity: showCommand ? 1 : 0,
            transition: "opacity 0.3s ease",
            transitionDelay: "0.5s",
          }}
        >
          <p className="w-32">Category</p>
          <p>Technology</p>
        </div>

        <ul className="content">
          {techStack.map((e, idx) => {
            const isVisible = visibleItems.includes(idx);
            return (
              <li
                key={e.category}
                className="flex items-center"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(-10px)",
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                }}
              >
                <Check className="check" size={20} />
                <h3>{e.category}</h3>
                <ul>
                  {e.items.map((item, index) => (
                    <li key={item}>
                      {item}
                      {index < e.items.length - 1 ? ", " : ""}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>

        {showFootnote && (
          <div
            className="footnote"
            style={{
              animation: "fadeIn 0.5s ease-in",
            }}
          >
            <p>
              <Check size={20} />
              All tech stacks loaded successfully (100%)
            </p>
            <p className="text-black">
              <Flag size={15} />
              Render time: 5ms
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes typing {
          from {
            width: 0;
            opacity: 1;
          }
          to {
            width: 100%;
            opacity: 1;
          }
        }

        .typing-text {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          animation: typing 1s steps(20) forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .terminal-prompt {
          margin-bottom: 0.25rem;
        }

        .command-text {
          margin-bottom: 1rem;
        }
      `}</style>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;

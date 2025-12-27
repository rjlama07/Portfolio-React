import React from "react";
import useWindowStore from "../../store/window";
import WindowWrapper from "../../HOC/WindowWrapper";
import WindowControl from "./WindowControl";

const Text = () => {
  const { windows } = useWindowStore();
  console.log(windows);
  const data = windows.txtfile?.data;
  if (!data) return null;
  const { name, image, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControl target="txtfile" />
        <h2>{name}</h2>
      </div>
      <div className="p-5 space-y-6 bg-white">
        {image && (
          <div className="w-full items-center justify-center flex">
            <img className="rounded  w-[40%]" src={"." + image} alt="" />
          </div>
        )}
        {subtitle && <h3 className="text-lg font-semibold">{subtitle}</h3>}
        {Array.isArray(description) && description.length > 0 && (
          <div className="space-y-3 leading-relaxed text-base text-gray-800">
            {description.map((item, idx) => {
              return <p key={idx}>{item}</p>;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default WindowWrapper(Text, "txtfile");

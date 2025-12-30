import React from "react";
import useWindowStore from "../../store/window";
import WindowWrapper from "../../HOC/WindowWrapper";
import WindowControl from "./WindowControl";

const Image = () => {
  const { windows } = useWindowStore();
  console.log(windows);
  const data = windows.imgfile?.data;
  console.log("Rendering");
  if (!data) return null;
  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowControl target="imgfile" />
        <h2>{name}</h2>
      </div>
      <div className="p-5 bg-white">
        {imageUrl && (
          <div className="w-full">
            <img
              className="w-full h-auto max-h-[70vh] object-contain rounded "
              src={"." + imageUrl}
              alt=""
            />
          </div>
        )}
      </div>
    </>
  );
};

export default WindowWrapper(Image, "imgfile");

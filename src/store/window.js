import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "../constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useWindowStore = create(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,
    openWindow: (windowsKey, data = null) =>
      set((state) => {
        const win = state.windows[windowsKey];
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nexttZIndex++;
      }),
    closeWindow: (windowsKey, data = null) =>
      set((state) => {
        const win = state.windows[windowsKey];
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),
    focusWindow: (windowsKey, data = null) =>
      set((state) => {
        const win = state.windows[windowsKey];
        win.zIndex = state.nextZIndex++;
      }),
  }))
);

export default useWindowStore;

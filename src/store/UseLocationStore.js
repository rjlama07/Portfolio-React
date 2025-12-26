import { locations } from "../constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const DEFAULTLOCATION = locations.work;

const useLocationStore = create(
  immer((set) => ({
    activeLocation: locations.work,
    setActiveLocation: (location = null) =>
      set((state) => {
        state.activeLocation = location;
      }),
    resetActiveLocation: (location = null) =>
      set((state) => {
        state.activeLocation = DEFAULTLOCATION;
      }),
  }))
);

export default useLocationStore;

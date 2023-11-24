import { create } from "zustand";

export const useOpenUtilityBarStore = create((set) => ({
  isOpen: true,
  setUtilityBar: (isOpen) => set((state) => ({ isOpen: !state.isOpen })),
}));

import {create} from "zustand";

type UIState = {
    sidebarCollapsed: boolean;
    toggleSidebar: () => void;
    closeSidebar: () => void;
    openSidebar: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  sidebarCollapsed: true,
  toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
  closeSidebar: () => set({sidebarCollapsed: false }),
  openSidebar: () => set({ sidebarCollapsed: true }),
}))
import { create } from 'zustand';

const useExampleCountStore = create((set) => ({
  zustandCount: 0,
  zustandIncrement: () => set((state) => ({ zustandCount: state.zustandCount + 1 })),
  zustandDecrement: () => set((state) => ({ zustandCount: state.zustandCount - 1 })),
  zustandReset: () => set({ zustandCount: 0 }),
}));

export default useExampleCountStore;

import { create } from 'zustand';

interface BearState {
  bears: number;
  increase: (by: number) => void;
  increment: () => void;
}

const useLunaStore = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
  increment: () => set((state) => ({ bears: state.bears + 1 })),
}));

export default useLunaStore;

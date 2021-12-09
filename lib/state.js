import create from 'zustand' // State management

export const useSlideState = create(set => ({
  slide: 0,
  next: () => set(state => ({ slide: state.slide+1 })),
  prev: () => set(state => ({ slide: state.slide > 0 ? state.slide - 1 : 0 })),
  reset: () => set(state => ({ slide: 0 }))
}))

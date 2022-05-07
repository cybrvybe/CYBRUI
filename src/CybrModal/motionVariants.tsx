export const styledWrapperMotionVariants = {
  visible: {
    opacity: [0, 1, 1],
    scale: [0, 1.2, 1],
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  hidden: {
    opacity: 0,
    scale: 0,
  },
  exit: {
    opacity: [1, 0.8, 0.4, 0.2],
    scale: [1, 1.2, 0.25, 0.25],
    transition: { duration: 0.4, ease: "easeInOut" },
    x: [0, 0, 0, 800],
  },
};

export const opacityTransitionMotionVariants = {
  exit: {
    opacity: 0.2,
  },
};

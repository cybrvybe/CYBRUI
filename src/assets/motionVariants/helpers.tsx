import { MotionDictType } from "./types";

export const mergeMotionVariants = (
  variantsOne: MotionDictType,
  variantsTwo: MotionDictType
) => {
  const mergedVariants = { ...variantsOne };
  for (const key in variantsTwo) {
    if (variantsTwo.hasOwnProperty(key)) {
      mergedVariants[key] = { ...variantsOne[key], ...variantsTwo[key] };
    }
  }
  return mergedVariants;
};

export const addTransitionToMotionVariants = (
  motionVariants: MotionDictType,
  duration: number
) => {
  const transition = {
    duration: duration,
    ease: "easeInOut",
  };
  const newVariants = { ...motionVariants };
  for (const key in motionVariants) {
    if (motionVariants.hasOwnProperty(key)) {
      newVariants[key].transition = transition;
    }
  }
  return newVariants;
};

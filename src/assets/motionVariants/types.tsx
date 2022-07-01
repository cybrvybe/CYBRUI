import { getScalingTransition } from "./motionVariants";

export type MotionDurationType = {
  enter: number;
  exit: number;
};

export type MotionDictType = {
  exit: any;
  hidden: any;
  visible: any;
  hover?: any;
};

export type GetOpacityTransitionMotionVariantsFuncType = (
  props?: MotionDurationType
) => MotionDictType;

export type GetDirectionTransitionMotionVariantsProps = {
  orientation: "vertical" | "horizontal";
  isInverted?: boolean;
  duration?: MotionDurationType;
};

export type GetDirectionTransitionMotionVariantFuncType = (
  props: GetDirectionTransitionMotionVariantsProps
) => MotionDictType;

export type GetScalingTransitionProps = {
  duration?: MotionDurationType;
  multiplier?: number;
  isInverted?: boolean;
};

export type GetScalingTransitionFuncType = (
  props?: GetScalingTransitionProps
) => MotionDictType;

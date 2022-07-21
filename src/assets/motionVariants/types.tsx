import { getScalingTransition } from "./motionVariants";

export type MotionDurationType = {
  enter: number;
  exit: number;
  hasExit?: boolean;
};

export enum MotionTransitionVariantEnum {
  EXIT = 'exit',
  HIDDEN = 'hidden',
  VISIBLE = 'visible',
  HOVER = 'hover'
}

export type MotionDictType = {
  [key: string]: any
};

export type GetOpacityTransitionMotionVariantsFuncType = (
  props?: MotionDurationType
) => MotionDictType;

export type GetDirectionTransitionMotionVariantsProps = {
  orientation: "vertical" | "horizontal";
  isInverted?: boolean;
  duration?: MotionDurationType;
  hasExit?: boolean;
};

export type GetDirectionTransitionMotionVariantFuncType = (
  props: GetDirectionTransitionMotionVariantsProps
) => MotionDictType;

export type GetScalingTransitionProps = {
  duration?: MotionDurationType;
  multiplier?: number;
  isInverted?: boolean;
  hasExit?: boolean;
};

export type GetScalingTransitionFuncType = (
  props?: GetScalingTransitionProps
) => MotionDictType;

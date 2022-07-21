import {
  GetDirectionTransitionMotionVariantFuncType,
  GetDirectionTransitionMotionVariantsProps,
  GetOpacityTransitionMotionVariantsFuncType,
  GetScalingTransitionFuncType,
  GetScalingTransitionProps,
  MotionDictType,
  MotionDurationType,
  MotionTransitionVariantEnum,
} from "./types";

export const styledModalWrapperMotionVariants = {
  visible: {
    opacity: [0, 1, 1],
    scale: [0, 1.2, 1],
    beforeChildren: true,
    transition: {
      duration: 0.2,
      ease: "easeIn",
      staggerChildren: 0.05,
      when: "beforeChildren",
    },
  },
  hidden: {
    opacity: 0,
    scale: 0,
    beforeChildren: true,
  },
  exit: {
    opacity: [1, 0.8, 0.4, 0.2],
    scale: [1, 1.2, 0.25, 0.25],
    transition: { duration: 0.5, ease: "easeInOut" },
    x: [0, 0, 0, 800],
    beforeChildren: true,
  },
};

export const getOpacityTransitionMotionVariants: GetOpacityTransitionMotionVariantsFuncType =
  (props?: MotionDurationType) => {
    const defaultDuration = 0.5;

    const motionDict: MotionDictType = {
      exit: {
        opacity: 0.4,
      },
      visible: {
        opacity: 1,
      },
      hidden: {
        opacity: 0,
      },
    };

    motionDict[MotionTransitionVariantEnum.VISIBLE] = {opacity: 1};
    motionDict[MotionTransitionVariantEnum.HIDDEN] = {opacity: 0};
    if (props?.hasExit) {
      motionDict[MotionTransitionVariantEnum.EXIT] = {opacity: 0.4};
    }
    return motionDict;
  };

export const getDirectionTransitionMotionVariants: GetDirectionTransitionMotionVariantFuncType =
  (props: GetDirectionTransitionMotionVariantsProps) => {
    const startPx = props.isInverted ? -500 : 500;
    const endPx = props.isInverted ? 500 : -500;

    const getOpacityTransitionMotionVariantsProps: MotionDurationType =
      props.duration ?? {
        enter: 0,
        exit: 0,
      };

    const opacityTransition = getOpacityTransitionMotionVariants(
      getOpacityTransitionMotionVariantsProps
    );

    if (props.orientation === "horizontal") {
      const hiddenHorizontalTransition = {
        x: startPx,
        ...opacityTransition.hidden,
        transition: {
          when: "beforeChildren",
        },
      };

      const visibleHorizontalTransition = {
        x: 0,
          ...opacityTransition.visible,
          transition: {
            when: "beforeChildren",
          },
      }

      const exitHorizontalTransition = {
          x: endPx,
          ...opacityTransition.exit,
          transition: {
            when: "beforeChildren",
          },
        
      }
      const horizontalMotionDict: MotionDictType = {
      };

      horizontalMotionDict[MotionTransitionVariantEnum.HIDDEN] = hiddenHorizontalTransition;
      horizontalMotionDict[MotionTransitionVariantEnum.VISIBLE] = visibleHorizontalTransition;
      if (props?.hasExit) {horizontalMotionDict[MotionTransitionVariantEnum.EXIT] = exitHorizontalTransition;}

      return horizontalMotionDict;
    } else {

      const hiddenVerticalTransition = {
        y: startPx,
        ...opacityTransition.hidden,
      };

      const visibleVerticalTransition = {
        y: 0,
        ...opacityTransition.visible,
      };

      const exitVerticalTransition = {
        y: endPx,
        ...opacityTransition.exit,
      };

      const verticalMotionDict: MotionDictType = {
      };

      verticalMotionDict[MotionTransitionVariantEnum.VISIBLE] = visibleVerticalTransition;
      verticalMotionDict[MotionTransitionVariantEnum.HIDDEN] = hiddenVerticalTransition;
      if (props?.hasExit) {
        verticalMotionDict[MotionTransitionVariantEnum.EXIT] = exitVerticalTransition;
      }

      return verticalMotionDict;
    }
  };

export const getScalingTransition: GetScalingTransitionFuncType = (
  props?: GetScalingTransitionProps
) => {
  const { duration, multiplier, isInverted } = props ?? {};

  const defaultMultiplier = 1.8;

  let initScale = isInverted ? 5 : 0;
  initScale = (multiplier ?? defaultMultiplier) * initScale;

  const endScale = 1;

  const motionDict: MotionDictType = {}
  motionDict[MotionTransitionVariantEnum.HIDDEN] = {
    scale: initScale,
    transition: {
      when: "beforeChildren",
    }
  };
  motionDict[MotionTransitionVariantEnum.VISIBLE] = {
    scale: endScale,
    transition: {
      when: "beforeChildren",
    },
  };
  motionDict[MotionTransitionVariantEnum.HOVER] = {
    scale: [endScale, endScale + 0.25, endScale + 0.1],
    transition: {
      when: "beforeChildren",
    },
  }
  if (props?.hasExit){
    motionDict[MotionTransitionVariantEnum.EXIT] = {
      scale: initScale,
      transition: {
        when: "beforeChildren",
      },
    }
  }

  

  return motionDict;
};

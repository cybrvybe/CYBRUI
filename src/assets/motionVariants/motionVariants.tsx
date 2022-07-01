import {
  GetDirectionTransitionMotionVariantFuncType,
  GetDirectionTransitionMotionVariantsProps,
  GetOpacityTransitionMotionVariantsFuncType,
  GetScalingTransitionFuncType,
  GetScalingTransitionProps,
  MotionDictType,
  MotionDurationType,
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
      const horizontalMotionDict: MotionDictType = {
        hidden: {
          x: startPx,
          ...opacityTransition.hidden,
          transition: {
            when: "beforeChildren",
          },
        },
        visible: {
          x: 0,
          ...opacityTransition.visible,
          transition: {
            when: "beforeChildren",
          },
        },
        exit: {
          x: endPx,
          ...opacityTransition.exit,
          transition: {
            when: "beforeChildren",
          },
        },
      };

      return horizontalMotionDict;
    } else {
      const verticalMotionDict: MotionDictType = {
        hidden: {
          y: startPx,
          ...opacityTransition.hidden,
        },
        visible: {
          y: 0,
          ...opacityTransition.visible,
        },
        exit: {
          y: endPx,
          ...opacityTransition.exit,
        },
      };

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

  const scalingMotionDict: MotionDictType = {
    hidden: {
      scale: initScale,
      transition: {
        when: "beforeChildren",
      },
    },
    visible: {
      scale: endScale,
      transition: {
        when: "beforeChildren",
      },
    },
    exit: {
      scale: initScale,
      transition: {
        when: "beforeChildren",
      },
    },
    hover: {
      scale: [endScale, endScale + 0.25, endScale + 0.1],
      transition: {
        when: "beforeChildren",
      },
    },
  };

  return scalingMotionDict;
};

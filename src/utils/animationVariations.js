export const fadeInFromLeft = {
  initial: { opacity: 0, x: -100 },
  animate: (custom) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: custom, ease: "easeOut" },
  }),
  hover: { scale: 1.1 },
};

export const fadeInFromRight = {
  initial: { opacity: 0, x: +100 },
  animate: (custom) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: custom, ease: "easeOut" },
  }),
  hover: { scale: 1.1 },
};

export const fadeInFromTop = {
  initial: { opacity: 0, y: -50 },
  animate: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: custom, ease: "easeOut" },
  }),
  hover: { scale: 1.1 },
};

export const fadeInFromBottom = {
  initial: { opacity: 0, y: 50 },
  animate: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: custom, ease: "easeOut" },
  }),
  hover: { scale: 1.1 },
};

export const spinClockwise = {
  initial: { rotate: 0 },
  animate: (custom) => ({
    rotate: 360,
    transition: { duration: custom, delay: 1.5, ease: "linear" },
  }),
  hover: (custom) => ({
    rotate: [0, 360],
    transition: { duration: custom, ease: "linear" },
  }),
};

"use client";
import { motion } from "framer-motion";

const MotionWrapper = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  ...rest
}) => {
  const variants = {
    up: { initial: { y: 50, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    down: { initial: { y: -50, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    left: { initial: { x: -50, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    right: { initial: { x: 50, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    fade: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  };

  const chosen = variants[direction];

  return (
    <motion.div
      initial={chosen.initial}
      animate={chosen.animate}
      transition={{ duration, delay, ease: "easeOut" }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;

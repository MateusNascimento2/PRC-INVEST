import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function TextoDigitado({ text }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    text.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 1,
      ease: "easeInOut",
    });
    return controls.stop;
  }, [text.length, count]);

  return (
    <span>
      <span className="sr-only">{text}</span>
      <span aria-hidden='true'>
        <motion.span>{displayText}</motion.span>
      </span>

    </span>
  );
}
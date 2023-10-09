"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

type Props = {
  link: string;
};

const MotionSpan = ({ link }: Props) => {
  const pathname = usePathname();

  return (
    <>
      {pathname === link && (
        <motion.span
          layoutId="motionActive"
          className="w-full h-0.5 bg-red-600 block mt-2"
        />
      )}
    </>
  );
};

export default MotionSpan;

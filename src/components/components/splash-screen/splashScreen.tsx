"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function SplashScreen() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="relative h-screen w-full bg-[#252730]">
      <motion.div
        className="relative top-[60px] m-auto flex h-[500px] w-[326px] justify-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="absolute bottom-0" variants={item}>
          <Image
            src="/images/splash-background.svg"
            alt="splashIcon1"
            width={266}
            height={444}
          />
        </motion.div>
        <motion.div className="absolute left-[5px] top-[186px]" variants={item}>
          <Image
            src="/images/splash-icon1.svg"
            alt="splashIcon1"
            width={170}
            height={120}
          />
        </motion.div>
        <motion.div className="absolute right-0 top-[281px]" variants={item}>
          <Image
            src="/images/splash-icon2.svg"
            alt="splashIcon1"
            width={160}
            height={120}
          />
        </motion.div>
        <motion.div className="absolute left-[8px] top-[27px]" variants={item}>
          <Image
            src="/images/splash-icon3.svg"
            alt="splashIcon1"
            width={180}
            height={120}
          />
        </motion.div>
        <motion.div className="absolute right-0 top-[105px]" variants={item}>
          <Image
            src="/images/splash-icon4.svg"
            alt="splashIcon1"
            width={160}
            height={120}
          />
        </motion.div>
      </motion.div>
      <div className="absolute top-[584px] w-full text-center text-[24px] text-[#F7F7FA]">
        <div>제주시 청년 정책</div>
        <div>통합 플랫폼</div>
      </div>
    </div>
  );
}

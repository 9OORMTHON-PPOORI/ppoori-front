"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function SplashScreen() {
  const container = {
    initial: {
      opacity: 1,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delayChildren: 0.2,
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="relative h-screen w-full bg-[#252730]">
      <motion.div
        className="relative top-[15%] m-auto flex h-[500px] w-[326px] justify-center"
        variants={container}
        initial="initial"
        animate="animate"
      >
        <motion.div className="absolute bottom-0" variants={item}>
          <Image
            src="/images/splash-background.svg"
            alt="splashBackground"
            width={266}
            height={416}
          />
        </motion.div>
        <motion.div
          className="absolute right-[4px] top-[301px]"
          variants={item}
        >
          <Image
            src="/images/splash-icon2.svg"
            alt="splashIcon2"
            width={160}
            height={125}
          />
        </motion.div>
        <motion.div
          className="absolute left-[-6px] top-[212px]"
          variants={item}
        >
          <Image
            src="/images/splash-icon1.svg"
            alt="splashIcon1"
            width={168}
            height={134}
          />
        </motion.div>
        <motion.div
          className="absolute right-[-6px] top-[110px]"
          variants={item}
        >
          <Image
            src="/images/splash-icon3.svg"
            alt="splashIcon3"
            width={180}
            height={141}
          />
        </motion.div>
        <motion.div className="absolute left-[8px] top-[34px]" variants={item}>
          <Image
            src="/images/splash-icon4.svg"
            alt="splashIcon4"
            width={168}
            height={140}
          />
        </motion.div>
        <motion.div
          className="absolute top-[-9px] w-full text-center font-pretendard text-[22px] text-[#B4E0FF]/80"
          variants={item}
        >
          제주시 청년 정책 통합 플랫폼
        </motion.div>
      </motion.div>
    </div>
  );
}

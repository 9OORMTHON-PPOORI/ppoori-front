"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function SplashScreen() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const container = {
    initial: {
      opacity: 1,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.4,
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
    exit: {
      y: 20,
      opacity: 0,
    },
  };

  return (
    <div className="relative h-screen w-full bg-[#252730]">
      <motion.div
        key={key}
        className="relative top-[127px] m-auto flex h-[500px] w-[326px] justify-center"
        variants={container}
        initial="initial"
        animate="animate"
        exit="exit"
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
          className="absolute right-[8px] top-[301px]"
          variants={item}
        >
          <Image
            src="/images/splash-icon2.svg"
            alt="splashIcon2"
            width={150}
            height={119}
          />
        </motion.div>
        <motion.div className="absolute left-0 top-[219px]" variants={item}>
          <Image
            src="/images/splash-icon1.svg"
            alt="splashIcon1"
            width={156}
            height={113}
          />
        </motion.div>
        <motion.div className="absolute right-0 top-[140px]" variants={item}>
          <Image
            src="/images/splash-icon4.svg"
            alt="splashIcon4"
            width={159}
            height={108}
          />
        </motion.div>
        <motion.div className="absolute left-[22px] top-[48px]" variants={item}>
          <Image
            src="/images/splash-icon3.svg"
            alt="splashIcon3"
            width={159}
            height={112}
          />
        </motion.div>
        <motion.div
          className="absolute top-[-9px] w-full text-center font-pretendard text-[22px] text-[#F7F7FA]"
          variants={item}
        >
          제주시 청년 정책 통합 플랫폼
        </motion.div>
      </motion.div>
    </div>
  );
}

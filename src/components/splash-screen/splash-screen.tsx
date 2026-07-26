"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * @param onComplete 스태거를 포함한 등장 애니메이션이 모두 끝났을 때 호출된다.
 */
export function SplashScreen({ onComplete }: { onComplete?: () => void }) {
  const container = {
    initial: {
      opacity: 1,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0,
        delayChildren: 0.2,
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    initial: {
      y: 10,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.75,
      },
    },
  };

  return (
    <div className="relative flex h-[100vh] w-full items-center bg-[#252730]">
      <motion.div
        className="relative m-auto flex h-[500px] w-[326px] justify-center"
        variants={container}
        initial="initial"
        animate="animate"
        onAnimationComplete={onComplete}
      >
        <motion.div className="absolute bottom-0" variants={item}>
          <Image
            src="/images/splash-background.svg"
            alt=""
            aria-hidden
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
            alt=""
            aria-hidden
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
            alt=""
            aria-hidden
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
            alt=""
            aria-hidden
            width={180}
            height={141}
          />
        </motion.div>
        <motion.div className="absolute left-[8px] top-[34px]" variants={item}>
          <Image
            src="/images/splash-icon4.svg"
            alt=""
            aria-hidden
            width={168}
            height={140}
          />
        </motion.div>
        <motion.div
          className="absolute top-[-9px] w-full text-center font-pretendard text-[22px] text-gray-50"
          variants={item}
        >
          제주시 청년 정책 통합 플랫폼
        </motion.div>
      </motion.div>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import Transition from "@/components/common/aniamte-presence";
import Layout from "@/components/common/layout";
import { InterestSelectButton } from "@/components/components/button/interset-select-button";
import { UserSelectButton } from "@/components/components/button/user-select-button";
import { SplashScreen } from "@/components/components/splash-screen/splashScreen";
import { Button } from "@/components/ui/button";

import useUserInfoStore from "@/store/user-info-store";

import { POLICY_CATEGORIES, YOUTH_TARGETS } from "@/constants/policy";

/** 스플래시 애니메이션이 끝까지 재생되는 시간. */
const SPLASH_DURATION_MS = 5000;

export default function Home() {
  const [step, setStep] = useState(1);
  const [isSplashDone, setIsSplashDone] = useState(false);
  const { target, interest, setTarget, setInterest } = useUserInfoStore();

  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setIsSplashDone(true), SPLASH_DURATION_MS);

    return () => clearTimeout(timer);
  }, []);

  const handleNextBtn = () => {
    setStep((previousStep) => previousStep + 1);
  };

  if (!isSplashDone) return <SplashScreen />;

  return (
    <Layout>
      <div className="relative w-full">
        {step === 1 && (
          <Transition>
            <div>
              <div className="w-full text-left">
                <p className="text-title-1 text-po-gray-800">나는</p>
                <p className="text-title-1 text-po-gray-800">누구인가요?</p>
              </div>
              <div className="mb-[48px] mt-6 grid grid-cols-2 place-items-center gap-3">
                {YOUTH_TARGETS.map(({ label }) => (
                  <UserSelectButton
                    key={label}
                    target={target}
                    setTarget={setTarget}
                    label={label}
                  />
                ))}
              </div>
              <div className="flex w-full justify-center">
                <Button
                  className="h-[60px] w-[120px] rounded-full"
                  onClick={handleNextBtn}
                  disabled={target === ""}
                >
                  다음
                </Button>
              </div>
            </div>
          </Transition>
        )}
        {step === 2 && (
          <Transition>
            <div>
              <div className="w-full text-left">
                <p className="text-title-1 text-po-gray-800">어떤 정책이</p>
                <p className="text-title-1 text-po-gray-800">궁금하세요?</p>
              </div>
              <div className="mb-[48px] mt-6 grid grid-cols-2 place-items-center gap-3">
                {POLICY_CATEGORIES.map(({ label, iconSrc }) => (
                  <InterestSelectButton
                    key={label}
                    interest={interest}
                    setInterest={setInterest}
                    label={label}
                    imageSrc={iconSrc}
                  />
                ))}
              </div>
              <div className="flex w-full justify-center">
                <Button
                  className="h-[60px] w-[120px] rounded-full"
                  onClick={() => router.push(`/policy`)}
                  disabled={interest === ""}
                >
                  완료
                </Button>
              </div>
            </div>
          </Transition>
        )}
      </div>
    </Layout>
  );
}

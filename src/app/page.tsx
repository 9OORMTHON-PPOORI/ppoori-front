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

export default function Home() {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = React.useState(false);
  const { target, interest, setTarget, setInterest } = useUserInfoStore();

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => setLoading(true), 4500);
  }, []);

  const handleNextBtn = () => {
    setPage(page + 1);
  };

  if (!loading) return <SplashScreen />;

  return (
    <Layout>
      <div className="relative w-full">
        {page === 1 && (
          <Transition>
            <div>
              <div className="w-full text-left">
                <p className="text-title-1 text-po-gray-800">나는</p>
                <p className="text-title-1 text-po-gray-800">누구인가요?</p>
              </div>
              <div className="mb-[48px] mt-6 grid grid-cols-2 place-items-center gap-3">
                {[
                  "대학생",
                  "취준생",
                  "재직자",
                  "신혼부부",
                  "농어업인",
                  "예술가",
                ].map((label) => (
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
        {page === 2 && (
          <Transition>
            <div>
              <div className="w-full text-left">
                <p className="text-title-1 text-po-gray-800">어떤 정책이</p>
                <p className="text-title-1 text-po-gray-800">궁금하세요?</p>
              </div>
              <div className="mb-[48px] mt-6 grid grid-cols-2 place-items-center gap-3">
                {[
                  { label: "활동지원", imageSrc: "/svgs/interest-1.svg" },
                  { label: "역량개발", imageSrc: "/svgs/interest-2.svg" },
                  { label: "생활지원", imageSrc: "/svgs/interest-3.svg" },
                  { label: "진로지원", imageSrc: "/svgs/interest-4.svg" },
                ].map(({ label, imageSrc }) => (
                  <InterestSelectButton
                    key={label}
                    interest={interest}
                    setInterest={setInterest}
                    label={label}
                    imageSrc={imageSrc}
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

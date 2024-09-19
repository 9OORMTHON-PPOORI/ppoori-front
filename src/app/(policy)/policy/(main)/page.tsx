"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import useUserInfoStore from "@/store/user-info-store";

import { PolicyRecommend } from "@/types/policy";

const selectedInterestMapping: Record<string, string> = {
  "역량 개발": "COMPETENCY_DEVELOPMENT",
  "생활 지원": "LIVING_SUPPORT",
  "활동 지원": "ACTIVITY_SUPPORT",
  "진로 지원": "CAREER_SUPPORT",
};

const selectedTargetMapping: Record<string, string> = {
  대학생: "STUDENT",
  취준생: "JOBSEEKER",
  재직자: "WORKER",
  신혼부부: "NEWLYWEDS",
  농어업인: "INDUSTRY",
  예술가: "ARTIST",
};

export default function Policy() {
  const { target, interest, setInterest } = useUserInfoStore();
  const [res, setRes] = useState<PolicyRecommend[]>();
  // const { mutate: policyRecommend } = usePolicyRecommend({
  //   onSuccess: (res) => {
  //     setRes(res);
  //   },
  //   onError: () => {
  //     alert("데이터 요청에 실패하였습니다.");
  //   },
  // });

  // useEffect(() => {
  //   if (target && interest) {
  //     policyRecommend({
  //       comment: selectedInterestMapping[interest],
  //       target: selectedTargetMapping[target],
  //     });
  //   }
  // }, [policyRecommend, target, interest]);

  const router = useRouter();

  const mainImage: Record<string, string> = {
    "활동 지원": "/images/interestImage1.svg",
    "역량 개발": "/images/interestImage2.svg",
    "생활 지원": "/images/interestImage3.svg",
    "진로 지원": "/images/interestImage4.svg",
  };

  // if (!res) return null;

  return (
    <div>
      <div className="flex h-full flex-col items-center justify-center">
        <div className="relative mt-[12px] flex w-full justify-center">
          <Image
            src={mainImage["진로 지원"]}
            alt="관심사 이미지"
            width={164}
            height={120}
          />
        </div>
        <h3 className="mb-[18px] text-center text-title-1 text-white">
          서비스 종료 안내
        </h3>
        <p className="mb-[18px] text-center text-text-3 text-white">
          안녕하세요, 뿌리 서비스를 사랑해 주신 여러분
          <br />
          아쉽게도 저희 서비스가 종료되었음을 알려드립니다
          <br />
          그동안 보내주신 관심과 사랑에 진심으로 감사드립니다
          <br />
        </p>
      </div>
      {/* <div className="mt-8 flex justify-center text-title-4">
        <Drawer>
          <DrawerTrigger>
            <div className="flex gap-[8px]">
              <div className="font-pretendard text-title-4 text-[#FFFFFF]">
                {interest}
              </div>
              <Image
                src="/icon/arowfill.svg"
                alt="arrowfillIcon"
                width={12}
                height={12}
              />
            </div>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerFooter>
              <div className="mt-[24px] grid grid-cols-2 place-items-center gap-3">
                {[
                  { label: "활동 지원", imageSrc: "/svgs/interest-1.svg" },
                  { label: "역량 개발", imageSrc: "/svgs/interest-2.svg" },
                  { label: "생활 지원", imageSrc: "/svgs/interest-3.svg" },
                  { label: "진로 지원", imageSrc: "/svgs/interest-4.svg" },
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
              <DrawerClose>
                <button className="mt-[32px] h-[60px] w-full rounded-[16px] bg-po-cyan-2 text-subtitle-1 text-po-gray-000 duration-300 hover:brightness-90">
                  선택
                </button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div> */}
      {/* <div className="relative mt-[12px] flex w-full justify-center">
        <Image
          src={mainImage[interest]}
          alt="관심사 이미지"
          width={164}
          height={120}
        />
      </div> */}
      {/* <div className="mt-[-70px]">
        <PolicySwiper policyCards={res} />
      </div> */}
      {/* <div
        className="flex cursor-pointer content-center justify-center pb-6 text-center text-text-1 text-po-darkcyan-2"
        onClick={() => router.push("/policy/list")}
      >
        정책 전체보기
      </div> */}
    </div>
  );
}

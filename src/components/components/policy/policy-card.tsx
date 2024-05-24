"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export function PolicyCard({
  id,
  name,
  title,
  category,
  interestCount,
  notInterestCount,
}: Record<string, string>) {
  const router = useRouter();

  const mainImage: Record<string, string> = {
    COMPETENCY_DEVELOPMENT: "/images/third-target1.svg",
    LIVING_SUPPORT: "/images/third-target2.svg",
    ACTIVITY_SUPPORT: "/images/third-target3.svg",
    CAREER_SUPPORT: "/images/third-target4.svg",
  };

  return (
    <div
      className="shadow-[0_4px_6px_1px_rgba(0,0,0,0.2) mb-[10px] max-w-sm cursor-pointer rounded-2xl bg-[#F0F0F5] px-[20px] py-[24px] leading-[140%] leading-[140%] duration-500 hover:brightness-[90%]"
      onClick={() => router.push(`/policy/details/${id}`)}
    >
      <div className="flex">
        <div className="flex-grow">
          <h2 className="mb-[6px] line-clamp-2 text-lg font-bold">{title}</h2>
          <p className="mb-[16px] text-sm font-light">{name}</p>
          <div className="mr-[33px] flex justify-between border-gray-200">
            <div className="flex items-center text-[13px] font-medium text-[#858899]">
              <span className="text-[13px] font-medium">관심 없어요</span>
              <span className="ml-1 text-[15px] font-semibold text-[#525463]">
                {interestCount}
              </span>
            </div>
            <div className="flex items-center text-[13px] font-medium text-[#858899]">
              <span className="text-[13px] font-medium">관심 없어요</span>
              <span className="ml-1 text-[15px] font-semibold text-[#525463]">
                {notInterestCount}
              </span>
            </div>
          </div>
        </div>
        <div className="ml-[14px] flex-shrink-0">
          <div className="px-[15px]x items-center rounded-[16px] object-center">
            <Image
              src={mainImage[category]}
              alt="관심사 이미지"
              width={90}
              height={104}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

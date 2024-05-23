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
  return (
    <div
      className="shadow-[0_4px_6px_1px_rgba(0,0,0,0.2) mb-[10px] max-w-sm cursor-pointer rounded-2xl bg-[#F0F0F5] px-[20px] py-[24px] leading-[140%] duration-500 hover:brightness-[90%]"
      onClick={() => router.push(`/policy/details/${id}`)}
    >
      <div className="flex">
        <div className="flex-grow">
          <h2 className="mb-[6px] text-lg font-bold">{title}</h2>
          <p className="mb-[16px] text-sm font-light">{name}</p>
          <div className="mr-8 flex justify-between border-gray-200">
            <div className="flex items-center text-[13px] font-medium text-[#858899]">
              <span>관심 없어요</span>
              <span className="ml-1 text-[15px] font-semibold">
                {interestCount}
              </span>
            </div>
            <div className="flex items-center text-[13px] font-medium text-[#858899]">
              <span>관심 없어요</span>
              <span className="ml-1 text-[15px] font-semibold">
                {notInterestCount}
              </span>
            </div>
          </div>
        </div>
        <div className="ml-4 flex-shrink-0">
          <div className="items-center rounded-[16px] bg-[#FE4C40] object-center px-[15px] py-[20px] shadow-[0_4px_6px_1px_rgba(0,0,0,0.2)]">
            <Image
              src="/images/interestSmallImage1.svg"
              alt="관심사 이미지"
              width={88}
              height={100}
            />

            <div className="mt-[4px] text-center text-xs font-normal text-[#FFBEBA]">
              활동지원
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

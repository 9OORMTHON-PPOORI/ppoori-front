"use client";

import { useRouter } from "next/navigation";

export function PolicyCard() {
  const router = useRouter();
  return (
    <div
      className="mb-[10px] max-w-sm cursor-pointer rounded-lg bg-[#F9F9F9] px-6 py-[17px]"
      onClick={() => router.push("/policy/details")}
    >
      <div className="flex items-center">
        <div className="mb-6 flex-grow">
          <h2 className="mb-2 text-xl font-semibold">
            제주 청년문제와 해결 방안 한 번 제안해볼까?
          </h2>
          <p className="text-[#222222]">제주특별자치도 도민기자단 창업...</p>
        </div>
        <div className="ml-4 flex-shrink-0">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FE4C40]">
            <div className="text-center text-xs font-normal text-white">
              활동지원
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between border-t border-gray-200 px-6 pt-[16px]">
        <div className="text-sm font-medium text-[#555555]">
          관심 없어요 <span className="text-[15px] font-semibold">23</span>
        </div>
        <div className="text-sm font-medium text-[#555555]">
          관심 있어요 <span className="text-[15px] font-semibold">23</span>
        </div>
      </div>
    </div>
  );
}

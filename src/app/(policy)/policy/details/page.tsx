"use client";

import { Cross1Icon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";

export default function PolicyDetails() {
  const router = useRouter();
  return (
    <>
      <nav className="my-3 flex h-[44px] max-w-[390px] items-center px-6">
        <div
          className="flex w-full items-center justify-end"
          onClick={() => router.back()}
        >
          <Cross1Icon className="h-[24px] w-[24px]" />
        </div>
      </nav>
      <div className="font-pretendard font-semibold">
        <div className="flex items-center justify-center">
          <div className="w-full">
            <div className="mb-[10px] w-[160px] rounded-[6px] bg-[#FFF3F4] px-[8px] py-[7px] text-sm text-[#F3213B]">
              만 39세 이하 예비 창업자
            </div>
            <div className="mb-4">
              <h2 className="mt-2 p-0 text-3xl font-extrabold text-black">
                제주특별자치도 도민기
              </h2>
              <h2 className="text-3xl font-extrabold text-black">
                자단 창업 청년 등록
              </h2>
            </div>
            <div className="mb-12">
              <h5 className="text-base">
                제주 청년문제와 해결방안 한 번 제안해볼까?
              </h5>
            </div>
            <div className="mb-8">
              <div className="mb-2 font-bold text-black">지원내용</div>
              <ul className="list-disc pl-5 font-medium text-[#666666]">
                <li>예비 창업자 및 대학생에게 창업을 위한 열린 공간을 제공</li>
                <li>디지털 장비 교육, 시제품 제작 등 사업화 지원</li>
              </ul>
            </div>
            <div className="mb-[50px]">
              <div className="mb-2 font-bold text-black">문의처</div>
              <div className="font-medium text-[#666666]">
                소상공인과
                <a href="tel:0647103903" className="ml-1 text-[#56ACEA]">
                  (064)710-3903
                </a>
              </div>
            </div>
            <div className="mb-5 flex justify-center gap-[10px]">
              <div className="flex w-[112px] flex-col items-center justify-center rounded-[16px] border-[1px] border-solid border-[#EEEEEE] px-[23px] py-[15px]">
                <h5 className="text-xl font-bold">23</h5>
                <p className="text-[14px] font-medium text-[#555555]">
                  관심 없어요
                </p>
              </div>
              <div className="flex w-[112px] flex-col items-center rounded-[16px] border-[1px] border-solid border-[#EEEEEE] p-[15px]">
                <h5 className="text-xl font-bold">12</h5>
                <p className="text-[14px] font-medium text-[#555555]">
                  맘에 들어요
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-[16px] bg-[#F9F9F9] p-5 font-normal">
                <div className="mb-2">
                  뿌리내린청년312
                  <span className="ml-2 text-[12px] font-extralight text-[#AAAAAA]">
                    30분전
                  </span>
                </div>
                <div className="mb-4 text-[14px] text-gray-900">
                  오 이거 좋은데요? 신청하러갑니다
                </div>
                <Input
                  placeholder="댓글을 입력하세요"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

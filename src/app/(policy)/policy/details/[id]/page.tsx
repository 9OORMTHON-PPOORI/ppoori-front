"use client";

import { Cross1Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { usePolicyDetail } from "@/lib/hook/policy";

export default function PolicyDetails({ params }: { params: { id: string } }) {
  const { data: policyDetails } = usePolicyDetail(params.id);
  const router = useRouter();

  return (
    <>
      <nav className="my-3 flex h-[44px] max-w-[390px] items-center">
        <div
          className="flex w-full items-center justify-end"
          onClick={() => router.back()}
        >
          <Cross1Icon className="h-[24px] w-[24px]" />
        </div>
      </nav>
      <div className="mb-5 font-pretendard font-semibold">
        <div className="flex items-center justify-center">
          <div className="w-full">
            <div className="mb-[10px] max-w-[200px] rounded-[6px] bg-[#FFF3F4] px-[8px] py-[7px] text-sm text-[#F3213B]">
              {policyDetails?.subject}
            </div>
            <div className="mb-4">
              <h2 className="mt-2 p-0 text-3xl font-extrabold text-black">
                {policyDetails?.name}
              </h2>
            </div>
            <div className="mb-12">
              <h5 className="text-base">{policyDetails?.title}</h5>
            </div>
            <div className="mb-8">
              <div className="mb-2 font-bold text-black">지원내용</div>
              <ul className="list-disc pl-5 font-medium text-[#666666]">
                {policyDetails?.detail.map((detail: string, index: number) => (
                  <li key={`${detail}-${index}`}>{detail}</li>
                ))}
                <li>예비 창업자 및 대학생에게 창업을 위한 열린 공간을 제공</li>
                <li>디지털 장비 교육, 시제품 제작 등 사업화 지원</li>
              </ul>
            </div>
            <div className="mb-[50px]">
              <div className="mb-2 font-bold text-black">문의처</div>
              <div className="font-medium text-[#666666]">
                {policyDetails?.contact}
                {/* <a href="tel:0647103903" className="ml-1 text-[#56ACEA]">
                  (064)710-3903
                </a> */}
              </div>
            </div>
            <div className="mb-5 flex justify-center gap-[10px]">
              <div className="flex w-[112px] cursor-pointer flex-col items-center justify-center rounded-[16px] border-[1px] border-solid border-[#EEEEEE] px-[23px] py-[15px]">
                <h5 className="text-xl font-bold">{policyDetails?.hateRate}</h5>
                <p className="text-[14px] font-medium text-[#555555]">
                  관심 없어요
                </p>
              </div>
              <div className="flex w-[112px] cursor-pointer flex-col items-center rounded-[16px] border-[1px] border-solid border-[#EEEEEE] p-[15px]">
                <h5 className="text-xl font-bold">{policyDetails?.hateRate}</h5>
                <p className="text-[14px] font-medium text-[#555555]">
                  맘에 들어요
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-[16px] bg-[#F9F9F9] p-5 font-normal">
                <div className="">
                  <div className="flex items-center">
                    <Image
                      src="/icon/comment.png"
                      alt="commentIcon"
                      width={15}
                      height={15}
                      className="mr-[6px]"
                    />
                    <span>뿌리내린청년312</span>
                    <span className="ml-2 mt-1 text-[12px] font-extralight text-[#AAAAAA]">
                      30분전
                    </span>
                  </div>
                </div>
                <div className="mb-4 ml-5 text-[14px] text-gray-900">
                  오 이거 좋은데요? 신청하러갑니다
                </div>
                <div className="flex">
                  <Input
                    placeholder="댓글을 입력하세요"
                    className="mr-[10px] w-full flex-1 rounded-lg border border-gray-300 px-4 py-2"
                  />
                  <Button className="h-[42px] rounded-2xl">
                    <Image
                      src="/icon/airplane.png"
                      alt="airplane"
                      width={15}
                      height={15}
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

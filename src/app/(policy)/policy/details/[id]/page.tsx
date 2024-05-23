"use client";

import { Cross1Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { patchPolicyHate, patchPolicyLike } from "@/lib/api/policy";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { usePolicyComment, usePolicyDetail } from "@/lib/hook/policy";

interface PolicyCommentType {
  writer: string;
  content: string;
}

export default function PolicyDetails({ params }: { params: { id: string } }) {
  const { data: policyDetails, refetch: policyDetailsRefetch } =
    usePolicyDetail(params.id);
  const { mutate: policyComment } = usePolicyComment({
    onSuccess: () => {
      alert("댓글이 등록되었습니다.");
      policyDetailsRefetch();
    },
    onError: () => {
      alert("댓글 등록에 실패하였습니다.");
    },
  });
  const [comment, setComment] = useState("");
  const router = useRouter();

  const handleCommentSubmit = (e: any) => {
    e.preventDefault();
    policyComment({ comment, id: params.id });
  };

  const handleHate = () => {
    try {
      patchPolicyHate(params.id);
      policyDetailsRefetch();
      window.location.reload();
      alert("등록에 성공했습니다.");
    } catch (error) {
      alert("등록에 실패했습니다.");
    }
  };

  const handleLike = () => {
    try {
      patchPolicyLike(params.id);
      alert("등록에 성공했습니다.");
      window.location.reload();
    } catch (error) {
      alert("등록에 실패했습니다.");
    }
  };

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
            <div className="mb-[10px] grid max-w-[200px] rounded-[6px] bg-[#FFF3F4] px-[8px] py-[7px] text-sm text-[#F3213B]">
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
              <div
                className="flex w-[166px] cursor-pointer items-center justify-center rounded-[16px] border-[1px] border-solid border-[#EEEEEE] px-[23px] py-[15px] hover:brightness-[90%]"
                onClick={() => handleHate()}
              >
                <div className="text-[14px] font-medium text-[#555555]">
                  관심 없어요
                </div>
                <h5 className="ml-[6px] text-[15px] font-bold text-[#F7737C]">
                  {policyDetails?.hateRate}
                </h5>
              </div>
              <div
                className="flex w-[166px] cursor-pointer items-center justify-center rounded-[16px] border-[1px] border-solid border-[#EEEEEE] px-[23px] py-[15px] hover:brightness-[90%]"
                onClick={() => handleLike()}
              >
                <p className="text-[14px] font-medium text-[#555555]">
                  맘에 들어요
                </p>
                <h5 className="ml-[6px] text-[15px] font-bold text-[#F7737C]">
                  {policyDetails?.likeRate}
                </h5>
              </div>
            </div>
            <div className="rounded-[16px] bg-[#F9F9F9] p-5 font-normal">
              {policyDetails?.comments.map((data: PolicyCommentType) => (
                <div key={data.content}>
                  <div>
                    <div className="flex items-center">
                      <Image
                        src="/icon/comment.png"
                        alt="commentIcon"
                        width={15}
                        height={15}
                        className="mr-[6px]"
                      />
                      <span>{data.writer}</span>
                      <span className="ml-2 mt-1 text-[12px] font-extralight text-[#AAAAAA]">
                        30분전
                      </span>
                    </div>
                  </div>
                  <div className="mb-4 ml-5 text-[14px] text-gray-900">
                    {data.content}
                  </div>
                </div>
              ))}
              <form className="flex" onSubmit={(e) => handleCommentSubmit(e)}>
                <Input
                  placeholder="댓글을 입력하세요"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="mr-[10px] w-full flex-1 rounded-lg border border-gray-300 px-4 py-2"
                />
                <Button type="submit" className="h-[42px] rounded-2xl">
                  <Image
                    src="/icon/airplane.png"
                    alt="airplane"
                    width={15}
                    height={15}
                  />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

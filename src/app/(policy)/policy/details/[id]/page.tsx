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

const TargetData: Record<string, string> = {
  U: "대학생",
  R: "취준생",
  W: "재직자",
  M: "신혼부부",
  F: "농어입인",
  A: "예술가",
};

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
      <nav className="mb-6 flex h-[44px] max-w-[390px] items-center px-2">
        <div
          className="flex w-full items-center justify-end"
          onClick={() => router.back()}
        >
          <Cross1Icon className="h-[24px] w-[24px]" />
        </div>
      </nav>
      <div className="mb-5 px-2 font-pretendard font-semibold">
        <div className="flex items-center justify-center">
          <div className="w-full">
            <div className="flex gap-2">
              {policyDetails?.subject.split("").map((subject: string) => (
                <div
                  className="mb-6 grid w-fit rounded-[6px] bg-po-red-1 px-[8px] py-[3px] text-sm text-po-red-2"
                  key={subject}
                >
                  {TargetData[subject]}
                </div>
              ))}
            </div>
            <div className="mb-2">
              <h2 className="p-0 text-title-1 text-po-gray-800">
                {policyDetails?.name}
              </h2>
            </div>
            <div>
              <h5 className="text-title-4 text-po-gray-700">
                {policyDetails?.title}
              </h5>
            </div>
            <div className="mb-12 mt-4 border-[1px] border-b-0 border-po-gray-300" />
            <div className="mb-8">
              <div className="mb-[10px] text-title-3 text-po-gray-800">
                지원대상
              </div>
              <div className="text-text-2 text-po-gray-700">
                {policyDetails?.name}
              </div>
            </div>
            <div className="mb-8">
              <div className="mb-[10px] text-title-3 text-po-gray-800">
                지원내용
              </div>
              <ul className="list-none text-text-2 text-po-gray-700">
                {policyDetails?.detail.map((detail: string, index: number) => (
                  <li key={`${detail}-${index}`} className="mb-[10px]">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-[50px]">
              <div className="mb-[10px] text-title-3 text-po-gray-700">
                문의처
              </div>
              <div className="flex items-start gap-[10px] text-text-2 text-po-gray-700">
                {policyDetails?.department}
                <a
                  href={`tel:${policyDetails?.contact}`}
                  className="ml-1 flex items-center gap-[2px] text-base font-normal text-po-cyan-2"
                >
                  <Image
                    src="/icon/call.svg"
                    alt="callIcon"
                    width={16}
                    height={16}
                  />
                  <span className="min-w-[120px]">
                    {policyDetails?.contact}
                  </span>
                </a>
              </div>
            </div>
            <div className="mb-5 flex justify-center gap-[10px]">
              <div
                className="flex w-full cursor-pointer flex-col items-center justify-center rounded-[16px] border-[1px] border-solid border-gray-300 bg-[#CDCED614] px-[23px] py-[15px] duration-500 hover:border-po-cyan-2 hover:brightness-[90%]"
                onClick={() => handleHate()}
              >
                <h5 className="text-2xl font-black text-po-gray-700">
                  {policyDetails?.hateRate}
                </h5>
                <div className="text-text-4 font-medium text-po-gray-600">
                  좋아요
                </div>
              </div>
              <div
                className="flex w-full cursor-pointer flex-col items-center justify-center rounded-[16px] border-[1px] border-solid border-gray-300 bg-[#CDCED614] px-[23px] py-[15px] duration-500 hover:border-po-cyan-2 hover:brightness-[90%]"
                onClick={() => handleLike()}
              >
                <h5 className="text-2xl font-black text-po-gray-700">
                  {policyDetails?.likeRate}
                </h5>
                <div className="text-text-4 font-medium text-po-gray-600">
                  별로에요
                </div>
              </div>
            </div>
            <div className="rounded-[16px] bg-po-gray-200 p-5 px-6 py-5 font-normal">
              {policyDetails?.comments.map((data: PolicyCommentType) => (
                <div key={data.content} className="mb-6">
                  <div className="mb-[6px] flex items-end justify-between">
                    <div className="flex items-center">
                      <Image
                        src="/icon/comment.svg"
                        alt="commentIcon"
                        width={24}
                        height={24}
                        className="mr-[2px]"
                      />
                      <span className="text-text-4 text-po-gray-600">
                        {data.writer}
                      </span>
                    </div>
                    <span className="text-caption text-po-gray-500">
                      방금 전
                    </span>
                  </div>
                  <div className="ml-[26px] text-text-1 text-po-gray-700">
                    {data.content}
                  </div>
                </div>
              ))}
              <form className="flex" onSubmit={(e) => handleCommentSubmit(e)}>
                <Input
                  placeholder="댓글을 입력하세요"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="mr-[6px] h-[48px] w-full flex-1 rounded-2xl px-4 py-[9px]"
                />
                <Button type="submit" className="h-[48px] rounded-2xl">
                  <Image
                    src="/icon/airplane.svg"
                    alt="airplane"
                    width={24}
                    height={24}
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

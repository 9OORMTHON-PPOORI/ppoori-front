"use client";

import { Cross1Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  usePolicyComment,
  usePolicyDetail,
  usePolicyHate,
  usePolicyLike,
} from "@/lib/hook/policy";

interface PolicyCommentType {
  writer: string;
  content: string;
}

const Tags: Record<string, Record<string, string>> = {
  "역량 개발": {
    title: "역량 개발",
    color: "text-po-green-2 bg-po-green-1",
  },
  "생활 지원": {
    title: "생활 지원",
    color: "text-po-blue-2 bg-po-blue-1",
  },
  "활동 지원": {
    title: "활동 지원",
    color: "text-po-red-2 bg-po-red-1",
  },
  "진로 지원": {
    title: "진로 지원",
    color: "text-po-pink-2 bg-po-pink-1",
  },
};

export default function PolicyDetails({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [liked, setLiked] = useState(false);
  const [hated, setHated] = useState(false);
  const [comment, setComment] = useState("");

  const { data: policyDetails, refetch: detailsRefetch } = usePolicyDetail(
    params.id
  );
  const { mutate: policyComment } = usePolicyComment({
    onSuccess: () => {
      detailsRefetch();
      setComment("");
    },
  });
  const { mutate: policyLike } = usePolicyLike({
    onSuccess: () => {
      detailsRefetch();
    },
  });
  const { mutate: policyHate } = usePolicyHate({
    onSuccess: () => {
      detailsRefetch();
    },
  });

  const handleCommentSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    policyComment({ comment, id: params.id });
  };

  const handleHate = () => {
    policyHate(params.id);
    setHated(true);

    setTimeout(() => {
      setHated(false);
    }, 500);
  };

  const handleLike = () => {
    setLiked(true);
    policyLike(params.id);

    setTimeout(() => {
      setLiked(false);
    }, 500);
  };

  return (
    <>
      <nav className="mb-3 flex h-[50px] max-w-[390px] items-center">
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
            {policyDetails?.category && Tags[policyDetails.category] && (
              <div
                className={`mb-3 flex h-[20px] w-[57px] items-center rounded-[6px] px-[6px] text-caption ${Tags[policyDetails.category].color}`}
              >
                {Tags[policyDetails.category].title}
              </div>
            )}
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
            <div className="mr-12">
              <div className="mb-8">
                <div className="mb-[10px] text-title-3 text-po-gray-800">
                  지원대상
                </div>
                <div className="text-text-2 text-po-gray-700">
                  {policyDetails?.subject}
                </div>
              </div>
              <div className="mb-8">
                <div className="mb-[10px] text-title-3 text-po-gray-800">
                  지원내용
                </div>
                <ul className="list-none text-text-2 text-po-gray-700">
                  {policyDetails?.detail.map(
                    (detail: string, index: number) => (
                      <li key={`${detail}-${index}`} className="mb-[10px]">
                        {detail}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="mb-[50px]">
                <div className="mb-[10px] text-title-3 text-po-gray-800">
                  문의처
                </div>
                <div className="flex max-w-[278px] items-start gap-[10px] text-text-2 text-po-gray-700">
                  <p className="max-w-[133px]">{policyDetails?.department}</p>
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
                    <span className="min-w-[115px] truncate">
                      {policyDetails?.contact}
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-5 flex justify-center gap-[10px]">
              <div
                className={`group flex w-full cursor-pointer flex-col items-center justify-center rounded-[16px] border-[1px] border-solid px-[23px] py-[15px] text-po-gray-600 duration-500  ${liked ? "border-po-cyan-2 bg-po-cyan-1" : "border-gray-300 bg-[#CDCED614] hover:border-po-gray-300 hover:bg-[#CDCED633]"}`}
                onClick={() => handleLike()}
              >
                <h5 className="text-2xl font-black text-po-gray-700">
                  {policyDetails?.like_count}
                </h5>
                <div
                  className={`text-text-4 font-medium duration-500 group-active:text-po-cyan-2 ${liked ? "text-po-cyan-2" : "text-po-gray-600"}`}
                >
                  좋아요
                </div>
              </div>
              <div
                className={`group flex w-full cursor-pointer flex-col items-center justify-center rounded-[16px] border-[1px] border-solid px-[23px] py-[15px] text-po-gray-600 duration-500  ${hated ? "border-po-cyan-2 bg-po-cyan-1" : "border-gray-300 bg-[#CDCED614] hover:border-po-gray-300 hover:bg-[#CDCED633]"}`}
                onClick={() => handleHate()}
              >
                <h5 className="text-2xl font-black text-po-gray-700">
                  {policyDetails?.hate_count}
                </h5>
                <div
                  className={`text-text-4 font-medium duration-500 group-active:text-po-cyan-2 ${hated ? "text-po-cyan-2" : "text-po-gray-600"}`}
                >
                  별로예요
                </div>
              </div>
            </div>
            <div className="rounded-[16px] bg-po-gray-200 p-5 px-[20px] py-[24px] font-normal">
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
                  <div className="mx-[26px] text-text-1 text-po-gray-700">
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
                <Button
                  type="submit"
                  className="h-[48px] rounded-2xl"
                  disabled={!comment}
                >
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

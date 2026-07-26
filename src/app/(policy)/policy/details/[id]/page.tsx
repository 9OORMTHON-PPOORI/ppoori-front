"use client";

import { Cross1Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useId, useState } from "react";

import LoadingSpinner from "@/components/components/loading/loading-spinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { findPolicyCategory } from "@/constants/policy";
import {
  usePolicyComment,
  usePolicyDetail,
  usePolicyHate,
  usePolicyLike,
} from "@/lib/hook/policy";

export default function PolicyDetails({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [liked, setLiked] = useState(false);
  const [hated, setHated] = useState(false);
  const [comment, setComment] = useState("");
  const commentInputId = useId();

  const { data: policyDetails, isLoading: policyDetailsLoading } =
    usePolicyDetail(params.id);
  const { mutate: policyComment } = usePolicyComment(params.id, {
    onSuccess: () => setComment(""),
  });
  const { mutate: policyLike } = usePolicyLike(params.id);
  const { mutate: policyHate } = usePolicyHate(params.id);

  const policyCategory = policyDetails
    ? findPolicyCategory(policyDetails.category)
    : undefined;

  const handleCommentSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    policyComment(comment);
  };

  const handleHate = () => {
    policyHate();
    setHated(true);

    setTimeout(() => {
      setHated(false);
    }, 500);
  };

  const handleLike = () => {
    setLiked(true);
    policyLike();

    setTimeout(() => {
      setLiked(false);
    }, 500);
  };

  if (policyDetailsLoading) return <LoadingSpinner />;

  return (
    <>
      <nav className="mb-3 flex h-[50px] max-w-[390px] items-center justify-end">
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="닫기"
          className="flex h-11 w-11 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-po-cyan-2"
        >
          <Cross1Icon className="h-[24px] w-[24px]" />
        </button>
      </nav>
      <div className="mb-5 font-pretendard font-semibold">
        <div className="flex items-center justify-center">
          <div className="w-full">
            {policyCategory ? (
              <div
                className={`mb-6 flex h-[28px] w-[68px] items-center rounded-[6px] px-[8px] py-[3px] text-caption text-sm font-medium leading-[22px] ${policyCategory.tagClassName}`}
              >
                {policyCategory.label}
              </div>
            ) : null}
            <div className="mb-2">
              <h1 className="p-0 text-title-1 text-po-gray-800">
                {policyDetails?.name}
              </h1>
            </div>
            <div>
              <p className="text-title-4 text-po-gray-700">
                {policyDetails?.title}
              </p>
            </div>
            <div className="mb-12 mt-4 border-[1px] border-b-0 border-po-gray-300" />
            <div className="mr-12">
              <div className="mb-8">
                <h2 className="mb-[10px] text-title-3 text-po-gray-800">
                  지원대상
                </h2>
                <div className="text-text-2 text-po-gray-700">
                  {policyDetails?.subject}
                </div>
              </div>
              <div className="mb-8">
                <h2 className="mb-[10px] text-title-3 text-po-gray-800">
                  지원내용
                </h2>
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
                <h2 className="mb-[10px] text-title-3 text-po-gray-800">
                  문의처
                </h2>
                <div className="flex max-w-[278px] items-start gap-[10px] text-text-2 text-po-gray-700">
                  <p className="max-w-[133px]">{policyDetails?.department}</p>
                  <a
                    href={`tel:${policyDetails?.contact}`}
                    className="ml-1 flex items-center gap-[2px] text-base font-normal text-po-cyan-2"
                  >
                    <Image
                      src="/icon/call.svg"
                      alt=""
                      aria-hidden
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
              <button
                type="button"
                onClick={handleLike}
                aria-label={`좋아요 ${policyDetails?.likeCount ?? 0}개, 누르면 좋아요를 남깁니다`}
                className={`group flex w-full flex-col items-center justify-center rounded-[16px] border-[1px] border-solid px-[23px] py-[15px] text-po-gray-600 duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-po-cyan-2 ${liked ? "border-po-cyan-2 bg-po-cyan-1" : "border-gray-300 bg-[#CDCED614] hover:border-po-gray-300 hover:bg-[#CDCED633]"}`}
              >
                <span className="text-2xl font-black text-po-gray-700">
                  {policyDetails?.likeCount}
                </span>
                <span
                  className={`text-text-4 font-medium duration-500 group-active:text-po-cyan-2 ${liked ? "text-po-cyan-2" : "text-po-gray-600"}`}
                >
                  좋아요
                </span>
              </button>
              <button
                type="button"
                onClick={handleHate}
                aria-label={`별로예요 ${policyDetails?.hateCount ?? 0}개, 누르면 별로예요를 남깁니다`}
                className={`group flex w-full flex-col items-center justify-center rounded-[16px] border-[1px] border-solid px-[23px] py-[15px] text-po-gray-600 duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-po-cyan-2 ${hated ? "border-po-cyan-2 bg-po-cyan-1" : "border-gray-300 bg-[#CDCED614] hover:border-po-gray-300 hover:bg-[#CDCED633]"}`}
              >
                <span className="text-2xl font-black text-po-gray-700">
                  {policyDetails?.hateCount}
                </span>
                <span
                  className={`text-text-4 font-medium duration-500 group-active:text-po-cyan-2 ${hated ? "text-po-cyan-2" : "text-po-gray-600"}`}
                >
                  별로예요
                </span>
              </button>
            </div>
            <section className="rounded-[16px] bg-po-gray-200 p-5 px-[20px] py-[24px] font-normal">
              <h2 className="sr-only">
                댓글 {policyDetails?.comments.length ?? 0}개
              </h2>
              <ul>
                {/*
                  백엔드가 댓글 식별자를 내려주지 않는다. content만 쓰면 같은
                  내용의 댓글 두 개가 key를 공유하므로 작성자와 순서를 함께 쓴다.
                */}
                {policyDetails?.comments.map((data, index) => (
                  <li key={`${data.writer}-${index}`} className="mb-6">
                    <div className="mb-[6px] flex items-end justify-between">
                      <div className="flex items-center">
                        <Image
                          src="/icon/comment.svg"
                          alt=""
                          aria-hidden
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
                    <p className="mx-[26px] text-text-1 text-po-gray-700">
                      {data.content}
                    </p>
                  </li>
                ))}
              </ul>
              <form className="flex" onSubmit={handleCommentSubmit}>
                <label htmlFor={commentInputId} className="sr-only">
                  댓글 입력
                </label>
                <Input
                  id={commentInputId}
                  placeholder="댓글을 입력하세요"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="mr-[6px] h-[48px] w-full flex-1 rounded-2xl px-4 py-[9px]"
                />
                <Button
                  type="submit"
                  aria-label="댓글 등록"
                  className="h-[48px] rounded-2xl"
                  disabled={!comment}
                >
                  <Image
                    src="/icon/airplane.svg"
                    alt=""
                    aria-hidden
                    width={24}
                    height={24}
                  />
                </Button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

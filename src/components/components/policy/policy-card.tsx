"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export function PolicyCard({
  id,
  name,
  title,
  category,
  likeCount,
  hateCount,
  totalComment,
}: Record<string, string>) {
  const router = useRouter();

  const tags: Record<string, Record<string, string>> = {
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

  return (
    <div
      className="mb-[10px] cursor-pointer rounded-2xl border-[1px] border-white bg-white px-[20px]  py-[24px] leading-[140%] shadow-[0_4px_6px_#0000000A] duration-500 hover:-translate-y-1 hover:border-po-cyan-2"
      onClick={() => router.push(`/policy/details/${id}`)}
    >
      <div className="flex">
        <div className="flex-grow">
          {tags[category] && (
            <div
              className={`mb-3 flex h-[20px] w-[57px] items-center rounded-[6px] px-[6px] text-caption ${tags[category].color}`}
            >
              {tags[category].title}
            </div>
          )}
          <h2 className="mb-[6px] w-[300px] truncate text-title-2">{name}</h2>
          <p className="text-text-4 text-po-gray-800">{title}</p>
          <div className="my-2 border-[1px] border-t-0 border-po-gray-300" />
          <div className="flex justify-between">
            <div className="flex gap-6">
              <div className="flex items-center gap-1 text-po-gray-600">
                <span className="text-caption">좋아요</span>
                <span className="text-[13px] font-black">{likeCount}</span>
              </div>
              <div className="flex items-center gap-1 text-po-gray-600">
                <span className="text-caption">별로예요</span>
                <span className="text-[13px] font-black">{hateCount}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-po-gray-600">
              <Image
                src="/icon/speech-bubble.svg"
                alt="speech-bubble"
                width={16}
                height={16}
              />
              <p className="text-[13px] font-black">{totalComment}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

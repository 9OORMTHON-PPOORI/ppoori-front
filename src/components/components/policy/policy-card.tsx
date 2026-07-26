import Image from "next/image";
import Link from "next/link";

import { findPolicyCategory } from "@/constants/policy";

import { Policy } from "@/types/policy";

export function PolicyCard({ policy }: { policy: Policy }) {
  const { id, name, title, category, likeCount, hateCount, commentCount } =
    policy;
  const policyCategory = findPolicyCategory(category);

  return (
    <Link
      href={`/policy/details/${id}`}
      className="mb-[10px] block rounded-2xl border-[1px] border-white bg-white px-[20px] py-[24px] leading-[140%] shadow-[0_4px_6px_#0000000A] duration-500 hover:-translate-y-1 hover:border-po-cyan-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-po-cyan-2"
    >
      <div className="flex">
        <div className="flex-grow">
          {policyCategory ? (
            <div
              className={`mb-3 flex h-[20px] w-[57px] items-center rounded-[6px] px-[6px] text-caption ${policyCategory.tagClassName}`}
            >
              {policyCategory.label}
            </div>
          ) : null}
          <h2 className="mb-[6px] max-w-[300px] truncate text-title-2">
            {name}
          </h2>
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
              <p className="text-[13px] font-black">{commentCount}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

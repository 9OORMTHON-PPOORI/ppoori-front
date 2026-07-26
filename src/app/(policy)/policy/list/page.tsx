"use client";

import { CaretLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

import { PolicyCard } from "@/components/components/policy/policy-card";

import { usePolicy } from "@/lib/hook/policy";

export default function PolicyList() {
  const router = useRouter();
  const { data: policyList } = usePolicy();

  return (
    <>
      <div className="relative z-50 m-auto flex h-[50px] cursor-pointer items-center justify-center font-pretendard">
        <div
          className="absolute left-0 flex w-full items-center justify-start"
          onClick={() => router.back()}
        >
          <CaretLeftIcon className="h-8 w-8" />
        </div>
        <h3 className="text-title-4 font-medium">정책 전체</h3>
      </div>
      <div className="mt-5 font-pretendard font-semibold">
        {policyList?.map((policy) => (
          <PolicyCard key={policy.id} policy={policy} />
        ))}
      </div>
    </>
  );
}

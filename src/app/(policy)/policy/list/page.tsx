"use client";

import { CaretLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

import { usePolicyList } from "@/lib/hooks/policy";

import StatusNotice from "@/components/common/status-notice";
import LoadingSpinner from "@/components/loading/loading-spinner";
import { PolicyCard } from "@/components/policy/policy-card";

import { Policy } from "@/types/policy";

export default function PolicyList() {
  const router = useRouter();
  const { data: policyList, isLoading, isError, error } = usePolicyList();

  return (
    <>
      <header className="relative z-50 m-auto flex h-[50px] items-center justify-center font-pretendard">
        {/*
          이전에는 이 요소가 w-full 절대배치 div여서 헤더 전체를 덮었다.
          제목을 클릭해도 뒤로가기가 실행됐고, 키보드로는 조작할 수 없었다.
        */}
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="이전 화면으로"
          className="absolute left-0 flex h-11 w-11 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-po-cyan-2"
        >
          <CaretLeftIcon className="h-8 w-8" />
        </button>
        <h1 className="text-title-4 font-medium">정책 전체</h1>
      </header>
      <PolicyListBody
        policyList={policyList}
        isLoading={isLoading}
        isError={isError}
        errorMessage={error?.message}
      />
    </>
  );
}

/** 목록 자리에 들어갈 내용을 로딩·실패·빈 결과·정상 네 갈래로 나눈다. */
function PolicyListBody({
  policyList,
  isLoading,
  isError,
  errorMessage,
}: {
  policyList?: Policy[];
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string;
}) {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <StatusNotice>{errorMessage}</StatusNotice>;
  }

  if (!policyList || policyList.length === 0) {
    return <StatusNotice>등록된 정책이 없습니다.</StatusNotice>;
  }

  return (
    <ul className="mt-5 font-pretendard font-semibold">
      {policyList.map((policy) => (
        <li key={policy.id}>
          <PolicyCard policy={policy} />
        </li>
      ))}
    </ul>
  );
}

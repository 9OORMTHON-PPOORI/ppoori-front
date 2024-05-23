"use client";

import Header from "@/components/common/header";
import { PolicyCard } from "@/components/components/policy/policy-card";

import { usePolicy } from "@/lib/hook/policy";

export default function PolicyList() {
  const { data: policyList } = usePolicy();
  return (
    <>
      <Header />
      <div className="mt-5 font-pretendard font-semibold">
        {Array.isArray(policyList) &&
          policyList.map((policy: any, index: number) => (
            <div key={`${policy.name}-${index}`}>
              <PolicyCard
                id={policy.id}
                name={policy.name}
                title={policy.title}
                interestCount={policy.likeRate}
                notInterestCount={policy.hateRate}
              />
            </div>
          ))}
      </div>
    </>
  );
}

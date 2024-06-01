"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import PolicySwiper from "@/components/components/policy/policy-swiper";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { usePolicyRecommend } from "@/lib/hook/policy";

const selectedValueMapping: Record<string, string> = {
  역량개발: "COMPETENCY_DEVELOPMENT",
  생활지원: "LIVING_SUPPORT",
  활동지원: "ACTIVITY_SUPPORT",
  진로지원: "CAREER_SUPPORT",
};

export default function Policy() {
  const searchParams = useSearchParams();

  const target = searchParams.get("target") ?? "";
  const interest = searchParams.get("interest") ?? "";

  const [res, setRes] = useState<any>();
  const { mutate: policyRecommend } = usePolicyRecommend({
    onSuccess: (res) => {
      setRes(res);
    },
    onError: () => {
      alert("데이터 요청에 실패하였습니다.");
    },
  });

  useEffect(() => {
    if (target && interest) {
      policyRecommend({
        comment: selectedValueMapping[interest],
        target: "U",
      });
    }
  }, [policyRecommend, target, interest]);

  const router = useRouter();

  const mainImage: Record<string, string> = {
    역량개발: "/images/interestImage1.svg",
    생활지원: "/images/interestImage2.svg",
    활동지원: "/images/interestImage3.svg",
    진로지원: "/images/interestImage4.svg",
  };

  if (!res && !target && !interest) return;

  return (
    <div>
      <div className="mt-[12px] flex justify-center text-title-4">
        <Select
          onValueChange={(value) => {
            router.push(`/policy/?target=${target}&interest=${value}`);
          }}
          defaultValue={interest}
        >
          <SelectTrigger className="w-[120px] border-none text-title-4 tracking-tighter text-po-darkcyan-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="활동지원">활동 지원</SelectItem>
              <SelectItem value="역량개발">역량 개발</SelectItem>
              <SelectItem value="생활지원">생활 지원</SelectItem>
              <SelectItem value="진로지원">진로 지원</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="relative mb-[-20px] mt-[12px] flex w-full justify-center">
        <Image
          src={mainImage[interest]}
          alt="관심사 이미지"
          width={164}
          height={120}
        />
      </div>
      <div>
        <PolicySwiper policyCards={res} />
      </div>
      <div
        className="flex cursor-pointer content-center justify-center text-center text-text-1 text-po-darkcyan-2"
        onClick={() => router.push("/policy/list")}
      >
        카테고리 전체보기
      </div>
    </div>
  );
}

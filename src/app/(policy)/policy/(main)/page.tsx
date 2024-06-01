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
    <div className="min-h-full bg-[#619EC9] pb-[40px]">
      <div className="flex justify-center">
        <div
          className="flex items-center gap-2 pb-[13px] pt-[12px] hover:cursor-pointer"
          onClick={() => router.push("/reset")}
        >
          <Image
            className="rounded-full"
            src="/images/icon_profile.svg"
            alt="대상 이미지"
            width={25}
            height={25}
            style={{ height: 25 }}
          />
          <div className="mt-1 text-text-1 text-white/50">
            {window.localStorage.getItem("대상")}
          </div>
        </div>
      </div>
      <div className="ml-[15px] mt-[12px] flex justify-center">
        <Select
          onValueChange={(value) => {
            router.push(`/policy/?target=${target}&interest=${value}`);
          }}
          defaultValue={interest}
        >
          <SelectTrigger className="w-[120px] border-none px-[12px] text-[20px] font-medium leading-[30px] tracking-tighter text-po-darkcyan-1">
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
      <div className="relative z-[1] mb-[-20px] mt-[12px] flex w-full justify-center">
        <Image
          src={mainImage[interest]}
          alt="관심사 이미지"
          width={164}
          height={120}
        />
      </div>
      <div className="relative z-50 mt-0">
        <PolicySwiper policyCards={res} />
      </div>
      <div className="flex justify-center text-sm">
        <div
          className="w-[160px] content-center text-center text-text-1 text-[#B4E0FF] hover:cursor-pointer"
          onClick={() => router.push("/policy/list")}
        >
          카테고리 전체보기
        </div>
      </div>
    </div>
  );
}

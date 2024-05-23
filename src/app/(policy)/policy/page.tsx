"use client";

import { useRouter } from "next/navigation";
import PolicySwiper from "@/components/components/policy/policy-swiper";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { faker } from "@faker-js/faker";
import { useState } from "react";

export default function Policy() {
  const [selectedValue, setSelectedValue] = useState<string | null>(
    window.localStorage.getItem("관심사")
  );
  const router = useRouter();

  return (
    <div className="relative bg-[#619EC9]">
      <div className="my-4 flex justify-center">
        <div
          className="flex items-center gap-2 pb-[13px] pt-[12px] hover:cursor-pointer"
          onClick={() => router.push("/reset")}
        >
          <Image
            className="rounded-full"
            src={faker.image.urlLoremFlickr()}
            alt="대상 이미지"
            width={25}
            height={25}
            style={{ height: 25 }}
          />
          <div className="text-md text-white/50">
            {window.localStorage.getItem("대상")}
          </div>
        </div>
      </div>
      <div className="mt-[18px] flex justify-center text-[26px]">
        <Select
          onValueChange={(value) => {
            setSelectedValue(value);
            localStorage.setItem("관심사", value);
          }}
          defaultValue={selectedValue ? selectedValue : ""}
        >
          <SelectTrigger className="w-28 border-none text-[26px] text-white/80">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="활동지원">활동지원</SelectItem>
              <SelectItem value="역량개발">역량개발</SelectItem>
              <SelectItem value="생활지원">생활지원</SelectItem>
              <SelectItem value="진로지원">진로지원</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="relative mt-[12px] flex h-[100px] w-full justify-center">
        <Image
          className="object-cover"
          src="/images/interestImage1.svg"
          alt="관심사 이미지"
          fill
          sizes="100vw"
        />
      </div>
      <div className="mt-0">
        <PolicySwiper />
      </div>
      <div className="text-md flex justify-center ">
        <div
          className="mb-[76px] mt-[20px] h-[48px] w-[121px] content-center rounded-[100px] border-[1px] border-solid border-white/60 px-4 text-center text-white/60 hover:cursor-pointer"
          onClick={() => router.push("/policy/list")}
        >
          정책 전체보기
        </div>
      </div>
    </div>
  );
}

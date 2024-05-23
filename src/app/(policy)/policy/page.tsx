"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
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

export default function Policy() {
  const router = useRouter();
  return (
    <div className="relative">
      <div
        className="my-4 flex cursor-pointer justify-end"
        onClick={() => router.push("policy/list")}
      >
        <div className="flex items-center gap-2 rounded-[100px] border-[1px] border-solid border-[#E5E5E5] px-4 py-3 text-lg text-[#555555]">
          <p>전체</p>
          <HamburgerMenuIcon className="h-6 w-6" />
        </div>
      </div>
      <div className="text-[26px]">
        <h3>20대 여성</h3>
        <Select>
          <SelectTrigger className="w-28 text-[26px]">
            <SelectValue placeholder="활동지원" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="active1">활동지원</SelectItem>
              <SelectItem value="active2">역량개발</SelectItem>
              <SelectItem value="active3">생활지원</SelectItem>
              <SelectItem value="active4">진로지원</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-6">
        <PolicySwiper />
      </div>
      <div className="mt-12">
        <span className="cursor-pointer text-xl font-semibold">마이</span>
      </div>
    </div>
  );
}

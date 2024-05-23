"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function PolicyCard() {
  const router = useRouter();
  return (
    <Card
      className="my-5 w-full cursor-pointer"
      onClick={() => router.push("/policy/details")}
    >
      <CardHeader>
        <CardDescription>제주청년위탁회의</CardDescription>
        <CardTitle>제주 청년문제와 해결방안 한 번 제안해볼까?</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5 rounded-xl bg-gray-200 p-2 text-sm">
            <div className="flex items-center gap-2">
              <ArrowRightIcon className="h-4 w-4" />
              <p className="m-0 p-0">신주영</p>
            </div>
            <p className="m-0 p-0 font-normal text-gray-500">
              음악도 크지 않고 좋았어요.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

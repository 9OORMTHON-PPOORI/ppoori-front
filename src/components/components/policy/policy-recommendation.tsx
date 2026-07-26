"use client";

import Image from "next/image";
import Link from "next/link";

import { InterestSelectButton } from "@/components/components/button/interset-select-button";
import LoadingPresenter from "@/components/components/loading/loading";
import PolicySwiper from "@/components/components/policy/policy-swiper";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";

import useUserInfoStore, {
  useUserInfoHydrated,
} from "@/store/user-info-store";

import {
  findPolicyCategory,
  findYouthTarget,
  POLICY_CATEGORIES,
} from "@/constants/policy";
import { usePolicyRecommend } from "@/lib/hook/policy";

/** 추천 결과를 대신해 화면 가운데에 띄우는 안내. */
function CenteredNotice({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex min-h-[320px] items-center justify-center px-8 text-center text-text-3 text-white">
      {children}
    </p>
  );
}

/**
 * 선택한 청년 유형과 관심 분야에 맞춘 정책 추천 화면.
 *
 * 이전에는 이 화면 전체가 주석 처리된 채 메인 페이지 안에 남아 있었다.
 * 별도 컴포넌트로 분리하고, 요청 실패·빈 결과처럼 원래 다루지 않던 상태를
 * 함께 처리한다.
 */
export default function PolicyRecommendation() {
  const { target, interest, setInterest } = useUserInfoStore();
  const isHydrated = useUserInfoHydrated();

  const selectedTarget = findYouthTarget(target);
  const selectedCategory = findPolicyCategory(interest);

  // 온보딩을 거치지 않고 바로 진입하면 선택 정보가 없다. 이때는 요청하지 않는다.
  const recommendParams =
    selectedTarget && selectedCategory
      ? { target: selectedTarget.code, category: selectedCategory.code }
      : undefined;

  const {
    data: recommendations,
    isLoading,
    isError,
    error,
  } = usePolicyRecommend(recommendParams);

  // 저장된 선택을 복원하기 전에는 선택 없음과 구분되지 않는다.
  if (!isHydrated) {
    return <LoadingPresenter />;
  }

  if (!selectedTarget || !selectedCategory) {
    return (
      <CenteredNotice>
        추천을 받으려면 먼저 유형과 관심 분야를 선택해 주세요.
      </CenteredNotice>
    );
  }

  if (isLoading) {
    return <LoadingPresenter />;
  }

  if (isError) {
    return <CenteredNotice>{error.message}</CenteredNotice>;
  }

  if (!recommendations || recommendations.length === 0) {
    return (
      <CenteredNotice>
        조건에 맞는 정책을 찾지 못했어요. 다른 분야를 골라 보세요.
      </CenteredNotice>
    );
  }

  return (
    <div>
      <div className="mt-8 flex justify-center text-title-4">
        <Drawer>
          <DrawerTrigger aria-label={`관심 분야 ${selectedCategory.label} 변경`}>
            <span className="flex items-center gap-[8px]">
              <span className="font-pretendard text-title-4 text-white">
                {selectedCategory.label}
              </span>
              <Image
                src="/icon/arowfill.svg"
                alt=""
                width={12}
                height={12}
                aria-hidden
              />
            </span>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerFooter>
              <div className="mt-[24px] grid grid-cols-2 place-items-center gap-3">
                {POLICY_CATEGORIES.map(({ label, iconSrc }) => (
                  <InterestSelectButton
                    key={label}
                    interest={interest}
                    setInterest={setInterest}
                    label={label}
                    imageSrc={iconSrc}
                  />
                ))}
              </div>
              <DrawerClose className="mt-[32px] h-[60px] w-full rounded-[16px] bg-po-cyan-2 text-subtitle-1 text-po-gray-000 duration-300 hover:brightness-90">
                선택
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>

      <div className="relative mt-[12px] flex w-full justify-center">
        <Image
          src={selectedCategory.illustrationSrc}
          alt=""
          width={164}
          height={120}
        />
      </div>

      <div className="mt-[-70px]">
        <PolicySwiper policyCards={recommendations} />
      </div>

      <Link
        href="/policy/list"
        className="flex content-center justify-center pb-6 text-center text-text-1 text-po-darkcyan-2"
      >
        정책 전체보기
      </Link>
    </div>
  );
}

"use client";

import dynamic from "next/dynamic";

import LoadingPresenter from "@/components/loading/loading";

/**
 * 추천 화면을 별도 청크로 떼어낸다.
 *
 * 서비스 종료 분기는 서버 컴포넌트에서 런타임에 평가되므로, 추천 화면을 정적
 * import하면 실행되지 않는 경우에도 그 코드와 의존(swiper·axios·lottie)이
 * /policy의 초기 번들에 포함된다. next/dynamic으로 참조해 실제로 렌더될 때만
 * 내려받도록 한다.
 */
const PolicyRecommendationLazy = dynamic(
  () => import("@/components/policy/policy-recommendation"),
  { loading: () => <LoadingPresenter /> }
);

export default PolicyRecommendationLazy;

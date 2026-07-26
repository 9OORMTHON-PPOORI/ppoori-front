/**
 * 정책 도메인 상수.
 *
 * 청년 유형과 정책 분야는 온보딩 선택지, 추천 API 파라미터, 카드 태그 색상,
 * 일러스트 경로로 각각 흩어져 중복 정의돼 있었다. 한 곳에서 정의하고
 * 필요한 뷰가 필드를 골라 쓰도록 모은다.
 *
 * 라벨(한글)이 곧 백엔드가 내려주는 policy.category 값이며, code는 추천 API에
 * 전달하는 enum이다.
 */

/** 온보딩 1단계에서 고르는 청년 유형. */
export const YOUTH_TARGETS = [
  { label: "대학생", code: "STUDENT" },
  { label: "취준생", code: "JOBSEEKER" },
  { label: "재직자", code: "WORKER" },
  { label: "신혼부부", code: "NEWLYWEDS" },
  { label: "농어업인", code: "INDUSTRY" },
  { label: "예술가", code: "ARTIST" },
] as const;

export type YouthTarget = (typeof YOUTH_TARGETS)[number];
export type YouthTargetLabel = YouthTarget["label"];

/** 온보딩 2단계에서 고르는 관심 분야이자, 정책이 속한 카테고리. */
export const POLICY_CATEGORIES = [
  {
    label: "활동 지원",
    code: "ACTIVITY_SUPPORT",
    iconSrc: "/svgs/interest-1.svg",
    illustrationSrc: "/images/interestImage1.svg",
    tagClassName: "bg-po-red-1 text-po-red-2",
  },
  {
    label: "역량 개발",
    code: "COMPETENCY_DEVELOPMENT",
    iconSrc: "/svgs/interest-2.svg",
    illustrationSrc: "/images/interestImage2.svg",
    tagClassName: "bg-po-green-1 text-po-green-2",
  },
  {
    label: "생활 지원",
    code: "LIVING_SUPPORT",
    iconSrc: "/svgs/interest-3.svg",
    illustrationSrc: "/images/interestImage3.svg",
    tagClassName: "bg-po-blue-1 text-po-blue-2",
  },
  {
    label: "진로 지원",
    code: "CAREER_SUPPORT",
    iconSrc: "/svgs/interest-4.svg",
    illustrationSrc: "/images/interestImage4.svg",
    tagClassName: "bg-po-pink-1 text-po-pink-2",
  },
] as const;

export type PolicyCategory = (typeof POLICY_CATEGORIES)[number];
export type PolicyCategoryLabel = PolicyCategory["label"];

/**
 * 라벨로 항목을 찾는다.
 *
 * 조회를 이 함수로만 하도록 모아 두어, 호출부가 배열 구조에 직접 의존하지
 * 않게 한다. 저장소에 남아 있던 값이나 API가 보낸 새 카테고리처럼 목록에
 * 없는 라벨이 들어올 수 있으므로 실패는 undefined로 돌려주고 호출부가 판단한다.
 */
export const findYouthTarget = (label: string): YouthTarget | undefined =>
  YOUTH_TARGETS.find((target) => target.label === label);

export const findPolicyCategory = (label: string): PolicyCategory | undefined =>
  POLICY_CATEGORIES.find((category) => category.label === label);

import { describe, expect, it } from "vitest";

import {
  findPolicyCategory,
  findYouthTarget,
  POLICY_CATEGORIES,
  YOUTH_TARGETS,
} from "@/constants/policy";

describe("findYouthTarget", () => {
  it("라벨로 청년 유형을 찾는다", () => {
    expect(findYouthTarget("대학생")).toEqual({
      label: "대학생",
      code: "STUDENT",
    });
  });

  it("목록에 없는 라벨이면 undefined를 돌려준다", () => {
    // 저장소에 남아 있던 이전 값이나 오타가 들어올 수 있다.
    expect(findYouthTarget("무직")).toBeUndefined();
    expect(findYouthTarget("")).toBeUndefined();
  });
});

describe("findPolicyCategory", () => {
  it("라벨로 분야를 찾고 태그 스타일과 이미지 경로를 함께 제공한다", () => {
    const category = findPolicyCategory("진로 지원");

    expect(category).toMatchObject({
      code: "CAREER_SUPPORT",
      tagClassName: "bg-po-pink-1 text-po-pink-2",
      illustrationSrc: "/images/interestImage4.svg",
    });
  });

  it("목록에 없는 카테고리면 undefined를 돌려준다", () => {
    // API가 새 카테고리를 추가해도 화면이 죽지 않아야 한다.
    expect(findPolicyCategory("주거 지원")).toBeUndefined();
  });
});

describe("도메인 상수 정합성", () => {
  it("청년 유형의 라벨과 코드가 각각 고유하다", () => {
    const labels = YOUTH_TARGETS.map((target) => target.label);
    const codes = YOUTH_TARGETS.map((target) => target.code);

    expect(new Set(labels).size).toBe(YOUTH_TARGETS.length);
    expect(new Set(codes).size).toBe(YOUTH_TARGETS.length);
  });

  it("정책 분야의 라벨과 코드가 각각 고유하다", () => {
    const labels = POLICY_CATEGORIES.map((category) => category.label);
    const codes = POLICY_CATEGORIES.map((category) => category.code);

    expect(new Set(labels).size).toBe(POLICY_CATEGORIES.length);
    expect(new Set(codes).size).toBe(POLICY_CATEGORIES.length);
  });

  it("모든 분야가 아이콘과 일러스트 경로를 갖는다", () => {
    for (const category of POLICY_CATEGORIES) {
      expect(category.iconSrc).toMatch(/^\/svgs\/.+\.svg$/);
      expect(category.illustrationSrc).toMatch(/^\/images\/.+\.svg$/);
    }
  });
});

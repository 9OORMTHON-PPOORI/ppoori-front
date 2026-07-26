import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { PolicyCard } from "@/components/policy/policy-card";

import { Policy } from "@/types/policy";

const policy: Policy = {
  id: 12,
  name: "청년 월세 지원",
  title: "월 최대 20만원까지",
  category: "생활 지원",
  likeCount: 31,
  hateCount: 2,
  commentCount: 7,
};

describe("PolicyCard", () => {
  it("상세 페이지로 가는 링크로 렌더된다", () => {
    render(<PolicyCard policy={policy} />);

    // div + router.push 였을 때는 링크로 인식되지 않아 새 탭 열기와
    // 키보드 조작이 불가능했다.
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "/policy/details/12"
    );
  });

  it("정책명과 요약, 반응 수를 보여준다", () => {
    render(<PolicyCard policy={policy} />);

    expect(
      screen.getByRole("heading", { name: "청년 월세 지원" })
    ).toBeInTheDocument();
    expect(screen.getByText("월 최대 20만원까지")).toBeInTheDocument();
    expect(screen.getByText("31")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("7")).toBeInTheDocument();
  });

  it("카테고리에 해당하는 태그를 표시한다", () => {
    render(<PolicyCard policy={policy} />);

    const tag = screen.getByText("생활 지원");

    expect(tag).toBeInTheDocument();
    expect(tag).toHaveClass("bg-po-blue-1", "text-po-blue-2");
  });

  it("모르는 카테고리면 태그를 그리지 않는다", () => {
    // API가 새 카테고리를 추가해도 화면이 깨지지 않아야 한다.
    render(<PolicyCard policy={{ ...policy, category: "주거 지원" }} />);

    expect(screen.queryByText("주거 지원")).not.toBeInTheDocument();
    expect(screen.getByRole("link")).toBeInTheDocument();
  });
});

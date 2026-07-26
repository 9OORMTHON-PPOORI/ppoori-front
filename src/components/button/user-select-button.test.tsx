import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { UserSelectButton } from "@/components/button/user-select-button";

describe("UserSelectButton", () => {
  it("선택 상태를 aria-pressed로 노출한다", () => {
    const { rerender } = render(
      <UserSelectButton target="" setTarget={vi.fn()} label="대학생" />
    );

    // 선택 여부가 색상으로만 표현되면 스크린리더는 알 수 없다.
    expect(screen.getByRole("button", { name: "대학생" })).toHaveAttribute(
      "aria-pressed",
      "false"
    );

    rerender(
      <UserSelectButton target="대학생" setTarget={vi.fn()} label="대학생" />
    );

    expect(screen.getByRole("button", { name: "대학생" })).toHaveAttribute(
      "aria-pressed",
      "true"
    );
  });

  it("다른 항목이 선택돼 있으면 눌리지 않은 상태로 둔다", () => {
    render(
      <UserSelectButton target="취준생" setTarget={vi.fn()} label="대학생" />
    );

    expect(screen.getByRole("button", { name: "대학생" })).toHaveAttribute(
      "aria-pressed",
      "false"
    );
  });

  it("클릭하면 자신의 라벨로 선택을 갱신한다", async () => {
    const setTarget = vi.fn();
    render(<UserSelectButton target="" setTarget={setTarget} label="예술가" />);

    await userEvent.click(screen.getByRole("button", { name: "예술가" }));

    expect(setTarget).toHaveBeenCalledOnce();
    expect(setTarget).toHaveBeenCalledWith("예술가");
  });

  it("키보드로도 선택할 수 있다", async () => {
    const setTarget = vi.fn();
    render(<UserSelectButton target="" setTarget={setTarget} label="재직자" />);

    await userEvent.tab();
    await userEvent.keyboard("{Enter}");

    expect(setTarget).toHaveBeenCalledWith("재직자");
  });
});

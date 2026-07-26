import { beforeEach, describe, expect, it, vi } from "vitest";

const { requestData } = vi.hoisted(() => ({ requestData: vi.fn() }));

vi.mock("@/lib/api/client", () => ({ requestData }));

import {
  getPolicy,
  getPolicyDetail,
  postPolicyComment,
  postPolicyRecommend,
} from "@/lib/api/policy";

beforeEach(() => {
  requestData.mockReset();
});

describe("getPolicy", () => {
  it("응답의 snake_case 필드를 도메인 표기로 옮긴다", async () => {
    requestData.mockResolvedValue([
      {
        id: 1,
        name: "청년 월세 지원",
        title: "월 최대 20만원",
        category: "생활 지원",
        like_count: 12,
        hate_count: 3,
        total_comment: 5,
      },
    ]);

    await expect(getPolicy()).resolves.toEqual([
      {
        id: 1,
        name: "청년 월세 지원",
        title: "월 최대 20만원",
        category: "생활 지원",
        likeCount: 12,
        hateCount: 3,
        commentCount: 5,
      },
    ]);
  });

  it("정책 목록 엔드포인트를 호출한다", async () => {
    requestData.mockResolvedValue([]);

    await getPolicy();

    // baseURL이 "/api"이므로 여기서는 경로만 넘긴다.
    expect(requestData).toHaveBeenCalledWith({
      method: "GET",
      url: "/policy/all",
    });
  });
});

describe("getPolicyDetail", () => {
  const detailResponse = {
    id: 7,
    name: "청년 취업 지원",
    title: "면접 수당",
    category: "진로 지원",
    subject: "만 19~34세",
    detail: ["1회 50만원", "연 2회"],
    department: "제주시청",
    contact: "064-000-0000",
    like_count: 4,
    hate_count: 1,
    comments: [{ writer: "익명", content: "도움이 됐어요" }],
  };

  it("상세 응답을 도메인 표기로 옮긴다", async () => {
    requestData.mockResolvedValue(detailResponse);

    const detail = await getPolicyDetail("7");

    expect(detail).toMatchObject({
      id: 7,
      likeCount: 4,
      hateCount: 1,
      detail: ["1회 50만원", "연 2회"],
      comments: [{ writer: "익명", content: "도움이 됐어요" }],
    });
  });

  it("detail과 comments가 null로 오면 빈 배열로 정규화한다", async () => {
    // 화면에서 배열 필드마다 옵셔널 체이닝으로 방어하지 않아도 되도록
    // 경계에서 한 번만 처리한다.
    requestData.mockResolvedValue({
      ...detailResponse,
      detail: null,
      comments: null,
    });

    const detail = await getPolicyDetail("7");

    expect(detail.detail).toEqual([]);
    expect(detail.comments).toEqual([]);
  });

  it("경로에 정책 id를 넣는다", async () => {
    requestData.mockResolvedValue(detailResponse);

    await getPolicyDetail("42");

    expect(requestData).toHaveBeenCalledWith({
      method: "GET",
      url: "/policy/42",
    });
  });
});

describe("postPolicyRecommend", () => {
  it("curr_idx와 total_idx를 도메인 표기로 옮긴다", async () => {
    requestData.mockResolvedValue([
      {
        id: 3,
        curr_idx: 1,
        total_idx: 5,
        name: "청년 학자금 지원",
        title: "이자 지원",
        summary: "요약",
      },
    ]);

    await expect(
      postPolicyRecommend({ category: "CAREER_SUPPORT", target: "STUDENT" })
    ).resolves.toEqual([
      {
        id: 3,
        currentIndex: 1,
        totalIndex: 5,
        name: "청년 학자금 지원",
        title: "이자 지원",
        summary: "요약",
      },
    ]);
  });

  it("분야와 유형 코드를 본문으로 보낸다", async () => {
    requestData.mockResolvedValue([]);

    await postPolicyRecommend({
      category: "LIVING_SUPPORT",
      target: "WORKER",
    });

    expect(requestData).toHaveBeenCalledWith({
      method: "POST",
      url: "/recommend",
      data: { category: "LIVING_SUPPORT", target: "WORKER" },
    });
  });
});

describe("postPolicyComment", () => {
  it("댓글 내용을 content 필드로 변환해 보낸다", async () => {
    requestData.mockResolvedValue("ok");

    await postPolicyComment({ comment: "좋은 정책이네요", id: "9" });

    expect(requestData).toHaveBeenCalledWith({
      method: "POST",
      url: "/policy/comment",
      data: { id: "9", content: "좋은 정책이네요" },
    });
  });
});

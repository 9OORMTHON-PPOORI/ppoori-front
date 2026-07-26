import { requestData } from "@/lib/api/client";

import {
  Policy,
  PolicyComment,
  PolicyDetail,
  PolicyRecommend,
  PostPolicyCommentProps,
} from "@/types/policy";

/**
 * 백엔드 응답 형태. snake_case 표기는 이 파일 밖으로 나가지 않고,
 * 아래 매퍼를 통해 도메인 타입으로 변환된다.
 */
interface PolicyResponse {
  id: number;
  name: string;
  title: string;
  category: string;
  hate_count: number;
  like_count: number;
  total_comment: number;
}

interface PolicyDetailResponse extends Omit<PolicyResponse, "total_comment"> {
  subject: string;
  detail: string[] | null;
  department: string;
  contact: string;
  comments: PolicyComment[] | null;
}

interface PolicyRecommendResponse {
  id: number;
  curr_idx: number;
  total_idx: number;
  name: string;
  title: string;
  summary: string;
}

const toPolicy = (response: PolicyResponse): Policy => ({
  id: response.id,
  name: response.name,
  title: response.title,
  category: response.category,
  likeCount: response.like_count,
  hateCount: response.hate_count,
  commentCount: response.total_comment,
});

// 목록 필드가 비어 오는 경우가 있어 빈 배열로 정규화한다.
// 화면에서 `detail?.map()`으로 매번 방어하지 않도록 경계에서 한 번 처리한다.
const toPolicyDetail = (response: PolicyDetailResponse): PolicyDetail => ({
  id: response.id,
  name: response.name,
  title: response.title,
  category: response.category,
  subject: response.subject,
  detail: response.detail ?? [],
  department: response.department,
  contact: response.contact,
  likeCount: response.like_count,
  hateCount: response.hate_count,
  comments: response.comments ?? [],
});

const toPolicyRecommend = (
  response: PolicyRecommendResponse
): PolicyRecommend => ({
  id: response.id,
  currentIndex: response.curr_idx,
  totalIndex: response.total_idx,
  name: response.name,
  title: response.title,
  summary: response.summary,
});

export const getPolicy = async (): Promise<Policy[]> => {
  const response = await requestData<PolicyResponse[] | null>({
    method: "GET",
    url: "/policy/all",
  });

  // 상세 응답과 마찬가지로 목록도 null로 내려올 수 있다.
  return (response ?? []).map(toPolicy);
};

export const getPolicyDetail = async (id: string): Promise<PolicyDetail> => {
  const response = await requestData<PolicyDetailResponse>({
    method: "GET",
    url: `/policy/${id}`,
  });

  return toPolicyDetail(response);
};

export const postPolicyComment = ({ comment, id }: PostPolicyCommentProps) =>
  requestData<string>({
    method: "POST",
    url: "/policy/comment",
    data: { id, content: comment },
  });

export const patchPolicyHate = (id: string) =>
  requestData<number>({ method: "PATCH", url: `/policy/${id}/hate` });

export const patchPolicyLike = (id: string) =>
  requestData<number>({ method: "PATCH", url: `/policy/${id}/like` });

/**
 * 추천 요청 파라미터.
 * 이전에는 Record<string, string>을 받아 어떤 키가 필요한지 시그니처에서
 * 알 수 없었고, 분야 코드를 담는 필드 이름이 comment였다.
 */
export interface PolicyRecommendParams {
  /** 정책 분야 코드 — constants/policy의 POLICY_CATEGORIES[].code */
  category: string;
  /** 청년 유형 코드 — constants/policy의 YOUTH_TARGETS[].code */
  target: string;
}

export const postPolicyRecommend = async (
  params: PolicyRecommendParams
): Promise<PolicyRecommend[]> => {
  const response = await requestData<PolicyRecommendResponse[] | null>({
    method: "POST",
    url: "/recommend",
    data: params,
  });

  return (response ?? []).map(toPolicyRecommend);
};

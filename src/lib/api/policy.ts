import { requestData } from "@/lib/api/client";

import {
  Policy,
  PolicyDetail,
  PolicyRecommend,
  PostPolicyCommentProps,
} from "@/types/policy";

export const getPolicy = () =>
  requestData<Policy[]>({ method: "GET", url: "/policy/all" });

export const getPolicyDetail = (id: string) =>
  requestData<PolicyDetail>({ method: "GET", url: `/policy/${id}` });

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

export const postPolicyRecommend = (params: PolicyRecommendParams) =>
  requestData<PolicyRecommend[]>({
    method: "POST",
    url: "/recommend",
    data: params,
  });

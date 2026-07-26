import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from "@tanstack/react-query";

import { ApiError } from "@/lib/api/client";
import {
  getPolicy,
  getPolicyDetail,
  patchPolicyHate,
  patchPolicyLike,
  PolicyRecommendParams,
  postPolicyComment,
  postPolicyRecommend,
} from "@/lib/api/policy";

import { Policy, PolicyDetail, PolicyRecommend } from "@/types/policy";

/**
 * 쿼리 키를 한곳에서 만든다.
 * 키 문자열이 훅마다 흩어져 있으면 무효화 대상을 지정할 때 오타를 잡을
 * 방법이 없고, 상위 키로 한 번에 무효화하는 것도 불가능하다.
 */
export const policyKeys = {
  all: ["policy"] as const,
  list: () => [...policyKeys.all, "list"] as const,
  detail: (policyId: string) =>
    [...policyKeys.all, "detail", policyId] as const,
  recommendation: (params?: PolicyRecommendParams) =>
    [
      ...policyKeys.all,
      "recommendation",
      params?.target,
      params?.category,
    ] as const,
};

/**
 * queryKey와 queryFn은 훅이 소유한다.
 * 이전에는 options를 뒤에 스프레드해 호출부가 쿼리 키를 조용히 덮어쓸 수 있었다.
 */
type PolicyQueryOptions<TData> = Omit<
  UseQueryOptions<TData, ApiError>,
  "queryKey" | "queryFn"
>;

type PolicyMutationOptions<TData, TVariables> = Omit<
  UseMutationOptions<TData, ApiError, TVariables>,
  "mutationFn"
>;

export const usePolicyList = (options?: PolicyQueryOptions<Policy[]>) =>
  useQuery({
    ...options,
    queryKey: policyKeys.list(),
    queryFn: getPolicy,
  });

export const usePolicyDetail = (
  policyId: string,
  options?: PolicyQueryOptions<PolicyDetail>
) =>
  useQuery({
    ...options,
    queryKey: policyKeys.detail(policyId),
    queryFn: () => getPolicyDetail(policyId),
  });

/**
 * 반응과 댓글은 성공하는 순간 상세와 목록이 모두 낡는다.
 * 화면이 refetch를 직접 호출하던 책임을 훅으로 옮긴다.
 */
const useInvalidatePolicy = (policyId: string) => {
  const queryClient = useQueryClient();

  return () => {
    queryClient.invalidateQueries({ queryKey: policyKeys.detail(policyId) });
    queryClient.invalidateQueries({ queryKey: policyKeys.list() });
  };
};

export const usePolicyLike = (
  policyId: string,
  options?: PolicyMutationOptions<number, void>
) => {
  const invalidatePolicy = useInvalidatePolicy(policyId);

  return useMutation({
    ...options,
    mutationFn: () => patchPolicyLike(policyId),
    onSuccess: (...args) => {
      invalidatePolicy();
      options?.onSuccess?.(...args);
    },
  });
};

export const usePolicyHate = (
  policyId: string,
  options?: PolicyMutationOptions<number, void>
) => {
  const invalidatePolicy = useInvalidatePolicy(policyId);

  return useMutation({
    ...options,
    mutationFn: () => patchPolicyHate(policyId),
    onSuccess: (...args) => {
      invalidatePolicy();
      options?.onSuccess?.(...args);
    },
  });
};

export const usePolicyComment = (
  policyId: string,
  options?: PolicyMutationOptions<string, string>
) => {
  const invalidatePolicy = useInvalidatePolicy(policyId);

  return useMutation({
    ...options,
    mutationFn: (comment: string) =>
      postPolicyComment({ comment, id: policyId }),
    onSuccess: (...args) => {
      invalidatePolicy();
      options?.onSuccess?.(...args);
    },
  });
};

/**
 * 추천은 POST로 요청하지만 성격은 조회다.
 * mutation으로 두면 캐시를 타지 않아 화면을 오갈 때마다 다시 요청하게 되고,
 * 호출 시점을 useEffect로 직접 관리해야 한다.
 *
 * 선택이 끝나기 전에는 params가 없으므로 enabled로 요청을 막는다.
 */
export const usePolicyRecommend = (
  params: PolicyRecommendParams | undefined,
  options?: PolicyQueryOptions<PolicyRecommend[]>
) =>
  useQuery({
    ...options,
    queryKey: policyKeys.recommendation(params),
    queryFn: () => {
      if (!params) {
        // enabled 때문에 도달하지 않지만, 타입을 좁히기 위해 남긴다.
        return Promise.reject(
          new ApiError("추천에 필요한 선택 정보가 없습니다.")
        );
      }

      return postPolicyRecommend(params);
    },
    enabled: params !== undefined,
  });

import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

import {
  getPolicy,
  getPolicyDetail,
  patchPolicyHate,
  patchPolicyLike,
  postPolicyComment,
  postPolicyRecommend,
} from "@/lib/api/policy";

import {
  Policy,
  PolicyDetail,
  PolicyRecommend,
  PostPolicyCommentProps,
} from "@/types/policy";

export const usePolicy = (options?: UseQueryOptions<Policy[], AxiosError>) => {
  return useQuery({
    queryKey: ["policy"],
    queryFn: () => getPolicy(),
    ...options,
  });
};

export const usePolicyDetail = (
  policyId: string,
  options?: UseQueryOptions<PolicyDetail, AxiosError>
) => {
  return useQuery({
    queryKey: ["policyDetail", policyId],
    queryFn: () => getPolicyDetail(policyId),
    ...options,
  });
};

export const usePolicyLike = (
  options?: UseMutationOptions<number, Error, string>
) => {
  return useMutation<number, Error, string>({
    mutationFn: patchPolicyLike,
    ...options,
  });
};

export const usePolicyHate = (
  options?: UseMutationOptions<number, Error, string>
) => {
  return useMutation<number, Error, string>({
    mutationFn: patchPolicyHate,
    ...options,
  });
};

export const usePolicyComment = (
  options?: UseMutationOptions<string, Error, PostPolicyCommentProps>
) => {
  return useMutation<string, Error, PostPolicyCommentProps>({
    mutationFn: postPolicyComment,
    ...options,
  });
};

export const usePolicyRecommend = (
  options?: UseMutationOptions<PolicyRecommend[], Error, Record<string, string>>
) => {
  return useMutation<PolicyRecommend[], Error, Record<string, string>>({
    mutationFn: postPolicyRecommend,
    ...options,
  });
};

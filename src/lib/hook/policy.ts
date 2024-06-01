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

export const usePolicy = (options?: UseQueryOptions<any, AxiosError>) => {
  return useQuery({
    queryKey: ["policy"],
    queryFn: () => getPolicy(),
    ...options,
  });
};

export const usePolicyDetail = (
  policyId: string,
  options?: UseQueryOptions<any, AxiosError>
) => {
  return useQuery({
    queryKey: ["policyDetail", policyId],
    queryFn: () => getPolicyDetail(policyId),
    ...options,
  });
};

export const usePolicyLike = (
  options?: UseMutationOptions<any, Error, any>
) => {
  return useMutation<any, Error, any>({
    mutationFn: patchPolicyLike,
    ...options,
  });
};

export const usePolicyHate = (
  options?: UseMutationOptions<any, Error, any>
) => {
  return useMutation<any, Error, any>({
    mutationFn: patchPolicyHate,
    ...options,
  });
};

export const usePolicyComment = (
  options?: UseMutationOptions<any, Error, any>
) => {
  return useMutation<any, Error, any>({
    mutationFn: postPolicyComment,
    ...options,
  });
};

export const usePolicyRecommend = (
  options?: UseMutationOptions<any, Error, any>
) => {
  return useMutation<any, Error, any>({
    mutationFn: postPolicyRecommend,
    ...options,
  });
};

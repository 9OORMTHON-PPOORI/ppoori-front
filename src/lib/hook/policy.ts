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
  postPolicyComment,
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

export const usePolicyComment = (
  options?: UseMutationOptions<any, Error, any>
) => {
  return useMutation<any, Error, any>({
    mutationFn: postPolicyComment,
    ...options,
  });
};

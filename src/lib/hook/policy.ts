import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { getPolicy, getPolicyDetail } from "@/lib/api/policy";

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

import { createAxiosInstance } from "@/lib/create-axios-instance";

import {
  Policy,
  PolicyDetail,
  PolicyRecommend,
  PostPolicyCommentProps,
} from "@/types/policy";

const axiosInstance = createAxiosInstance();

export const getPolicy = async (): Promise<Policy[]> => {
  const { data } = await axiosInstance.get(`/api/policy/all`);

  return data.data;
};

export const getPolicyDetail = async (id: string): Promise<PolicyDetail> => {
  const { data } = await axiosInstance.get(`/api/policy/${id}`);

  return data.data;
};

export const postPolicyComment = async ({
  comment,
  id,
}: PostPolicyCommentProps): Promise<string> => {
  const { data } = await axiosInstance.post(`/api/policy/comment`, {
    id: id,
    content: comment,
  });
  return data.data;
};

export const patchPolicyHate = async (id: string): Promise<number> => {
  const { data } = await axiosInstance.patch(`/api/policy/${id}/hate`);

  return data.data;
};

export const patchPolicyLike = async (id: string): Promise<number> => {
  const { data } = await axiosInstance.patch(`/api/policy/${id}/like`);

  return data.data;
};

export const postPolicyRecommend = async ({
  comment,
  target,
}: Record<string, string>): Promise<PolicyRecommend[]> => {
  const { data } = await axiosInstance.post(`/api/recommend`, {
    category: comment,
    target: target,
  });

  return data.data;
};

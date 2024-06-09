import { createAxiosInstance } from "@/lib/create-axios-instance";

import {
  Policy,
  PolicyDetail,
  PolicyRecommend,
  PostPolicyCommentProps,
} from "@/types/policy";

const axiosInstance = createAxiosInstance();

export const getPolicy = async (): Promise<Policy[]> => {
  const { data } = await axiosInstance.get(
    `${process.env.NEXT_PUBLIC_POLICY}/all`
  );

  return data.data;
};

export const getPolicyDetail = async (id: string): Promise<PolicyDetail> => {
  const { data } = await axiosInstance.get(
    `${process.env.NEXT_PUBLIC_POLICY}/${id}`
  );

  return data.data;
};

export const postPolicyComment = async ({
  comment,
  id,
}: PostPolicyCommentProps): Promise<string> => {
  const { data } = await axiosInstance.post(
    `${process.env.NEXT_PUBLIC_POLICY}/comment`,
    { id: id, content: comment }
  );
  return data.data;
};

export const patchPolicyHate = async (id: string): Promise<number> => {
  const { data } = await axiosInstance.patch(
    `${process.env.NEXT_PUBLIC_POLICY}/${id}/hate`
  );

  return data.data;
};

export const patchPolicyLike = async (id: string): Promise<number> => {
  const { data } = await axiosInstance.patch(
    `${process.env.NEXT_PUBLIC_POLICY}/${id}/like`
  );

  return data.data;
};

export const postPolicyRecommend = async ({
  comment,
  target,
}: Record<string, string>): Promise<PolicyRecommend[]> => {
  const { data } = await axiosInstance.post(
    `${process.env.NEXT_PUBLIC_RECOMMEND}`,
    { category: comment, target: target }
  );

  return data.data;
};

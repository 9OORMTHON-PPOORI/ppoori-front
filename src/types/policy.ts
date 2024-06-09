export interface Policy {
  id: number;
  name: string;
  title: string;
  category: string;
  hate_count: number;
  like_count: number;
  total_comment: number;
}

export interface PolicyDetail {
  id: number;
  name: string;
  title: string;
  category: string;
  subject: string;
  detail: string[];
  department: string;
  contact: string;
  hate_count: number;
  like_count: number;
  comments: Comments[];
}

export interface PolicyRecommend {
  id: number;
  curr_idx: number;
  total_idx: number;
  name: string;
  title: string;
  summary: string;
}

export type Comments = {
  writer: string;
  content: string;
};

export type PostPolicyCommentProps = {
  comment: string;
  id: string;
};

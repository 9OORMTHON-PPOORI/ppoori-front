/**
 * 화면이 사용하는 정책 도메인 타입.
 *
 * 백엔드 응답은 snake_case(hate_count, curr_idx …)로 내려오지만, 그 표기를
 * 컴포넌트까지 그대로 흘리면 API 스키마가 바뀔 때마다 UI를 함께 고쳐야 한다.
 * 응답 형태는 lib/api/policy.ts에만 두고 여기서는 도메인 표기만 정의한다.
 */

/** 목록에 노출되는 정책 요약. */
export interface Policy {
  id: number;
  name: string;
  title: string;
  category: string;
  likeCount: number;
  hateCount: number;
  commentCount: number;
}

export interface PolicyComment {
  writer: string;
  content: string;
}

/** 상세 화면이 사용하는 정책 전문. */
export interface PolicyDetail {
  id: number;
  name: string;
  title: string;
  category: string;
  subject: string;
  detail: string[];
  department: string;
  contact: string;
  likeCount: number;
  hateCount: number;
  comments: PolicyComment[];
}

/** 추천 결과 카드 한 장. */
export interface PolicyRecommend {
  id: number;
  /** 전체 추천 중 현재 카드의 순번 */
  currentIndex: number;
  totalIndex: number;
  name: string;
  title: string;
  summary: string;
}

export interface PostPolicyCommentProps {
  comment: string;
  id: string;
}

import axios, { AxiosRequestConfig, isAxiosError } from "axios";

/**
 * 브라우저는 항상 같은 출처의 /api/* 로 요청하고, next.config.mjs의 rewrites가
 * 실제 백엔드로 프록시한다.
 *
 * baseURL을 환경변수로 받으면 값이 설정된 순간 요청이 프록시를 건너뛰고
 * 백엔드로 직접 나가, Mixed Content를 피하려고 프록시를 둔 의미가 사라진다.
 * 상대 경로로 고정해 프록시 경유를 코드로 강제한다.
 */
const apiClient = axios.create({
  baseURL: "/api",
  timeout: 8000,
});

/** UI가 axios 구현에 결합되지 않도록 던지는 실패 타입. */
export class ApiError extends Error {
  readonly status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

const MESSAGE_BY_STATUS: Record<number, string> = {
  400: "잘못된 요청입니다.",
  404: "요청한 정보를 찾을 수 없습니다.",
  500: "서버에 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.",
};

/** 인터셉터가 사용하는 변환 함수. 상태별 분기를 검증할 수 있도록 노출한다. */
export const toApiError = (error: unknown): ApiError => {
  if (!isAxiosError(error)) {
    return new ApiError("알 수 없는 오류가 발생했습니다.");
  }

  if (error.code === "ECONNABORTED") {
    return new ApiError("요청 시간이 초과되었습니다.");
  }

  const status = error.response?.status;

  if (status === undefined) {
    return new ApiError("네트워크에 연결할 수 없습니다.");
  }

  return new ApiError(
    MESSAGE_BY_STATUS[status] ?? "요청을 처리하지 못했습니다.",
    status
  );
};

apiClient.interceptors.response.use(undefined, (error: unknown) =>
  Promise.reject(toApiError(error))
);

/** 백엔드 공통 응답 형식 — 실제 데이터가 data 필드에 한 번 더 감싸여 온다. */
interface ApiEnvelope<T> {
  data: T;
}

/**
 * 봉투를 벗겨 데이터만 돌려준다.
 * 호출부마다 반복되던 `const { data } = await ...; return data.data;`를 한곳으로 모은다.
 */
export const requestData = async <T>(
  config: AxiosRequestConfig
): Promise<T> => {
  const response = await apiClient.request<ApiEnvelope<T>>(config);

  return response.data.data;
};

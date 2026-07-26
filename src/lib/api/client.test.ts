import { AxiosError, AxiosHeaders } from "axios";
import { describe, expect, it } from "vitest";

import { ApiError, toApiError } from "@/lib/api/client";

/** 실제 요청 없이 인터셉터가 받는 형태의 AxiosError를 만든다. */
const createAxiosError = (
  status?: number,
  code?: string
): AxiosError<unknown> => {
  const error = new AxiosError("request failed", code);

  if (status !== undefined) {
    error.response = {
      status,
      statusText: "",
      data: null,
      headers: {},
      config: { headers: new AxiosHeaders() },
    };
  }

  return error;
};

describe("toApiError", () => {
  it("상태 코드에 맞는 한국어 메시지로 바꾼다", () => {
    expect(toApiError(createAxiosError(404))).toMatchObject({
      message: "요청한 정보를 찾을 수 없습니다.",
      status: 404,
    });
    expect(toApiError(createAxiosError(400)).message).toBe(
      "잘못된 요청입니다."
    );
    expect(toApiError(createAxiosError(500)).message).toBe(
      "서버에 문제가 발생했습니다. 잠시 후 다시 시도해 주세요."
    );
  });

  it("메시지가 정의되지 않은 상태 코드는 기본 문구를 쓰되 상태는 유지한다", () => {
    const error = toApiError(createAxiosError(418));

    expect(error.message).toBe("요청을 처리하지 못했습니다.");
    expect(error.status).toBe(418);
  });

  it("타임아웃을 네트워크 오류와 구분한다", () => {
    expect(
      toApiError(createAxiosError(undefined, "ECONNABORTED")).message
    ).toBe("요청 시간이 초과되었습니다.");
  });

  it("응답이 없으면 네트워크 단절로 처리한다", () => {
    const error = toApiError(createAxiosError());

    expect(error.message).toBe("네트워크에 연결할 수 없습니다.");
    expect(error.status).toBeUndefined();
  });

  it("axios가 아닌 오류도 ApiError로 감싼다", () => {
    // UI가 어떤 실패든 ApiError 하나만 다루면 되도록 보장한다.
    const error = toApiError(new TypeError("boom"));

    expect(error).toBeInstanceOf(ApiError);
    expect(error.message).toBe("알 수 없는 오류가 발생했습니다.");
  });

  it("항상 ApiError 인스턴스를 돌려준다", () => {
    expect(toApiError(createAxiosError(500))).toBeInstanceOf(ApiError);
    expect(toApiError("문자열")).toBeInstanceOf(ApiError);
  });
});

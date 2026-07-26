"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PropsWithChildren, useState } from "react";

/**
 * QueryClient를 렌더 바디에서 생성하면 Provider가 리렌더될 때마다 새 인스턴스가
 * 만들어지고, client prop이 바뀌면서 캐시가 통째로 버려진다.
 * useState의 초기화 함수로 첫 렌더에 한 번만 생성한다.
 */
export default function ReactQueryProvider({ children }: PropsWithChildren) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // 기본값 0은 컴포넌트가 마운트될 때마다 재요청을 유발한다.
            staleTime: 60 * 1000,
            retry: 1,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

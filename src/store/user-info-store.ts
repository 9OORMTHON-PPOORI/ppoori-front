import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UserInfoState = {
  target: string;
  interest: string;
};

export type UserInfoActions = {
  setTarget: (target: string) => void;
  setInterest: (interest: string) => void;
};

export type UserInfoStore = UserInfoState & UserInfoActions;

const defaultUserInfo: UserInfoState = {
  target: "",
  interest: "",
};

const useUserInfoStore = create<UserInfoStore>()(
  persist<UserInfoStore>(
    (set) => ({
      ...defaultUserInfo,
      setTarget: (target: string) => set({ target }),
      setInterest: (interest: string) => set({ interest }),
    }),
    {
      name: "user-info-store",
      /**
       * 자동 복원을 끈다.
       *
       * 켜져 있으면 스토어 모듈이 평가되는 즉시 localStorage 값이 반영되어,
       * 서버가 그린 HTML(빈 문자열)과 첫 클라이언트 렌더(복원된 "대학생")가
       * 어긋나 하이드레이션 불일치가 발생한다.
       * 복원은 useUserInfoHydrated가 하이드레이션 이후에 수행한다.
       */
      skipHydration: true,
    }
  )
);

/**
 * persist 복원이 끝났는지 알려준다.
 *
 * 저장된 선택값에 따라 화면이 달라지는 곳에서는 복원 전에 그리면 안 된다.
 * 서버 렌더 결과와 첫 클라이언트 렌더를 같게 유지하고, 복원이 끝난 뒤
 * 한 번 더 렌더하도록 만든다.
 */
export const useUserInfoHydrated = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // localStorage는 동기지만 rehydrate는 비동기 스토리지도 지원해 Promise를 돌려줄 수 있다.
    void Promise.resolve(useUserInfoStore.persist.rehydrate()).then(() =>
      setIsHydrated(true)
    );
  }, []);

  return isHydrated;
};

export default useUserInfoStore;

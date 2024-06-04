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

const defaultQuestionStore: UserInfoState = {
  target: "",
  interest: "",
};

const useUserInfoStore = create<UserInfoStore>()(
  persist<UserInfoStore>(
    (set) => ({
      ...defaultQuestionStore,
      setTarget: (target: string) => set({ target }),
      setInterest: (interest: string) => set({ interest }),
    }),
    {
      name: "user-info-store",
    }
  )
);

export default useUserInfoStore;

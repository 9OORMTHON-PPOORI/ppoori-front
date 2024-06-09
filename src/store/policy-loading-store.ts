import { create } from "zustand";
import { persist } from "zustand/middleware";

export type PolicyLoadingState = {
  hasVisitedMain: boolean;
};

export type PolicyLoadingActions = {
  setHasVisitedMain: (visited: boolean) => void;
};

export type PolicyLoadingStore = PolicyLoadingState & PolicyLoadingActions;

const defaultPolicyLoadingStore: PolicyLoadingState = {
  hasVisitedMain: false,
};

const usePolicyLoadingStore = create<PolicyLoadingStore>()(
  persist<PolicyLoadingStore>(
    (set) => ({
      ...defaultPolicyLoadingStore,
      setHasVisitedMain: (visited: boolean) => set({ hasVisitedMain: visited }),
    }),
    {
      name: "policy-loading-store",
    }
  )
);

export default usePolicyLoadingStore;

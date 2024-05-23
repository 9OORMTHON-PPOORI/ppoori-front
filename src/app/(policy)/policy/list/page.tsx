import Header from "@/components/common/header";
import { PolicyCard } from "@/components/components/policy/policy-card";

export default function PolicyList() {
  return (
    <>
      <Header />
      <div className="mt-5 font-pretendard font-semibold">
        <PolicyCard />
        <PolicyCard />
        <PolicyCard />
        <PolicyCard />
        <PolicyCard />
        <PolicyCard />
        <PolicyCard />
        <PolicyCard />
        <PolicyCard />
        <PolicyCard />
      </div>
    </>
  );
}

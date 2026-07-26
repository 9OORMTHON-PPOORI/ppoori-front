import { Button } from "@/components/ui/button";

interface UserSelectButtonProps {
  target: string;
  setTarget: (target: string) => void;
  label: string;
}

export function UserSelectButton({
  target,
  setTarget,
  label,
}: UserSelectButtonProps) {
  const isSelected = target === label;

  return (
    <Button
      type="button"
      // 선택 여부를 색상으로만 표현하면 접근성 트리에 전혀 드러나지 않는다.
      aria-pressed={isSelected}
      className={`h-[106px] w-full rounded-[16px] ${isSelected ? "border-po-cyan-2 bg-po-cyan-1 text-po-cyan-2" : "border-po-gray-300 bg-[#CDCED614] text-po-gray-700 hover:border-[#E1E1E8] hover:bg-[#CDCED633]"}`}
      onClick={() => setTarget(label)}
    >
      <span className="text-title-4">{label}</span>
    </Button>
  );
}

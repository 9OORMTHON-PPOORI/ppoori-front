import { cn } from "@/lib/utils";

/**
 * 목록·상세·추천이 결과 대신 보여주는 안내(실패, 빈 결과, 선택 없음).
 *
 * role="status"로 두어 화면이 전환될 때 스크린리더에도 전달되게 한다.
 */
export default function StatusNotice({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      role="status"
      className={cn(
        "flex min-h-[320px] items-center justify-center px-8 text-center text-text-3",
        className
      )}
    >
      {children}
    </p>
  );
}

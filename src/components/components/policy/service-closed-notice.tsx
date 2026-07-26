import Image from "next/image";

/**
 * 서비스 종료 안내 화면.
 * 노출 여부는 constants/feature-flags의 IS_SERVICE_CLOSED가 결정한다.
 */
export default function ServiceClosedNotice() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="relative mt-[12px] flex w-full justify-center">
        {/* 안내 문구가 내용을 모두 전달하므로 장식용으로 둔다. */}
        <Image
          src="/images/interestImage4.svg"
          alt=""
          width={164}
          height={120}
        />
      </div>
      <h1 className="mb-[18px] text-center text-title-1 text-white">
        서비스 종료 안내
      </h1>
      <p className="mb-[18px] text-center text-text-3 text-white">
        안녕하세요, 뿌리 서비스를 사랑해 주신 여러분
        <br />
        아쉽게도 저희 서비스가 종료되었음을 알려드립니다
        <br />
        그동안 보내주신 관심과 사랑에 진심으로 감사드립니다
      </p>
    </div>
  );
}

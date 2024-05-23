import { PaperPlaneIcon } from "@radix-ui/react-icons";

import Header from "@/components/common/header";
import { Input } from "@/components/ui/input";

export default function PolicyDetails() {
  return (
    <>
      <Header />
      <div className="font-pretendard font-semibold">
        <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow">
          <h1 className="mb-4 text-2xl font-bold">
            제주 청년문제와 해결방안은? 내가 한번 제안해 볼까?
          </h1>
          <p className="mb-6 text-gray-500">
            #청년의 목소리 #청년의 손으로 만들어 나가는 #청년정책 #청년문제해결
          </p>
          <div className="mb-6">
            <h2 className="mb-2 text-xl font-semibold">사업대상</h2>
            <p className="text-gray-700">도내 청년 누구나(만 19세~39세)</p>
          </div>

          <div className="mb-6">
            <h2 className="mb-2 text-xl font-semibold">주요내용</h2>
            <ul className="ml-6 list-disc text-gray-700">
              <li>
                청년정책 추진 과정에 청년의 목소리를 반영하기 위하여 운영지원단,
                청년위원을 도내 청년으로 구성하여 연중 운영
              </li>
              <li>청년의견 수렴 및 청년정책 제안, 청년문제 발굴 및 개선</li>
              <li>
                도의 청년교류 및 전체회의, 분과회의 등 다양한 프로그램 운영
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="mb-2 text-xl font-semibold">신청방법</h2>
            <p className="text-gray-700">
              [제주청년센터 홈페이지] &rarr; [사업신청]
            </p>
          </div>

          <div className="mb-6">
            <h2 className="mb-2 text-xl font-semibold">꿀팁안내</h2>
            <p className="text-gray-700">
              제주청년원탁회의 청년위원 및 운영지원단은 매년 1월 모집.
            </p>
            <p>2022.12.23.(금) 09:00 ~ 2023.01.16.(월) 00:00</p>
            <p>2023년 모집은 마감되었습니다. 2024년에 도전해보세요!</p>
          </div>

          <div className="mb-6 flex justify-around">
            <div className="flex flex-col items-center">
              <div className="mb-2 rounded-full bg-yellow-200 p-4 text-gray-800">
                23
              </div>
              <button className="rounded-lg bg-yellow-100 px-4 py-2 text-gray-800">
                관심 없어요
              </button>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 rounded-full bg-red-200 p-4 text-gray-800">
                23
              </div>
              <button className="rounded-lg bg-red-100 px-4 py-2 text-gray-800">
                맘에 들어요
              </button>
            </div>
          </div>

          <div className="rounded-lg bg-gray-50 p-4 shadow">
            <div className="mb-4">
              <p className="text-gray-800">
                <strong>김말똥</strong>{" "}
                <span className="text-gray-500">14시간 전</span>
              </p>
              <p className="text-gray-700">음악도 크지 않고 좋았어요.</p>
            </div>
            <div>
              <p className="text-gray-800">
                <strong>아무개</strong>{" "}
                <span className="text-gray-500">14시간 전</span>
              </p>
              <p className="text-gray-700">정말 도움이 되는 정책이네요!</p>
            </div>
          </div>

          <div className="mt-4 flex gap-3">
            <Input placeholder="댓글을 입력하세요" className="h-[42px]" />
            <button className="h-[42px] rounded-2xl bg-[#F63105] px-4 text-white">
              <PaperPlaneIcon className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

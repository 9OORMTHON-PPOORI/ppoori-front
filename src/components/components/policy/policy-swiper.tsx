"use client";

import { faker } from "@faker-js/faker";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function PolicySwiper() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(1);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  const Temp = [
    {
      image: faker.image.urlLoremFlickr(),
    },
    {
      image: faker.image.urlLoremFlickr(),
    },
    {
      image: faker.image.urlLoremFlickr(),
    },
    {
      image: faker.image.urlLoremFlickr(),
    },
    {
      image: faker.image.urlLoremFlickr(),
    },
    {
      image: faker.image.urlLoremFlickr(),
    },
    {
      image: faker.image.urlLoremFlickr(),
    },
    {
      image: faker.image.urlLoremFlickr(),
    },
  ];
  return (
    <Swiper
      effect="cards"
      onSlideChange={handleSlideChange}
      grabCursor={true}
      initialSlide={1}
      modules={[EffectCards]}
      centeredSlides={false}
      loop={true}
    >
      {Temp.map((item, index) => {
        const colors = [
          "bg-[#5088B0]",
          "bg-[#3B749B]",
          "bg-[#245476]",
          "bg-[#2B4354]",
        ];
        const targetColor = activeIndex === index ? "bg-white" : "bg-white";

        return (
          <SwiperSlide key={index}>
            <div className="relative z-[100] flex w-full justify-center pb-[43px]">
              <div
                className={`h-[400px] w-[280px] cursor-pointer rounded-[32px] ${targetColor} px-4 py-[42px] shadow-[0_16px_32px_rgba(0,0,0,0.2)] duration-700`}
                onClick={() => router.push("policy/details")}
              >
                <div>
                  <h5 className="mb-4 text-center text-[12px] font-medium">
                    제주 청년 원탁회의
                  </h5>
                  <h3 className="mx-2 mb-3 text-center text-[20px] font-bold leading-[140%]">
                    제주 청년문제와 해결방안 한 번 제안해볼까?
                  </h3>
                </div>
                <div className="relative bg-[url('/images/card.png')] bg-contain bg-no-repeat p-8 pb-14">
                  <Image
                    src="icon/dot.svg"
                    alt="dotIcon"
                    width={26}
                    height={16}
                    className="mb-[6px]"
                  />
                  <p className="mb-3 text-[12px] font-medium leading-[160%] tracking-tighter text-[#0090A5]">
                    청년들의 다양한 요구와 필요에 부응하기 위해 설계되었습니다.
                    이를 활용하여 제주의 청년들에게 경제적 지원과 기술을 습득할
                    수 있기를 기대중입니다.
                  </p>
                  <div className="flex items-center pb-4">
                    <Image
                      src="icon/ai.svg"
                      alt="aiIcon"
                      width={16}
                      height={16}
                      className="mr-1"
                    />
                    <p className="text-[12px] font-medium text-[#3FB9CB]">
                      141개의 리뷰 요약
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

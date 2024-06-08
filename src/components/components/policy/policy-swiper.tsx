"use client";

import { faker } from "@faker-js/faker";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import TooltipModal from "./policy-tooltip-modal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function PolicySwiper(res?: any) {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(1);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  const datas: any[] = res.policyCards;

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
      initialSlide={0}
      modules={[EffectCards]}
      centeredSlides={false}
      loop={true}
    >
      {datas?.map((item: any, index: any) => {
        const targetColor = activeIndex === index ? "bg-white" : "bg-white";

        return (
          <SwiperSlide key={index} className="w-full pt-[50px]">
            <div className="relative m-auto max-w-[390px] px-10 pb-[43px]">
              <div
                className={`min-h-[446px] w-full rounded-3xl ${targetColor} px-8 pb-[42px] pt-[24px] shadow-[0_16px_32px_rgba(0,0,0,0.2)] duration-700`}
              >
                <div className="flex flex-col justify-center">
                  <div className="text-number-3 mb-[22px] mt-[10px] flex h-[18px] justify-center">
                    {item.index}
                  </div>
                  <h5 className="mb-[4px] line-clamp-1 text-center text-text-4">
                    {item.name}
                  </h5>
                  <h3 className="mb-[18px] line-clamp-2 text-center text-title-2">
                    {item.title}
                  </h3>
                </div>
                <div className="relative min-h-[186px] rounded-[16px] bg-po-cyan-1">
                  <p className="mb-[18px] line-clamp-5 flex max-h-[130px] px-[20px] pt-[20px] text-text-3 text-po-cyan-2">
                    {item.summary}
                  </p>
                  <div className="absolute bottom-[20px] w-full px-[20px]">
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-[3px]">
                        <Image
                          src="/icon/aiIcon.svg"
                          alt="AI 아이콘"
                          width={12}
                          height={12}
                        />
                        <p className="mt-[2px] text-caption text-po-cyan-2">
                          AI의 정책 내용 요약
                        </p>
                      </div>
                      <TooltipModal />
                    </div>
                  </div>
                </div>
                <div
                  className="mt-[10px] flex h-[48px] cursor-pointer items-center justify-center rounded-[16px] border-[1px] border-po-gray-300 bg-[#CDCED614] text-text-4 text-po-gray-600 duration-500 hover:bg-po-cyan-1 hover:text-po-cyan-2"
                  onClick={() => router.push(`policy/details/${item.id}`)}
                >
                  상세 보기
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

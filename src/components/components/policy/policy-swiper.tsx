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
      initialSlide={1}
      modules={[EffectCards]}
      centeredSlides={false}
      loop={true}
    >
      {datas?.map((item: any, index: any) => {
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
                className={`h-[446px] w-[280px] cursor-pointer rounded-[32px] ${targetColor} px-4 pb-[42px] pt-[12px] shadow-[0_16px_32px_rgba(0,0,0,0.2)] duration-700`}
                onClick={() => router.push(`policy/details/${item.id}`)}
              >
                <div className="flex flex-col justify-center">
                  <div className="mb-[22px] flex justify-end">
                    <Image
                      src="icon/arrow.svg"
                      alt="arrowIcon"
                      width={40}
                      height={40}
                    />
                  </div>
                  <h5 className="mb-4 text-center text-[12px] font-medium">
                    {item.target}
                  </h5>
                  <h3 className="mx-5 mb-3 text-center text-[20px] font-bold leading-[140%]">
                    {item.title}
                  </h3>
                </div>
                <div className="relative bg-[url('/images/card.png')] bg-contain bg-no-repeat p-8 pb-14">
                  <Image
                    src="icon/comma.svg"
                    alt="dotIcon"
                    width={22}
                    height={16}
                    className="mb-[6px]"
                  />
                  <p className="mb-3 text-[12px] font-medium leading-[160%] tracking-tighter text-[#0090A5]">
                    청년들의 다양한 요구와 필요에 부응하기 위해 설계되었습니다.
                    이를 활용하여 제주의 청년들에게 경제적 지원과 기술을 습득할
                    수 있기를 기대중입니다.
                  </p>
                  <div className="flex items-center pb-4">
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

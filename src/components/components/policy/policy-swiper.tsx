"use client";

import { faker } from "@faker-js/faker";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function PolicySwiper() {
  const router = useRouter();
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
  ];
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1.3}
        initialSlide={1}
        centeredSlides={true}
        loop={true}
      >
        {Temp.map((item, i) => (
          <SwiperSlide key={`house_swiper_${i}`}>
            <div
              className="relative h-[350px] w-full cursor-pointer rounded-lg"
              onClick={() => router.push("policy/details")}
            >
              <Image
                src={item.image}
                alt={`policy-${i}`}
                sizes="100vw"
                fill
                placeholder="blur"
                data-aos="fade-in"
                blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                className="rounded-[20px] object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

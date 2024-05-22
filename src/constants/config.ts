const metaDataTitle = "WEPIK";
const metaDataDescription =
  "WEPIK은 연인과 친구들이 재미있는 질문에 답하며 소통을 즐길 수 있는 서비스입니다. 함께 대화하며 서로의 생각을 공유하고, 더 깊은 유대감을 형성하세요. WEPIK으로 의미 있는 대화를 시작해보세요!";
const metaDataUrl = "https://www.wipik.com";
const metaDataAuthor = "WEPIK TEAM";
const metaDataImageUrl = "/images/thumbnail.png";

/**
 * @description 메타 데이터 설정 값
 */
export const MetaData = {
  metadataBase: new URL(metaDataUrl),
  title: {
    default: metaDataTitle,
    template: `%s | ${metaDataTitle}`,
  },
  description: metaDataDescription,
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-icon.png",
  },
  openGraph: {
    url: metaDataUrl,
    title: metaDataTitle,
    description: metaDataDescription,
    siteName: metaDataTitle,
    images: [
      {
        url: metaDataImageUrl,
        width: "800",
        height: "600",
        alt: "위픽 썸네일",
      },
    ],
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: metaDataTitle,
    description: metaDataTitle,
    images: metaDataImageUrl,
    creator: metaDataAuthor,
  },
  authors: [
    {
      name: metaDataAuthor,
      url: metaDataUrl,
    },
  ],
};

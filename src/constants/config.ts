const metaDataTitle = "뿌리";
const metaDataDescription = "뿌리는 뿌리를 찾아가는 청년 정책을 제안합니다.";
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
    images: [],
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

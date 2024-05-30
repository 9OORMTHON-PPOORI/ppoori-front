export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <main className="m-auto h-full w-full max-w-[390px] flex-grow px-6">
          {children}
        </main>
      </body>
    </html>
  );
}

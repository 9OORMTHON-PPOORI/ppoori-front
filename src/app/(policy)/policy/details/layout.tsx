export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-[#f2f3f8]">
      <div className="m-auto h-full max-w-[390px] bg-po-gray-050 px-8 pb-20">
        {children}
      </div>
    </main>
  );
}

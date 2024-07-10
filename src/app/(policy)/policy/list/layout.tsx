export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-[#f2f3f8]">
      <div className="m-auto max-w-[390px] bg-po-gray-050 px-6 py-4">
        {children}
      </div>
    </main>
  );
}

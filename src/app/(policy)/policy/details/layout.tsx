export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-white">
      <div className="m-auto max-w-[390px] px-8 pb-20">{children}</div>
    </main>
  );
}

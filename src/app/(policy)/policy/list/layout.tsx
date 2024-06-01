export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-po-gray-050">
      <div className="m-auto max-w-[390px] px-6">{children}</div>
    </main>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="m-auto h-full w-full max-w-[390px] flex-grow">
      {children}
    </main>
  );
}

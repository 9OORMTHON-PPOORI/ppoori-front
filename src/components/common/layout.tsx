export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <main className="m-auto flex h-full w-full max-w-[390px] flex-grow items-center px-6">
        {props.children}
      </main>
    </>
  );
}

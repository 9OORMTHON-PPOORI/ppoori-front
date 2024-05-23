export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <div className="m-0 flex h-full flex-col">
        <main className="m-auto w-full max-w-[390px] flex-grow px-[12px]">
          {props.children}
        </main>
      </div>
    </>
  );
}

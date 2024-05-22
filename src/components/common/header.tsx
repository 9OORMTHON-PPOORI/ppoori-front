import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav className="z-50 m-auto flex h-[44px] w-full max-w-[390px] items-center border-b">
        <div className="flex w-full items-center justify-center">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              width={86}
              height={26}
              priority
              alt="logo"
            />
          </Link>
        </div>
      </nav>
    </>
  );
}

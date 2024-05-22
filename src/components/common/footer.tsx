import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="container w-full max-w-[390px] bg-[#F5F5F5] py-20 text-sm">
        <section>
          <Link href="/">
            <Image
              src="/images/logo.svg"
              width={86}
              height={26}
              priority
              alt="DesktopLogo"
            />
          </Link>
          <div className="copy font-light">
            CopyrightⓒWEPIK. All rights reserved.
          </div>
        </section>
      </footer>
    </>
  );
}

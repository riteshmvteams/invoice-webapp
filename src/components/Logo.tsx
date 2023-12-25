import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <Link
        href="/"
        className="w-[103px] h-[103px] relative bg-accentColor block rounded-tr-3xl rounded-br-3xl overflow-hidden group"
      >
        <Image
          src="/assets/logo.svg"
          alt="Logo"
          width={100}
          height={100}
          className="w-full h-full object-cover p-8"
        />

        <span className="block absolute bottom-0 left-0 w-full h-[60%] bg-violet-950/40 rounded-tl-3xl group-hover:h-[80%] transition-all duration-300"></span>
      </Link>
    </div>
  );
}

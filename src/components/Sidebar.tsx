import Image from "next/image";
import Logo from "./Logo";
import DarkLightMode from "./DarkLightMode";

export default function Sidebar() {
  return (
    <aside className="min-w-[100px] fixed top-0 left-0 h-screen bg-bgSidebar flex flex-col rounded-tr-3xl rounded-br-3xl">
      <Logo />

      <div className="mt-auto flex flex-col items-center">
        <DarkLightMode />

        <div className="py-4 border-t border-t-gray-600 w-full flex justify-center">
          <button className="rounded-full overflow-hidden w-10 h-10 hover:opacity-60 transition-all duration-300">
            <Image
              className="w-full h-full object-cover"
              src="/assets/image-avatar.jpg"
              alt="sun"
              width={50}
              height={50}
            />
          </button>
        </div>
      </div>
    </aside>
  );
}

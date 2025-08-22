"use client"
import { usePathname, useRouter } from "next/navigation";
import { IoChevronBack, IoSearchOutline } from "react-icons/io5";

export default function Header({transparent = false}) {
  const pathname = usePathname()
  const firstSegment = pathname.slice(1).split('/')[0]
  const router = useRouter()

  return (
    <header className={`absolute w-full px-5 py-5 mb-8 z-1 left-0 flex justify-between items-center ${transparent ? "bg-transparent text-white" : "bg-white dark:bg-purple dark:text-white"}`}>
      <button onClick={() => router.back()}>
        <IoChevronBack />
      </button>
      <span className="font-light uppercase">
        {pathname === "/" ? "new realeases" : firstSegment}
      </span>
      <button>
        <IoSearchOutline />
      </button>
    </header>
  )
}
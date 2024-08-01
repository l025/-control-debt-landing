import Link from "next/link";
import { AnimateBtn } from "./animate-btn";

export default function Header() {
  return (
    <header className="fixed left-0 top-2.5 w-full z-10">
      <div className="container lg:px-4 mx-auto flex justify-between items-center">
        <Link href={"#"} className="animate-01">
          <img src="/logo.png" alt="logo" className="h-16" />
        </Link>

        <nav className="flex gap-8 justify-end items-center text-black/80">
          <div className="animate-01">
            <div>
              <div className="hidden lg:flex gap-8">
                <Link href={"#"} className="hover:text-black">
                  about
                </Link>
                <Link href={"#"} className="hover:text-black">
                  our proccess
                </Link>
                <Link href={"#"} className="hover:text-black">
                  reviews
                </Link>
                <Link href={"#"} className="hover:text-black">
                  blog
                </Link>
                <Link href={"#"} className="hover:text-black">
                  contact us
                </Link>
              </div>
            </div>
          </div>
          <span className="animate-01 will-change-transform">
            <Link
              href={"#"}
              className="border border-foreground/10 py-1 rounded-lg ml-6 cursor-pointer hover:border-foreground hover:shadow-lg transition-all duration-300"
            >
              <AnimateBtn>Login</AnimateBtn>
            </Link>
          </span>
        </nav>
      </div>
    </header>
  );
}

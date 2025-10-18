import { HeartHandshake, UserRoundPen } from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type NavItemType = {
  href: string;
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
};

function NavItem({ href, icon, label }: NavItemType) {
  const Icon = icon;
  return (
    <li className="flex-1">
      <Link
        href={href}
        className="h-16 flex flex-col items-center justify-center gap-1"
      >
        <Icon className="size-6 stroke-neutral-400" />
        <span className="text-sm text-neutral-400">{label}</span>
      </Link>
    </li>
  );
}

export default function Home() {
  return (
    <main>
      {/* 배경 */}
      <div className="h-dvh bg-neutral-100">
        {/* 메인 컨텐츠 부분 - 하얀색 */}
        <div className="bg-white h-full max-w-md mx-auto shadow-lg flex flex-col">
          <div className="flex-1">아베</div>
          <div className="">
            <footer>
              <nav>
                <ul className="flex border-t border-neutral-300">
                  <li className="flex-1">
                    <Link
                      href="/"
                      className="h-16 flex flex-col items-center justify-center gap-1"
                    >
                      <UserRoundPen className="size-6 stroke-red-400 fill-red-400" />
                      <span className="text-sm text-red-400">나의 계획</span>
                    </Link>
                  </li>

                  <NavItem
                    href="/compare"
                    icon={HeartHandshake}
                    label="우리 계획"
                  />
                </ul>
              </nav>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}

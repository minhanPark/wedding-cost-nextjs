import { HeartHandshake, UserRoundPen } from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { NavList } from "./nav";

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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-dvh bg-neutral-100">
      <div className="bg-white h-full max-w-md mx-auto shadow-lg flex flex-col">
        <main className="flex-1">{children}</main>
        <div className="">
          <footer>
            <NavList />
          </footer>
        </div>
      </div>
    </div>
  );
}

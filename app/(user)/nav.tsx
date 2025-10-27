"use client";

import { HeartHandshake, UserRoundPen } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

import type { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";

type NavItemType = {
  href: string;
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
};

function NavItem({ href, icon, label, isActive = false }: NavItemType) {
  const Icon = icon;

  return (
    <li className="flex-1">
      <Link
        href={href}
        className="h-16 flex flex-col items-center justify-center gap-1"
      >
        <Icon
          className={clsx(
            "size-6 stroke-neutral-400",
            isActive && "stroke-red-400 fill-red-400"
          )}
        />
        <span
          className={clsx(
            "text-sm text-neutral-400",
            isActive && "text-red-400"
          )}
        >
          {label}
        </span>
      </Link>
    </li>
  );
}

export function NavList() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex border-t border-neutral-300">
        <NavItem
          href="/"
          icon={UserRoundPen}
          label="나의 계획"
          isActive={pathname === "/"}
        />

        <NavItem
          href="/compare"
          icon={HeartHandshake}
          label="우리 계획"
          isActive={pathname === "/compare"}
        />
      </ul>
    </nav>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const path = usePathname();

  const tabs = [
    { name: "Home", path: "/" },
    { name: "Tasks", path: "/tasks" },
    { name: "Team", path: "/team" },
    { name: "VIP", path: "/invest" },
    { name: "Me", path: "/dashboard" },
  ];

  return (
    <div className="bottom-nav">
      {tabs.map((tab) => (
        <Link
          key={tab.path}
          href={tab.path}
          className={path === tab.path ? "active" : ""}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
      }

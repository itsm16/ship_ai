"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavUser } from "~/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarRail,
} from "~/components/ui/sidebar"

const navItems = [
  { label: "Dashboard", icon: "dashboard", href: "/dashboard" },
  { label: "Requests", icon: "inventory_2", href: "/requests" },
  { label: "Kanban", icon: "view_kanban", href: "/kanban" },
  { label: "Reviews", icon: "rate_review", href: "/reviews" },
  { label: "Releases", icon: "rocket_launch", href: "/releases" },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar collapsible="icon" className="!bg-black border-r border-white/10">
        <SidebarHeader className="!p-0 !bg-black px-6 pt-6">
          <h1 className="text-[24px] font-semibold leading-[32px] tracking-tighter text-white group-data-[collapsible=icon]:hidden">SHIP_AI</h1>
          <p className="text-sm text-[#d7c2bf] mt-1 mb-8 group-data-[collapsible=icon]:hidden">Enterprise Logistics</p>
        </SidebarHeader>
        <SidebarContent className="!bg-black !gap-0">
          <nav className="flex flex-col w-full !bg-black">
            {navItems.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/")
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-4 px-6 py-4 text-sm transition-colors ${
                    active
                      ? "bg-[#282a2c] text-[#ffb4ac] border-l-2 border-[#ffb4ac]"
                      : "text-[#d7c2bf] hover:text-white hover:bg-[#1a1c1e]"
                  }`}
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <span className="group-data-[collapsible=icon]:hidden">{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </SidebarContent>
        <SidebarFooter className="!p-0 !bg-black px-6 pb-6">
          <a
            href="#"
            className="flex items-center gap-4 px-6 py-4 text-sm text-[#d7c2bf] hover:text-white hover:bg-[#1a1c1e] transition-colors -mx-6"
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="group-data-[collapsible=icon]:hidden">Settings</span>
          </a>
          <NavUser
            user={{
              name: "John Doe",
              email: "john@example.com",
              avatar: "/avatars/john.jpg",
            }}
          />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset className="!bg-black">
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}

"use client";

import {
  IconBookFilled,
  IconDashboard,
  IconInnerShadowTop,
  IconListDetails,
  IconSearch,
  IconUsers,
} from "@tabler/icons-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useParams } from "next/navigation";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { propertyId } = useParams();
  const navMain = [
    {
      title: "Dashboard",
      url: `/property/${propertyId}/dashboard`,
      icon: IconDashboard,
    },
    {
      title: "Guest Movement",
      url: `/property/${propertyId}/guest-movement`,
      icon: IconListDetails,
    },
    {
      title: "Profiles",
      url: `/profies/${propertyId}/profiles`,
      icon: IconUsers,
    },
    {
      title: "Search",
      url: `/property/${propertyId}/search`,
      icon: IconSearch,
    },
    {
      title: "Reports",
      url: `/property/${propertyId}/reports`,
      icon: IconBookFilled,
    },
  ];

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <div>
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}

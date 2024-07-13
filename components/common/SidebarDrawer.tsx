"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Image from "next/image";

import { TiThMenu } from "react-icons/ti";
import SideNavbar from "./SideNavbar";
import { UserRoutes } from "./routes";

const SidebarDrawer = () => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger className="rounded-full bg-orange-100 p-2 text-orange-500">
          <TiThMenu size={24} />
        </DrawerTrigger>
        <DrawerContent className="fixed inset-0 mt-0 h-screen w-40">
          <DrawerHeader>
            <div className="flex justify-center">
              <Avatar>
                <AvatarImage src="logo.svg" alt="logo" />
                <AvatarFallback>LB</AvatarFallback>
              </Avatar>
            </div>
          </DrawerHeader>
          <SideNavbar items={UserRoutes} className="p-4" />
          <Separator className="my-4" />
          <div className="space-y-3 p-4">
            <p>Dark/light</p>
            <p>Sign out</p>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default SidebarDrawer;

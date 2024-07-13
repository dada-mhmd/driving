import { ScrollArea } from "@/components/ui/scroll-area";
import NavItem from "./NavItem";
import { cn } from "@/lib/utils";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    href: string;
    title: string;
    icon: React.ElementType;
  }[];
}

const SideNavbar = ({ items, className, ...props }: SidebarProps) => {
  return (
    <ScrollArea className="mt-8 h-[70vh]">
      <nav className={cn("flex flex-col space-y-6", className)} {...props}>
        {items?.map((item) => (
          <NavItem key={item.href} {...item} showTooltip={false} />
        ))}
      </nav>
    </ScrollArea>
  );
};

export default SideNavbar;

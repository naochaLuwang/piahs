"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [data, setData] = useState<LinkProps[] | null>(null);
  const [isLoading, setLoading] = useState(false);

  const pathname = usePathname();
  console.log(pathname);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/links`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div className="z-50 hidden w-full h-10 pl-5 bg-yellow-500 lg:block lg:fixed top-28"></div>
    );

  return (
    <div className="z-50 hidden w-full h-10 pl-5 bg-yellow-500 lg:block lg:fixed top-28 ">
      <NavigationMenu>
        <NavigationMenuList>
          {data !== null &&
            data.map((navlink: LinkProps) => (
              <div key={navlink.id}>
                {navlink.sublinks.length > 0 ? (
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      {navlink.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul
                        className={`grid w-[400px] gap-3 p-4 ${
                          navlink.isMulti === "YES"
                            ? "w-[800px] md:grid-cols-2"
                            : "grid-cols-1 md:w-[400px]"
                        }   `}
                      >
                        {navlink.sublinks.map((component: SubLinkProps) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={`${navlink.slug}/${component.slug}`}
                          >
                            {component.subtitle}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {navlink.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )}
              </div>
            ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href!}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-accent-foreground  focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

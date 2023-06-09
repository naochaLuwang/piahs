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
  const [isSticky, setIsSticky] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const pathname = usePathname();
  // console.log(pathname);

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
      <div
        className={`z-50 w-full h-10 pl-5 bg-transparent hidden lg:block  ${
          isSticky
            ? " sticky top-32 transition-all duration-100 ease-linear"
            : " lg:fixed "
        } ${
          pathName == "/" && !isSticky
            ? "bg-yellow-500 bg-opacity-90  top-44"
            : "bg-yellow-500 bg-opacity-90 top-32"
        }`}
      >
        <div className="z-50 hidden w-full h-10 pl-5 bg-transparent lg:block lg:fixed top-28"></div>
      </div>
    );

  return (
    <div
      className={`z-50 w-full h-10 pl-5 bg-transparent hidden lg:block  ${
        isSticky
          ? " sticky top-32 transition-all duration-75 ease-in-out"
          : " lg:fixed"
      } ${
        pathName == "/" && !isSticky
          ? "bg-yellow-500 bg-opacity-90  top-44"
          : "bg-yellow-500 bg-opacity-90 top-32"
      }`}
    >
      <NavigationMenu>
        <NavigationMenuList>
          {data !== null &&
            data
              .sort((a: any, b: any) => a.order - b.order)
              .map((navlink: LinkProps) => (
                <div key={navlink.id}>
                  {navlink.sublinks.length > 0 ? (
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className={`${
                          isSticky ? "text-neutral-800" : "text-neutral-800"
                        }`}
                      >
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
                      <Link href={navlink.slug}>
                        <NavigationMenuLink
                          className={`${navigationMenuTriggerStyle()} ${
                            isSticky ? "text-neutral-800" : "text-neutral-800"
                          }`}
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
            "block select-none space-y-1 rounded-md p-3 group leading-none no-underline outline-none transition-colors hover:bg-gradient-to-tr hover:from-indigo-800 hover:to-indigo-950 hover:text-white   duration-100 ease-in-out focus:text-white",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none ">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground group-hover:text-white">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

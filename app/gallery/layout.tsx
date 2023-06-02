import { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
  },
  title: "Gallery | PIAHS",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

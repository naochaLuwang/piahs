import { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: "/pfavicon.png",
  },
  title: "Contact | PIAHS",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

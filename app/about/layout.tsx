import Contact from "@/components/about/Contact";
import ImportantLinks from "@/components/about/ImportantLinks";
import QuickLinks from "@/components/about/QuickLinks";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-auto px-10 pb-20 mt-40 overflow-hidden ">
      {children}
      <div className="flex flex-col space-y-5">
        <Contact />
        <QuickLinks />
        <ImportantLinks />
      </div>
    </div>
  );
}

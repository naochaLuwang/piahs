import Contact from "@/components/about/Contact";
import ImportantLinks from "@/components/about/ImportantLinks";
import QuickLinks from "@/components/about/QuickLinks";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex px-10 py-10">
      {children}
      <div className="flex flex-col pt-10 space-y-5">
        <Contact />
        <QuickLinks />
        <ImportantLinks />
      </div>
    </div>
  );
}

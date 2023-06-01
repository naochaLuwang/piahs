export default function FacilitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full h-auto px-8 pb-20 mt-32 overflow-hidden ">
      {children}
    </div>
  );
}

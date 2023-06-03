export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full h-auto pb-20 mt-40 overflow-hidden ">
      {children}
    </div>
  );
}

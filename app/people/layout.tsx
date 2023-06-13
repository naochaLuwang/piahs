export default function PeopleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full h-auto pb-20 overflow-hidden mt-28 ">
      {children}
    </div>
  );
}

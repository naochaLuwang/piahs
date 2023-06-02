export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-auto pb-20 mt-32 overflow-hidden lg:px-10 ">
      {children}
    </div>
  );
}

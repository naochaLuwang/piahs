export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-auto px-10 pb-20 mt-32 overflow-hidden ">
      {children}
    </div>
  );
}

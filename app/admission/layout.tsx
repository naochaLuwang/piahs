export default function AdmissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-auto px-4 pb-20 overflow-hidden stat-40 lg:px-10 ">
      {children}
    </div>
  );
}

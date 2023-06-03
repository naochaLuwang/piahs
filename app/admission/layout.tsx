export default function AdmissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-auto px-10 pb-20 mt-40 overflow-hidden ">
      {children}
    </div>
  );
}

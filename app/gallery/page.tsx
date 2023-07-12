import AlbulmContainer from "@/components/AlbulmContainer";
import client from "@/lib/prismadb";

const AlbumPage = async () => {
  const albulms: any = await client.albulm.findMany({
    include: {
      images: true,
    },
  });

  console.log(albulms);

  return (
    <div className="w-full h-auto">
      <AlbulmContainer data={albulms} />
    </div>
  );
};

export default AlbumPage;

export const revalidate = 0;

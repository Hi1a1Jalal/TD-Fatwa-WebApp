import FatwaCardDetailed from "@/app/components/FatwaCardDetailed";

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  console.log("id", id);
  const data = await fetch(
    `${baseUrl}/fatwa/detailed?${new URLSearchParams({
      id: id.toString(),
    })}`,
  );
  const fatwa = await data.json();
  console.log("fatwa", fatwa);
  return (
      <FatwaCardDetailed fatwa={fatwa} />
  );
}

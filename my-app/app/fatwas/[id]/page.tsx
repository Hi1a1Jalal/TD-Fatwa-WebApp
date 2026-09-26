import FatwaCard from "@/app/components/FatwaCardSummary";

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const data = await fetch(
    `${process.env.baseUrl}/fatwa/summarised?${new URLSearchParams({
      id: id.toString(),
    })}`,
  );
  const fatwa = await data.json();

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 p-4 mt-5">
      <FatwaCard fatwa={fatwa} />
    </div>
  );
}

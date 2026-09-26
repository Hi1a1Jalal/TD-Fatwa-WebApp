import FatwaList from "@/app/components/FatwaList";

export default async function Page({
  params,
}: {
  params: Promise<{ subcategory: string }>;
}) {
  const { subcategory } = await params;
  console.log(`${process.env.baseUrl}/fatwa/subcategory`);
  const response = await fetch(
    `${process.env.baseUrl}/fatwa/subcategory?${new URLSearchParams({
      id: subcategory.toString(),
    })}`,
  );



  if (!response.ok) {
    throw new Error("Failed to fetch fatwas");
  }

  const data = await response.json();


  return (
    <div className="min-w-screen my-5">
      <FatwaList fatwas={data} />
    </div>
  );
}

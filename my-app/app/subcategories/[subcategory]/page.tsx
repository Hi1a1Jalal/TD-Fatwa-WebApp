import FatwaList from "@/app/components/FatwaList";
import { baseUrl } from "@/app/config";

export default async function Page({
  params,
}: {
  params: Promise<{ subcategory: string }>;
}) {
  const { subcategory } = await params;
  console.log(`${baseUrl}/fatwa/subcategory`);
 const data = await fetch(
  `${baseUrl}/fatwa/subcategory?${new URLSearchParams({
    id: subcategory.toString(),
  })}`
);
const fatwas = await data.json();

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 p-4">
      <FatwaList fatwas={fatwas} />
    </div>
  );
}

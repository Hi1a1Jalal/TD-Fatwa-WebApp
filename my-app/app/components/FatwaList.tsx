"use client";

import FatwaCard from "./FatwaCardSummary";
import { FatwaSummarised } from "../mockData";
import { useRouter } from "next/navigation";

interface FatwaListProps {
  fatwas: FatwaSummarised[];
}

export default function FatwaList({ fatwas }: FatwaListProps) {
    const router = useRouter();
  
  const handleReadMore = (fatwa: FatwaSummarised) => {
    router.push(`/fatwas/detailed/${fatwa.id}`);
  };

  if (fatwas.length === 0) {
    return <>No fatwas found for this category</>;
  }

  return (
    <div className="flex flex-col gap-6">
      {fatwas.map((fatwa, index) => (
        <FatwaCard
          key={index}
          fatwa={fatwa}
          onReadMore={() => handleReadMore(fatwa)}
        />
      ))}
    </div>
  );
}

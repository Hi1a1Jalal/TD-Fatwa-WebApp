"use client";

import FatwaCard from "./FatwaCardSummary";
import { FatwaSummarised } from "../mockData";
import { useRouter } from "next/navigation";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
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
    function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {fatwas.map((fatwa, index) => (
        <FatwaCard
          key={index}
          fatwa={fatwa}
          onReadMore={() => handleReadMore(fatwa)}
        />
      ))}
            <button
        onClick={topFunction}
        className="hover:bg-primary-content-dark fixed bottom-5 right-5 z-50 rounded-full bg-blue-600 p-3 text-white shadow focus:outline-none"
        aria-label="Scroll to top"
      >
        <ArrowUpwardIcon />
      </button>
    </div>
  );
}

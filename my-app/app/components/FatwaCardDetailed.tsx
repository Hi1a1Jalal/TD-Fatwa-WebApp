"use client";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { FatwaDetailed } from "../mockData";

interface FatwaCardDetailedProps {
  fatwa: FatwaDetailed;
}

export default function FatwaCardDetailed({ fatwa }: FatwaCardDetailedProps) {
  const router = useRouter();
  return (
    <div className="bg-sky-900 rounded-4xl w-full max-w-11/12 ">
      <div className="p-8">
        {/* Question */}
        <h1 className="font-semibold">Question</h1>

        <h2 className="mt-2 font-bold ">{fatwa.question}</h2>

        {/* Metadata */}
        <div className="mt-6 flex flex-wrap gap-6 border-y py-4 text-sm ">
          <div>
            <span className="font-semibold">Answered by:</span>{" "}
            {fatwa.answeredBy}
          </div>

          <div>
            <span className="font-semibold">Published:</span>{" "}
            {new Date(fatwa.createdDate).toLocaleDateString()}
          </div>

          <div>
            <span className="font-semibold">Category:</span>{" "}
            {fatwa.baseCategory}
          </div>

          <h2>
            <span className="font-semibold">Subcategory:</span>{" "}
            {fatwa.subCategory}
          </h2>
        </div>

        {/* Answer */}
        <h2 className="mt-8 block font-semibold">Answer</h2>

        <p className="mt-3 whitespace-pre-line">{fatwa.answer}</p>

        {/* Footer */}
        <div className="mt-10 flex justify-end border-t pt-6">
          <Button variant="contained" onClick={() => router.back()}>
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}

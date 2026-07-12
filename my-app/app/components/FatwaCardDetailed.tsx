"use client"
import { Card, CardContent, Typography, Button } from "@mui/material";
import {useRouter} from "next/navigation";
import { FatwaDetailed } from "../mockData";


interface FatwaCardDetailedProps {
  fatwa: FatwaDetailed;
}

export default function FatwaCardDetailed({ fatwa }: FatwaCardDetailedProps) {
  const router = useRouter();
  return (
    <Card elevation={3} className="mx-auto max-w-4xl rounded-xl">
      <CardContent className="p-8">
        {/* Question */}
        <Typography variant="overline" className="text-blue-600 font-semibold">
          Question
        </Typography>

        <Typography
          variant="h4"
          component="h1"
          className="mt-2 font-bold text-slate-900"
        >
          {fatwa.question}
        </Typography>

        {/* Metadata */}
        <div className="mt-6 flex flex-wrap gap-6 border-y py-4 text-sm text-slate-600">
          <div>
            <span className="font-semibold text-slate-800">Answered by:</span>{" "}
            {fatwa.answeredBy}
          </div>

          <div>
            <span className="font-semibold text-slate-800">Published:</span>{" "}
            {new Date(fatwa.createdDate).toLocaleDateString()}
          </div>

          <div>
            <span className="font-semibold text-slate-800">Category:</span>{" "}
            {fatwa.baseCategory}
          </div>

          <div>
            <span className="font-semibold text-slate-800">Subcategory:</span>{" "}
            {fatwa.subCategory}
          </div>
        </div>

        {/* Answer */}
        <Typography
          variant="overline"
          className="mt-8 block text-blue-600 font-semibold"
        >
          Answer
        </Typography>

        <Typography
          variant="body1"
          className="mt-3 whitespace-pre-line leading-8 text-slate-700"
        >
          {fatwa.answer}
        </Typography>

        {/* Footer */}
        <div className="mt-10 flex justify-end border-t pt-6">
          <Button variant="contained" onClick={() => router.back()}>
            Back
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

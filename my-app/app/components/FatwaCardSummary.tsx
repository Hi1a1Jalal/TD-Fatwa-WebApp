"use client";
import { Card, CardContent, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { FatwaSummarised } from "../mockData";

interface FatwaCardSummaryProps {
  fatwa: FatwaSummarised;
  onReadMore?: () => void;
}

export default function FatwaCard({ fatwa, onReadMore }: FatwaCardSummaryProps) {
  return (
    <Card
      variant="elevation"
      className="shadow-blue-400 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
    >
      <CardContent className="flex flex-col gap-4 p-6">
        <Typography
          variant="h6"
          component="h2"
          className="font-bold text-slate-900"
        >
          {fatwa.question}
        </Typography>
        <Typography variant="body2" className="text-slate-600">
          {fatwa.answer.length > 50
            ? `${fatwa.answer.slice(0, 50)}...`
            : fatwa.answer}
        </Typography>

        <div className="flex items-center justify-between border-t pt-4">
          <div>
            <p className="text-sm font-medium text-slate-800 max-w-9/12">
              Answered by {fatwa.answeredBy}
            </p>
      
            <p className="text-xs text-slate-500 mt-2">
              {new Date(fatwa.createdDate).toLocaleDateString()}
            </p>
          </div>

          <Button
            className=""
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            onClick={onReadMore}
          >
            Read More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

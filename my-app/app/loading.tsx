import { Box, CircularProgress, LinearProgress } from "@mui/material";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="h-full w-full flex justify-center">
      <CircularProgress
        aria-label="Loading…"
      />
    </div>
  );
}

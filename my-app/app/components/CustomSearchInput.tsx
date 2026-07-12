"use client";

import { useMemo, useState } from "react";
import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { baseUrl } from "../config";

interface FatwaSearchResult {
  id: number;
  question: string;
}

export default function CustomSearchInput() {
  const router = useRouter();

  const [inputValue, setInputValue] = useState("");

  const search = useMemo(() => inputValue.trim(), [inputValue]);

  const { data = [], isFetching } = useQuery({
    queryKey: ["fatwa-search", search],
    queryFn: async () => {
      if (search.length < 2) {
        return [];
      }

      const response = await fetch(
        `${baseUrl}/fatwa/search?${new URLSearchParams({
          fatwa: inputValue,
        })}`,
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json() as Promise<FatwaSearchResult[]>;
    },
    enabled: search.length >= 2,
  });

  return (
    <Autocomplete
      freeSolo
      filterOptions={(x) => x}
      options={data}
      getOptionLabel={(option) =>
        typeof option === "string" ? option : option.question
      }
      loading={isFetching}
      inputValue={inputValue}
      onInputChange={(_, value) => setInputValue(value)}
      onChange={(_, value) => {
        if (value && typeof value !== "string") {
          router.push(`/fatwas/detailed/${value.id}`);
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search fatwas..."
          slotProps={{
            ...params.slotProps,
            input: {
              ...params.slotProps.input,
              type: "search",
              endAdornment: (
                <>{isFetching ? <CircularProgress size={20} /> : null}</>
              ),
            },
          }}
        />
      )}
    />
  );
}

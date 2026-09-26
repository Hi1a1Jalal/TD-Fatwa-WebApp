"use client";

import { ChangeEvent, useMemo, useState } from "react";
import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FatwaSearchAutocomplete } from "./customisedComponents/AutoComplete";

interface FatwaSearchResult {
  id: number;
  question: string;
}

export default function CustomSearchInput() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const [inputValue, setInputValue] = useState("");

  const search = useMemo(() => inputValue.trim(), [inputValue]);

  const { data = [], isFetching } = useQuery({
    queryKey: ["fatwa-search", search],
    queryFn: async () => {
      if (search.length < 2) {
        return [];
      }

      const response = await fetch(
        `${process.env.baseUrl}/fatwa/search?${new URLSearchParams({
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

  const handleClose = () => {
    setOpen(false);
  };
  function handleFatwaClick(id: number): void {
    console.log('entered', id)
    router.push(`/fatwas/detailed/${id}`)
  }

  return (
    <FatwaSearchAutocomplete
      open={open}
      onClose={handleClose}
      isOptionEqualToValue={(option, value) =>
        option.question === value.question
      }
      onInputChange={(_, newInputValue) => {
        setInputValue(newInputValue);

        if (newInputValue.length >= 2) {
          setOpen(true);
        }
      }}
      getOptionLabel={(option) => option.question}
      options={data}
      filterOptions={(x) => x}
      loadingText="Loading fatwas..."
      loading={isFetching}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
          sx={{
            // Label
            "& .MuiInputLabel-root": {
              color: "#FFFFFF",
            },

            // Focused label
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#FFFFFF",
            },

            // Typed text
            "& .MuiInputBase-input": {
              color: "#FFFFFF",
            },

            // Placeholder
            "& .MuiInputBase-input::placeholder": {
              color: "#FFFFFF",
              opacity: 1,
            },
    
          }}
          slotProps={{
            ...params.slotProps,
            input: {
              ...params.slotProps.input,
              endAdornment: (
                <>
                  {isFetching ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.slotProps.input.endAdornment}
                </>
              ),
            },
          }}
        />
      )}
      renderOption={(props, option) => (
        <li
          {...props}
          key={option.id}
          className="hover:bg-blue-300/50 p-3"
          onClick={() => handleFatwaClick(option.id)}
        >
          <div>
            <div >{option.question}</div>

          </div>
        </li>
      )}
    />
    // <div className="flex flex-col gap-2">
    //   <label>Search Fatwas...</label>
    //   <input className="border rounded-4xl p-2" onChange={handleChange}></input>
    // </div>
  );
}

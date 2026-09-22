import { Autocomplete, AutocompleteProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FatwaSearchAutocomplete = styled(Autocomplete)<
  AutocompleteProps<any, false, false, false>
>(({ theme }) => ({
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ddd",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ddd",
  },

  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#000",
  },
}));

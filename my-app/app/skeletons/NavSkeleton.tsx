import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Skeleton,
} from "@mui/material";

export default function NavSkeleton() {
  return (
    <Box>
      <List>
        {Array.from({ length: 6 }).map((_, index) => (
          <ListItemButton key={index}>
            <ListItemText
              primary={
                <Skeleton
                  variant="text"
                  width={`${60 + Math.random() * 30}%`}
                  height={28}
                />
              }
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
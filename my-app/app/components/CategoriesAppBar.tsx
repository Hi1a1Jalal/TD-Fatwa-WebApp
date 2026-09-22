"use client";
import {
  AppBar,
  Box,
  Button,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { Categories, CategoriesAppBarInterfaceProps } from "../interfaces";
import React from "react";
import Link from "next/link";

export default function CategoriesAppBar({
  categories,
}: CategoriesAppBarInterfaceProps) {
  const breakpoint = useBreakpoint();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<Categories | null>(
    null,
  );

  const handleTabClick = (
    event: React.MouseEvent<HTMLElement>,
    category: Categories,
  ) => {
    console.log("entered", category);
    setAnchorEl(event.currentTarget);
    setSelectedCategory(category);
  };

  const handleSubCategoryClick = () => {
    setAnchorEl(null);
    setSelectedCategory(null);
  };

  const open = Boolean(anchorEl);

  if (breakpoint === "mobile" || breakpoint === "tablet") {
    return (
      <></>
    )
  } else {
    return (
      <Box >
        <AppBar
          position="static"
        >
          <Toolbar>
            <Tabs textColor="inherit" scrollButtons variant="scrollable" >
              {categories?.map((category) => (
                <Tab
                  key={category.baseCategory}
                  onClick={(e) => handleTabClick(e, category)}
                  label={category.baseCategory}
                />
              ))}

              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleSubCategoryClick}
              >
                {selectedCategory?.subCategories.map((subCategory) => (
                  <Link href={`/subcategories/${subCategory.id}`}>
                    <MenuItem
                      key={subCategory.id}
                      onClick={handleSubCategoryClick}
                    >
                      {subCategory.subCategory}
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Tabs>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

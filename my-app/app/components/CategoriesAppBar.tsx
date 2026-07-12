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
import { Categories } from "../interfaces";
import MenuIcon from "@mui/icons-material/Menu";
import { ArrowBack, ExpandLess, ExpandMore } from "@mui/icons-material";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import HomeIcon from "@mui/icons-material/Home";
interface CategoriesAppBarInterfaceProps {
  categories: Categories[];
}
export default function CategoriesAppBar({
  categories,
}: CategoriesAppBarInterfaceProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const breakpoint = useBreakpoint();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<Categories | null>(
    null,
  );
  const router = useRouter();
  const pathname = usePathname();

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

  const toggleDrawer = (newOpen: boolean) => () => {
    console.log("entered");
    setDrawerOpen(newOpen);
  };

  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const handleClick = (category: string) => {
    setExpandedCategory((prev) => (prev === category ? null : category));
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {categories?.map((category) => (
          <React.Fragment key={category.baseCategory}>
            <ListItemButton onClick={() => handleClick(category.baseCategory)}>
              <ListItemText primary={category.baseCategory} />
              {expandedCategory === category.baseCategory ? (
                <ExpandLess />
              ) : (
                <ExpandMore />
              )}
            </ListItemButton>

            <Collapse
              in={expandedCategory === category.baseCategory}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {category.subCategories.map((subCategory) => (
                  <Link
                    href={`/subcategories/${subCategory.id}`}
                    onClick={toggleDrawer(false)}
                  >
                    <ListItemButton key={subCategory.id} sx={{ pl: 4 }}>
                      <ListItemText primary={subCategory.subCategory} />
                    </ListItemButton>
                  </Link>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  if (breakpoint === "mobile" || breakpoint === "tablet") {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" onClick={() => router.replace("/")}>
              <HomeIcon />
            </IconButton>
            {pathname !== "/" && (
              <IconButton
                color="inherit"
                onClick={() => router.back()}
                sx={{ mr: 2 }}
              >
                <ArrowBack />
              </IconButton>
            )}
            <Box sx={{ flexGrow: 1 }} />

            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={drawerOpen}>
          {DrawerList}
        </Drawer>
      </Box>
    );
  } else {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" onClick={() => router.replace("/")}>
              <HomeIcon />
            </IconButton>
            {pathname !== "/" && (
              <IconButton
                color="inherit"
                onClick={() => router.back()}
                sx={{ mr: 2 }}
              >
                <ArrowBack />
              </IconButton>
            )}
            <Tabs textColor="inherit" scrollButtons variant="scrollable">
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

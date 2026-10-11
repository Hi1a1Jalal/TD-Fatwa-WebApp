"use client";
import {
  ArrowBack,
  ArrowForward,
  ExpandLess,
  ExpandMore,
  Search,
} from "@mui/icons-material";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItemButton,
  Collapse,
  ListItemText,
  Drawer,
  Divider,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Categories, CategoriesAppBarInterfaceProps } from "../interfaces";
import { useBreakpoint } from "../hooks/useBreakpoint";
import MenuIcon from "@mui/icons-material/Menu";

export default function MainAppBar({
  categories,
}: CategoriesAppBarInterfaceProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const breakpoint = useBreakpoint();
  const pathname = usePathname();

  const toggleDrawer = (newOpen: boolean) => () => {
    setDrawerOpen(newOpen);
    if (newOpen === false) setExpandedCategory(null);
  };

  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const handleClick = (category: string) => {
    setExpandedCategory((prev) => (prev === category ? null : category));
  };
  const router = useRouter();
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <Link key={"Home"} href={"/"} onClick={toggleDrawer(false)}>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </Link>
        <Divider sx={{ my: 0.5 }} />
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
      <Box>
        <AppBar position="static">
          <Toolbar className="flex justify-between my-2">
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Link
              href={"https://torontodawah.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/counselling-qna-transparent.svg"
                alt="Toronto Dawah Counselling Q&A"
                width={200}
                height={200}
              />
            </Link>
            {pathname === "/" ? (
              <IconButton sx={{ visibility: "hidden" }}>
                <ArrowBack />
              </IconButton>
            ) : (
              <IconButton color="inherit" onClick={() => router.back()}>
                <ArrowBack />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </Box>
    );
  } else {
    return (
      <AppBar position="static">
        <Toolbar className="flex justify-between my-3 ">
          <IconButton color="inherit" onClick={() => router.replace("/")}>
            <HomeIcon />
          </IconButton>
          <Link
            href={"https://torontodawah.com/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/counselling-qna-transparent.svg"
              alt="Toronto Dawah Counselling Q&A"
              width={200}
              height={200}
            />
          </Link>
          {pathname === "/" ? (
            <IconButton sx={{ visibility: "hidden" }}>
              <ArrowBack />
            </IconButton>
          ) : (
            <IconButton color="inherit" onClick={() => router.back()}>
              <ArrowBack />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

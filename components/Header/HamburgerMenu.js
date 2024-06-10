"use client";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import Image from "next/image";
import dashboard from "@/assets/dashboard.svg";
import mobileMenu from "@/assets/mobileMenu.png";

import styles from "./hamburgerMenu.module.css";
import Link from "next/link";

export default function HamburgerMenu() {
  return (
    <Menu>
      <MenuButton
        className={styles.menuButton}
        sx={{
          display: "none",
          "@media (max-width: 1023px)": {
            display: "inline-flex",
          },
        }}
      >
        <Image src={mobileMenu} alt="Dashboard icon" />
      </MenuButton>
      <MenuList
        className={styles.menuList}
        sx={{
          border: "1px solid #3182ce",
          background: "rgb(58, 58, 58)",
          "@media (max-width: 768px)": {
            padding: "4px 0",
          },
        }}
      >
        <Link href="/">
          <MenuItem
            className={styles.menuItem}
            sx={{
              background: "#686868",
              color: "#FDFDFD",
              "@media (max-width: 768px)": {
                padding: "0",
              },
            }}
            icon={
              <img
                src={dashboard.src}
                alt="Dashboard icon"
                className={styles.itemImg}
              />
            }
          >
            Dashboard
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
}

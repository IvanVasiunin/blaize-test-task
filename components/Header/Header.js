import { Box, Image, Button } from "@chakra-ui/react";
import Link from "next/link";

import logoName from "@/assets/DeHive.svg";
import logo from "@/assets/logo.png";

import CustomSelect from "./CustomSelect";

import styles from "./header.module.css";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  return (
    <Box as="header" className={styles.header}>
      <HamburgerMenu />
      <Link href="/" className={styles.logo_link}>
        <Box className={styles.logo_container}>
          <Image className={styles.logo} src={logo.src} alt="logo" mr={2} />
          <Image className={styles.logoName} src={logoName.src} alt="logo" />
        </Box>
      </Link>
      <Box className={styles.buttons_mob__bg}>
        <Button
          sx={{
            borderRadius: "40px",
            background: "rgb(24, 24, 24)",
            fontSize: "16px",
            lineHeight: "16px",
            color: "#FFF",
            padding: '8px 12px',
            height: '52px',
            _hover: {
              background: "rgb(48, 48, 48)",
            },
            _active: {
              background: "rgb(48, 48, 48)",
            },
            "@media (max-width: 768px)": {
              fontSize: "12px",
              lineHeight: "12px",
              height: '26px'
            },
          }}
          className={styles.connect_button__mob}
        >
          Connect
        </Button>
      </Box>
      <Box className={styles.buttons_container}>
        <Box className={styles.buttons_container__tvl_and_select}>
          <Box className={styles.buttons_container__tvl}>
            <Box>TVL:</Box>
            <Box>$234.567,26</Box>
          </Box>
          <CustomSelect />
        </Box>

        <Button
          className={styles.wallet_button}
          sx={{
            lineHeight: "1",
            fontWeight: "medium",
            fontSize: "16px",
            color: "#fff",
            height: "auto",
            maxHeight: "54px",
            minWidth: "198px",
            borderRadius: "40px",
            _hover: {
              opacity: "0.85",
            },
          }}
        >
          Connect wallet
        </Button>
      </Box>
    </Box>
  );
}

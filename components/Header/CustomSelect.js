"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
} from "@chakra-ui/react";

import arrow from "@/assets/arrow.svg";
import styles from "./select.module.css";

export default function CustomSelect() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const options = ["Polygon", "Avalanche", "Etherum"];

  return (
    <Box className={styles.selectContainer}>
      <Menu>
        <MenuButton
          sx={{
            lineHeight: "1.5",
            fontWeight: "medium",
            fontSize: "16px",
            color: "#fff",
            background: "none",
            borderRadius: "40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            border: "1px solid #3182ce",
            minWidth: "184px",
            height: "auto",
            _hover: {
              background: "rgba(253,253,253,.1)",
            },
            _active: {
              background: "rgba(253,253,253,.2)",
            },
            "@media (max-width: 768px)": {
              fontSize: "14px",
              lineHeight: "24px",
            }
          }}
          as={Button}
          rightIcon={<Image src={arrow.src} alt="icon" />}
          className={styles.menuButton}
        >
          {selectedOption ? selectedOption : "Polygon"}
        </MenuButton>
        <MenuList
          sx={{
            background: "none",
            border: "1px solid #3182ce",
            background: "rgba(253,253,253,.2)",
            minWidth: "200px",
            "@media (max-width: 768px)": {
              minWidth: "127px",
            }
          }}
          className={styles.menuList}
        >
          {options.map((option, index) => (
            <MenuItem
              sx={{
                lineHeight: "1.5",
                fontWeight: "medium",
                fontSize: "16px",
                color: "#fff",
                background: "none",
                _hover: {
                  background: "rgba(253,253,253,.1)",
                },
                "@media (max-width: 768px)": {
                  fontSize: "14px",
                  lineHeight: "24px",
                }
              }}
              key={index}
              onClick={() => handleSelect(option)}
              className={styles.menuItem}
            >
              {option}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}

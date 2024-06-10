'use client'
import { useState } from "react";
import { Button, ButtonGroup, Text, Box } from "@chakra-ui/react";
import styles from "./periodSwitcher.module.css";

const periods = ["1D", "1W", "1M", "1Y"];

export default function PeriodSwitcher() {
  const [activePeriod, setActivePeriod] = useState("1W");

  return (
    <Box className={styles.buttonGroup}>
      {periods.map(period => (
        <Button
          key={period}
          onClick={() => setActivePeriod(period)}
          className={`${styles.button} ${activePeriod === period ? styles.active : ""}`}
        >
          <Text className={styles.buttonText}>{period}</Text>
        </Button>
      ))}
      <Box
        className={styles.highlight}
        style={{ transform: `translateX(${periods.indexOf(activePeriod) * 100}%)` }}
      >
        <Text className={styles.highlightText}>{activePeriod}</Text>
      </Box>
    </Box>
  );
}

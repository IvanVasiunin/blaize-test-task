import { Box, Button } from "@chakra-ui/react";
import Image from "next/image";

import styles from "./impulseLogoAndRewards.module.css";

import impulseImg from "@/assets/impulseImg.png";
import question from "@/assets/question.png";
import get from "@/assets/get.png";
import orangeIcon from "@/assets/orangeIcon.png";
import blueIcon from "@/assets/blueIcon.png";
import greenIcon from "@/assets/greenIcon.png";

export default function ImpulseLogoAndRewards() {
  return (
    <Box className={styles.impulse_container}>
      <Image
        className={styles.impulse_logo}
        src={impulseImg}
        alt="Impulse logo"
      />

      <Box className={styles.impulse__pair_info}>
        <Box as="span">DHV / QUICK</Box>
        <Box className={styles.impulse__img_container}>
          <Image src={question} alt="Question mark" />
          <Box as="span" className={styles.impulse__additional_info}>
            DHV / QUICK additional info
          </Box>
        </Box>
        <Button>
          <Image src={get} alt="Get button image" />
        </Button>
      </Box>

      <Box className={styles.impulse__badges}>
        <Box className={styles.impulse__badge}>QuickSwap</Box>
        <Box className={styles.impulse__badge}>
          Volatility:&nbsp;
          <Box className={styles.impulse__badge_green} as="span">
            Very Low
          </Box>
        </Box>
        <Box className={styles.impulse__badge}>
          Risk:&nbsp;
          <Box className={styles.impulse__badge_red} as="span">
            Very High
          </Box>
        </Box>
      </Box>

      <Box className={styles.impulse__rewards}>
        <Box className={styles.impulse__rewards_title} as="span">
          Your rewards:
        </Box>
        <Box className={styles.impulse__rewards_value}>
          <Box as="span">$10,678.12</Box>
          <Box>
            <Image src={orangeIcon} alt="Icon" />
            <Image src={blueIcon} alt="Icon" />
            <Image src={greenIcon} alt="Icon" />
          </Box>
        </Box>
        <Box className={styles.impulse__rewards_accumulated} as="span">
          Accumulated rewards
        </Box>
      </Box>

      <Box className={styles.impulse__rewards_claim_bg}>
        <Button
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "40px",
            background: "#13141D",
            fontsize: "13px",
            lineHeight: "13px",
            color: "#FDFCFC",
            _hover: {
              background: 'rgb(35, 36, 44)'
            }
          }}
        >
          Claim rewards
        </Button>
      </Box>
    </Box>
  );
}

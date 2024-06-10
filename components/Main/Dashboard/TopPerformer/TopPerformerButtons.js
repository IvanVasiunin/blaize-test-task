import { Flex, Button, Box } from "@chakra-ui/react";

import styles from "./topPerformerButtons.module.css";

export default function TopPerformerButtons() {
  return (
    <Flex className={styles.top_performer_buttons__container}>
      <Button
        className={styles.top_performer_buttons__stake}
        sx={{
          lineHeight: "1",
          fontWeight: "medium",
          fontSize: "16px",
          color: "#FDFCFC",
          height: "auto",
          width: "179px",
          borderRadius: "40px",
          minHeight: '50px',
          _hover: {
            opacity: "0.85",
          },
          "@media (max-width: 768px)": {
            width: "120px",
            minHeight: '45px',
          }
        }}
      >
        Stake
      </Button>
      <Box className={styles.top_performer_buttons__unstake_border}>
        <Button
          className={styles.top_performer_buttons__unstake}
          sx={{
            lineHeight: "1",
            fontWeight: "medium",
            fontSize: "16px",
            color: "#FDFCFC",
            height: "auto",
            width: "179px",
            borderRadius: "40px",
            background: '#1E1E1E',
            minHeight: '48px',
            _hover: {
              background: 'rgba(252, 78, 126, .5)',
            },
            "@media (max-width: 768px)": {
              width: "120px",
              minHeight: '43px',
            }
          }}
        >
          Unstake
        </Button>
      </Box>
    </Flex>
  );
}

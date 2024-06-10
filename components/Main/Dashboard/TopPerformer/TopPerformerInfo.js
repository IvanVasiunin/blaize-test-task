import { Box } from "@chakra-ui/react";
import Image from "next/image";

import styles from './topPerformerInfo.module.css';

import question from "@/assets/question.png";

export default function TopPerformerInfo() {
  return (
    <Box className={styles.topPerformer_container}>
      <Box className={styles.topPerformer_block}>
        <Box className={styles.topPerformer_name} as="span">
          APY
        </Box>
        <Box className={styles.topPerformer_value}>
          <Box as="span">199.11%</Box>
          <Image src={question} alt="Question mark" />
          <Box as="span" className={styles.impulse__additional_info}>
            APY additional info
          </Box>
        </Box>
        <Box className={styles.topPerformer_additional} as="span">
          APR: 257.84%
        </Box>
      </Box>

      <Box className={styles.topPerformer_block}>
        <Box className={styles.topPerformer_name} as="span">
          TVL
        </Box>
        <Box className={styles.topPerformer_value} as="span">
          $124,235.00
        </Box>
        <Box className={styles.topPerformer_additional} as="span">
          Total Value Locked
        </Box>
      </Box>

      <Box className={styles.topPerformer_block}>
        <Box className={styles.topPerformer_name} as="span">
          Your Deposits
        </Box>
        <Box className={styles.topPerformer_value} as="span">
          $123,123.00
        </Box>
        <Box className={styles.topPerformer_additional} as="span">
          0.557890 DHV / QUICK
        </Box>
      </Box>
    </Box>
  );
}

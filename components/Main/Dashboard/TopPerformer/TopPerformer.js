import { Box, Heading } from "@chakra-ui/react";

import styles from "./topPerformer.module.css";
import Image from "next/image";

import label from "@/assets/label.png";
import question from "@/assets/question.png";
import ImpulseLogoAndRewards from "./ImpulseLogoAndRewards";
import TopPerformerInfo from "./TopPerformerInfo";
import TopPerformerButtons from "./TopPerformerButtons";

export default function TopPerformer() {
  return (
    <Box className={styles.top_performer}>
      <Heading
        as="h2"
        className={styles.top_performer__h2}
        sx={{
          fontSize: "30px",
          fontWeight: 500,
          lineHeight: "30px",
          "@media (max-width: 768px)": {
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "20px",
          },
        }}
      >
        Top performer
      </Heading>
      <Box className={styles.top_performer__border}>
        <Box className={styles.top_performer__label}>
          <Image src={label} alt="Label" />
          <Box className={styles.label_text}>
            <Box as="span">impulse</Box>
            <Image src={question} alt="Question mark" />
            <Box as="span" className={styles.top_performer__additional_info}>
              Impulse additional info
            </Box>
          </Box>
        </Box>
        <Box className={styles.top_performer__bg}>
          <Box className={styles.top_performer__container}>
            <ImpulseLogoAndRewards />
            <TopPerformerInfo />
            <TopPerformerButtons />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

import { Box } from "@chakra-ui/react";
import Image from "next/image";

import styles from './activity_row.module.css'

export default function ActivityRow({ imageSrc, name, network, value, info, time, gradientColor }) {
  return (
    <Box className={styles.activity_row}>
      <Image className={styles.activity_row__img} src={imageSrc} alt="Crypto icon"></Image>
      <Box className={styles.activity_row__name_and_network}>
        <Box as='span' className={styles.activity_row__name}>{name}</Box>
        <Box as='span' className={styles.activity_row__network}>{network}</Box>
      </Box>
      <Box className={styles.activity_row__value}>${value}</Box>
      <Box className={styles.activity_row__additional}>
        <Box as='span' className={`${styles.activity_row__info} ${gradientColor}`}>{info}</Box>
        <Box as='span' className={styles.activity_row__time}>{time}</Box>
      </Box>
    </Box>
  );
}

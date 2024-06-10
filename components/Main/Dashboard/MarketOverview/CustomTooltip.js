import React from 'react';
import { Box, Image, Text, VStack } from '@chakra-ui/react';
import styles from './tooltip.module.css';

const CustomTooltip = ({ active, payload, dataKey, networkData }) => {
  if (active && payload && payload.length) {
    const currentData = payload.find(p => p.dataKey === dataKey);
    const networkInfo = networkData.find(n => n.dataKey === dataKey);

    if (currentData && networkInfo) {
      return (
        <Box className={styles.customTooltip}>
          <Image src={networkInfo.image} alt={networkInfo.name} className={styles.icon} />
          <VStack className={styles.textContainer} align="start">
            <Text className={styles.title}>{networkInfo.name}</Text>
            <Text className={styles.network}>{networkInfo.network}</Text>
          </VStack>
          <Text className={styles.value}>${currentData.value.toLocaleString()}</Text>
        </Box>
      );
    }
  }

  return null;
};

export default CustomTooltip;

import Link from "next/link";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import dashboardLogo from '@/assets/dashboard.svg';

import styles from './sidebar.module.css';

export default function SideBar() {
  return (
    <Box as="aside" className={styles.aside}>
      <Box as="nav">
        <Box as="ul" className={styles.ul}>
          <Box as="li">
            <Link href="/">
              <Flex className={styles.dashboard_container}>
                <Image
                  className={styles.dashboard_img}
                  src={dashboardLogo}
                  alt='Dashboard logo'
                />
                <Text className={styles.dashboard_text}>Dashboard</Text>
              </Flex>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

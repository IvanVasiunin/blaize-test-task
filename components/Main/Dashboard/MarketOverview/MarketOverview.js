import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import PeriodSwitcher from "./PeriodSwitcher";
import MarketOverviewGraph from "./MarketOverviewGraph";

import addImg from "@/assets/add.svg";

import styles from "./marketOverview.module.css";
import Image from "next/image";

export default function MarketOverview() {
  return (
    <Box className={styles.market_overview}>
      <Box className={styles.market_overview__top}>
        <Heading as="h2" className={styles.market_overview__h2}>
          Market overview
        </Heading>
        <Text>Prices value updates</Text>
      </Box>

      <Flex>
        <ul className={styles.market_overview__currencies}>
          <li>
            <Flex className={styles.market_overview__currency_item}>
              <Box
                className={`${styles.market_overview__circle} ${styles.market_overview__circle_blue}`}
              ></Box>
              <Box className={styles.market_overview__currency_info}>
                <Text className={styles.market_overview__currency_name}>
                  ETH-CORE
                </Text>
                <Text className={styles.market_overview__currency_network}>
                  Ethereum
                </Text>
              </Box>
            </Flex>
          </li>
          <li>
            <Flex className={styles.market_overview__currency_item}>
              <Box
                className={`${styles.market_overview__circle} ${styles.market_overview__circle_purple}`}
              ></Box>
              <Box className={styles.market_overview__currency_info}>
                <Text className={styles.market_overview__currency_name}>
                  Poly
                </Text>
                <Text className={styles.market_overview__currency_network}>
                  Polygon
                </Text>
              </Box>
            </Flex>
          </li>
          <li>
            <Flex className={styles.market_overview__currency_item}>
              <Box
                className={`${styles.market_overview__circle} ${styles.market_overview__circle_red}`}
              ></Box>
              <Box className={styles.market_overview__currency_info}>
                <Text className={styles.market_overview__currency_name}>
                  Poly Gaming
                </Text>
                <Text className={styles.market_overview__currency_network}>
                  Polygon
                </Text>
              </Box>
            </Flex>
          </li>
        </ul>
        <Button
          className={styles.market_overview__add_button}
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "40px",
            background: "#13141D",
            _hover: {
              background: 'rgba(255, 255, 255, .1)'
            },
            "@media (max-width: 768px)": {
              display: "none",
            },
          }}
        >
          <Image src={addImg} alt="Add image" />
          <Text className={styles.market_overview__add_text}>Add</Text>
        </Button>
      </Flex>

      <PeriodSwitcher  className={styles.market_overview__switcher} />

      <Box className={styles.market_overview__dashboard_graph}>
        <MarketOverviewGraph />
      </Box>
    </Box>
  );
}

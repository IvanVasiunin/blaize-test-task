import { Box, Flex, Heading } from "@chakra-ui/react";

import styles from "./recent_activities.module.css";
import ActivityRow from "./ActivityRow";

import ethIcon from "@/assets/etherum.png";
import polyIcon from "@/assets/polyCluster.png";
import pgIcon from "@/assets/polyGaming.png";
import wmaticIcon from "@/assets/wmatic.png";

export default function RecentActivities() {
  return (
    <Box className={styles.recent_activities}>
      <Heading
        as="h2"
        className={styles.recent_activities__h2}
        sx={{
          fontSize: "30px",
          fontWeight: 500,
          lineHeight: "30px",
          "@media (max-width: 768px)": { fontSize: "20px", lineHeight: "20px" },
        }}
      >
        Recent Activities
      </Heading>
      <Flex as="ul" className={styles.recent_activities__container}>
        <Box as="li">
          <ActivityRow
            imageSrc={ethIcon}
            name="ETH-CORE"
            network="Cluster"
            value="123.13"
            info="Join Cluster"
            time="12:50:15 AM"
            gradientColor="purple"
          />
        </Box>
        <Box as="li">
          <ActivityRow
            imageSrc={pgIcon}
            name="Poly Gaming"
            network="Cluster"
            value="100,123.25"
            info="Unstake Cluster"
            time="12:23:54 AM"
            gradientColor="pink"
          />
        </Box>
        <Box as="li">
          <ActivityRow
            imageSrc={ethIcon}
            name="ETH-CORE"
            network="Cluster"
            value="1,543.00"
            info="Stake Cluster"
            time="11:47:22 AM"
            gradientColor="purple"
          />
        </Box>
        <Box as="li">
          <ActivityRow
            imageSrc={polyIcon}
            name="Polycluster"
            network="Cluster"
            value="543.00"
            info="Leave Cluster"
            time="11:34:57 AM"
            gradientColor="pink"
          />
        </Box>
        <Box as="li">
          <ActivityRow
            imageSrc={wmaticIcon}
            name="WMATIC / WTH"
            network="Impulse"
            value="1,124.47"
            info="Stake Impulse"
            time="11:47:22 AM"
            gradientColor="purple"
          />
        </Box>
        <Box as="li">
          <ActivityRow
            imageSrc={ethIcon}
            name="Polycluster"
            network="Cluster"
            value="22.36"
            info="Claim Rewards"
            time="11:34:57 AM"
            gradientColor="green"
          />
        </Box>
        <Box as="li">
          <ActivityRow
            imageSrc={wmaticIcon}
            name="WMATIC / WTH"
            network="Impulse"
            value="1,124.47"
            info="Stake Impulse"
            time="11:47:22 AM"
            gradientColor="purple"
          />
        </Box>
        <Box as="li">
          <ActivityRow
            imageSrc={pgIcon}
            name="Poly Gaming"
            network="Cluster"
            value="3,422.36"
            info="Claim Rewards"
            time="11:34:57 AM"
            gradientColor="green"
          />
        </Box>
      </Flex>
    </Box>
  );
}

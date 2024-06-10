import { Box, Heading } from "@chakra-ui/react";
import styles from "./dashboard.module.css";
import MarketOverview from "./MarketOverview/MarketOverview";
import RecentActivities from "./RecentActivities/RecentActivities";
import TopPerformer from "./TopPerformer/TopPerformer";

export default function Dashboard() {
  return (
    <Box
      as="section"
      className={styles.dashboard_section}
      sx={{
        width: "100%",
      }}
    >
      <Heading
        className={styles.h1}
        as="h1"
        sx={{
          fontWeight: 600,
          fontSize: "48px",
          lineHeight: "56px",
          "@media (max-width: 768px)": {
            fontSize: "24px",
            lineHeight: "24px",
          }
        }}
      >
        Dashboard
      </Heading>
      <Box className={styles.dashboard_container}>
        <MarketOverview />
        <RecentActivities />
      </Box>
      <TopPerformer />
    </Box>
  );
}

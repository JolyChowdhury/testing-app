import {
  Page,
  Card,
  Divider,
  Text,
  Link,
  FooterHelp,
  Tabs,
  BlockStack,
  Box,
  DataTable,
} from "@shopify/polaris";
import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function PointsDetails() {
  const navigate = useNavigate();
  const rows = [
    ["John Doe", "Purchase", 100, "2024-06-01"],
    ["Jane Smith", "Review", 50, "2024-06-05"],
    ["John Doe", "Referral", 150, "2024-06-10"],
    ["Jane Smith", "Birthday", 200, "2024-06-15"],
  ];

  const handleBackClick = () => {
    navigate("/app/points_activity");
  };
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelectedTab(selectedTabIndex),
    [],
  );

  const tabs = [
    {
      id: "all",
      content: "All",
      accessibilityLabel: "All customers",
      panelID: "all-content-1",
    },
    {
      id: "earned",
      content: "Earned",
      panelID: "earned-content-1",
    },
    {
      id: "redeemed",
      content: "Redeemed",
      panelID: "redeemed",
    },
    {
      id: "refunded",
      content: "Refunded",
      panelID: "refunded",
    },
    {
      id: "expired",
      content: "Expired",
      panelID: "expired",
    },
  ];

  return (
    <Page
      backAction={{ content: "Back to Rewards", onAction: handleBackClick }}
      title="Activity"
    >
      <Card title="Activity">
        <div style={{ marginBottom: "15px" }}>
          <Text as="h2" variant="headingMd">
            Points activity
          </Text>
        </div>
        <Tabs tabs={tabs} selected={selectedTab} onSelect={handleTabChange}>
          <Divider />
          <BlockStack gap="400">
            {selectedTab == 0 ? (
              <>
                <DataTable
                  columnContentTypes={["text", "text", "numeric", "numeric"]}
                  headings={["Customer", "Action", "Points", "Date"]}
                  rows={rows}
                />
              </>
            ) : selectedTab == 1 ? (
              <>
                <BlockStack inlineAlign="center">
                    <Box padding="800">
                  <Text>No earned points to show</Text>
                  </Box>
                </BlockStack>
              </>
            ) : selectedTab == 2 ? (
              <>
                <BlockStack inlineAlign="center">
                    <Box padding="800">
                  <Text>No redeemed points to show</Text>
                  </Box>
                </BlockStack>
              </>
            ) : selectedTab == 3 ? (
              <>
                <BlockStack inlineAlign="center">
                    <Box padding="800">
                  <Text>No refunded points to show</Text>
                  </Box>
                </BlockStack>
              </>
            ) : (
              <>
                <BlockStack inlineAlign="center">
                  <Box padding="800">
                    <Text>No expired points to show</Text>
                  </Box>
                </BlockStack>
              </>
            )}
          </BlockStack>
        </Tabs>
      </Card>
    </Page>
  );
}

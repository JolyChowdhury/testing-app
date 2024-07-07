import {
  Page,
  Card,
  Divider,
  Text,
  Link,
  FooterHelp,
  Tabs,
  EmptyState,
  BlockStack,
  Box,
  DataTable,
} from "@shopify/polaris";
import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function ReferralDetails() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/app/activity");
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
      id: "completed",
      content: "Completed",
      panelID: "completed-content-1",
    },
    {
      id: "pending",
      content: "Pending",
      panelID: "pending-content-1",
    },
    {
      id: "blocked",
      content: "Blocked",
      panelID: "blocked-content-1",
    },
    {
      id: "cancelled",
      content: "Cancelled",
      panelID: "cancelled-content-1",
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
            Referral activity
          </Text>
        </div>
        <Tabs tabs={tabs} selected={selectedTab} onSelect={handleTabChange}>
          <BlockStack gap="400">
            {selectedTab == 0 ? (
              <>
                <EmptyState
                  heading="No referrals found"
                  image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
                >
                  <p>Try changing the filters or search term</p>
                </EmptyState>
              </>
            ) : selectedTab == 1 ? (
              <></>
            ) : selectedTab == 2 ? (
              <></>
            ) : (
              <></>
            )}
          </BlockStack>
        </Tabs>
      </Card>
    </Page>
  );
}



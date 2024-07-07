import {
  Page,
  Card,
  Divider,
  Text,
  Link,
  FooterHelp,
  BlockStack,
  Box,
  DataTable,
} from "@shopify/polaris";
import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function ReferralActivity() {
  const navigate = useNavigate();
  const rows = [];

  const handleBackClick = () => {
    navigate("/app/activity");
  };
  const handleReferalDetailsClick = () => {
    navigate("/app/referral_details");
  };

  const isActivityDisabled = true;
  const disabledStyle = {
    pointerEvents: "none",
    opacity: 0.4,
  };

  return (
    <Page
      backAction={{ content: "Back to Rewards", onAction: handleBackClick }}
      title="Activity"
    >
      <Card title="Activity">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "15px",
          }}
        >
          <Text as="h2" variant="headingMd">
            Referral activity
          </Text>

          <Link onClick={handleReferalDetailsClick}>
            View all referral activity
          </Link>
        </div>
        <Divider />
        <div style={isActivityDisabled ? disabledStyle : {}}>
          <DataTable
            columnContentTypes={["text", "text", "numeric", "numeric"]}
            headings={["Referred friend", "Status", "Order total", "Date"]}
            rows={rows}
          />

          <BlockStack inlineAlign="center">
            <Box padding="800">No activity to show</Box>
          </BlockStack>
        </div>
      </Card>
    </Page>
  );
}

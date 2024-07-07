import {Page, Card,  Divider, Text, Link, FooterHelp, BlockStack, Box, DataTable} from '@shopify/polaris';
import React from 'react';
import { useNavigate } from "react-router-dom";

export default function PointsActivity() {
    const navigate = useNavigate();
  const rows = [
  ];

  const handleBackClick = () => {
    navigate("/app/activity");
  };

  const isActivityDisabled = true;
  const disabledStyle = {
    pointerEvents: "none",
    opacity: 0.4,
  };

  return (
    <Page backAction={{content: 'Back to Rewards', onAction: handleBackClick }}
    title="Activity">
      <Card title="Activity">
      <div style={{ marginBottom:"15px"}}>
      <Text as="h2" variant="headingMd">
      VIP activity
      </Text>
      </div>
      <Divider />
      <div style={isActivityDisabled ? disabledStyle : {}}>
        <DataTable
          columnContentTypes={[
            'text',
            'text',
            'numeric',
            'numeric',
          ]}
          headings={[
            'Customer',
            'Tier achieved',
            'Description',
            'Date',
          ]}
          rows={rows}
        />
        
        <BlockStack inlineAlign="center">
            <Box padding="800">
            No activity to show
            </Box>
            </BlockStack>
            </div>
      </Card>
      <FooterHelp>
      <Link url="#">
        Setting up your VIP program
      </Link>
    </FooterHelp>
    </Page>
  );
}


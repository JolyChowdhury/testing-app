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
  const handlePointDetailsClick = () => {
    navigate("/app/points_details");
  };

  return (
    <Page backAction={{content: 'Back to Rewards', onAction: handleBackClick }}
    title="Activity">
      <Card title="Activity">
      <div style={{display:"flex", justifyContent:"space-between", marginBottom:"15px"}}>
      <Text as="h2" variant="headingMd">
      Settings activity
      </Text>
      
      <Link onClick={handlePointDetailsClick}>View all settings activity</Link>
      </div>
      <Divider />
        <DataTable
          columnContentTypes={[
            'text',
            'text',
            'numeric',
            'numeric',
          ]}
          headings={[
            'Customer',
            'Action',
            'Points',
            'Date',
          ]}
          rows={rows}
        />
        <BlockStack inlineAlign="center">
            <Box padding="800">
            No points yet
            </Box>
            </BlockStack>

      </Card>
      <FooterHelp>
      Need help?  {' '}
      <Link url="#">
      Check out our docs
      </Link>
    </FooterHelp>
    </Page>
  );
}


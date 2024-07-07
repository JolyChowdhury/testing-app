import React, { useState } from 'react';
import { Page, Button, Text, Layout, InlineGrid, Box, BlockStack, Form, Card, Divider } from "@shopify/polaris";
import { useNavigate, useLocation } from "react-router-dom";
import TabsComponent from '../componant/TabsComponent';
import { ArrowLeftIcon } from "@shopify/polaris-icons";

export default function SignUpProgram() {
  const location = useLocation();
  const currentUrl = location.pathname;
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(location.state?.selectedTab || 0);
  const [showTabContent, setShowTabContent] = useState(false);

  const handleTabChange = (selectedTabIndex) => {
    setSelectedTab(selectedTabIndex);
    setShowTabContent(true);
  };

  const goBack = () => {
    navigate('/app/reward');
  };

  return (
    <Page
      title="Reward Program"
      subtitle="Set reward points rules, points redeem rules"
      secondaryActions={<Button variant="tertiary">Status: Free Plan</Button>}
    >
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <TabsComponent currentRoute={currentUrl} initialSelected={selectedTab} onSelect={handleTabChange} />
          </Card>
          <Card>
            <Form method="POST">
              <div style={{ marginBottom: "70px" }}>
                <BlockStack gap={{ xs: "800", sm: "400" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Button
                        plain
                        icon={ArrowLeftIcon}
                        onClick={goBack}
                      />
                      <div style={{ marginLeft: "10px" }}>
                        <Text variant="headingLg" as="h3">
                          Rewards
                        </Text>
                      </div>
                    </div>
                    <Button submit>Create</Button>
                  </div>
                  <InlineGrid columns={{ xs: "1fr", md: "2fr 5fr" }} gap="400">
                    <Box
                      as="section"
                      paddingInlineStart={{ xs: 400, sm: 0 }}
                      paddingInlineEnd={{ xs: 400, sm: 0 }}
                    >
                      <BlockStack gap="400">
                        <Text as="h3" variant="headingMd">
                          Sign up/Welcome reward
                        </Text>
                        <Text as="p" variant="bodyMd">
                          Set the name and set the points to give welcome rewards for new customers.
                        </Text>
                      </BlockStack>
                    </Box>
                  </InlineGrid>
                  <Divider />
                </BlockStack>
              </div>
            </Form>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

import React from "react";
import {
  Page,
  BlockStack,
  Layout,
  Box,
  Card,
  Bleed,
  Select,
  TextField,
  InlineStack,
  Text,
  Divider,
} from "@shopify/polaris";
import { useState, useCallback } from "react";

export default function CardWithMultipleTitledSections() {
  const [selected, setSelected] = useState("Disabled");
  const [Emailvalue, setEmailValue] = useState('You`ve just earned {{point_amount}} {{point_name}}!');
  const [Titlevalue, setTitleValue] = useState('You`ve just earned points!');
  const [Contentvalue, setContentValue] = useState('Congratulations {{first_name}}, you`ve just earned {{point_amount}} {{point_name}} from the action {{earn_action}}');
  const handleEmailChange = useCallback(
    (newValue) => setEmailValue(newValue),
    [],
  );
  const handleTitleChange = useCallback(
    (newValue) => setTitleValue(newValue),
    [],
  );
  const handleContentChange = useCallback(
    (newValue) => setContentValue(newValue),
    [],
  );
  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const options = [
    { label: "Disabled", value: "disabled" },
    { label: "Enabled", value: "enable" },
  ];

  return (
    <Page
      backAction={{ content: "Products", url: "/app/customer_email" }}
      title="Emails"
      subtitle="Manage and customize your emails"
      secondaryActions={[{ content: "Send Test Email" }]}
    >
      <Layout>
        <Layout.Section variant="oneThird">
          <Card roundedAbove="sm">
            <Text as="h2" variant="headingSm">
              Earn points
            </Text>
            <Box paddingBlock="200">
              <BlockStack gap="200">
                <Select
                  label="Status"
                  options={options}
                  onChange={handleSelectChange}
                  value={selected}
                />
              </BlockStack>
            </Box>
            <Box paddingBlock="200">
              <BlockStack gap="200">
                <Text as="h6" variant="headingMd">
                  Details
                </Text>
                <InlineStack
                  wrap={false}
                  align="space-between"
                  blockAlign="center"
                >
                  <InlineStack wrap={false} blockAlign="center" gap="400">
                    <Text as="p" variant="body">
                      Emails sent
                    </Text>
                  </InlineStack>
                  <Text as="p" variant="body">
                    0
                  </Text>
                </InlineStack>
                <BlockStack gap="400">
                <Divider/>
                <TextField
                  label="Email subject"
                  value={Emailvalue}
                  onChange={handleEmailChange}
                  multiline={4}
                  autoComplete="off"
                />
                <Divider/>
                <TextField
                  label="Title"
                  value={Titlevalue}
                  onChange={handleTitleChange}
                  autoComplete="off"
                />
                <Divider/>
                <TextField
                  label="Content"
                  value={Contentvalue}
                  onChange={handleContentChange}
                  multiline={4}
                  autoComplete="off"
                />
                <Divider/>
                </BlockStack>
                <Card>
                <BlockStack gap="400">
                <Text variant="headingLg" as="h5" alignment="center">
                You’ve just earned points!
                </Text>
                <Text variant="bodyLg" as="p" alignment="center">
                Congratulations (first_name), you've just earned (point_amount) (point_name) from the action (earn_action).
                </Text>
                
                </BlockStack>
                </Card>
              </BlockStack>
            </Box>
          </Card>
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <div style={{marginBottom:"50px"}}>
          <Card>
            <Bleed marginBlock="400" marginInline="400">
              <Box background="bg-surface-hover" padding="400">
                Email Preview
              </Box>
            </Bleed>
            <div style={{ marginTop: "40px" }}>
              <Card>
                <BlockStack gap="400">
                  <Text as="p" variant="body">
                  Email subject: You've just earned (point_amount) (point_name)!
                  </Text>
                  <Divider />
                  <Text as="p" variant="body">
                    From: rewardrace@gmail.com
                  </Text>
                </BlockStack>
            <div style={{ marginTop: "40px", marginBottom:"20px" }}>
                <Card>
                <BlockStack gap="400">
                <Text variant="headingLg" as="h5" alignment="center">
                You’ve just earned points!
                </Text>
                <Text variant="bodyLg" as="p" alignment="center">
                Congratulations (first_name), you've just earned (point_amount) (point_name) from the action (earn_action).
                </Text>
                
                </BlockStack>
                </Card>
            </div>
              </Card>
            </div>
          </Card>
          </div>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

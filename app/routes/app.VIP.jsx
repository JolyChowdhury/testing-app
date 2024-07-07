import {
  Page,
  Card,
  Banner,
  Text,
  Layout,
  InlineStack,
  BlockStack,
  Popover,
  List,
  Form,
  Button,
  Badge,
  EmptyState,
} from "@shopify/polaris";
import React from "react";
import {PlusIcon, EditIcon} from '@shopify/polaris-icons';

export default function EmptyStateExample() {
  return (
    <Page title="VIP">
      <Card sectioned>
        <EmptyState
          heading="Provide Premium Perks for Your VIP Clients"
          action={{ content: "Upgrade", url: "/app/billing" }}
          secondaryAction={{
            content: "Learn more",
            url: "#",
          }}
          image="./asset/images/hero_image.svg"
        >
          <p>
            VIP Programs are Perfect for Rewarding Top Customers with Enhanced
            Benefits, Exclusive Status, and Special Perks.
          </p>
        </EmptyState>
      </Card>

      <div style={{ margin: "40px 0" }}>
        <div style={{ margin: "20px 0" }}>
          <Text as="h3" variant="headingXl" alignment="center">
            2nd design
          </Text>
        </div>
        <Banner title="Upgrade plan">
          <p>This feature is available from Advanced plan ($129/month).</p>
        </Banner>
        <div style={{ margin: "20px 0" }}>
          <Layout>
            <Layout.Section>
              <Card title="Tier" sectioned>
                <BlockStack gap="200">
                <InlineStack blockAlign="center" align="space-between">
                  <InlineStack gap="200">
                  <Text variant="headingMd" as="h5">
                    VIP Tiers status
                  </Text>
                  <Badge tone="critical">off</Badge>
                  </InlineStack>
                  
                    <Button disabled>Turn on</Button>
                </InlineStack>
                <Text variant="body" as="p">
                Only enable when Tier settings and Tier list are set.
                  </Text>
                  </BlockStack>
              </Card>
              <Card>
                <BlockStack gap="200">
                <InlineStack blockAlign="center" align="space-between">
                  <Text variant="headingMd" as="h5">
                    VIP list
                  </Text>
                    <Button variant="tertiary" icon={PlusIcon}>Add new tier</Button>
                  </InlineStack>
                <Text variant="body" as="p">
                Only enable when Tier settings and Tier list are set.
                  </Text>
                  </BlockStack>
              </Card>
            </Layout.Section>
            <Layout.Section variant="oneThird">
            <Card sectioned>
            <Form>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text variant="headingLg" as="h3">
                  Summery
                </Text>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <BlockStack gap={{ xs: "800", sm: "400" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                      justifyContent: "space-between",
                    }}
                  ></div>
                  <Card roundedAbove="sm">
                    <BlockStack gap="400">
                      <List type="bullet">
                        <List.Item>
                          Customer gets 50 points for Share this link
                        </List.Item>
                        <List.Item>Once in lifetime rewards</List.Item>
                      </List>
                    </BlockStack>
                  </Card>
                </BlockStack>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                }}
              >
                <Button>Edit</Button>
              </div>
            </Form>
          </Card>
            </Layout.Section>
          </Layout>
        </div>
      </div>
    </Page>
  );
}

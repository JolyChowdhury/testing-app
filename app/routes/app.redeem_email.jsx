import {Page, Card, Text, Button, BlockStack} from '@shopify/polaris';
import React from 'react';

export default function PointsRules() {
  return (
    <Page
      narrowWidth
    >
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
              <Popover
                active={popoverActive}
                activator={activator}
                autofocusTarget="first-node"
                onClose={togglePopoverActive}
              >
                <ActionList
                  actionRole="menuitem"
                  items={[{ content: "Active" }, { content: "Inactive" }]}
                />
              </Popover>
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
                        Customer earn
                        for every
                        points
                      </List.Item>
                      <List.Item>
                        Customers are required to maintain a minimum order value
                        of $12.
                      </List.Item>
                      <List.Item>
                        Customers are limited to a maximum discount amount of
                        $12.
                      </List.Item>
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
              <Button>Create</Button>
            </div>
            </Form>
          </Card>
    </Page>
  );
}
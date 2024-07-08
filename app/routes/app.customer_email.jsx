import {
  Page,
  Button,
  Text,
  Tabs,
  Card,
  Layout,
  Divider,
  Icon,
  Link,
  ResourceList,
  ResourceItem,
  AppProvider,
} from "@shopify/polaris";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { EmailIcon } from "@shopify/polaris-icons";
import SwitchButton from "../componant/switch";

export default function CustomerEmailPage() {
  const navigate = useNavigate();

  const handleSwitchChange = (label, isActive) => {
    console.log(`Switch ${label} changed: ${isActive}`);
  };

  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );

  const handleNavigation = (url) => {
    navigate(url);
  };

  const tabs = [
    { id: "Points-email", content: "Points email" },
    {
      id: "referral-email",
      content: "Referral email",
    },
    {
      id: "vip-email",
      content: "VIP email",
    },
    { id: "other-email", content: "Other email" },
  ];

  const tabContent = [
    <div key="points-email">
      <Divider />
      <ResourceList
        resourceName={{ singular: "customer", plural: "customers" }}
        items={[
          {
            id: "100",
            url: "/app/points_earned_email",
            name: "Points earned email",
          },
          {
            id: "200",
            url: "#",
            name: "Reward redeemed email",
          },
          {
            id: "300",
            url: "#",
            name: "Birthday reward email",
          },
        ]}
        renderItem={(item) => {
          const { id, url, name } = item;
          const icon = <Icon source={EmailIcon} tone="base" />;
          return (
            <ResourceItem
              id={id}
              media={icon}
              accessibilityLabel={`View details for ${name}`}
              onClick={() => handleNavigation(url)}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Text variant="bodyMd" fontWeight="bold" as="h3">
                  {name}
                </Text>
                <SwitchButton
                  onChange={(isActive) => handleSwitchChange(name, isActive)}
                  onClick={(event) => event.stopPropagation()}
                  showText={true}
                />
              </div>
            </ResourceItem>
          );
        }}
      />
    </div>,
    <div key="referral-email">
      <Divider />
      <ResourceList
        resourceName={{ singular: "customer", plural: "customers" }}
        items={[
          {
            id: "100",
            url: "/app/points_earned_email",
            name: "Friend received referral",
          },
          {
            id: "200",
            url: "#",
            name: "Referral completed",
          },
        ]}
        renderItem={(item) => {
          const { id, url, name } = item;
          const icon = <Icon source={EmailIcon} tone="base" />;
          return (
            <ResourceItem
              id={id}
              media={icon}
              accessibilityLabel={`View details for ${name}`}
              onClick={() => handleNavigation(url)}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Text variant="bodyMd" fontWeight="bold" as="h3">
                  {name}
                </Text>
                <SwitchButton
                  onChange={(isActive) => handleSwitchChange(name, isActive)}
                  onClick={(event) => event.stopPropagation()}
                />
              </div>
            </ResourceItem>
          );
        }}
      />
    </div>,
    <div key="vip-email">
      <Divider />
      <ResourceList
        resourceName={{ singular: "customer", plural: "customers" }}
        items={[
          {
            id: "200",
            url: "#",
            name: "VIP tier achieved",
          },
        ]}
        renderItem={(item) => {
          const { id, url, name } = item;
          const icon = <Icon source={EmailIcon} tone="base" />;
          return (
            <ResourceItem
              id={id}
              media={icon}
              accessibilityLabel={`View details for ${name}`}
              onClick={() => handleNavigation(url)}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Text variant="bodyMd" fontWeight="bold" as="h3">
                  {name}
                </Text>
                <SwitchButton
                  onChange={(isActive) => handleSwitchChange(name, isActive)}
                  onClick={(event) => event.stopPropagation()}
                />
              </div>
            </ResourceItem>
          );
        }}
      />
    </div>,
    <div key="other-email">
      <Divider />
      <ResourceList
        resourceName={{ singular: "customer", plural: "customers" }}
        items={[
          {
            id: "200",
            url: "#",
            name: "Reward expiry reminder",
          },
        ]}
        renderItem={(item) => {
          const { id, url, name } = item;
          const icon = <Icon source={EmailIcon} tone="base" />;
          return (
            <ResourceItem
              id={id}
              media={icon}
              accessibilityLabel={`View details for ${name}`}
              onClick={() => handleNavigation(url)}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Text variant="bodyMd" fontWeight="bold" as="h3">
                  {name}
                </Text>
                <SwitchButton
                  onChange={(isActive) => handleSwitchChange(name, isActive)}
                  onClick={(event) => event.stopPropagation()}
                />
              </div>
            </ResourceItem>
          );
        }}
      />
    </div>,
  ];

  return (
    <AppProvider
      i18n={{ Polaris: { Common: { checkbox: { on: "On", off: "Off" } } } }}
    >
      <Page
        title="Reward Emails"
        subtitle="Manage and customize your Loyalty program emails"
        secondaryActions={<Button variant="tertiary">Save</Button>}
      >
        <Layout>
          <Layout.Section>
            <Card sectioned>
              <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
                {tabContent[selected]}
              </Tabs>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    </AppProvider>
  );
}

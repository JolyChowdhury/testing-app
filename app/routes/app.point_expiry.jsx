
import {
    Page,
    Button,
    Text,
    Tabs,
    Card,
    Layout
  } from "@shopify/polaris";
  import { useState, useCallback } from "react";
  import { useNavigate } from "react-router-dom";
  
  export default function ActivityRules() {
    // tab pages
    const handlePricingClick = () => {
      navigate("/app/pricing");
    };
    const navigate = useNavigate();
    const [selected, setSelected] = useState(4);
    const handleTabChange = useCallback(
      (selectedTabIndex) => {
        setSelected(selectedTabIndex);
        switch (selectedTabIndex) {
          case 0:
            navigate("/app/reward");
            break;
          case 1:
            navigate("/app/ways-to-redeem");
            break;
          case 2:
            navigate("/app/point_rules");
            break;
          case 3:
            navigate("/app/activity");
            break;
          case 4:
            navigate("/app/point_expiry");
            break;
          default:
            break;
        }
      },
      [navigate],
    );
  
    const tabs = [
      { id: "reward", 
        content: "Ways to earn points" },
      {
        id: "ways-to-redeem",
        content: "Ways to redeem points",
      },
      {
        id: "prospects-1",
        content: "Point rules",
      },
      { id: "activity", 
        content: "Activity",
      },
      { id: "expire", content: "Points Expiry" },
    ];
  
    const tabContent = [
      <div key="reward"></div>,
      <div key="ways-to-redeem">
      </div>,
      <div key="content"></div>,
      <div key="content">
      </div>,
      <div key="content">
        <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
          marginTop: "20px",
          borderTop: "1px solid rgb(217, 217, 217)",
        }}
      >
        <div style={{ marginRight: "10px" }}>
          <Text variant="headingMd" as="h5">
          Limited-time point offer
          </Text>
          <Text variant="bodyLg" as="p">
          Increase engagement by setting customer's points balances to expire after a certain amount of time
          </Text>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
            marginTop: "20px",
          }}
        >
          <div style={{ marginRight: "20px" }}>
            <Button onClick={handlePricingClick}>View Plans</Button>
          </div>
        </div>
      </div>
      </div>,
    ];
  
    return (
      <Page
    title="Reward Program"
      subtitle="Set reward points rules, points redeem rules"
      secondaryActions={<Button variant="tertiary">Status: Free Plan</Button>}
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
    );
  }
  
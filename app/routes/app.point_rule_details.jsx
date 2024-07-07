import {
    Page,
    Button,
    Text,
    Tabs,
    Card,
    Form,
    List,
    BlockStack,
    Popover,
    Layout,
  } from "@shopify/polaris";
  import { useState, useCallback } from "react";
  import { useNavigate } from "react-router-dom";
  
  export default function ActivityRules() {
    const handlePointRulesDetailsClick = () => {
      navigate("/app/point_rule_details")
    };
  
    const navigate = useNavigate();
    const [selected, setSelected] = useState(2);
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
          default:
            break;
        }
      },
      [navigate],
    );
  
    const tabs = [
      { id: "reward", content: "Ways to earn points" },
      {
        id: "ways-to-redeem",
        content: "Ways to redeem points",
      },
      {
        id: "prospects-1",
        content: "Point rules",
      },
      { id: "activity", content: "Activity" },
    ];
  
    const tabContent = [
      <div key="reward"></div>,
      <div key="ways-to-redeem"></div>,
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
            Customizable Point Earning Rates
            </Text>
            <Text variant="bodyLg" as="p">
            Increase engagement by setting customer's points rules 
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
              <Button onClick={handlePointRulesDetailsClick}>View rules</Button>
            </div>
          </div>
        </div>
      </div>,
      <div key="content"></div>,
    ];
  
    return (
      <Page narrowWidth
      >
        
        <Card>
            <Form>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text variant="headingLg" as="h3">
                  Points rules
                </Text>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <BlockStack gap={{ xs: "800", sm: "400" }}>
                  <div
                    style={{
                      marginBottom: "10px", marginTop: "20px"
                    }}
                  >
                  <Card roundedAbove="sm">
                    <BlockStack gap="400">
                      <List type="bullet">
                        <List.Item>
                          Merchants can set custom point values for different
                          products.
                        </List.Item>
                        <List.Item>
                          Merchants can offer bonus points during promotional
                          periods.
                        </List.Item>
                        <List.Item>
                          Merchants can create tiers for point redemption with
                          varying benefits.
                        </List.Item>
                        <List.Item>
                          Merchants have the ability to set an expiration date
                          for earned points.
                        </List.Item>
                        <List.Item>
                          Merchants can limit the number of points that can be
                          earned per transaction.
                        </List.Item>
                        <List.Item>
                          Merchants can offer points as a reward for customer
                          referrals.
                        </List.Item>
                        <List.Item>
                          Merchants can deduct points for returns and refunds.
                        </List.Item>
                        <List.Item>
                          Merchants can set a minimum point balance required for
                          redemption.
                        </List.Item>
                        <List.Item>
                          Merchants can integrate point rules with other loyalty
                          programs.
                        </List.Item>
                        <List.Item>
                          Merchants can customize the point earning and
                          redemption rates.
                        </List.Item>
                      </List>
                    </BlockStack>
                  </Card>
                  </div>
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
  
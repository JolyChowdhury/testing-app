import {
  Page,
  Button,
  Text,
  Tabs,
  Card,
  Layout,
  AppProvider,
} from "@shopify/polaris";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function WaysToRedeem() {
  // Switch Button
  const [togglePurchaseActive, setTogglePurchaseActive] = useState(false);
  const handlePurchaseToggle = () =>
    setTogglePurchaseActive((prevState) => !prevState);

  const [toggleFreeShippingActive, setToggleFreeShippingActive] =
    useState(false);
  const handleFreeShippingToggle = () =>
    setToggleFreeShippingActive((prevState) => !prevState);

  const [toggleFreeProductActive, setToggleFreeProductActive] = useState(false);
  const handleFreeProductToggle = () =>
    setToggleFreeProductActive((prevState) => !prevState);

  // tab pages
  const handlePurchaseClick = () => {
    navigate("/app/purchase_reward", { state: { selectedTabIndex: selected } });
  };
  const handleFreeShippingClick = () => {
    navigate("/app/free_shipping", { state: { selectedTabIndex: selected } });
  };
  const handleFreeProductClick = () => {
    navigate("/app/redeem", { state: { selectedTabIndex: selected } });
  };

  const navigate = useNavigate();
  const [selected, setSelected] = useState(1);
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
  ];

  const tabContent = [
    <div key="reward"></div>,
    <div key="ways-to-redeem">
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
            Purchase discount
          </Text>
          <Text variant="bodyLg" as="p">
            e.g ( 100 points =$1 )
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
            <Button onClick={handlePurchaseClick}>Edit</Button>
          </div>
          <AppProvider
            i18n={{
              Polaris: { Common: { checkbox: { on: "On", off: "Off" } } },
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button
                onClick={handlePurchaseToggle}
                plain
                ariaPressed={togglePurchaseActive}
              >
                <Text variation="strong">
                  {togglePurchaseActive ? "Active" : "Inactive"}
                </Text>
              </Button>
              <div
                role="switch"
                aria-checked={togglePurchaseActive}
                onClick={handlePurchaseToggle}
                style={{
                  display: "inline-block",
                  width: "50px",
                  height: "25px",
                  background: togglePurchaseActive ? "#4caf50" : "#ccc",
                  borderRadius: "25px",
                  position: "relative",
                  cursor: "pointer",
                  marginLeft: "10px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "2px",
                    left: togglePurchaseActive ? "26px" : "2px",
                    width: "21px",
                    height: "21px",
                    background: "#fff",
                    borderRadius: "50%",
                    transition: "left 0.2s",
                  }}
                />
              </div>
            </div>
          </AppProvider>
        </div>
      </div>
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
            Free Shipping
          </Text>
          <Text variant="bodyLg" as="p">
            Enjoy free shipping on all orders as a loyalty member
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
            <Button onClick={handleFreeShippingClick}>Edit</Button>
          </div>
          <AppProvider
            i18n={{
              Polaris: { Common: { checkbox: { on: "On", off: "Off" } } },
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button
                onClick={handleFreeShippingToggle}
                plain
                ariaPressed={toggleFreeShippingActive}
              >
                <Text variation="strong">
                  {toggleFreeShippingActive ? "Active" : "Inactive"}
                </Text>
              </Button>
              <div
                role="switch"
                aria-checked={toggleFreeShippingActive}
                onClick={handleFreeShippingToggle}
                style={{
                  display: "inline-block",
                  width: "50px",
                  height: "25px",
                  background: toggleFreeShippingActive ? "#4caf50" : "#ccc",
                  borderRadius: "25px",
                  position: "relative",
                  cursor: "pointer",
                  marginLeft: "10px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "2px",
                    left: toggleFreeShippingActive ? "26px" : "2px",
                    width: "21px",
                    height: "21px",
                    background: "#fff",
                    borderRadius: "50%",
                    transition: "left 0.2s",
                  }}
                />
              </div>
            </div>
          </AppProvider>
        </div>
      </div>
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
            Free Product
          </Text>
          <Text variant="bodyLg" as="p">
            Unlock free products with our loyalty app. Earn points and redeem
            for your favorite items!
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
            <Button onClick={handleFreeProductClick}>Edit</Button>
          </div>
          <AppProvider
            i18n={{
              Polaris: { Common: { checkbox: { on: "On", off: "Off" } } },
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button
                onClick={handleFreeProductToggle}
                plain
                ariaPressed={toggleFreeProductActive}
              >
                <Text variation="strong">
                  {toggleFreeShippingActive ? "Active" : "Inactive"}
                </Text>
              </Button>
              <div
                role="switch"
                aria-checked={toggleFreeProductActive}
                onClick={handleFreeProductToggle}
                style={{
                  display: "inline-block",
                  width: "50px",
                  height: "25px",
                  background: toggleFreeProductActive ? "#4caf50" : "#ccc",
                  borderRadius: "25px",
                  position: "relative",
                  cursor: "pointer",
                  marginLeft: "10px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "2px",
                    left: toggleFreeProductActive ? "26px" : "2px",
                    width: "21px",
                    height: "21px",
                    background: "#fff",
                    borderRadius: "50%",
                    transition: "left 0.2s",
                  }}
                />
              </div>
            </div>
          </AppProvider>
        </div>
      </div>
    </div>,
    <div key="content"></div>,
    <div key="content"></div>,
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

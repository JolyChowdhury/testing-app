import {
  Page,
  Button,
  Text,
  Layout,
  BlockStack,
  InlineGrid,
  TextField,
  Popover,
  ActionList,
  Icon,
  Card,
  List,
  Tabs,
  ChoiceList,
  Banner,
} from "@shopify/polaris";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import {
  ArrowLeftIcon,
  AppsIcon
} from "@shopify/polaris-icons";
import { useLoaderData, useActionData, Form } from "@remix-run/react";


export default function PurchaseRewardRule() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedTabIndex = location.state?.selectedTabIndex || 0;
  const [tabSelected, setSelectedTab] = useState(selectedTabIndex);

  // maximum value function
  const [selected, setSelected] = useState(["hidden"]);
  const [maximumDiscount, setMaximumDiscount] = useState("5%");
  const handleChange = useCallback((value) => {
    setSelected(value);
    const selectedChoice = value[0];
    if (selectedChoice === "hidden") {
      setMaximumDiscount("5%");
    } else if (selectedChoice === "optional") {
      setMaximumDiscount("10%");
    } else if (selectedChoice === "required") {
      setMaximumDiscount("15%");
    }
  }, []);

  const handleTextFieldChange = useCallback((value) => {
    setMaximumDiscount(value);
  }, []);

  const handleTabChange = useCallback(
    (selectedTabIndex) => {
      setSelectedTab(selectedTabIndex);
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
  const [popoverActive, setPopoverActive] = useState(false);
  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

  const redeemRuleSettings = useLoaderData();
  const formValidationError = useActionData();
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (formValidationError?.errors) {
      setFormErrors(formValidationError.errors);
    }
  }, [formValidationError]);

  const [redeemProgramName, setRedeemProgramName] = useState(
    redeemRuleSettings?.configs?.redeem_name,
  );
  const [redeemPoint, setRedeemPoint] = useState(
    redeemRuleSettings?.configs?.points,
  );
  const [amount, setAmount] = useState(redeemRuleSettings?.configs?.amount);
  const [MinimumAmount, setMinimumAmount] = useState();

  const handleBackClick = () => {
    navigate("/app/ways-to-redeem");
  };

  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
      Active
    </Button>
  );

  return (
    <Page
    title="Reward Program"
      subtitle="Set reward points rules, points redeem rules"
      secondaryActions={<Button variant="tertiary">Status: Free Plan</Button>}
    >
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Tabs
              tabs={tabs}
              selected={tabSelected}
              onSelect={handleTabChange}
            />
          </Card>
        </Layout.Section>
      </Layout>
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Form method="POST">
              <div style={{ marginBottom: "20px" }}>
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
                        onClick={handleBackClick}
                      />
                      <div style={{ marginLeft: "10px" }}>
                        <Text variant="headingLg" as="h3">
                          Rewards
                        </Text>
                      </div>
                    </div>

                    <Button submit>Create</Button>
                  </div>
                  <InlineGrid gap="200">
                    <Card roundedAbove="sm">
                      <BlockStack gap="200">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-start",
                          }}
                        >
                          <div style={{ margin: "0 5px 0 0" }}>
                            <Icon source={AppsIcon} tone="base" />
                          </div>
                          <Text as="h3" variant="headingMd">
                            {redeemRuleSettings?.configs?.redeem_name ??
                              "Purchase discount"}
                          </Text>
                        </div>
                        <Text as="p" variant="bodyMd">
                          Set the name and set the currency value of points to
                          define how much discount customer earns
                        </Text>

                        <TextField
                          label="Redeem name"
                          value={redeemProgramName}
                          name="redeemName"
                          onChange={(redeemProgramName) =>
                            setRedeemProgramName(redeemProgramName)
                          }
                          autoComplete="off"
                        />
                        <TextField
                          label="Points Value"
                          value={redeemPoint}
                          name="points"
                          onChange={(redeemPoint) =>
                            setRedeemPoint(redeemPoint)
                          }
                          autoComplete="off"
                          error={formErrors.points}
                        />
                        <TextField
                          label="Customer gets"
                          value={amount}
                          name="amount"
                          onChange={(amount) => setAmount(amount)}
                          autoComplete="off"
                          error={formErrors.amount}
                        />
                        <Text as="p" variant="bodyMd">
                          Recommended $1 = 100 points
                        </Text>

                        {formValidationError?.success && (
                          <Banner status="success">
                            Purchase rule set successfully!
                          </Banner>
                        )}
                      </BlockStack>
                    </Card>
                  </InlineGrid>

                  <InlineGrid gap="200">
                    <Card roundedAbove="sm">
                      <Form>
                        <BlockStack gap="200">
                          <Text as="h3" variant="headingMd">
                            Minimum order value
                          </Text>
                          <TextField
                            label="Set a Minimum order value to earn purchase discount"
                            value={MinimumAmount}
                            name="Amount"
                            onChange={(MinimumAmount) =>
                              setMinimumAmount(MinimumAmount)
                            }
                            autoComplete="off"
                          />
                        </BlockStack>
                      </Form>
                    </Card>
                  </InlineGrid>
                  <InlineGrid gap="200">
                    <Card roundedAbove="sm">
                      <Form>
                        <BlockStack gap="200">
                          <Text as="h3" variant="headingMd">
                            Maximum discount value
                          </Text>
                          <TextField
                            label="Set a maximum discount amount for each purchase"
                            value={maximumDiscount}
                            name="Amount"
                            onChange={handleTextFieldChange}
                            autoComplete="off"
                          />
                          <ChoiceList
                            choices={[
                              { label: "5%", value: "hidden" },
                              { label: "10%", value: "optional" },
                              { label: "15%", value: "required" },
                            ]}
                            selected={selected}
                            onChange={handleChange}
                          />
                        </BlockStack>
                      </Form>
                    </Card>
                  </InlineGrid>
                </BlockStack>
              </div>
            </Form>
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
                        Customer earn{" "}
                        {redeemRuleSettings?.configs?.amount
                          ? redeemRuleSettings?.configs?.amount + "$"
                          : "2$"}{" "}
                        for every {redeemRuleSettings?.configs?.points ?? "200"}{" "}
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
        </Layout.Section>
      </Layout>
    </Page>
  );
}

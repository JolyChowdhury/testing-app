import React, { useState, useCallback } from "react";
import {
  Page,
  Button,
  Text,
  Layout,
  BlockStack,
  TextField,
  Popover,
  ActionList,
  Icon,
  Card,
  Tabs,
  Form,
  List,
  Checkbox
} from "@shopify/polaris";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeftIcon,
  EditIcon,
  PlusCircleIcon
} from "@shopify/polaris-icons";
import {Modal, TitleBar, useAppBridge} from '@shopify/app-bridge-react';

export default function PageFreeShippingReward() {
  const navigate = useNavigate();
  const OpenFreeShippingModal = useAppBridge();
  const handleModalToggle = () => {
    OpenFreeShippingModal.modal.show('my-modal');
  };

  const [popoverActive, setPopoverActive] = useState(false);
  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    []
  );
  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
      Active
    </Button>
  );
  const [value, setValue] = useState("");
  const handleValueChange = useCallback((newValue) => setValue(newValue), []);

  const [Modalvalue, ModalsetValue] = useState("");
  const handleModalValueChange = useCallback((newModalValue) => ModalsetValue(newModalValue), []);

  const [checked, setChecked] = useState(false);
  const handleCheckChange = useCallback((newChecked) => setChecked(newChecked), []);

  const [Couponvalue, setCouponValue] = useState('1');
  const handleCouponChange = useCallback((newValue) => setCouponValue(newValue), []);

  const [Tabselected, setSelectedTab] = useState(1);
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
    [navigate]
  );

  const tabs = [
    { id: "reward", content: "Ways to earn points" },
    { id: "ways-to-redeem", content: "Ways to redeem points" },
    { id: "prospects-1", content: "Point rules" },
    { id: "activity", content: "Activity" },
  ];

  const handleBackClick = () => {
    navigate("/app/ways-to-redeem");
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
            <Tabs tabs={tabs} selected={Tabselected} onSelect={handleTabChange} />
          </Card>
        </Layout.Section>
      </Layout>

      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Form>
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
                      <Button plain icon={ArrowLeftIcon} onClick={handleBackClick} />
                      <div style={{ marginLeft: "10px" }}>
                        <Text variant="headingLg" as="h3">
                          Free Shipping Coupon
                        </Text>
                      </div>
                    </div>
                    <Button>Create</Button>
                  </div>

                  <Card roundedAbove="sm">
                    <BlockStack gap="50">
                      <div style={{ display: "flex", justifyContent: "flex-start" }}>
                        <div style={{ margin: "0 5px 0 0" }}>
                          <Icon source={PlusCircleIcon} tone="base" />
                        </div>
                        <Text as="h3" variant="headingMd">
                          Reward Title
                        </Text>
                      </div>

                      <div
                        style={{
                          cursor: "pointer",
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          marginTop: "0",
                          marginBottom: "20px",
                        }}
                      >
                        <div style={{ margin: "0" }}>
                          <Icon source={EditIcon} tone="base" />
                        </div>
                        <text onClick={handleModalToggle}>Set name</text>
                      </div>
                      <Form>
                        <Modal id="my-modal">
                        <TitleBar title="Set rewards name">
                        <button variant="primary">Save</button>
                        <button>Cancel</button>
                        </TitleBar>
                        <div style={{paddingBottom:"25px", paddingLeft:"15px", paddingRight:"15px", paddingTop:"15px"}}>
                              <TextField
                                label="Rewards name"
                                value={Modalvalue}
                                onChange={handleModalValueChange}
                                autoComplete="off"
                              />
                            </div>
                        </Modal>
                        </Form>
                    </BlockStack>

                    <Card roundedAbove="sm">
                      <BlockStack gap="400">
                        <Text as="p" variant="bodyMd" fontWeight="bold">
                          Points cost
                        </Text>

                        <TextField
                          value={value}
                          onChange={handleValueChange}
                          autoComplete="off"
                        />

                        <Checkbox
                          label="Set a maximum shipping amount this can be applied to (BDT)"
                          checked={checked}
                          onChange={handleCheckChange}
                        />

                        {checked && (
                          <TextField
                            value={Couponvalue}
                            type="number"
                            onChange={handleCouponChange}
                            autoComplete="off"
                          />
                        )}
                      </BlockStack>
                    </Card>
                  </Card>
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
                marginBottom:"20px"
              }}
            >
              <Text variant="headingLg" as="h3">
                Summary
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
                <Card roundedAbove="sm">
                  <BlockStack gap="400">
                    <List type="bullet">
                      <List.Item>
                        Redeem 10 points to get Free shipping coupon
                      </List.Item>
                    </List>
                  </BlockStack>
                </Card>
              </BlockStack>
            </div>

            <div style={{ display: "flex", justifyContent: "end" }}>
              <Button>Create</Button>
            </div>
            </Form>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

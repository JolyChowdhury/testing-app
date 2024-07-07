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
} from "@shopify/polaris";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useCallback } from "react";
import { ArrowLeftIcon, EditIcon, LogoInstagramIcon } from "@shopify/polaris-icons";
import {Modal, TitleBar, useAppBridge} from '@shopify/app-bridge-react';

export default function PageInstagramReward() {
  const navigate = useNavigate();
  // Modal for Instagram Reward
  const OpenInstagramModal = useAppBridge();
  const handleModalRewardInstagramToggle = () => {
    OpenInstagramModal.modal.show('my-modal');
  };

  // State for Instagram Page URL
  const [instagramFieldValue, setInstagramFieldValue] = useState("");
  const handleInstagramFieldChange = useCallback((value) => setInstagramFieldValue(value), []);

  // Popover State
  const [popoverActive, setPopoverActive] = useState(false);
  const togglePopoverActive = useCallback(() => setPopoverActive((popoverActive) => !popoverActive), []);
  const activator = <Button onClick={togglePopoverActive} disclosure>Active</Button>;

  // State for Reward Points
  const [earningValue, setEarningValue] = useState("");
  const handleEarningValueChange = useCallback((newValue) => setEarningValue(newValue), []);

  // State for Modal Reward Name
  const [modalRewardInstagramValue, setModalRewardInstagramValue] = useState("");
  const handleModalRewardInstagramValueChange = useCallback(
    (newModalRewardInstagramValue) => setModalRewardInstagramValue(newModalRewardInstagramValue),
    [],
  );

  // Tabs Management
  const [tabSelected, setTabSelected] = useState(0);
  const handleTabChange = useCallback(
    (selectedTabIndex) => {
      setTabSelected(selectedTabIndex);
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
    { id: "ways-to-redeem", content: "Ways to redeem points",},
    { id: "prospects-1", content: "Point rules",},
    { id: "activity", content: "Activity",},
  ];

  const tabContent = [];

  const handleBackClick = () => {
    navigate("/app/reward");
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
            <Tabs tabs={tabs} selected={tabSelected} onSelect={handleTabChange}>
              {tabContent[tabSelected]}
            </Tabs>
          </Card>
        </Layout.Section>
      </Layout>

      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Form>
              <div style={{ marginBottom: "20px" }}>
                <BlockStack gap={{ xs: "800", sm: "400" }}>
                  <div style={{ display: "flex", alignItems: "center", marginBottom: "10px", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Button plain icon={ArrowLeftIcon} onClick={handleBackClick} />
                      <div style={{ marginLeft: "10px" }}>
                        <Text variant="headingLg" as="h3">
                          Like on Instagram
                        </Text>
                      </div>
                    </div>
                    <Button>Create</Button>
                  </div>

                  <Card roundedAbove="sm">
                    <BlockStack gap="50">
                      <div style={{ display: "flex", justifyContent: "flex-start" }}>
                        <div style={{ margin: "0 5px 0 0" }}>
                          <Icon source={LogoInstagramIcon} tone="base" />
                        </div>
                        <Text as="h3" variant="headingMd">
                          Instagram like reward
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
                          <Icon source={EditIcon} tone="base"/>
                        </div>
                        <p onClick={handleModalRewardInstagramToggle}>Set name</p>
                      </div>
                      {/* <Modal
                        open={modalRewardInstagramActive}
                        onClose={handleModalRewardInstagramToggle}
                        title="Like on Instagram"
                        primaryAction={{
                          content: "Save",
                          onAction: handleModalRewardInstagramToggle,
                        }}
                        secondaryActions={[
                          {
                            content: "Cancel",
                            onAction: handleModalRewardInstagramToggle,
                          },
                        ]}
                      > */}
                      <Form>
                        <Modal id="my-modal">
                        <TitleBar title="Like on Instagram">
                        <button variant="primary">Save</button>
                        <button>Cancel</button>
                        </TitleBar>
                        <div style={{paddingBottom:"25px", paddingLeft:"15px", paddingRight:"15px", paddingTop:"15px"}}>
                              <TextField
                                label="Rewards name"
                                value={modalRewardInstagramValue}
                                onChange={handleModalRewardInstagramValueChange}
                                autoComplete="off"
                              />
                        </div>
                        </Modal>
                        </Form>
                      {/* </Modal> */}
                    </BlockStack>

                    <div style={{ marginBottom: "20px" }}>
                      <Card roundedAbove="sm">
                        <BlockStack gap="400">
                          <Text as="p" variant="bodyMd" fontWeight="bold">
                            Set social link
                          </Text>
                          <TextField
                            label="Instagram page URL"
                            value={instagramFieldValue}
                            onChange={handleInstagramFieldChange}
                            helpText="Must be a valid Instagram page URL"
                            autoComplete="off"
                          />
                        </BlockStack>
                      </Card>
                    </div>

                    <Card roundedAbove="sm">
                      <BlockStack gap="400">
                        <Text as="p" variant="bodyMd" fontWeight="bold">
                          Set earning value
                        </Text>
                        <TextField
                          label="Rewards point"
                          value={earningValue}
                          onChange={handleEarningValueChange}
                          autoComplete="off"
                          placeholder="e.g 50"
                        />
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
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Text variant="headingLg" as="h3">
                  Summary
                </Text>
                <Popover active={popoverActive} activator={activator} autofocusTarget="first-node" onClose={togglePopoverActive}>
                  <ActionList actionRole="menuitem" items={[{ content: "Active" }, { content: "Inactive" }]} />
                </Popover>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <BlockStack gap={{ xs: "800", sm: "400" }}>
                  <Card roundedAbove="sm">
                    <BlockStack gap="400">
                      <List type="bullet">
                        <List.Item>Customer gets 50 points for completing this action</List.Item>
                        <List.Item>Once in lifetime rewards</List.Item>
                      </List>
                    </BlockStack>
                  </Card>
                </BlockStack>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
                <Button>Create</Button>
              </div>
            </Form>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

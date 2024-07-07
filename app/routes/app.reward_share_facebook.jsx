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
import { ArrowLeftIcon, EditIcon } from "@shopify/polaris-icons";
import { Modal, TitleBar, useAppBridge } from "@shopify/app-bridge-react";

export default function PageFacebookShareReward() {
  const navigate = useNavigate();
  // Modal for Facebook share Reward
  const OpenRewardFacebookShareModal = useAppBridge();
  const handleModalRewardFacebookShareToggle = () => {
    OpenRewardFacebookShareModal.modal.show("my-modal");
  };

  // State for Facebook Share Page URL
  const [FacebookShareFieldValue, setFacebookShareFieldValue] = useState("");
  const handleFacebookShareFieldChange = useCallback(
    (value) => setFacebookShareFieldValue(value),
    [],
  );

  // Popover State
  const [popoverActive, setPopoverActive] = useState(false);
  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );
  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
      Active
    </Button>
  );

  // State for Reward Points
  const [earningValue, setEarningValue] = useState("");
  const handleEarningValueChange = useCallback(
    (newValue) => setEarningValue(newValue),
    [],
  );

  // State for Modal Reward Name
  const [modalRewardFacebookShareValue, setModalRewardFacebookShareValue] =
    useState("");
  const handleModalRewardFacebookShareValueChange = useCallback(
    (newModalRewardFacebookShareValue) =>
      setModalRewardFacebookShareValue(newModalRewardFacebookShareValue),
    [],
  );
  // Tabs Management
  const [Tabselected, setSelectedTab] = useState(0);
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
    { id: "reward", content: "Ways to earn points" },
    {
      id: "ways-to-redeem",
      content: "Ways to redeem points",
    },
    {
      id: "prospects-1",
      content: "Point rules",
    },
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
            <Tabs tabs={tabs} selected={Tabselected} onSelect={handleTabChange}>
              {tabContent[Tabselected]}
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
                          Share on Facebook
                        </Text>
                      </div>
                    </div>
                    <Button>Create</Button>
                  </div>

                  <Card roundedAbove="sm">
                    <BlockStack gap="50">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                        }}
                      >
                        <div style={{ margin: "0 5px 0 0" }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                            width="20px"
                            height="20px"
                            viewBox="-1 0 26 26"
                            version="1.1"
                          >
                            <g
                              id="Page-1"
                              stroke="none"
                              stroke-width="1"
                              fill="none"
                              fill-rule="evenodd"
                              sketch:type="MSPage"
                            >
                              <g
                                id="Icon-Set-Filled"
                                sketch:type="MSLayerGroup"
                                transform="translate(-314.000000, -728.000000)"
                                fill="#000000"
                              >
                                <path
                                  d="M333,744 C331.23,744 329.685,744.925 328.796,746.312 L323.441,743.252 C323.787,742.572 324,741.814 324,741 C324,740.497 323.903,740.021 323.765,739.563 L329.336,736.38 C330.249,737.37 331.547,738 333,738 C335.762,738 338,735.762 338,733 C338,730.238 335.762,728 333,728 C330.238,728 328,730.238 328,733 C328,733.503 328.097,733.979 328.235,734.438 L322.664,737.62 C321.751,736.631 320.453,736 319,736 C316.238,736 314,738.238 314,741 C314,743.762 316.238,746 319,746 C320.14,746 321.179,745.604 322.02,744.962 L328.055,748.46 C328.035,748.64 328,748.814 328,749 C328,751.762 330.238,754 333,754 C335.762,754 338,751.762 338,749 C338,746.238 335.762,744 333,744"
                                  id="share"
                                  sketch:type="MSShapeGroup"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <Text as="h3" variant="headingMd">
                          Facebook share reward
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
                        <text onClick={handleModalRewardFacebookShareToggle}>
                          Set name
                        </text>
                      </div>
                      {/* <Modal
                      open={modalActive}
                      onClose={handleModalToggle}
                      title="Share your link"
                      primaryAction={{
                        content: "Save",
                        onAction: handleModalToggle,
                      }}
                      secondaryActions={[
                        {
                          content: "Cancel",
                          onAction: handleModalToggle,
                        },
                      ]}
                    > */}
                      <Form>
                        <Modal id="my-modal">
                          <TitleBar title="Share your link">
                            <button variant="primary">Save</button>
                            <button>Cancel</button>
                          </TitleBar>
                          <div
                            style={{
                              paddingBottom: "25px",
                              paddingLeft: "15px",
                              paddingRight: "15px",
                              paddingTop: "15px",
                            }}
                          >
                            <TextField
                              label="Rewards name"
                              value={modalRewardFacebookShareValue}
                              onChange={
                                handleModalRewardFacebookShareValueChange
                              }
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
                            label="URL to share"
                            value={FacebookShareFieldValue}
                            onChange={handleFacebookShareFieldChange}
                            helpText="Share URL must be a valid URL"
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
                <Button>Create</Button>
              </div>
            </Form>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

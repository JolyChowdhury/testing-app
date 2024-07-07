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
  ChoiceList,
  List,
  Banner
} from "@shopify/polaris";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import {
  ArrowLeftIcon,
  EditIcon,
  PlusCircleIcon,
} from "@shopify/polaris-icons";
import { useLoaderData, useActionData, Form } from "@remix-run/react";
import { authenticate } from "../shopify.server";
import { json } from "@remix-run/node";
import { settingsType } from "../enum/settings_type";
import { Modal, TitleBar, useAppBridge } from '@shopify/app-bridge-react';
import { merchantSettingSave, merchantSettingUpdate, getMerchantSettings } from "../service/settings";

export async function loader({ request }) {
  const { admin, session } = await authenticate.admin(request);
  const { shop } = session;

  const purchasePointSettings = await getMerchantSettings(shop, settingsType.PURCHASE_RULES);

  return json(purchasePointSettings);
}

export async function action({ request }) {
  const { admin, session } = await authenticate.admin(request);
  const { shop } = session;

  // updates persistent data
  let submitData = await request.formData();
  submitData = Object.fromEntries(submitData);

  let errors = {};
  if (!submitData.purchasePoint) errors.points = "Points is required";

  if (Object.keys(errors).length) {
    return { errors };
  }

  let rewardSettingsData = {
    shopId: shop,
    type: settingsType.PURCHASE_RULES,
    configs: {
      purchase_reward_type: submitData.prchRewardType,
      purchase_points: submitData.purchasePoint,
    },
  };

  if (submitData.purchaseRewardName) {
    rewardSettingsData.configs.purchase_reward_name = submitData.purchaseRewardName;
  }

  let purchaseRewardRule;

  // Step: 1 check sing up data
  const checkPurchaseRewardRecord = await getMerchantSettings(shop, settingsType.PURCHASE_RULES);

  if (checkPurchaseRewardRecord) {
    // Step: 2 if exists then update
    purchaseRewardRule = await merchantSettingUpdate(checkPurchaseRewardRecord.id, rewardSettingsData);
  } else {
    // Step: 3 if not exists then create
    purchaseRewardRule = await merchantSettingSave(rewardSettingsData);
  }

  return { success: true };
}

export default function purchaseRewardRule() {
  const OpenPurchaseModal = useAppBridge();
  const SetPurchaseName = () => {
    OpenPurchaseModal.modal.show('my-modal');
  };


  const navigate = useNavigate();
  // popup content
  const prchRewaredRuleSettings = useLoaderData();
  const formValidationError = useActionData();
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (formValidationError?.errors) {
      setFormErrors(formValidationError.errors);
    }
  }, [formValidationError]);

  const [prchRewardType, setPrchRewardType] = useState(["each"]);
  const handlePrchRewardTypeChange = useCallback(
    (value) => setPrchRewardType(value),
    [],
  );

  const [purchasePoint, setPurchasePoint] = useState(
    prchRewaredRuleSettings?.configs?.purchase_points
  );
  const handlePointChange = useCallback(
    (newValue) => setPurchasePoint(newValue),
    [],
  );

  const [purchaseRewardName, setPurchaseRewardName] = useState("");
  const handlePurchaseRewardNameChange = useCallback(
    (newModalValue) => setPurchaseRewardName(newModalValue),
    [],
  );

  const [modalActive, setModalActive] = useState(false);
  const handleModalToggle = () => {
    setModalActive(!modalActive);
  };
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
    { id: "activity", content: "Activity" },
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
                          Rewards on Purchase
                        </Text>
                      </div>
                    </div>
                    <Button submit>Create</Button>
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
                          <Icon source={PlusCircleIcon} tone="base" />
                        </div>
                        <Text as="h3" variant="headingMd">
                          Purchase Reward
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
                        <text onClick={SetPurchaseName}>Set name</text>
                      </div>
                      <Form>
                        <Modal id="my-modal">
                          <TitleBar title="Set rewards name">
                            <button variant="primary">Save</button>
                            <button>Cancel</button>
                          </TitleBar>
                          <div style={{ paddingBottom: "25px", paddingLeft: "15px", paddingRight: "15px", paddingTop: "15px" }}>
                            <TextField
                              label="Rewards name"
                              value={purchaseRewardName}
                              name="purchaseRewardName"
                              onChange={handlePurchaseRewardNameChange}
                              autoComplete="off"
                            />
                          </div>
                        </Modal>
                      </Form>
                    </BlockStack>
                    <div style={{ marginBottom: "20px" }}>
                      <Card roundedAbove="sm">
                        <BlockStack gap="400">
                          <Text as="p" variant="bodyMd" fontWeight="bold">
                            Type of earning
                          </Text>
                          <ChoiceList
                            choices={[
                              {
                                label: "Every $1 dollar spent=points",
                                value: "each",
                              },
                              {
                                label: "A fixed amount points",
                                value: "fixed",
                              },
                            ]}
                            selected={prchRewardType}
                            name="prchRewardType"
                            onChange={handlePrchRewardTypeChange}
                          />
                        </BlockStack>
                      </Card>
                    </div>
                    <Card roundedAbove="sm">
                      <BlockStack gap="400">
                        <Text as="p" variant="bodyMd" fontWeight="bold">
                          Point value
                        </Text>
                        <TextField
                          label="Points"
                          value={purchasePoint}
                          name="purchasePoint"
                          onChange={handlePointChange}
                          placeholder="1"
                          autoComplete="off"
                          error={formErrors.points}
                        />

                        {formValidationError?.success && (
                          <Banner status="success">
                            Purchase reward rule set successfully!
                          </Banner>
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
                          Customer gets Rewards for every new purchase
                        </List.Item>
                        <List.Item>
                          Customer earns X points for every $1 spent
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

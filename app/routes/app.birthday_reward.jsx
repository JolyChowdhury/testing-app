import React, { useState, useCallback, useEffect } from "react";
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
  List,
  Banner
} from "@shopify/polaris";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon, EditIcon, PlusCircleIcon } from "@shopify/polaris-icons";
import { Modal, TitleBar, useAppBridge } from '@shopify/app-bridge-react';
import { authenticate } from "../shopify.server";
import { useLoaderData, useActionData, Form } from "@remix-run/react";
import { json } from "@remix-run/node";
import { settingsType } from "../enum/settings_type";
import { merchantSettingSave, merchantSettingUpdate, getMerchantSettings } from "../service/settings";

export async function loader({ request }) {
  const { admin, session } = await authenticate.admin(request);
  const { shop } = session;

  const purchasePointSettings = await getMerchantSettings(shop, settingsType.BIRTHDAY_REWARD);

  return json(purchasePointSettings);
}

export async function action({ request }) {
  const { admin, session } = await authenticate.admin(request);
  const { shop } = session;

  // updates persistent data
  let submitData = await request.formData();
  submitData = Object.fromEntries(submitData);

  let errors = {};
  if (!submitData.birthdayReward) errors.birthdayPoints = "Birthday reward point is required";

  if (Object.keys(errors).length) {
    return { errors };
  }

  let birthdayRewardSettingsData = {
    shopId: shop,
    type: settingsType.BIRTHDAY_REWARD,
    configs: {
      birthday_reward_points: submitData.birthdayReward,
    },
  };

  if (submitData.birthdayRewardName) {
    birthdayRewardSettingsData.configs.birthday_reward_name = submitData.birthdayRewardName;
  }

  let birthdayRewardRule;

  // Step: 1 check sing up data
  const checkBirthdayRewardRecord = await getMerchantSettings(shop, settingsType.BIRTHDAY_REWARD);

  if (checkBirthdayRewardRecord) {
    // Step: 2 if exists then update
    birthdayRewardRule = await merchantSettingUpdate(checkBirthdayRewardRecord.id, birthdayRewardSettingsData);
  } else {
    // Step: 3 if not exists then create
    birthdayRewardRule = await merchantSettingSave(birthdayRewardSettingsData);
  }

  return { success: true };
}

export default function PageBirthdayReward() {
  const navigate = useNavigate();
  const [modalActive, setModalActive] = useState(false);
  const [popoverActive, setPopoverActive] = useState(false);

  const birthdaySettings = useLoaderData();
  const formValidationError = useActionData();
  const [formErrors, setFormErrors] = useState({});
  useEffect(() => {
    if (formValidationError?.errors) {
      setFormErrors(formValidationError.errors);
    }
  }, [formValidationError]);

  const [birthdayPoint, setBirthdayPoint] = useState(birthdaySettings?.configs?.birthday_reward_points);

  const [Modalvalue, ModalsetValue] = useState("");
  const [Tabselected, setSelectedTab] = useState(0);

  const OpenBirthdayModal = useAppBridge();
  const SetBirthdayName = () => {
    OpenBirthdayModal.modal.show('my-modal');
  };


  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    []
  );

  const handleValueChange = useCallback((newValue) => setBirthdayPoint(newValue), []);
  const handleModalValueChange = useCallback(
    (newModalValue) => ModalsetValue(newModalValue),
    []
  );

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
    {
      id: "reward",
      content: "Ways to earn points"
    },
    {
      id: "ways-to-redeem",
      content: "Ways to redeem points",
    },
    {
      id: "prospects-1",
      content: "Point rules",
    },
    {
      id: "activity",
      content: "Activity",
    },
  ];

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
            <Tabs tabs={tabs} selected={Tabselected} onSelect={handleTabChange} />
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
                      <Button plain icon={ArrowLeftIcon} onClick={handleBackClick} />
                      <div style={{ marginLeft: "10px" }}>
                        <Text variant="headingLg" as="h3">
                          Celebrate a birthday
                        </Text>
                      </div>
                    </div>
                    <Button submit>Create</Button>
                  </div>

                  <Card roundedAbove="sm">
                    <BlockStack gap="50">
                      <div style={{ display: "flex", justifyContent: "flex-start" }}>
                        <div style={{ margin: "0 5px 0 0" }}>
                          <Icon source={PlusCircleIcon} tone="base" />
                        </div>
                        <Text as="h3" variant="headingMd">
                          Birthday Reward
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
                        <text onClick={SetBirthdayName}>Set name</text>
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
                          Point value
                        </Text>
                        <TextField
                          label="Set points for birthday rewards"
                          value={birthdayPoint}
                          onChange={handleValueChange}
                          name="birthdayReward"
                          autoComplete="off"
                          error={formErrors.birthdayPoints}
                        />

                        {formValidationError?.success && <Banner status="success">Birthday reward point set successfully!</Banner>}
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "20px"
              }}
            >
              <Text variant="headingLg" as="h3">
                Summary
              </Text>
              <Popover
                active={popoverActive}
                activator={<Button onClick={togglePopoverActive} disclosure>Active</Button>}
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
                      <List.Item>Customers earn { birthdaySettings ? birthdaySettings?.configs?.birthday_reward_points : "60" } points on their birthdays</List.Item>
                    </List>
                  </BlockStack>
                </Card>
              </BlockStack>
            </div>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <Button>Create</Button>
            </div>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

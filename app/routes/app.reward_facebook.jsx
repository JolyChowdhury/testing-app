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
  Banner,
} from "@shopify/polaris";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import {
  ArrowLeftIcon,
  EditIcon,
  LogoFacebookIcon,
} from "@shopify/polaris-icons";
import { useLoaderData, useActionData, Form } from "@remix-run/react";
import { authenticate } from "../shopify.server";
import db from "../db.server";
import { settingsType } from "../enum/settings_type";
import { json } from "@remix-run/node";
import {Modal, TitleBar, useAppBridge} from '@shopify/app-bridge-react';

export async function loader({ request }) {
  const { admin, session } = await authenticate.admin(request);
  const { id } = session;

  const facebookShareSettings = await db.Settings.findFirst({
    where: {
      shopId: id,
      type: settingsType.FACEBOOK_LIKE,
    },
  });

  return json(facebookShareSettings);
}

export async function action({ request }) {
  const { admin, session } = await authenticate.admin(request);
  const { id } = session;

  // updates persistent data
  let submitData = await request.formData();
  submitData = Object.fromEntries(submitData);

  let errors = {};
  if (!submitData.fbPageUrl) errors.fbPageUrl = "Facebook page url is required";
  if (!submitData.fbLikeReward) errors.fbLikeReward = "Facebook page reward is required";

  if (Object.keys(errors).length) {
    return { errors };
  }

  let fbRewardSettingsData = {
    shopId: id,
    type: settingsType.FACEBOOK_LIKE,
    configs: {
      fb_page_url: submitData.fbPageUrl,
      reward_points: submitData.fbLikeReward,
    },
  };

  if (submitData.fbRewardName) {
    fbRewardSettingsData.configs.redeem_name = submitData.fbRewardName;
  }

  let fbSettings;

  // Step: 1 check sing up data
  const checkSignUpRecord = await db.Settings.findFirst({
    where: {
      shopId: id,
      type: settingsType.FACEBOOK_LIKE,
    },
  });

  if (checkSignUpRecord) {
    // Step: 2 if exists then update
    fbSettings = await db.Settings.update({
      where: {
        id: checkSignUpRecord.id,
      },
      data: fbRewardSettingsData,
    });
  } else {
    // Step: 3 if not exists then create
    fbSettings = await db.Settings.create({
      data: fbRewardSettingsData,
    });
  }

  return { success: true };
}

export default function PageFacebookLikeReward() {
  const navigate = useNavigate();

  const OpenFacebookModal = useAppBridge();
  const SetFacebookName = () => {
    OpenFacebookModal.modal.show('my-modal');
  };

  const fbPageSettings = useLoaderData();
  const formValidationError = useActionData();
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (formValidationError?.errors) {
      setFormErrors(formValidationError.errors);
    }
  }, [formValidationError]);

  const [facebookPageUrl, setFacebookPageUrl] = useState(fbPageSettings?.configs?.fb_page_url);
  const handleFacebookPageUrlChange = useCallback(
    (value) => setFacebookPageUrl(value),
    [],
  );

  const [fbLikeReward, setFbLikeReward] = useState(fbPageSettings?.configs?.reward_points);
  const handleFbLikeRewardChange = useCallback((newValue) => setFbLikeReward(newValue), []);

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

  const [Modalvalue, ModalsetValue] = useState("");
  const handleModalValueChange = useCallback(
    (newModalValue) => ModalsetValue(newModalValue),
    [],
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
      content: "Activity", },
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
                          Like on Facebook
                        </Text>
                      </div>
                    </div>
                    <Button submit>Create</Button>
                  </div>

                  <Card roundedAbove="sm">
                    <BlockStack gap="50">
                      <div
                        style={{ display: "flex", justifyContent: "flex-start" }}
                      >
                        <div style={{ margin: "0 5px 0 0" }}>
                          <Icon source={LogoFacebookIcon} tone="base" />
                        </div>
                        <Text as="h3" variant="headingMd">
                          Facebook like reward
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
                        <text onClick={SetFacebookName}>Set name</text>
                      </div>
                      {/* <Modal
                        onClose={SetFacebookName}
                        title="Like on Facebook"
                        primaryAction={{
                          content: "Save",
                          onAction: SetFacebookName,
                        }}
                        secondaryActions={[
                          {
                            content: "Cancel",
                            onAction: SetFacebookName,
                          },
                        ]}
                      > */}
                      <Form>
                        <Modal id="my-modal">
                        <TitleBar title="Like on Facebook">
                        <button variant="primary">Save</button>
                        <button>Cancel</button>
                        </TitleBar>
                        <div style={{paddingBottom:"25px", paddingLeft:"15px", paddingRight:"15px", paddingTop:"15px"}}>
                              <TextField
                                label="Rewards name"
                                value={Modalvalue}
                                name="fbRewardName"
                                onChange={handleModalValueChange}
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
                            label="Facebook page URL"
                            value={facebookPageUrl}
                            name="fbPageUrl"
                            onChange={handleFacebookPageUrlChange}
                            autoComplete="off"
                            helpText="Must be a valid Facebook page URL"
                            error={formErrors.fbPageUrl}
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
                          type="number"
                          value={fbLikeReward}
                          name="fbLikeReward"
                          onChange={handleFbLikeRewardChange}
                          autoComplete="off"
                          placeholder="e.g 50"
                          error={formErrors.fbLikeReward}
                        />
                      </BlockStack>
                    </Card>
                    {formValidationError?.success && (
                      <Banner status="success">
                        Facebook page like program set successfully!
                      </Banner>
                    )}
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
                          Customer gets {fbPageSettings?.configs?.reward_points ?? '50'} points for completing this action
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
import {
  Checkbox,
  Banner,
  Badge,
  Select,
  TextField,
  ChoiceList,
  Divider,
  Tooltip,
  ProgressBar,
  FooterHelp,
  Icon,
  Grid,
  EmptyState,
  InlineStack,
  Box,
  Card,
  Layout,
  Link,
  List,
  Page,
  Text,
  BlockStack,
  Button,
  ButtonGroup,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import {
  InfoIcon,
  ArrowRightIcon,
  AppsIcon,
  ComposeIcon,
  CreditCardIcon,
  QuestionCircleIcon,
} from "@shopify/polaris-icons";
import { useState, useCallback } from "react";

export default function Settings() {
  const [accountTitle, setAccountTitle] = useState("Test user");
  const [isCustomDomainchecked, setIsCustomDomainchecked] = useState(false);
  const [selectedDomainRestriction, setSelectedDomainRestriction] = useState([
    "all_domains",
  ]);
  const [textFieldValue, setTextFieldValue] = useState("");

  const handleAccountTiitleChange = useCallback(
    (newValue) => setAccountTitle(accountTitle),
    [],
  );

  const handleCustomDomainChange = useCallback(
    (newChecked) => setIsCustomDomainchecked(newChecked),
    [],
  );

  const handleChoiceListChange = useCallback(
    (value) => setSelectedDomainRestriction(value),
    [],
  );

  const handleTextFieldChange = useCallback(
    (value) => setTextFieldValue(value),
    [],
  );

  const domainRestrictionsOptions = [
    { label: "Include subdomains", value: "1" },
    { label: "Match exactly", value: "2" },
  ];

  const renderChildren = useCallback(
    (selectedDomainRestriction) =>
      selectedDomainRestriction && (
        <BlockStack gap="200">
          <InlineStack gap="100" wrap={true} blockAlign="center">
            <Select
              options={domainRestrictionsOptions}
              //   onChange={handleSelectChange}
              value="1"
            />

            <BlockStack>
              <TextField
                onChange={handleTextFieldChange}
                value={textFieldValue}
                autoComplete="off"
              />
            </BlockStack>
          </InlineStack>
          <Box>
            <Button variant="primary">Add domain</Button>
          </Box>
        </BlockStack>
      ),
    [handleTextFieldChange, textFieldValue],
  );

  return (
    <Page
      narrowWidth
      backAction={{ content: "Settings", url: "/app" }}
      title="Settings"
    >
      <Box paddingBlockEnd="600">
        <BlockStack gap="400">
          <BlockStack gap="400">
            <BlockStack>
              <InlineStack gap="100" wrap={true} blockAlign="center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  width="32"
                  height="32"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path
                    fill="#616161"
                    fill-rule="evenodd"
                    d="M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-1.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                  />
                  <path
                    fill="#616161"
                    fill-rule="evenodd"
                    d="M9.377 2.5c-.926 0-1.676.75-1.676 1.676v.688c0 .056-.043.17-.198.251-.153.08-.303.168-.448.262-.147.097-.268.076-.318.048l-.6-.346a1.676 1.676 0 0 0-2.29.613l-.622 1.08a1.676 1.676 0 0 0 .613 2.289l.648.374c.048.028.124.12.119.29a5.484 5.484 0 0 0 .005.465c.009.175-.07.27-.119.299l-.653.377a1.676 1.676 0 0 0-.613 2.29l.623 1.08a1.676 1.676 0 0 0 2.29.613l.7-.405c.048-.028.166-.048.312.043.115.071.233.139.353.202.155.08.198.195.198.251v.811c0 .926.75 1.676 1.676 1.676h1.246c.926 0 1.676-.75 1.676-1.676v-.81c0-.057.042-.171.197-.252.121-.063.239-.13.354-.202.146-.091.264-.07.312-.043l.7.405a1.676 1.676 0 0 0 2.29-.614l.623-1.08a1.676 1.676 0 0 0-.613-2.289l-.653-.377c-.05-.029-.128-.123-.119-.3a5.494 5.494 0 0 0 .005-.463c-.005-.171.07-.263.12-.291l.647-.374a1.676 1.676 0 0 0 .613-2.29l-.623-1.079a1.676 1.676 0 0 0-2.29-.613l-.6.346c-.049.028-.17.048-.318-.048a5.4 5.4 0 0 0-.448-.262c-.155-.081-.197-.195-.197-.251v-.688c0-.926-.75-1.676-1.676-1.676h-1.246Zm-.176 1.676c0-.097.078-.176.176-.176h1.246c.097 0 .176.079.176.176v.688c0 .728.462 1.298 1.003 1.58.11.058.219.122.323.19.517.337 1.25.458 1.888.09l.6-.346a.176.176 0 0 1 .24.064l.623 1.08a.176.176 0 0 1-.064.24l-.648.374c-.623.36-.888 1.034-.868 1.638a4.184 4.184 0 0 1-.004.337c-.032.615.23 1.31.867 1.677l.653.377a.176.176 0 0 1 .064.24l-.623 1.08a.176.176 0 0 1-.24.065l-.701-.405c-.624-.36-1.341-.251-1.855.069a3.91 3.91 0 0 1-.255.145c-.54.283-1.003.853-1.003 1.581v.811a.176.176 0 0 1-.176.176h-1.246a.176.176 0 0 1-.176-.176v-.81c0-.73-.462-1.3-1.003-1.582a3.873 3.873 0 0 1-.255-.146c-.514-.32-1.23-.428-1.855-.068l-.7.405a.176.176 0 0 1-.241-.065l-.623-1.08a.176.176 0 0 1 .064-.24l.653-.377c.637-.368.899-1.062.867-1.677a3.97 3.97 0 0 1-.004-.337c.02-.604-.245-1.278-.868-1.638l-.648-.374a.176.176 0 0 1-.064-.24l.623-1.08a.176.176 0 0 1 .24-.064l.6.346c.638.368 1.37.247 1.888-.09a3.85 3.85 0 0 1 .323-.19c.54-.282 1.003-.852 1.003-1.58v-.688Z"
                  />
                </svg>

                <Text variant="headingLg" as="h4">
                  General
                </Text>
              </InlineStack>

              <Text variant="headingMd" tone="subdued" as="h6">
                Control your account title and domain settings.
              </Text>
            </BlockStack>

            <Card>
              <BlockStack gap="200">
                <BlockStack>
                  <BlockStack gap="100">
                    <InlineStack gap="100" wrap={false} blockAlign="center">
                      <Text variant="headingSm" as="h6">
                        Account title
                      </Text>

                      <Tooltip content="This title will be used for your reference so pick something simple that you can easily identify.">
                        <Icon source={InfoIcon} tone="subdued" />
                      </Tooltip>
                    </InlineStack>
                    <TextField
                      value={accountTitle}
                      onChange={handleAccountTiitleChange}
                      autoComplete="off"
                    />
                  </BlockStack>

                  <Text variant="bodyMd" as="p" alignment="end">
                    <strong>18</strong> characters remaining.
                  </Text>
                </BlockStack>

                <BlockStack gap="100">
                  <InlineStack gap="100" wrap={false} blockAlign="center">
                    <Text variant="headingSm" as="h6">
                      Custom survey domain
                    </Text>

                    {/* <Tooltip content="If you are willing to add a CNAME can use your own domain for your public survey links <Link href='#'>click here</Link> to learn more.">
                                        <Icon
                                            source={InfoIcon}
                                            tone="subdued"
                                        />
                                    </Tooltip> */}
                  </InlineStack>
                  <Checkbox
                    label="Use a custom domain for public survey links."
                    checked={isCustomDomainchecked}
                    onChange={handleCustomDomainChange}
                  />

                  <TextField
                    //   value={value}
                    //   onChange={handleChange}
                    autoComplete="off"
                    placeholder="survey.maywebsite.com"
                  />
                </BlockStack>

                <BlockStack gap="100">
                  <InlineStack gap="100" wrap={false} blockAlign="center">
                    <Text variant="headingSm" as="h6">
                      Domain restrictions
                    </Text>

                    <Tooltip content="Fill out this section if you want to ensure that the survey only shows up on certain domains. If you're not worried about who can display your survey select allow on all domains.">
                      <Icon source={InfoIcon} tone="subdued" />
                    </Tooltip>
                  </InlineStack>

                  <ChoiceList
                    choices={[
                      {
                        label: "Allow us to be used on all domains",
                        value: "all_domains",
                      },
                      {
                        label: "Allow us to be used on specific domains only",
                        value: "specific_domains",
                        renderChildren,
                      },
                    ]}
                    selected={selectedDomainRestriction}
                    onChange={handleChoiceListChange}
                  />
                </BlockStack>
              </BlockStack>
            </Card>
          </BlockStack>

          <BlockStack gap="400">
            <BlockStack>
              <InlineStack gap="100" wrap={true} blockAlign="center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  width="32"
                  height="32"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path
                    fill="#616161"
                    d="M8.5 6.5a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                  />
                  <path
                    fill="#616161"
                    fill-rule="evenodd"
                    d="M8 3.5a2.75 2.75 0 0 0-2.75 2.75v.5h-1.75a1 1 0 0 0-1 1v6a2.75 2.75 0 0 0 2.75 2.75h9.5a2.75 2.75 0 0 0 2.75-2.75v-6a1 1 0 0 0-1-1h-1.75v-.5a2.75 2.75 0 0 0-2.75-2.75h-4Zm2 7.849-3.25-2.167v-2.932c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2.932l-3.25 2.167Zm6-2.198v4.599c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-4.599l6 4 6-4Z"
                  />
                </svg>

                <InlineStack gap="100" wrap={false} blockAlign="center">
                  <Text variant="headingLg" as="h4">
                    Email notifications
                  </Text>

                  <Tooltip content="By default, all notifications are sent to the account owner.">
                    <Icon source={InfoIcon} tone="subdued" />
                  </Tooltip>
                </InlineStack>
              </InlineStack>

              <Text variant="headingMd" tone="subdued" as="h6">
                Control where all survey notifications get sent.
              </Text>
            </BlockStack>

            <Card>
              <BlockStack gap="200">
                <BlockStack gap="100">
                  <InlineStack gap="100" wrap={false} blockAlign="center">
                    <Text variant="headingSm" as="h6">
                      Notification recipients
                    </Text>

                    <Tooltip content="By default, notifications will be sent to the account owner. If you would like to send notifications to someone else or more than one person please update the list below.">
                      <Icon source={InfoIcon} tone="subdued" />
                    </Tooltip>
                  </InlineStack>

                  <ChoiceList
                    choices={[
                      {
                        label: "Send to the account owner only",
                        value: "all_domains",
                      },
                      {
                        label: "Send to custom recipients",
                        value: "specific_domains",
                        renderChildren,
                      },
                    ]}
                    selected={selectedDomainRestriction}
                    onChange={handleChoiceListChange}
                  />
                </BlockStack>

                <BlockStack gap="100">
                  <InlineStack gap="100" wrap={false} blockAlign="center">
                    <Text variant="headingSm" as="h6">
                      Send weekly recaps
                    </Text>

                    <Tooltip content="You will automatically receive a weekly email that includes relevant us statistics for each week. The email is sent every Monday at 7AM EST.">
                      <Icon source={InfoIcon} tone="subdued" />
                    </Tooltip>
                  </InlineStack>
                  <Checkbox
                    label="Send weekly updateds to the recipients listed above."
                    checked={isCustomDomainchecked}
                    onChange={handleCustomDomainChange}
                  />
                </BlockStack>

                <BlockStack gap="100">
                  <InlineStack gap="100" wrap={false} blockAlign="center">
                    <Text variant="headingSm" as="h6">
                      Submission limit notification
                    </Text>

                    <Tooltip content="Control when you receive a warning notice about yout submission limit for the month. You will always be notified via email when you hit or exceed yout limit.">
                      <Icon source={InfoIcon} tone="subdued" />
                    </Tooltip>
                  </InlineStack>

                  {/* <InlineStack gap="" wrap={false} blockAlign="center"> */}
                  <ChoiceList
                    choices={[
                      {
                        label: "Do not notify until i reach my limit",
                        value: "all_domains",
                      },
                      {
                        label: "Notify when i have reached my monthly limit",
                        value: "specific_domains",
                        renderChildren,
                      },
                    ]}
                    selected={selectedDomainRestriction}
                    onChange={handleChoiceListChange}
                  />
                  {/* </InlineStack> */}
                </BlockStack>
              </BlockStack>
            </Card>
          </BlockStack>

          <BlockStack gap="400">
            <BlockStack>
              <InlineStack gap="100" wrap={true} blockAlign="center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  width="32"
                  height="32"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path
                    fill="#616161"
                    d="M10.75 12.75a.75.75 0 0 1-1.5 0v-6.69l-1.72 1.72a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72v6.69Z"
                  />
                  <path
                    fill="#616161"
                    d="M16.5 13.75a.75.75 0 0 0-1.5 0v.76a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1-.75-.75v-.76a.75.75 0 0 0-1.5 0v.76a2.25 2.25 0 0 0 2.25 2.25h8.5a2.25 2.25 0 0 0 2.25-2.25v-.76Z"
                  />
                </svg>

                <InlineStack gap="100" wrap={false} blockAlign="center">
                  <Text variant="headingLg" as="h4">
                    Export Settings
                  </Text>

                  <Tooltip content="By default, all notifications are sent to the account owner.">
                    <Icon source={InfoIcon} tone="subdued" />
                  </Tooltip>
                </InlineStack>
              </InlineStack>

              <Text variant="headingMd" tone="subdued" as="h6">
                Manage your export preferences.
              </Text>
            </BlockStack>

            <Card>
              <BlockStack gap="200">
                <BlockStack gap="100">
                  <InlineStack gap="100" wrap={false} blockAlign="center">
                    <Text variant="headingSm" as="h6">
                      Export type
                    </Text>

                    <Tooltip content="By default, we send exports as email attatchments. If yours are larger than 20MB you should use links instead.">
                      <Icon source={InfoIcon} tone="subdued" />
                    </Tooltip>
                  </InlineStack>

                  <ChoiceList
                    choices={[
                      { label: "Include as attachment", value: "1" },
                      {
                        label: "Send a doanload link",
                        value: "2",
                      },
                    ]}
                    selected={selectedDomainRestriction}
                    onChange={handleChoiceListChange}
                  />
                </BlockStack>

                <BlockStack gap="100">
                  <InlineStack gap="100" wrap={false} blockAlign="center">
                    <Text variant="headingSm" as="h6">
                      Delimiter
                    </Text>

                    <Tooltip content="By default, we use a comma to seperate values in out form and multi-choice response values. If you would like to use something different for your CSV exports, enter the value below.">
                      <Icon source={InfoIcon} tone="subdued" />
                    </Tooltip>
                  </InlineStack>

                  <InlineStack gap="100" wrap={false} blockAlign="center">
                    <Text variant="bodyMd" as="span">
                      Use a
                    </Text>
                    <div style={{ maxWidth: "35px" }}>
                      <TextField
                        // onChange={handleTextFieldChange}
                        value=","
                        autoComplete="off"
                      />
                    </div>
                    <Text variant="bodyMd" as="span">
                      character to seperate cells with multiple values.
                    </Text>
                  </InlineStack>
                </BlockStack>
              </BlockStack>
            </Card>

            <Card>
              <InlineStack
                gap="100"
                wrap={true}
                blockAlign="center"
                align="space-between"
              >
                <Button variant="primary">Update account</Button>
                <BlockStack gap="100">
                  <Text as="p" alignment="center">
                    Need help upderstanding accuonts?
                  </Text>

                  <Link monochrome href="#" removeUnderline>
                    <InlineStack
                      gap="100"
                      wrap={false}
                      blockAlign="center"
                      align="center"
                    >
                      <Box>
                        <Icon source={ArrowRightIcon} />
                      </Box>
                      <Text alignment="center" variant="headingMd" as="h6">
                        Learn more
                      </Text>
                    </InlineStack>
                  </Link>
                </BlockStack>
              </InlineStack>
            </Card>
          </BlockStack>

          <BlockStack gap="400">
            <BlockStack>
              <InlineStack gap="100" wrap={true} blockAlign="center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  width="32"
                  height="32"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path
                    fill="#616161"
                    fill-rule="evenodd"
                    d="M7.75 3.5a.75.75 0 0 0-1.5 0v.407a3.075 3.075 0 0 0-.702.252 3.75 3.75 0 0 0-1.64 1.639c-.226.444-.32.924-.365 1.47-.043.531-.043 1.187-.043 2v1.464c0 .813 0 1.469.043 2 .045.546.14 1.026.366 1.47a3.75 3.75 0 0 0 1.639 1.64c.444.226.924.32 1.47.365.531.043 1.187.043 2 .043h3.383c.323 0 .542 0 .735-.02a3.75 3.75 0 0 0 3.344-3.344c.02-.193.02-.412.02-.735v-2.883c0-.813 0-1.469-.043-2-.045-.546-.14-1.026-.366-1.47a3.75 3.75 0 0 0-1.639-1.64 3.076 3.076 0 0 0-.702-.251v-.407a.75.75 0 0 0-1.5 0v.259c-.373-.009-.794-.009-1.268-.009h-1.964c-.474 0-.895 0-1.268.009v-.259Zm-1.521 1.995c.197-.1.458-.17.912-.207.462-.037 1.057-.038 1.909-.038h1.9c.853 0 1.447 0 1.91.038.453.037.714.107.912.207.423.216.767.56.983.984.1.197.17.458.207.912.014.18.024.38.029.609h-9.982c.006-.228.015-.429.03-.61.036-.453.106-.714.206-.911a2.25 2.25 0 0 1 .984-.984Zm-1.229 4.005v1.2c0 .853 0 1.447.038 1.91.037.453.107.714.207.912.216.423.56.767.984.983.197.1.458.17.912.207.462.037 1.057.038 1.909.038h3.306c.385 0 .52-.001.626-.012a2.25 2.25 0 0 0 2.006-2.006c.011-.106.012-.241.012-.626v-2.606h-10Z"
                  />
                </svg>

                <InlineStack gap="100" wrap={false} blockAlign="center">
                  <Text variant="headingLg" as="h4">
                    Monthly Limits
                  </Text>

                  <Tooltip content="If you reach your submission limit, your surveys will stop showing on your website. If you reach an email limit you will no longer be able to send outbound emails. If you want more submissions or emails you can change your plan.">
                    <Icon source={InfoIcon} tone="subdued" />
                  </Tooltip>
                </InlineStack>
              </InlineStack>

              <Text variant="headingMd" tone="subdued" as="h6">
                See your limits for this month.
              </Text>
            </BlockStack>

            <Layout>
              <DashboardSecondRowItem
                heading="Submission limit"
                tooltipText="If you reach your submission limit, your surveys will stop showing on your website. If you want more submission per month you can <Link>change your plan</Link>"
                currentNumberCount="10"
                maxNumberCount="100"
                numberText="Submissions"
                progressNumber="10"
              />

              <DashboardSecondRowItem
                heading="Outbound email limit"
                tooltipText="If you reach your email limit, you will no longer be able to send emails via Survey app for the month. If you want to send more emails per month you can <Link>change your plan</Link>"
                currentNumberCount="84"
                maxNumberCount="100"
                numberText="Emails"
                progressNumber="84"
              />

              <DashboardSecondRowItem
                heading="SMS limit"
                tooltipText="If you reach your SMS limit, you will no longer be able to send messages via Survey app for the month. If you want to send more SMS message per month you can <Link>change your plan</Link>"
                currentNumberCount="1"
                maxNumberCount="10"
                numberText="Emails"
                progressNumber="36"
              />
            </Layout>
          </BlockStack>

          <BlockStack gap="400">
            <BlockStack>
              <InlineStack gap="100" wrap={true} blockAlign="center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  width="32"
                  height="32"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path
                    fill="#616161"
                    fill-rule="evenodd"
                    d="M4.963 17.4a1.5 1.5 0 0 1-.963-1.4v-11a2.5 2.5 0 0 1 2.5-2.5h7a2.5 2.5 0 0 1 2.5 2.5v11a1.5 1.5 0 0 1-2.615 1.003l-1.135-1.26-1.135 1.26a1.5 1.5 0 0 1-2.23 0l-1.135-1.26-1.135 1.26a1.5 1.5 0 0 1-1.652.397Zm7.388-3.4h-.203a.995.995 0 0 0-.641.326l-1.507 1.674-1.507-1.674a.995.995 0 0 0-.641-.326h-.204a.995.995 0 0 0-.641.326l-1.507 1.674v-11a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v11l-1.507-1.674a.995.995 0 0 0-.642-.326Z"
                  />
                  <path
                    fill="#616161"
                    d="M10.25 5a.75.75 0 0 0-.75.75v.25a2 2 0 1 0 0 4h1a.5.5 0 0 1 0 1h-2.25a.75.75 0 0 0 0 1.5h.75v.25a.75.75 0 0 0 1.5 0v-.25a2 2 0 1 0 0-4h-1a.5.5 0 0 1 0-1h2.25a.75.75 0 0 0 0-1.5h-.75v-.25a.75.75 0 0 0-.75-.75Z"
                  />
                </svg>

                <InlineStack gap="100" wrap={false} blockAlign="center">
                  <Text variant="headingLg" as="h4">
                    Subscription plan
                  </Text>
                </InlineStack>
              </InlineStack>

              <Text variant="headingMd" tone="subdued" as="h6">
                Find the plan that's right for you.
              </Text>
            </BlockStack>

            <Card>
              <BlockStack gap="300">
                <BlockStack gap="100">
                  <Text variant="headingMd" as="h6">
                    Test user
                  </Text>

                  <BlockStack>
                    <Text variant="bodyMd" as="span" tone="subdued">
                      Plan:{" "}
                      <Text variant="bodyMd" tone="base" as="span">
                        <strong>Lite</strong>
                      </Text>
                    </Text>

                    <Text variant="bodyMd" as="span" tone="subdued">
                      Price:{" "}
                      <Text variant="bodyMd" tone="base" as="span">
                        <strong>$0</strong>
                      </Text>
                      <Text variant="bodyMd" as="span" tone="subdued">
                        {" "}
                        /mo
                      </Text>
                    </Text>
                  </BlockStack>
                </BlockStack>

                <BlockStack gap="100">
                  <SubscriptionPlanLinks
                    link="#"
                    icon={AppsIcon}
                    text="View dashboard"
                  />
                  <SubscriptionPlanLinks
                    link="#"
                    icon={ComposeIcon}
                    text="Manage users"
                  />
                  <SubscriptionPlanLinks
                    link="#"
                    icon={CreditCardIcon}
                    text="Update plan"
                  />
                </BlockStack>

                <BlockStack gap="100">
                  <SubscriptionPlanLinks
                    link="#"
                    icon={QuestionCircleIcon}
                    text="Learn more about our pricing plans."
                  />
                </BlockStack>
              </BlockStack>
            </Card>
          </BlockStack>

          <BlockStack gap="400">
            <BlockStack>
              <InlineStack gap="100" wrap={false} blockAlign="center">
                <Text variant="headingLg" as="h4">
                  Account id
                </Text>

                <Tooltip content="You may want this for your wordpress plugin.">
                  <Icon source={InfoIcon} tone="subdued" />
                </Tooltip>
              </InlineStack>

              <Text variant="headingMd" tone="subdued" as="h6">
                Click to copy to your clipboard.
              </Text>
            </BlockStack>

            <Card>
              <BlockStack gap="300">
                <TextField
                  disabled
                  autoComplete="off"
                  value="664dc17e9d8a85644749b26c"
                />
              </BlockStack>
            </Card>
          </BlockStack>
        </BlockStack>
      </Box>
    </Page>
  );
}

const DashboardSecondRowItem = ({
  heading,
  tooltipText,
  currentNumberCount,
  maxNumberCount,
  numberText,
  progressNumber,
}) => {
  return (
    <Layout.Section variant="oneThird">
      <Card>
        <BlockStack gap="200">
          <InlineStack gap="100" wrap={false} blockAlign="center">
            <Text variant="headingSm" as="h6">
              {heading}
            </Text>

            <Tooltip content={tooltipText}>
              <Icon source={InfoIcon} tone="subdued" />
            </Tooltip>
          </InlineStack>

          <InlineStack wrap={false} align="space-between" blockAlign="center">
            <InlineStack wrap={false} blockAlign="center">
              <Text variant="headingSm" as="h6">
                {currentNumberCount} / {maxNumberCount} {numberText}
              </Text>

              <Text variant="headingSm" tone="subdued" as="h6">
                /mo
              </Text>
            </InlineStack>

            <Link href="#">Change plan</Link>
          </InlineStack>

          <div style={{ width: "100%" }}>
            <ProgressBar progress={progressNumber} size="small" />
          </div>

          {/* <Box>
                        <Link href="#">
                            Change plan
                        </Link>
                    </Box> */}

          {/* <Box>
                        <Text alignment="end">
                            <Link href="#">
                                Change plan
                            </Link>
                        </Text>
                    </Box> */}
        </BlockStack>
      </Card>
    </Layout.Section>
  );
};

const SubscriptionPlanLinks = ({ link, icon, text }) => (
  <Link href={link} monochrome removeUnderline>
    <InlineStack gap="100" wrap={false} blockAlign="center">
      <Box>
        <Icon source={icon} tone="subdued" />
      </Box>
      <Text variant="headingSm" as="h6">
        {text}
      </Text>
    </InlineStack>
  </Link>
);

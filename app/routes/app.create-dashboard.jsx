import { Banner, Badge, Divider, Tooltip, ProgressBar, FooterHelp, Icon, Grid, EmptyState, InlineStack, Box, Card, Layout, Link, List, Page, Text, BlockStack, Button, ButtonGroup } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { InfoIcon, ArrowRightIcon, EditIcon, ChartVerticalFilledIcon } from '@shopify/polaris-icons';
import { useState } from 'react';


export default function Dashboard() {
    const [hasSurvey, setHasSurvey] = useState(true);
    const [isSurveyHidden, setIsSurveyHidden] = useState(false);

    return (
        <Page backAction={{ content: 'Dashboard', url: '/app' }} title="Dashboard">
            <BlockStack gap="400">
                {/* show the banner if there is no survey available */}
                {!hasSurvey && (
                    <Card padding="0">
                        <Banner tone="warning">
                            <Text variant="bodyMd" as="p">
                                You have no active surveys. In order to collect and analyze user responses you should make an existing survey visible or <Link href="#">create survey</Link>.
                            </Text>
                        </Banner>
                    </Card>
                )}

                {/* {hasSurvey && (
                    <Card padding="0">
                        <Banner tone="warning">
                            <Text variant="bodyMd" as="p">
                                This survey is currently hidden. <Link href="#">Click here</Link> to make it visible or <Link href="#">click here to see a preview.</Link>
                            </Text>
                        </Banner>
                    </Card>
                )} */}

                {(hasSurvey && isSurveyHidden) && (
                    <Card padding="0">
                        <Banner tone="warning">
                            <Text variant="bodyMd" as="p">
                                You have no active surveys. In order to collect and analyze user responses you should make an existing survey visible or <Link href="#">create new survey</Link>.
                            </Text>
                        </Banner>
                    </Card>
                )}

                {/* {!hasSurvey && ( */}
                <InlineStack gap="100" wrap={true} blockAlign="center" align="center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="28" height="28" focusable="false" aria-hidden="true"><path fill="#616161" fill-rule="evenodd" d="M5.75 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h8.5c.69 0 1.25-.56 1.25-1.25v-4.5c0-.69-.56-1.25-1.25-1.25h-3.382a1.75 1.75 0 0 1-1.565-.967l-.171-.342a1.25 1.25 0 0 0-1.118-.691h-2.264Zm-2.75 1.25a2.75 2.75 0 0 1 2.75-2.75h2.264a2.75 2.75 0 0 1 2.46 1.52l.17.342a.25.25 0 0 0 .224.138h3.382a2.75 2.75 0 0 1 2.75 2.75v4.5a2.75 2.75 0 0 1-2.75 2.75h-8.5a2.75 2.75 0 0 1-2.75-2.75v-6.5Z" /></svg>

                    <Text variant="headingLg" tone="subdued" as="h4">
                        User123
                    </Text>
                </InlineStack>
                {/* )} */}

                {/* {hasSurvey && (
                    <InlineStack gap="100" wrap={true} blockAlign="center" align="center">
                        <Text variant="headingLg" tone="subdued" as="h4">
                            Survey Stats
                        </Text>
                        <Tooltip content="These numbers are for your survey as a whole. If you want to see how each side is performing, click through below.">
                            <Icon
                                source={InfoIcon}
                                tone="subdued"
                            />
                        </Tooltip>
                    </InlineStack>
                )} */}

                {/* <Grid columns={hasSurvey ? { xs: 1, sm: 3, md: 4, lg: 5, xl: 5 } : { xs: 1, sm: 3, md: 3, lg: 4, xl: 4 }}> */}
                <Grid columns={{ xs: 1, sm: 3, md: 3, lg: 4, xl: 4 }}>
                    <DashboardFirtRowItem badge={<Badge tone='info'>Open ended</Badge>} heading="Responses" tooltipText="All the open-ended responses you have received under this account." svg={<ChatSVG />} numberData="10" />

                    <DashboardFirtRowItem badge={<Badge tone='info'>Fixed choice</Badge>} heading="Responses" tooltipText="Total number of fixed choice responses submitted to this account." svg={<CheckSVG />} numberData="5" />

                    <DashboardFirtRowItem badge={<div style={{ opacity: 0 }}><Badge tone='info'>Open ended</Badge></div>} heading="Emails" tooltipText="All the email addresses you have collected with this account." svg={<EmailSVG />} numberData="2" />

                    <DashboardFirtRowItem badge={<div style={{ opacity: 0 }}><Badge tone='info'>Open ended</Badge></div>} heading="Participants" tooltipText="All the participants who have responded to any survey under this account." svg={<PeopleSVG />} numberData="7" />

                    {/* {hasSurvey && (
                        <DashboardFirtRowItem badge={<div style={{ opacity: 0 }}><Badge tone='info'>Open ended</Badge></div>} heading="Sentiment" tooltipText="The average sentiment of answers to this survey." svg={<HappySmileSVG />} numberData="Neutral" />
                    )} */}
                </Grid>

                {/* {!hasSurvey && ( */}
                <Layout>
                    <DashboardSecondRowItem heading="Submission limit" tooltipText="If you reach your submission limit, your surveys will stop showing on your website. If you want more submission per month you can <Link>change your plan</Link>" currentNumberCount="10" maxNumberCount="100" numberText="Submissions" progressNumber="10" />

                    <DashboardSecondRowItem heading="Outbound email limit" tooltipText="If you reach your email limit, you will no longer be able to send emails via Survey app for the month. If you want to send more emails per month you can <Link>change your plan</Link>" currentNumberCount="84" maxNumberCount="100" numberText="Emails" progressNumber="84" />

                    <DashboardSecondRowItem heading="SMS limit" tooltipText="If you reach your SMS limit, you will no longer be able to send messages via Survey app for the month. If you want to send more SMS message per month you can <Link>change your plan</Link>" currentNumberCount="36" maxNumberCount="100" numberText="Emails" progressNumber="36" />
                </Layout>
                {/* )} */}


                {/* {hasSurvey && (
                    <InlineStack gap="100" wrap={true} blockAlign="center" align="center">
                        <Text variant="headingLg" tone="subdued" as="h4">
                            Survey Results
                        </Text>
                    </InlineStack>
                )} */}

                {hasSurvey && (
                    <Layout>
                        <Layout.Section variant="oneThird">
                            <Card>
                                <BlockStack gap="200">
                                    <InlineStack gap="100" wrap={true} blockAlign="center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="32" height="32" focusable="false" aria-hidden="true"><path fill="#616161" fill-rule="evenodd" d="M17.938 9.003c.068.547-.386.997-.938.997a7 7 0 1 1-7-7v1.5a5.5 5.5 0 1 0 5.5 5.5h-2.5a3 3 0 1 1-3-3v-4c0-.552.45-1.007.997-.938a8 8 0 0 1 6.94 6.94Zm-1.613-.503a6.503 6.503 0 0 0-4.825-4.825v3.612a3.099 3.099 0 0 1 1.213 1.213h3.612Zm-6.325 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" /></svg>

                                        <Text variant="headingLg" as="h5">
                                            Your surveys
                                        </Text>
                                    </InlineStack>

                                    <Divider borderColor="border" />

                                    <BlockStack gap="300">
                                        <InlineStack wrap={true} blockAlign="center" align="space-between">
                                            <InlineStack gap="100" wrap={true} blockAlign="center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" focusable="false" aria-hidden="true"><path fill="#616161" fill-rule="evenodd" d="M17.938 9.003c.068.547-.386.997-.938.997a7 7 0 1 1-7-7v1.5a5.5 5.5 0 1 0 5.5 5.5h-2.5a3 3 0 1 1-3-3v-4c0-.552.45-1.007.997-.938a8 8 0 0 1 6.94 6.94Zm-1.613-.503a6.503 6.503 0 0 0-4.825-4.825v3.612a3.099 3.099 0 0 1 1.213 1.213h3.612Zm-6.325 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" /></svg>

                                                <Text variant="headingMd" as="h6">
                                                    Survey name
                                                </Text>
                                            </InlineStack>

                                            <InlineStack gap="100" wrap={true} blockAlign="center">
                                                <Tooltip content="View dashboard">
                                                    <Button url="/app/survey-dashboard" icon={ChartVerticalFilledIcon} variant="plain" accessibilityLabel="View survey">
                                                    </Button>
                                                </Tooltip>

                                                <Link href="#">
                                                    <Tooltip content="View dashboard">
                                                        <Button url="#" icon={EditIcon} variant="plain" accessibilityLabel="Edit survey">
                                                        </Button>
                                                    </Tooltip>
                                                </Link>
                                            </InlineStack>
                                        </InlineStack>
                                        <Button fullWidth variant="primary" url="#">Create survey</Button>
                                    </BlockStack>

                                </BlockStack>
                            </Card>
                        </Layout.Section>

                        <Layout.Section>
                            <Card>
                                <BlockStack gap="200">
                                    <InlineStack wrap={true} blockAlign="center" align="space-between">
                                        <InlineStack gap="100" wrap={true} blockAlign="center">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="32" height="32" focusable="false" aria-hidden="true"><path fill="#616161" fill-rule="evenodd" d="M2.5 3.75a.75.75 0 0 1 .75-.75h1.612a1.75 1.75 0 0 1 1.732 1.5h9.656a.75.75 0 0 1 .748.808l-.358 4.653a2.75 2.75 0 0 1-2.742 2.539h-6.351l.093.78a.25.25 0 0 0 .248.22h6.362a.75.75 0 0 1 0 1.5h-6.362a1.75 1.75 0 0 1-1.738-1.543l-1.04-8.737a.25.25 0 0 0-.248-.22h-1.612a.75.75 0 0 1-.75-.75Zm4.868 7.25h6.53a1.25 1.25 0 0 0 1.246-1.154l.296-3.846h-8.667l.595 5Z" /><path fill="#616161" d="M10 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" /><path fill="#616161" d="M15 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" /></svg>

                                            <Text variant="headingLg" as="h5">
                                                Survey name
                                            </Text>
                                        </InlineStack>

                                        <ButtonGroup>
                                            <Button url="#" icon={EditIcon} accessibilityLabel="Edit survey"></Button>
                                            <Button>Back</Button>
                                            <Button variant="primary">Next</Button>
                                        </ButtonGroup>
                                    </InlineStack>

                                    <Divider borderColor="border" />

                                    <Box>
                                        <InlineStack gap="100" wrap={true} blockAlign="center" align="space-between">
                                            <Text variant="headingSm" as="h6">
                                                Title
                                            </Text>
                                            <Button variant="primary" url="#">Preview</Button>
                                        </InlineStack>

                                        <Text variant="headingMd" as="h6">
                                            Survey title
                                        </Text>
                                    </Box>

                                    <Box>
                                        <InlineStack gap="100" wrap={true} blockAlign="center">
                                            <Text variant="headingSm" as="h6">
                                                Format
                                            </Text>
                                            <Tooltip content="This explains where and when your survey will appear">
                                                <Icon
                                                    source={InfoIcon}
                                                    tone="subdued"
                                                />
                                            </Tooltip>
                                        </InlineStack>


                                        <InlineStack gap="100" wrap={true} blockAlign="center">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="32" height="32" focusable="false" aria-hidden="true"><path fill="#616161" fill-rule="evenodd" d="M2.5 3.75a.75.75 0 0 1 .75-.75h1.612a1.75 1.75 0 0 1 1.732 1.5h9.656a.75.75 0 0 1 .748.808l-.358 4.653a2.75 2.75 0 0 1-2.742 2.539h-6.351l.093.78a.25.25 0 0 0 .248.22h6.362a.75.75 0 0 1 0 1.5h-6.362a1.75 1.75 0 0 1-1.738-1.543l-1.04-8.737a.25.25 0 0 0-.248-.22h-1.612a.75.75 0 0 1-.75-.75Zm4.868 7.25h6.53a1.25 1.25 0 0 0 1.246-1.154l.296-3.846h-8.667l.595 5Z" /><path fill="#616161" d="M10 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" /><path fill="#616161" d="M15 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" /></svg>

                                            <Badge tone="info">Post purchase</Badge>
                                        </InlineStack>
                                    </Box>

                                    <Box>
                                        <InlineStack gap="100" wrap={true} blockAlign="center">
                                            <Text variant="headingSm" as="h6">
                                                Targeting rules
                                            </Text>
                                            <Tooltip content="View the targeting filters applied to this survey. Targeting filters help give you control over when a survey is displayed.">
                                                <Icon
                                                    source={InfoIcon}
                                                    tone="subdued"
                                                />
                                            </Tooltip>
                                        </InlineStack>

                                        <List type="bullet">
                                            <List.Item>
                                                <Text variant="headingMd" as="h6">
                                                    Show to <Badge tone="info">100%</Badge> of visitors
                                                </Text>
                                            </List.Item>
                                        </List>
                                    </Box>

                                    <Box>
                                        <InlineStack gap="100" wrap={true} blockAlign="center">
                                            <Text variant="headingSm" as="h6">
                                                Status
                                            </Text>
                                            <Tooltip content="Only visible surveys will be displayed to your visitors.">
                                                <Icon
                                                    source={InfoIcon}
                                                    tone="subdued"
                                                />
                                            </Tooltip>
                                        </InlineStack>


                                        <InlineStack gap="100" wrap={true} blockAlign="center">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="32" height="32" focusable="false" aria-hidden="true"><path fill="#616161" d="M11.977 4.751a7.598 7.598 0 0 0-1.977-.251c-2.444 0-4.196 1.045-5.325 2.233a7.188 7.188 0 0 0-1.243 1.773c-.26.532-.432 1.076-.432 1.494 0 .418.171.962.432 1.493.172.354.4.734.687 1.116l1.074-1.074a5.388 5.388 0 0 1-.414-.7c-.221-.453-.279-.753-.279-.835 0-.082.058-.382.279-.835a5.71 5.71 0 0 1 .983-1.398c.89-.937 2.264-1.767 4.238-1.767.24 0 .471.012.693.036l1.284-1.285Z" /><path fill="#616161" fill-rule="evenodd" d="M4.25 14.6a.75.75 0 0 0 1.067 1.053l1.062-1.061c.975.543 2.177.908 3.621.908 2.45 0 4.142-1.05 5.24-2.242 1.078-1.17 1.588-2.476 1.738-3.076a.749.749 0 0 0 0-.364c-.15-.6-.66-1.906-1.738-3.076a7.245 7.245 0 0 0-.51-.502l.923-.923a.75.75 0 0 0-1.053-1.068l-.008.008-10.335 10.336-.008.007Zm5.75-.6c-.978 0-1.809-.204-2.506-.523l1.108-1.109a2.75 2.75 0 0 0 3.766-3.766l1.3-1.299c.169.147.325.3.469.455a6.387 6.387 0 0 1 1.332 2.242 6.387 6.387 0 0 1-1.332 2.242c-.86.933-2.17 1.758-4.137 1.758Zm0-2.75c-.087 0-.172-.01-.254-.026l1.478-1.478a1.25 1.25 0 0 1-1.224 1.504Z" /></svg>

                                            <Text variant="headingMd" as="h6">
                                                Hidden
                                            </Text>
                                        </InlineStack>
                                    </Box>

                                    <BlockStack gap="200">
                                        <Text variant="headingSm" as="h6">
                                            Engagement
                                        </Text>

                                    </BlockStack>
                                </BlockStack>
                            </Card>
                        </Layout.Section>
                    </Layout>
                )}

                {hasSurvey && (
                    <Box>
                        <BlockStack gap="200">
                            {/* <Grid columns={{ xs: 1, sm: 3, md: 4, lg: 5, xl: 5 }}>
                                <DashboardFirtRowItem heading="Open count" tooltipText="The amount of times that the survey has been activated across the web." svg={<BookOpeningSVG />} numberData="0" />

                                <DashboardFirtRowItem heading="Close count" tooltipText="The amount of times that the survey has been activated and then closed across the web." svg={<BookSVG />} numberData="0" />

                                <DashboardFirtRowItem heading="View count" tooltipText="The amount of unique times that the survey has been viewed across the web." svg={<EyeSVG />} numberData="0" />

                                <DashboardFirtRowItem heading="Participants" tooltipText="The number of unique individuals who responded to this survey." svg={<PeopleSVG />} numberData="0" />

                                <DashboardFirtRowItem heading="Completions" tooltipText="The amount of times that the survey has been completed from start to finish." svg={<CompleteSVG />} numberData="0" />
                            </Grid> */}

                            <Grid columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 4 }}>
                                <DashboardFirtRowItem heading="Open count" tooltipText="The amount of times that the survey has been activated across the web." svg={<BookOpeningSVG />} numberData="0" />

                                <DashboardFirtRowItem heading="Close count" tooltipText="The amount of times that the survey has been activated and then closed across the web." svg={<BookSVG />} numberData="0" />

                                <DashboardFirtRowItem heading="View count" tooltipText="The amount of unique times that the survey has been viewed across the web." svg={<EyeSVG />} numberData="0" />

                                <DashboardFirtRowItem href="#" heading="Participants" tooltipText="The number of unique individuals who responded to this survey." svg={<PeopleSVG />} numberData="0" />

                                <DashboardFirtRowItem heading="Completions" tooltipText="The amount of times that the survey has been completed from start to finish." svg={<CompleteSVG />} numberData="0" />

                                <DashboardFirtRowItem heading="Engagement rate" tooltipText="The number survey engagements divided by the number of times the survey has been presented." svg={<CursorSVG />} numberData="0" />

                                <DashboardFirtRowItem heading="Response rate" tooltipText="The number participant replies divided by the number of times the survey has been presented." svg={<ArrowsHorizontalSVG />} numberData="0" />

                                <DashboardFirtRowItem heading="Completion rate" tooltipText="The number survey completions divided by the number of times the survey has been engaged with." svg={<TickSVG />} numberData="0" />
                            </Grid>
                        </BlockStack>
                    </Box>
                )}

                {/* show the banner if there is no survey available */}
                {!hasSurvey && (
                    <Box paddingBlockEnd="500">
                        <Card sectioned>
                            <EmptyState
                                heading="You haven't made any surveys"
                                action={{ content: 'Create Survey', url: "#" }}
                                image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
                            >
                                <Text variant="bodyMd" as="p">
                                    Your stats will show up here when you make some.
                                </Text>
                            </EmptyState>
                        </Card>
                    </Box>
                )}

                {hasSurvey && (
                    <FooterHelp>
                        <InlineStack gap="200" wrap={true}>
                            <Text as="span">Want more details & insights?</Text>
                            <Link url="#">
                                <InlineStack gap="100" wrap={true}>
                                    <Text as="span">View reports</Text>
                                    <Box>
                                        <Icon source={ArrowRightIcon} />
                                    </Box>
                                </InlineStack>
                            </Link>
                        </InlineStack>
                    </FooterHelp>
                )}
            </BlockStack>
        </Page>
    );
}

const DashboardFirtRowItem = ({ href, badge, heading, tooltipText, svg, numberData }) => {
    return (
        <Grid.Cell>
            <Card>
                <BlockStack gap="200" inlineAlign="center">
                    {badge && (
                        <Box>
                            {badge}
                        </Box>
                    )}


                    <InlineStack gap="100" wrap={false} blockAlign="center">
                        <Text variant="headingSm" as="h6">
                            {heading}
                        </Text>

                        <Tooltip content={tooltipText}>
                            <Icon
                                source={InfoIcon}
                                tone="subdued"
                            />
                        </Tooltip>
                    </InlineStack>

                    {href ? (
                        <Link href="#" monochrome removeUnderline>
                            <InlineStack gap="100" wrap={false} blockAlign="center">
                                {svg}

                                <Text variant="headingLg" as="h5">
                                    {numberData}
                                </Text>
                            </InlineStack>
                        </Link>

                    ) : (
                        <Text variant="bodyMd" as="p">
                            <InlineStack gap="100" wrap={false} blockAlign="center">
                                {svg}

                                <Text variant="headingLg" as="h5">
                                    {numberData}
                                </Text>
                            </InlineStack>
                        </Text>
                    )}
                </BlockStack>
            </Card>
        </Grid.Cell>
    );
};

const DashboardSecondRowItem = ({ heading, tooltipText, currentNumberCount, maxNumberCount, numberText, progressNumber }) => {
    return (
        <Layout.Section variant="oneThird">
            <Card>
                <BlockStack gap="200">
                    <InlineStack gap="100" wrap={false} blockAlign="center">
                        <Text variant="headingSm" as="h6">
                            {heading}
                        </Text>

                        <Tooltip content={tooltipText}>
                            <Icon
                                source={InfoIcon}
                                tone="subdued"
                            />
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

                        <Link href="#">
                            Change plan
                        </Link>
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

// function Fallback() {
//     return <div>Generating Chart</div>;
// }


const ChatSVG = () => (
    <svg viewBox="0 0 20 20" width="32" height="32" className="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
        <path fillRule="evenodd" fill="#616161" d="M7 15v-2.291a3 3 0 0 1-2.5-2.959v-1.25a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v1.25a3 3 0 0 1-3 3h-2.461l-3.039 2.25Zm3.534-.75h1.966a4.5 4.5 0 0 0 4.5-4.5v-1.25a4.5 4.5 0 0 0-4.5-4.5h-5a4.5 4.5 0 0 0-4.5 4.5v1.25a4.498 4.498 0 0 0 2.5 4.032v1.218a1.5 1.5 0 0 0 2.393 1.206l2.64-1.956Zm-4.534-6.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm.75 2a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z"></path>
    </svg>
);

const CheckSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="32" height="32" className="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path fill="#616161" d="M4.63 8.81a5.5 5.5 0 0 1 6.56-4.18.75.75 0 0 0 .325-1.464 7 7 0 1 0 5.32 8.35.75.75 0 0 0-1.465-.325 5.5 5.5 0 1 1-10.74-2.38Z" /><path fill="#616161" d="M16.03 6.78a.75.75 0 0 0-1.06-1.06l-4.97 4.97-2.22-2.22a.75.75 0 0 0-1.06 1.06l2.75 2.75a.75.75 0 0 0 1.06 0l5.5-5.5Z" /></svg>
);

const EmailSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="32" height="32" className="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path fill="#616161" fill-rule="evenodd" d="M5.75 4.5c-1.519 0-2.75 1.231-2.75 2.75v5.5c0 1.519 1.231 2.75 2.75 2.75h8.5c1.519 0 2.75-1.231 2.75-2.75v-5.5c0-1.519-1.231-2.75-2.75-2.75h-8.5Zm-1.25 2.75c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v5.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25v-5.5Zm2.067.32c-.375-.175-.821-.013-.997.363-.175.375-.013.821.363.997l3.538 1.651c.335.156.723.156 1.058 0l3.538-1.651c.376-.176.538-.622.363-.997-.175-.376-.622-.538-.997-.363l-3.433 1.602-3.433-1.602Z" /></svg>
);

const PeopleSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="32" height="32" className="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path fill="#616161" fill-rule="evenodd" d="M7 8.25a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" /><path fill="#616161" fill-rule="evenodd" d="M15.168 15.435a7.5 7.5 0 1 1-10.336-10.87 7.5 7.5 0 0 1 10.336 10.87Zm-9.83-1.659a6 6 0 1 1 9.326 0 7.03 7.03 0 0 0-4.664-1.776 7.03 7.03 0 0 0-4.663 1.776Zm1.086 1.043a5.973 5.973 0 0 0 3.576 1.181c1.34 0 2.577-.44 3.576-1.181a5.53 5.53 0 0 0-3.576-1.319 5.53 5.53 0 0 0-3.576 1.319Z" /></svg>
);

const HappySmileSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="32" height="32" className="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path fill="#616161" d="M11.5 7a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-.75-.75Z" /><path fill="#616161" d="M7.75 7.75a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-1.5 0v-1.5Z" /><path fill="#616161" d="M11.522 11.983a2.5 2.5 0 0 1-3.937-1.336.75.75 0 1 0-1.449.388 4 4 0 0 0 7.728 0 .75.75 0 0 0-1.45-.388 2.5 2.5 0 0 1-.892 1.336Z" /><path fill="#616161" fill-rule="evenodd" d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z" /></svg>
);

const EyeSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="32" height="32" className="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path fill="#616161" fill-rule="evenodd" d="M13 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-1.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" /><path fill="#616161" fill-rule="evenodd" d="M10 4c-2.476 0-4.348 1.23-5.577 2.532a9.266 9.266 0 0 0-1.4 1.922 5.98 5.98 0 0 0-.37.818c-.082.227-.153.488-.153.728s.071.501.152.728c.088.246.213.524.371.818.317.587.784 1.27 1.4 1.922 1.229 1.302 3.1 2.532 5.577 2.532 2.476 0 4.348-1.23 5.577-2.532a9.265 9.265 0 0 0 1.4-1.922 5.98 5.98 0 0 0 .37-.818c.082-.227.153-.488.153-.728s-.071-.501-.152-.728a5.984 5.984 0 0 0-.371-.818 9.269 9.269 0 0 0-1.4-1.922c-1.229-1.302-3.1-2.532-5.577-2.532Zm-5.999 6.002v-.004c.004-.02.017-.09.064-.223a4.5 4.5 0 0 1 .278-.608 7.768 7.768 0 0 1 1.17-1.605c1.042-1.104 2.545-2.062 4.487-2.062 1.942 0 3.445.958 4.486 2.062a7.77 7.77 0 0 1 1.17 1.605c.13.24.221.447.279.608.047.132.06.203.064.223v.004c-.004.02-.017.09-.064.223a4.503 4.503 0 0 1-.278.608 7.768 7.768 0 0 1-1.17 1.605c-1.042 1.104-2.545 2.062-4.487 2.062-1.942 0-3.445-.958-4.486-2.062a7.766 7.766 0 0 1-1.17-1.605 4.5 4.5 0 0 1-.279-.608c-.047-.132-.06-.203-.064-.223Z" /></svg>
);

const BookOpeningSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="32" height="32" className="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path fill="#616161" d="M6.75 6a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z" /><path fill="#616161" d="M6.75 9a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z" /><path fill="#616161" d="M6.75 12a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z" /><path fill="#616161" d="M12 6.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z" /><path fill="#616161" d="M12 9.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z" /><path fill="#616161" fill-rule="evenodd" d="M7.586 3.5c.87 0 1.714.273 2.414.771a4.164 4.164 0 0 1 2.414-.771h2.336c.966 0 1.75.784 1.75 1.75v9.5a1.75 1.75 0 0 1-1.75 1.75h-.238a9.25 9.25 0 0 0-3.161.557l-1.095.398a.75.75 0 0 1-.493.007l-1.46-.487a9.25 9.25 0 0 0-2.926-.475h-.127a1.75 1.75 0 0 1-1.75-1.75v-9.5c0-.966.784-1.75 1.75-1.75h2.336Zm-2.586 1.75a.25.25 0 0 1 .25-.25h2.336c.608 0 1.194.208 1.664.584v10.125l-.473-.157a10.75 10.75 0 0 0-3.4-.552h-.127a.25.25 0 0 1-.25-.25v-9.5Zm5.75 10.43v-10.096a2.664 2.664 0 0 1 1.664-.584h2.336a.25.25 0 0 1 .25.25v9.5a.25.25 0 0 1-.25.25h-.238a10.75 10.75 0 0 0-3.674.647l-.088.032Z" /></svg>
);

const BookSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="32" height="32" className="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path fill="#616161" d="M10.25 6a.75.75 0 0 0 0 1.5h2.5a.75.75 0 1 0 0-1.5h-2.5Z" /><path fill="#616161" d="M9.5 9.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z" /><path fill="#616161" fill-rule="evenodd" d="M5.75 3a1.75 1.75 0 0 0-1.75 1.75v10a2.25 2.25 0 0 0 2.25 2.25h9a.75.75 0 0 0 0-1.5h-.25v-1.668c.591-.281 1-.884 1-1.582v-7.5a1.75 1.75 0 0 0-1.75-1.75h-8.5Zm1.25 1.5h-1.25a.25.25 0 0 0-.25.25v7.878c.235-.083.487-.128.75-.128h.75v-8Zm1.5 8v-8h5.75a.25.25 0 0 1 .25.25v7.5a.25.25 0 0 1-.25.25h-5.75Zm-2.25 3a.75.75 0 0 1 0-1.5h7.25v1.5h-7.25Z" /></svg>
);

const CompleteSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="32" height="32" className="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path fill="#616161" d="M13.28 9.22a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-1.75-1.75a.75.75 0 1 1 1.06-1.06l1.22 1.22 2.97-2.97a.75.75 0 0 1 1.06 0Z" /><path fill="#616161" fill-rule="evenodd" d="M6.515 4.75a2 2 0 0 1 1.985-1.75h3a2 2 0 0 1 1.985 1.75h.265a2.25 2.25 0 0 1 2.25 2.25v7.75a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-7.75a2.25 2.25 0 0 1 2.25-2.25h.265Zm1.985-.25h3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm-1.987 1.73.002.02h-.265a.75.75 0 0 0-.75.75v7.75c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-7.75a.75.75 0 0 0-.75-.75h-.265a2 2 0 0 1-1.985 1.75h-3a2 2 0 0 1-1.987-1.77Z" /></svg>
);

const CursorSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="32" height="32" className="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path fill="#616161" d="M10.5 3.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0v-2.5Z" /><path fill="#616161" d="M14.28 6.28a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06l1-1Z" /><path fill="#616161" d="M7.28 13.28a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 1 0 1.06 1.06l1-1Z" /><path fill="#616161" d="M7 9.75a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 .75.75Z" /><path fill="#616161" d="M5.97 7.03a.75.75 0 0 0 1.06-1.06l-1.75-1.75a.75.75 0 0 0-1.06 1.06l1.75 1.75Z" /><path fill="#616161" fill-rule="evenodd" d="M8.22 8.22a.75.75 0 0 1 .767-.181l7.5 2.5a.75.75 0 0 1 .293 1.241l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 0 1-1.241-.293l-2.5-7.5a.75.75 0 0 1 .18-.767Zm4.998 5.001.002-.001.001-.002 1.64-1.64-4.925-1.642 1.642 4.926 1.64-1.64Z" /><path fill="#616161" d="M10.5 3.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0v-2.5Z" /><path fill="#616161" d="M14.28 6.28a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06l1-1Z" /><path fill="#616161" d="M7.28 13.28a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 1 0 1.06 1.06l1-1Z" /><path fill="#616161" d="M7 9.75a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 .75.75Z" /><path fill="#616161" d="M5.97 7.03a.75.75 0 0 0 1.06-1.06l-1.75-1.75a.75.75 0 0 0-1.06 1.06l1.75 1.75Z" /><path fill="#616161" fill-rule="evenodd" d="M8.22 8.22a.75.75 0 0 1 .767-.181l7.5 2.5a.75.75 0 0 1 .293 1.241l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 0 1-1.241-.293l-2.5-7.5a.75.75 0 0 1 .18-.767Zm4.998 5.001.002-.001.001-.002 1.64-1.64-4.925-1.642 1.642 4.926 1.64-1.64Z" /></svg>
);

const ArrowsHorizontalSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="32" height="32" className="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path fill="#616161" d="M13.25 8a.75.75 0 0 0 0-1.5h-7.19l1.22-1.22a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06l-1.22-1.22h7.19Z" /><path fill="#616161" d="M6.75 13.5a.75.75 0 0 1 0-1.5h7.19l-1.22-1.22a.75.75 0 1 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22h-7.19Z" /></svg>
);

const TickSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="32" height="32" className="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path fill="#616161" fill-rule="evenodd" d="M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z" /></svg>
);
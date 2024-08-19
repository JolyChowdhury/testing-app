import { Banner, Badge, Select, TextField, ChoiceList, Bleed, Tooltip, Icon, InlineStack, Box, Card, Link, Page, Text, BlockStack, Button } from "@shopify/polaris";
import { InfoIcon, ArrowRightIcon } from '@shopify/polaris-icons';
import { useState, useCallback } from 'react';

export default function CreateSurvey() {
    const [selectedRadio, setselectedRadio] = useState(['1']);
    const [selected, setSelected] = useState('1');
    const [textFieldValue, setTextFieldValue] = useState('');

    const handleChoiceListChange = useCallback(
        (value) => setselectedRadio(value),
        [],
    );

    const handleSelectChange = useCallback(
        (value) => setSelected(value),
        [],
    );

    const handleTextFieldChange = useCallback(
        (newValue) => setTextFieldValue(newValue),
        [],
    );

    const options = [
        { label: 'Matches exactly', value: '1' },
        { label: '2nd option', value: '2' }
    ];

    return (
        <Page narrowWidth backAction={{ content: 'Create Survey', url: '/app' }} title="CreateSurvey">
            <Box paddingBlockEnd="600">

                <BlockStack gap="400">
                    <BlockStack gap="100">
                        <Text variant="heading2xl" as="h3" alignment="center">
                            Let's do this!
                        </Text>

                        <InlineStack gap="100" wrap={true} align="center" blockAlign="center">
                            <Text variant="headingXl" as="h4" alignment="center">
                                Fill out the form to get started
                            </Text>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="32" height="32" focusable="false" aria-hidden="true"><path fill="#616161" fill-rule="evenodd" d="M10 3.5a.75.75 0 0 1 .75.75v9.69l2.72-2.72a.75.75 0 0 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 1.06-1.06l2.72 2.72v-9.69a.75.75 0 0 1 .75-.75Z" /></svg>
                        </InlineStack>

                        <Text variant="headingXs" as="h6" alignment="center">
                            (Don't stress - you can edit everything later)
                        </Text>
                    </BlockStack>

                    <BlockStack gap="300">
                        <HeadingWithNumber number="1" headingText="What will your survey say?" />

                        <Card>
                            <BlockStack gap="200">
                                <HeadingComponent heading="Survey template" tooltipText="Tooltip text" />


                                <ChoiceList
                                    choices={
                                        [
                                            { label: 'Build manually', value: '1' },
                                            { label: 'Start with a template', value: '2' }
                                        ]}
                                    selected={selectedRadio}
                                    onChange={handleChoiceListChange}
                                />
                            </BlockStack>
                        </Card>
                    </BlockStack>

                    <BlockStack gap="300">
                        <HeadingWithNumber number="2" headingText="Where will your survey show up?" />

                        <Card>
                            <BlockStack gap="200">
                                <Box>
                                    <HeadingComponent heading="Display rules" tooltipText="Tooltip text" />


                                    <ChoiceList
                                        choices={
                                            [
                                                { label: <><Badge tone="info">Web / Email</Badge><Text variant="bodyMd" as="p">Start with a template</Text></>, value: '1' },
                                                { label: <><Badge tone="info">Web</Badge><Text variant="bodyMd" as="p">Every page</Text></>, value: '2' },
                                                { label: <><Badge tone="info">Link</Badge><Text variant="bodyMd" as="p">Link Only</Text></>, value: '2' },
                                                { label: <><Badge tone="info">Web</Badge><Text variant="bodyMd" as="p">Configure manually</Text></>, value: '2' },
                                            ]}
                                        selected={selectedRadio}
                                        onChange={handleChoiceListChange}
                                    />


                                    <Bleed marginBlockEnd="400" marginInline="400">
                                        <Box background="bg-surface-info" padding="200">
                                            <Banner>
                                                <p>This option will render the survey on the pages you specify bellow</p>
                                            </Banner>
                                        </Box>
                                    </Bleed>
                                </Box>
                            </BlockStack>
                        </Card>

                        <Card>
                            <BlockStack gap="200">
                                <HeadingComponent heading="Manual page rules" subHeading="Enter your rules below. You can edit these rules later." />

                                <InlineStack gap="200" wrap={true} blockAlign="center" align="start">
                                    <Text variant="bodyMd" as="p">URL</Text>

                                    <Select
                                        options={options}
                                        onChange={handleSelectChange}
                                        value={selected}
                                    />

                                    <TextField
                                        value={textFieldValue}
                                        onChange={handleTextFieldChange}
                                        autoComplete="off"
                                    />
                                </InlineStack>

                                <Text variant="bodyXs" as="p" alignment="end">
                                    domain.com
                                </Text>

                                <InlineStack align="end">
                                    <Button variant="primary">
                                        Add logic
                                    </Button>
                                </InlineStack>
                            </BlockStack>
                        </Card>
                    </BlockStack>

                    <BlockStack gap="300">
                        <HeadingWithNumber number="3" headingText="What should your survey be named?" />

                        <Card>
                            <BlockStack gap="200">
                                <HeadingComponent heading="Survey title" tooltipText="tooltip text." />


                                <TextField
                                    value={textFieldValue}
                                    onChange={handleTextFieldChange}
                                    autoComplete="off"
                                    placeholder="Example: Post purchase survey"
                                />
                            </BlockStack>
                        </Card>
                    </BlockStack>

                    <Card>
                        <InlineStack gap="100" wrap={true} blockAlign="center" align="space-between">
                            <Button variant="primary">Create survey</Button>
                            <BlockStack gap="100">
                                <Text as="p" alignment="center">
                                    Don't understand surveys?
                                </Text>

                                <Link monochrome href="#" removeUnderline>
                                    <InlineStack gap="100" wrap={false} blockAlign="center" align="center">
                                        <Box>
                                            <Icon
                                                source={ArrowRightIcon}
                                            />
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
            </Box>
        </Page>
    );
}

const HeadingWithNumber = ({ number, headingText }) => (
    <InlineStack gap="300" wrap={true} align="center" blockAlign="center">
        <div style={{ width: "20px", height: "20px", position: "relative", backgroundColor: "#8fa8c2", color: "#fff", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <strong style={{ position: "relative", left: "-1px" }}>{number}</strong>
        </div>

        <Text variant="headingMd" as="h6">
            {headingText}
        </Text>
    </InlineStack>
);

const HeadingComponent = ({ heading, subHeading, tooltipText }) => (
    <>
        <Box>
            <InlineStack gap="2" wrap={false} blockAlign="center">
                <Text variant="headingSm" as="h6">
                    {heading}
                </Text>

                {tooltipText && (
                    <Tooltip content={tooltipText}>
                        <Icon
                            source={InfoIcon}
                            tone="subdued"
                        />
                    </Tooltip>
                )}
            </InlineStack>

            {subHeading && (
                <Text variant="headingSm" tone="subdued" as="h6">
                    {subHeading}
                </Text>
            )}
        </Box>
    </>
);
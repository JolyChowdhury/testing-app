import { Checkbox, TextField, Tooltip, Icon, InlineStack, Box, Card, Page, Text, BlockStack, Button, ButtonGroup } from "@shopify/polaris";
import { InfoIcon, EditIcon, DeleteIcon } from '@shopify/polaris-icons';
import { useState, useCallback } from 'react';

export default function Slide() {
    const [textFieldValue, setTextFieldValue] = useState('Red');
    const [checked, setChecked] = useState(false);

    const handleTextFieldChange = useCallback(
        (newValue) => setTextFieldValue(newValue),
        [],
    );

    const handleCheckboxChange = useCallback(
        (newChecked) => setChecked(newChecked),
        [],
    );

    const RepetitiveTextField = ({ heading, hasActions, firstActionIcon, firstActionText, secondActionIcon, secondActionText, textFieldValue, textFieldHandler }) => {
        const [isHovered, setIsHovered] = useState(false);

        return (
            <div
                style={{ width: "100%" }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <BlockStack gap="100">
                    <div style={{ minHeight: "29px", position: "relative" }}>
                        <InlineStack gap="100" wrap={false} blockAlign="center" align="space-between">
                            <div style={{ position: "absolute", left: "0px", top: "4px" }}>
                                <Text variant="headingSm" as="h6">
                                    {heading}
                                </Text>
                            </div>

                            {hasActions && isHovered && (
                                <div style={{ position: "absolute", right: "0px", top: "0px" }}>
                                    <ButtonGroup>
                                        <Button icon={firstActionIcon}>{firstActionText}</Button>
                                        <Button icon={secondActionIcon} variant="primary">{secondActionText}</Button>
                                    </ButtonGroup>
                                </div>
                            )}
                        </InlineStack>
                    </div>

                    <TextField
                        value={textFieldValue}
                        onChange={textFieldHandler}
                        autoComplete="off"
                    />
                </BlockStack>
            </div>
        );
    };

    return (
        <Page narrowWidth backAction={{ content: 'Slide Details', url: '/app' }} title="Slide Details">
            <Box paddingBlockEnd="600">
                <BlockStack gap="200">
                    <InlineStack gap="100" wrap={true} blockAlign="center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="30" height="30" focusable="false" aria-hidden="true"><path fill="#616161" d="M4.63 8.81a5.5 5.5 0 0 1 6.56-4.18.75.75 0 0 0 .325-1.464 7 7 0 1 0 5.32 8.35.75.75 0 0 0-1.465-.325 5.5 5.5 0 1 1-10.74-2.38Z" /><path fill="#616161" d="M16.03 6.78a.75.75 0 0 0-1.06-1.06l-4.97 4.97-2.22-2.22a.75.75 0 0 0-1.06 1.06l2.75 2.75a.75.75 0 0 0 1.06 0l5.5-5.5Z" /></svg>

                        <InlineStack gap="100" wrap={false} blockAlign="center">
                            <Text variant="headingLg" as="h4">
                                Answer options
                            </Text>

                            <Tooltip content="Set the value of each different answer you want presented to your survey participants.">
                                <Icon
                                    source={InfoIcon}
                                    tone="subdued"
                                />
                            </Tooltip>
                        </InlineStack>
                    </InlineStack>

                    <Card>
                        <BlockStack gap="600">
                            <BlockStack gap="400">
                                <BlockStack gap="200">
                                    <RepetitiveTextField heading="Answer #1" hasActions={true} firstActionIcon={EditIcon} firstActionText="Advanced edit" secondActionIcon={DeleteIcon} secondActionText="Remove" textFieldValue={textFieldValue} textFieldHandler={handleTextFieldChange} />

                                    <RepetitiveTextField heading="Answer #2" hasActions={true} firstActionIcon={EditIcon} firstActionText="Advanced edit" secondActionIcon={DeleteIcon} secondActionText="Remove" textFieldValue={textFieldValue} textFieldHandler={handleTextFieldChange} />

                                    <RepetitiveTextField heading="Answer #3" hasActions={true} firstActionIcon={EditIcon} firstActionText="Advanced edit" secondActionIcon={DeleteIcon} secondActionText="Remove" textFieldValue={textFieldValue} textFieldHandler={handleTextFieldChange} />
                                </BlockStack>

                                <Box>
                                    <Button variant="primary">Add answer</Button>
                                </Box>
                            </BlockStack>

                            <BlockStack gap="400">
                                <Box>
                                    <Box>
                                        <InlineStack gap="100" wrap={false} blockAlign="center">
                                            <Text variant="headingSm" as="h6">
                                                Dynamic answer
                                            </Text>

                                            <Tooltip content="A dynamic answer allows people to write in various responses. You can view these responses in your dashboard">
                                                <Icon
                                                    source={InfoIcon}
                                                    tone="subdued"
                                                />
                                            </Tooltip>
                                        </InlineStack>
                                    </Box>

                                    <Checkbox
                                        label="Include a dynamic answer option for open-ended responses"
                                        checked={checked}
                                        onChange={handleCheckboxChange}
                                    />
                                </Box>

                                <RepetitiveTextField heading="Answer label" hasActions={true} firstActionIcon={EditIcon} firstActionText="Advanced edit" secondActionIcon={DeleteIcon} secondActionText="Remove" textFieldValue={textFieldValue} textFieldHandler={handleTextFieldChange} />
                            </BlockStack>
                        </BlockStack>
                    </Card>
                </BlockStack>
            </Box>
        </Page>
    );
}
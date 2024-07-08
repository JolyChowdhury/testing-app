import { Checkbox, ColorPicker, RangeSlider, Tabs, Select, InlineGrid, TextField, ChoiceList, Divider, Tooltip, DropZone, Thumbnail, Icon, Grid, Bleed, EmptyState, InlineStack, Box, Card, Layout, Link, List, Page, Text, BlockStack, Button, ButtonGroup } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { InfoIcon, ArrowRightIcon, NoteIcon, ReplayIcon, ChevronLeftIcon, ChevronRightIcon, XIcon, QuestionCircleIcon } from '@shopify/polaris-icons';
import { useState, useCallback } from 'react';

export default function Design() {
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedChoiceList, setSelectedChoiceList] = useState(['1']);
    const [rangeValue, setRangeValue] = useState(10);
    const [isCheckboxChecked, setisCheckboxChecked] = useState(true);
    const [files, setFiles] = useState([]);
    const [textAreaValue, setTextAreaValue] = useState('We want your feedback! Please click the link below to complete our survey.');
    const [color, setColor] = useState({
        hue: 120,
        brightness: 1,
        saturation: 1,
    });

    const handleTabChange = useCallback(
        (selectedTabTabIndex) => setSelectedTab(selectedTabTabIndex),
        [],
    );

    const tabs = [
        {
            id: 'widget-1',
            content: 'Widget',
            accessibilityLabel: 'All customers',
            panelID: 'widget-content-1',
        },
        {
            id: 'email-1',
            content: 'Email',
            panelID: 'email-content-1',
        },
        {
            id: 'sms-1',
            content: 'SMS',
            panelID: 'sms-content-1',
        },
        {
            id: 'page-1',
            content: 'Page',
            panelID: 'page-content-1',
        },
    ];


    const handleChoiceListChange = useCallback(
        (value) => setSelectedChoiceList(value),
        [],
    );


    const handleRangeSliderChange = useCallback(
        (value) => setRangeValue(value),
        [],
    );

    const handleExitIntentChange = useCallback(
        (newChecked) => setisCheckboxChecked(newChecked),
        [],
    );


    const handleDropZoneDrop = useCallback(
        (_dropFiles, acceptedFiles, _rejectedFiles) =>
            setFiles((files) => [...files, ...acceptedFiles]),
        [],
    );

    const handleTextAreaChange = useCallback(
        (newValue) => setTextAreaValue(newValue),
        [],
    );

    const validImageTypes = ['image/jpeg', 'image/svg', 'image/png'];

    const fileUpload = !files.length && (
        <DropZone.FileUpload actionHint="Accepts .svg, .jpg, and .png" />
    );

    const uploadedFiles = files.length > 0 && (
        <BlockStack>
            {files.map((file, index) => (
                <BlockStack key={index}>
                    <Thumbnail
                        size="small"
                        alt={file.name}
                        source={
                            validImageTypes.includes(file.type)
                                ? window.URL.createObjectURL(file)
                                : NoteIcon
                        }
                    />
                    <div>
                        {file.name}{' '}
                        <Text variant="bodySm" as="p">
                            {file.size} bytes
                        </Text>
                    </div>
                </BlockStack>
            ))}
        </BlockStack>
    );

    return (
        <Page backAction={{ content: 'Design', url: '/app' }} title="Design">
            <Box paddingBlockEnd="600">
                <BlockStack gap="400">
                    <BlockStack gap="400">
                        <Card>
                            <Tabs tabs={tabs} selected={selectedTab} onSelect={handleTabChange}>
                                <BlockStack gap="400">
                                    {selectedTab == 0 ? (
                                        <>
                                            <DashboardSecondRowItem svgIcon={<ColorCanSVG />} mainHeading="Widget Design Settings" subHeading="Control the appearance of your launcher, survey, and slides" />

                                            <Layout>
                                                <Layout.Section variant="oneHalf">
                                                    <Card>
                                                        <BlockStack gap="400">
                                                            <HeadingWithDivider heading="Color" />
                                                            <BlockStack gap="300">
                                                                <ColorPickerComponent heading="Border color" subHeading="Color for the border of your survey" onChangeMethod={setColor} colorValue={color} />

                                                                <ColorPickerComponent heading="Action color" subHeading="Used in buttons, links and highlights for emphasis" onChangeMethod={setColor} colorValue={color} />
                                                            </BlockStack>

                                                            <BlockStack gap="300">
                                                                <HeadingWithDivider heading="Font" />

                                                                <Box>
                                                                    <HeadingComponent heading="Font family" subHeading="Choose a font family that matches your site" />

                                                                    <ChoiceList
                                                                        choices={
                                                                            [
                                                                                { label: 'Sans Serif', value: '1' },
                                                                                { label: 'Serif', value: '2' },
                                                                                { label: 'Slab', value: '3' }
                                                                            ]}
                                                                        selected={selectedChoiceList}
                                                                        onChange={handleChoiceListChange}
                                                                    />
                                                                </Box>

                                                                <Box>
                                                                    <HeadingComponent heading="Text direction" subHeading="Adjust to match your language preferences" />

                                                                    <ChoiceList
                                                                        choices={
                                                                            [
                                                                                { label: 'Left to right', value: '1' },
                                                                                { label: 'Right to left', value: '2' }
                                                                            ]}
                                                                        selected={selectedChoiceList}
                                                                        onChange={handleChoiceListChange}
                                                                    />
                                                                </Box>
                                                            </BlockStack>

                                                            <BlockStack gap="300">
                                                                <HeadingWithDivider heading="Border" />

                                                                <Box>
                                                                    <HeadingComponent heading="Border radius" tooltipText="The default value is a 10px border radius" />

                                                                    <RangeSlider
                                                                        output
                                                                        min={0}
                                                                        max={20}
                                                                        value={rangeValue}
                                                                        onChange={handleRangeSliderChange}
                                                                        prefix={<p>Sharp</p>}
                                                                        suffix={<p>Round</p>}
                                                                    />
                                                                </Box>

                                                                <Box>
                                                                    <HeadingComponent heading="Border width" tooltipText="The default value is a 2px border width" />

                                                                    <RangeSlider
                                                                        output
                                                                        min={0}
                                                                        max={4}
                                                                        value={rangeValue}
                                                                        onChange={handleRangeSliderChange}
                                                                        prefix={<p>None</p>}
                                                                        suffix={<p>Thick</p>}
                                                                    />
                                                                </Box>
                                                            </BlockStack>

                                                            <BlockStack gap="300">
                                                                <HeadingWithDivider heading="Layout" />

                                                                <BlockStack gap="200">
                                                                    <HeadingComponent heading="Position" subHeading="Configure where your zigpoll widget appears" />

                                                                    <InlineStack gap="200" wrap={true} blockAlign="center">
                                                                        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                                                            <div style={{ minWidth: "170px" }}>
                                                                                <Box borderColor="border" borderWidth="025" borderRadius="200" padding="200">
                                                                                    <Grid
                                                                                        gap="600"
                                                                                        columns={{ xs: 3, sm: 3, md: 3, lg: 3, xl: 3 }}
                                                                                    >
                                                                                        <PositionGridItem color="#95abc0" />
                                                                                        <PositionGridItem color="#95abc0" />
                                                                                        <PositionGridItem color="#95abc0" />
                                                                                        <PositionGridItem color="#95abc0" />
                                                                                        <PositionGridItem color="#95abc0" />
                                                                                        <PositionGridItem color="#95abc0" />
                                                                                        <PositionGridItem color="#95abc0" />
                                                                                        <PositionGridItem color="#95abc0" />
                                                                                        <PositionGridItem color="#95abc0" />
                                                                                    </Grid>
                                                                                </Box>
                                                                            </div>

                                                                            <BlockStack gap="100">
                                                                                <Text variant="headingSm" as="h6">
                                                                                    Left Middle
                                                                                </Text>

                                                                                <Text variant="bodyMd" as="p">
                                                                                    The survey will appear on the left side and centered on the page. Good for feedback and contact us surveys where you want the survey to be accessible at all times.
                                                                                </Text>
                                                                            </BlockStack>
                                                                        </div>
                                                                    </InlineStack>
                                                                </BlockStack>
                                                            </BlockStack>

                                                            <BlockStack gap="300">
                                                                <HeadingWithDivider heading="Size" />

                                                                <Box>
                                                                    <HeadingComponent heading="Survey scale" subHeading="Configure the size of survey" />

                                                                    <RangeSlider
                                                                        output
                                                                        min={0}
                                                                        max={20}
                                                                        value={rangeValue}
                                                                        onChange={handleRangeSliderChange}
                                                                        prefix={<p>Small</p>}
                                                                        suffix={<p>Large</p>}
                                                                    />
                                                                </Box>
                                                            </BlockStack>

                                                            <BlockStack gap="300">
                                                                <HeadingWithDivider heading="Launcher" />

                                                                <Box>
                                                                    <HeadingComponent heading="Hide launcher" />

                                                                    <Checkbox
                                                                        label="Never show the launcher"
                                                                        checked={isCheckboxChecked}
                                                                        onChange={handleExitIntentChange}
                                                                    />
                                                                </Box>


                                                                <Box>
                                                                    <HeadingComponent heading="Shape" subHeading="Pick what shape the launcher should be" />

                                                                    <ChoiceList
                                                                        choices={
                                                                            [
                                                                                { label: 'Circle', value: '1' },
                                                                                { label: 'Bumper', value: '2' }
                                                                            ]}
                                                                        selected={selectedChoiceList}
                                                                        onChange={handleChoiceListChange}
                                                                    />
                                                                </Box>

                                                                <Box>
                                                                    <HeadingComponent heading="Border radius" />

                                                                    <RangeSlider
                                                                        output
                                                                        min={0}
                                                                        max={25}
                                                                        value={rangeValue}
                                                                        onChange={handleRangeSliderChange}
                                                                        prefix={<p>Sharp</p>}
                                                                        suffix={<p>Round</p>}
                                                                    />
                                                                </Box>

                                                                <Box>
                                                                    <HeadingComponent heading="Launcher scale" subHeading="Configure the size of your launcher" />

                                                                    <RangeSlider
                                                                        output
                                                                        min={13}
                                                                        max={19}
                                                                        value={rangeValue}
                                                                        onChange={handleRangeSliderChange}
                                                                        prefix={<p>Small</p>}
                                                                        suffix={<p>Large</p>}
                                                                    />
                                                                </Box>

                                                                <Box>
                                                                    <HeadingComponent heading="Dynamic launcher" tooltipText="If you enable this, you can change the appearance of the launcher after the survey has been filled out" />

                                                                    <Checkbox
                                                                        label="Change copy or icon after the survey is completed"
                                                                        checked={isCheckboxChecked}
                                                                        onChange={handleExitIntentChange}
                                                                    />
                                                                </Box>

                                                                <Box>
                                                                    <HeadingComponent heading="Desktop layout" subHeading="Configure how your launcher looks" />

                                                                    <ChoiceList
                                                                        choices={
                                                                            [
                                                                                { label: 'Icon & text', value: '1' },
                                                                                { label: 'Icon only', value: '2' },
                                                                                { label: 'Text only', value: '3' }
                                                                            ]}
                                                                        selected={selectedChoiceList}
                                                                        onChange={handleChoiceListChange}
                                                                    />
                                                                </Box>

                                                                <Box>
                                                                    <HeadingComponent heading="Mobile layout" subHeading="Configure how your launcher looks" />

                                                                    <ChoiceList
                                                                        choices={
                                                                            [
                                                                                { label: 'Icon & text', value: '1' },
                                                                                { label: 'Icon only', value: '2' },
                                                                                { label: 'Text only', value: '3' }
                                                                            ]}
                                                                        selected={selectedChoiceList}
                                                                        onChange={handleChoiceListChange}
                                                                    />
                                                                </Box>

                                                                <Box>
                                                                    <BlockStack gap="100">
                                                                        <HeadingComponent heading="Launcher text" tooltipText="This title will be used for your reference so pick something simple that you can easily identify" />

                                                                        <TextField
                                                                            value="Take Our Survey"
                                                                            // onChange={handleAccountTiitleChange}
                                                                            autoComplete="off"
                                                                        />
                                                                    </BlockStack>

                                                                    <Text variant="bodyMd" as="p" alignment="end">
                                                                        <strong>10</strong> characters remaining.
                                                                    </Text>
                                                                </Box>

                                                                <Box>
                                                                    <HeadingComponent heading="Launcher icon" />

                                                                    <ChoiceList
                                                                        choices={
                                                                            [
                                                                                { label: 'Default', value: '1' },
                                                                                { label: 'Upload your own', value: '2' }
                                                                            ]}
                                                                        selected={selectedChoiceList}
                                                                        onChange={handleChoiceListChange}
                                                                    />

                                                                    <BlockStack gap="100">
                                                                        <InlineStack gap="100" wrap={true} blockAlign="center">
                                                                            <Box>
                                                                                <QuestionSVG />
                                                                            </Box>
                                                                            <Box borderColor="border" borderWidth="025" borderRadius="200" paddingInline="200" paddingBlock="100">
                                                                                <InlineStack gap="100" wrap={true} align="center" blockAlign="center">
                                                                                    <BarChartSVG />
                                                                                    <CircleCheckSVG />
                                                                                    <QuestionSVG />
                                                                                    <StartSVG />
                                                                                    <ChatSVG />

                                                                                    <Button variant="primary">More Options</Button>
                                                                                </InlineStack>
                                                                            </Box>
                                                                        </InlineStack>
                                                                        <Text variant="bodyXs" as="p" alignment="center">
                                                                            Choose an icon
                                                                        </Text>

                                                                        <DropZone onDrop={handleDropZoneDrop} variableHeight>
                                                                            {uploadedFiles}
                                                                            {fileUpload}
                                                                        </DropZone>
                                                                    </BlockStack>
                                                                </Box>
                                                            </BlockStack>

                                                            <BlockStack gap="800">
                                                                <HeadingWithDivider heading="Branding" />

                                                                <Box>
                                                                    <HeadingComponent heading="Zigpoll(Our app name) link" tooltipText="You can only disable branding if you subscribe to a Plus plan or better" />

                                                                    <Checkbox
                                                                        label="Display a subtle link to the Zigpoll website"
                                                                        checked={isCheckboxChecked}
                                                                        onChange={handleExitIntentChange}
                                                                        disabled
                                                                    />
                                                                </Box>
                                                            </BlockStack>

                                                            <BlockStack gap="300">
                                                                <HeadingWithDivider heading="Advanced" />

                                                                <Box>
                                                                    <HeadingComponent heading="Custom z-index" tooltipText="Adjust the stack placement of your survey within your webpage to avoid overlaps" />

                                                                    <Checkbox
                                                                        label="Apply a custom z-index to your survey"
                                                                        checked={isCheckboxChecked}
                                                                        onChange={handleExitIntentChange}
                                                                    />
                                                                </Box>

                                                                <Box>
                                                                    <HeadingComponent heading="Custom CSS" tooltipText="You can only use custom CSS if you subscribe to a Pro plan or better. Warning this is experimental and selectors may change. Use at your own risk" />

                                                                    <Checkbox
                                                                        label="Apply custom CSS rules to Zigpoll"
                                                                        checked={isCheckboxChecked}
                                                                        onChange={handleExitIntentChange}
                                                                    />
                                                                </Box>

                                                                <Box>
                                                                    <HeadingComponent heading="Custom code" tooltipText="You can only use custom Code if you subscribe to a Pro plan or better" />

                                                                    <Checkbox
                                                                        label="Insert custom code into Zigpoll iframes"
                                                                        checked={isCheckboxChecked}
                                                                        onChange={handleExitIntentChange}
                                                                    />
                                                                </Box>
                                                            </BlockStack>

                                                            <ButtonGroup>
                                                                <Button variant="primary">Save</Button>
                                                                <Button>Cancel</Button>
                                                            </ButtonGroup>
                                                        </BlockStack>
                                                    </Card>
                                                </Layout.Section>

                                                <Layout.Section variant="oneHalf">
                                                    {<Card>
                                                        <Bleed marginBlock="400" marginInline="400">
                                                            <Box background="bg-surface-info" padding="400">
                                                                coming soon...
                                                            </Box>
                                                        </Bleed>

                                                        <div>helloasdfasdf</div>
                                                    </Card> }

                                                    <Card>
                                                        <div style={{ position: "relative" }}>
                                                            <BlockStack gap="800">
                                                                <PreviewHeader hasIcons={true} />

                                                                <Card>
                                                                    <Bleed marginBlock="400" marginInline="400">
                                                                        <Box background="bg-surface-hover" padding="400">
                                                                            <BlockStack gap="200">
                                                                                <Text variant="headingMd" as="h6" alignment="center">
                                                                                    Survey Preview
                                                                                </Text>

                                                                                <Text variant="bodyMd" as="p" alignment="center">
                                                                                    See your settings below.
                                                                                </Text>
                                                                            </BlockStack>
                                                                        </Box>
                                                                    </Bleed>
                                                                </Card>

                                                                <div style={{ position: "relative", minHeight: "300px" }}>
                                                                    <div style={{ maxWidth: "70%", width: "100%", backgroundColor: "#fff", position: "absolute", bottom: "0px", right: "0px", border: "1px solid #000", borderRadius: "5px" }}>
                                                                        <BlockStack>
                                                                            <div style={{ padding: "10px 16px 16px 16px" }}>
                                                                                <BlockStack gap="200">
                                                                                    <InlineStack align="end">
                                                                                        <Button url="#" icon={XIcon} variant="plain"></Button>
                                                                                    </InlineStack>

                                                                                    <Text variant="headingLg" as="h5">
                                                                                        Example Slide
                                                                                    </Text>
                                                                                    <Text variant="bodyMd" as="p">
                                                                                        You're doing great!
                                                                                    </Text>

                                                                                    <Text variant="bodyMd" as="p">
                                                                                        This is an example slide. Your published zigpoll will look look something like this given your current settings.
                                                                                    </Text>

                                                                                    <InlineStack align="end">
                                                                                        <Button variant="primary">Close</Button>
                                                                                    </InlineStack>
                                                                                </BlockStack>
                                                                            </div>

                                                                            <div style={{ borderBottomLeftRadius: "3px", borderBottomRightRadius: "3px", padding: "4px 0px", backgroundColor: "#ebebeb" }}>
                                                                                <div style={{ width: "fit-content", margin: "0px auto" }}>
                                                                                    <Link url="#" monochrome removeUnderline>
                                                                                        <InlineStack gap="100" wrap={true} align="center" blockAlign="center">
                                                                                            <Text variant="bodyXs" as="p" alignment="center">
                                                                                                Powered by
                                                                                            </Text>

                                                                                            <div style={{ backgroundColor: "#2167f5", padding: "0px 2px", borderRadius: "3px" }}>
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="12" height="12" focusable="false" aria-hidden="true"><path fill="#ffffff" d="M4 9.5a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Z" /><path fill="#ffffff" d="M16 9.5a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Z" /><path fill="#ffffff" d="M8 9.5a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Z" /><path fill="#ffffff" d="M12 3a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-1.5 0v-12.5a.75.75 0 0 1 .75-.75Z" /></svg>
                                                                                            </div>

                                                                                            <Text variant="bodyXs" as="span" alignment="center">
                                                                                                Zigpoll
                                                                                            </Text>
                                                                                        </InlineStack>
                                                                                    </Link>
                                                                                </div>
                                                                            </div>
                                                                        </BlockStack>
                                                                    </div>
                                                                </div>
                                                            </BlockStack>
                                                        </div>
                                                    </Card>
                                                </Layout.Section>
                                            </Layout>
                                        </>
                                    ) : selectedTab == 1 ? (
                                        <>
                                            <DashboardSecondRowItem svgIcon={<EmailNewslatterSVG />} mainHeading="Email Design Settings" subHeading="Control the appearance of your email campaigns" />
                                        </>
                                    ) : selectedTab == 2 ? (
                                        <>
                                            <DashboardSecondRowItem svgIcon={<ChatSVG />} mainHeading="SMS Design Settings" subHeading="Control the appearance of your sms campaigns" />

                                            <Layout>
                                                <Layout.Section variant="oneHalf">
                                                    <Card>
                                                        <BlockStack gap="400">
                                                            <HeadingWithDivider heading="Content" />
                                                            <BlockStack gap="300">
                                                                <Box>
                                                                    <BlockStack gap="100">
                                                                        <HeadingComponent heading="SMS message" />

                                                                        <TextField
                                                                            value={textAreaValue}
                                                                            onChange={handleTextAreaChange}
                                                                            multiline={5}
                                                                            autoComplete="off"
                                                                        />
                                                                    </BlockStack>

                                                                    <Text variant="bodyMd" as="p" alignment="end">
                                                                        <strong>10</strong> characters remaining.
                                                                    </Text>
                                                                </Box>

                                                                {/* <Box>
                                                                    <HeadingComponent heading="SMS message" />

                                                                    <TextField
                                                                        value={textAreaValue}
                                                                        onChange={handleTextAreaChange}
                                                                        multiline={5}
                                                                        autoComplete="off"
                                                                    />
                                                                </Box> */}
                                                            </BlockStack>

                                                            <ButtonGroup>
                                                                <Button variant="primary">Save</Button>
                                                                <Button>Cancel</Button>
                                                            </ButtonGroup>
                                                        </BlockStack>
                                                    </Card>
                                                </Layout.Section>

                                                <Layout.Section variant="oneHalf">
                                                    <Card>
                                                        <div style={{ position: "relative", minHeight: "234px" }}>
                                                            <BlockStack gap="800">
                                                                <PreviewHeader hasIcons={false} />

                                                                <div style={{ maxWidth: "80%", backgroundColor: "#2167f5", padding: "15px", borderRadius: "25px", borderBottomLeftRadius: "0px" }}>
                                                                    <BlockStack gap="400">
                                                                        <h6 style={{ fontSize: "0.85rem", fontWeight: "650", letterSpacing: "0", lineHeight: "1.25rem", color: "#fff", wordBreak: "break-all" }}>We want your feedback! Please click the link below to complete our survey.</h6>

                                                                        <h6 style={{ fontSize: "0.85rem", fontWeight: "650", letterSpacing: "0", lineHeight: "1.25rem", color: "#fff", wordBreak: "break-all" }}>https://survey.zigpoll.com/2vyQLbLDGDR3ZwChZ/POLLID</h6>
                                                                    </BlockStack>
                                                                </div>
                                                            </BlockStack>
                                                        </div>
                                                    </Card>
                                                </Layout.Section>
                                            </Layout>
                                        </>
                                    ) : (
                                        <>
                                            <DashboardSecondRowItem svgIcon={<LinkSVG />} mainHeading="Page Design Settings" subHeading="Control the appearance of your share page" />

                                            <Layout>
                                                <Layout.Section variant="oneHalf">
                                                    <Card>
                                                        <BlockStack gap="400">
                                                            <HeadingWithDivider heading="Style" />

                                                            <BlockStack gap="300">
                                                                <Box>
                                                                    <HeadingComponent heading="Page style" subHeading="Choose a style that suits your brand" />

                                                                    <ChoiceList
                                                                        choices={
                                                                            [
                                                                                { label: 'Wave', value: '1' },
                                                                                { label: 'Simple', value: '2' }
                                                                            ]}
                                                                        selected={selectedChoiceList}
                                                                        onChange={handleChoiceListChange}
                                                                    />
                                                                </Box>
                                                            </BlockStack>

                                                            <BlockStack gap="300">
                                                                <HeadingWithDivider heading="Color" />

                                                                <ColorPickerComponent heading="Background color" subHeading="Used in the background of your survey page" onChangeMethod={setColor} colorValue={color} />

                                                                <ColorPickerComponent heading="Foreground color" subHeading="Used in the foreground of your survey page" onChangeMethod={setColor} colorValue={color} />
                                                            </BlockStack>

                                                            <BlockStack gap="300">
                                                                <HeadingWithDivider heading="Branding" />

                                                                <BlockStack gap="100">
                                                                    <HeadingComponent heading="Logo (optional)" subHeading="Use an image for your logo" tooltipText="Image should be 800x300 pixels It will be resized automatically on upload" />

                                                                    <DropZone onDrop={handleDropZoneDrop} variableHeight>
                                                                        {uploadedFiles}
                                                                        {fileUpload}
                                                                    </DropZone>
                                                                </BlockStack>
                                                            </BlockStack>

                                                            <BlockStack gap="300">
                                                                <HeadingWithDivider heading="Advanced" />

                                                                <Box>
                                                                    <HeadingComponent heading="Custom CSS" tooltipText="You can only use custom CSS if you subscribe to a Pro plan or better. Warning this is experimental and selectors may change. Use at your own risk" />

                                                                    <Checkbox
                                                                        label="Apply custom CSS to the page"
                                                                        checked={isCheckboxChecked}
                                                                        onChange={handleExitIntentChange}
                                                                    />
                                                                </Box>
                                                            </BlockStack>

                                                            <ButtonGroup>
                                                                <Button variant="primary">Save</Button>
                                                                <Button>Cancel</Button>
                                                            </ButtonGroup>
                                                        </BlockStack>
                                                    </Card>
                                                </Layout.Section>

                                                <Layout.Section variant="oneHalf">
                                                    <Card>
                                                        <div style={{ position: "relative" }}>
                                                            <BlockStack gap="800">
                                                                <PreviewHeader hasIcons={true} />

                                                                <Bleed marginBlock="400" marginInline="400">

                                                                    <div style={{ backgroundColor: "red" }}>
                                                                        <svg id="wave" style={{ transform: "rotate(180deg)", transition: "0.3s" }} viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(18, 23, 26, 1)" offset="0%"></stop><stop stop-color="rgba(18, 23, 26, 1)" offset="100%"></stop></linearGradient></defs><path style={{ transform: "translate(0, 0px)", opacity: "1" }} fill="url(#sw-gradient-0)" d="M0,196L240,163.3C480,131,960,65,1440,65.3C1920,65,2400,131,2880,204.2C3360,278,3840,359,4320,367.5C4800,376,5280,310,5760,294C6240,278,6720,310,7200,318.5C7680,327,8160,310,8640,277.7C9120,245,9600,196,10080,179.7C10560,163,11040,180,11520,228.7C12000,278,12480,359,12960,326.7C13440,294,13920,147,14400,81.7C14880,16,15360,33,15840,32.7C16320,33,16800,16,17280,73.5C17760,131,18240,261,18720,318.5C19200,376,19680,359,20160,343C20640,327,21120,310,21600,269.5C22080,229,22560,163,23040,155.2C23520,147,24000,196,24480,253.2C24960,310,25440,376,25920,367.5C26400,359,26880,278,27360,245C27840,212,28320,229,28800,245C29280,261,29760,278,30240,310.3C30720,343,31200,392,31680,383.8C32160,376,32640,310,33120,253.2C33600,196,34080,147,34320,122.5L34560,98L34560,490L34320,490C34080,490,33600,490,33120,490C32640,490,32160,490,31680,490C31200,490,30720,490,30240,490C29760,490,29280,490,28800,490C28320,490,27840,490,27360,490C26880,490,26400,490,25920,490C25440,490,24960,490,24480,490C24000,490,23520,490,23040,490C22560,490,22080,490,21600,490C21120,490,20640,490,20160,490C19680,490,19200,490,18720,490C18240,490,17760,490,17280,490C16800,490,16320,490,15840,490C15360,490,14880,490,14400,490C13920,490,13440,490,12960,490C12480,490,12000,490,11520,490C11040,490,10560,490,10080,490C9600,490,9120,490,8640,490C8160,490,7680,490,7200,490C6720,490,6240,490,5760,490C5280,490,4800,490,4320,490C3840,490,3360,490,2880,490C2400,490,1920,490,1440,490C960,490,480,490,240,490L0,490Z"></path></svg>

                                                                    </div>
                                                                </Bleed>
                                                            </BlockStack>
                                                        </div>
                                                    </Card>
                                                </Layout.Section>
                                            </Layout>
                                        </>
                                    )}
                                </BlockStack>
                            </Tabs>
                        </Card>
                    </BlockStack>
                </BlockStack>
            </Box>
        </Page>
    );
}


const DashboardSecondRowItem = ({ svgIcon, mainHeading, tooltipText, subHeading }) => {
    return (
        <BlockStack inlineAlign="center" gap="4">
            <InlineStack gap="4" wrap={true} blockAlign="center">
                {svgIcon}

                <InlineStack gap="2" wrap={false} blockAlign="center">
                    <Text variant="headingLg" as="h4">
                        {mainHeading}
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
            </InlineStack>

            <Text variant="headingMd" tone="subdued" as="h6">
                {subHeading}
            </Text>
        </BlockStack>
    );
};

const HeadingWithDivider = ({ heading }) => (
    <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", width: "100%", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <Divider />
        </div>

        <div style={{ backgroundColor: "#fff", position: "relative", width: "fit-content", margin: "0px auto", padding: "0px 10px" }}>
            <Text variant="headingSm" alignment="center" as="h6">
                {heading}
            </Text>
        </div>
    </div>
);

const PositionGridItem = ({ color }) => (
    <Grid.Cell>
        <div style={{ width: "40px", height: "40px", backgroundColor: color }}>

        </div>
    </Grid.Cell>
);

const ColorPickerComponent = ({ heading, subHeading, onChangeMethod, colorValue }) => (
    <Box>
        <HeadingComponent heading={heading} subHeading={subHeading} />
        <ColorPicker onChange={onChangeMethod} color={colorValue} />
    </Box>
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

const PreviewHeader = ({ hasIcons }) => (
    <div>
        <Bleed marginBlock="400" marginInline="400">
            <Box background="bg-surface-info-active" padding="200">
                <div style={{ height: "20px" }}>
                    {hasIcons && (
                        <InlineStack wrap={true} align="space-between" blockAlign="center">
                            <div style={{ width: "calc(100% - 20px)" }}>
                                <InlineStack wrap={true} align="start" blockAlign="center">
                                    <div>
                                        <Icon
                                            source={ChevronLeftIcon}
                                            tone="base"
                                        />
                                    </div>

                                    <div>
                                        <Icon
                                            source={ChevronRightIcon}
                                            tone="base"
                                        />
                                    </div>

                                    <div>
                                        <Icon
                                            source={ReplayIcon}
                                            tone="base"
                                        />
                                    </div>

                                    <div style={{ width: "70%", height: "20px", marginLeft: "10px", borderRadius: "100vmax", backgroundColor: "#fff" }}></div>
                                </InlineStack>
                            </div>

                            <div style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "#fff" }}></div>
                        </InlineStack>
                    )}
                </div>
            </Box>
        </Bleed>
    </div>
);

const ColorCanSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="32" height="32" focusable="false" aria-hidden="true"><path fill="#616161" fill-rule="evenodd" d="M5 3a.75.75 0 0 0 0 1.5h2.69l-5.013 5.012a1.75 1.75 0 0 0 0 2.475l4.086 4.086a1.75 1.75 0 0 0 2.474 0l6.543-6.543a.75.75 0 0 0 0-1.06l-4.793-4.793-.013-.014-.444-.443a.75.75 0 0 0-.53-.22h-5Zm4.921 1.732.799.798.009.01 3.46 3.46-1.69 1.69-1.865-1.867a1.25 1.25 0 0 0-1.768 0l-1.293 1.293a1.25 1.25 0 0 0 0 1.768l1.866 1.866-1.262 1.262a.25.25 0 0 1-.354 0l-4.086-4.085a.25.25 0 0 1 0-.354l5.836-5.836a.25.25 0 0 1 .348-.005Zm.579 7.957.94-.94-1.69-1.688-.94.939 1.69 1.69Z" /><path fill="#616161" d="M17 15a1.5 1.5 0 1 1-3 0c0-.53.614-2.122 1.057-3.2a.476.476 0 0 1 .886 0c.443 1.078 1.057 2.67 1.057 3.2Z" /></svg>
);

const EmailNewslatterSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="32" height="32" focusable="false" aria-hidden="true">
        <path fill="#616161" d="M8.5 6.5a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
        <path fill="#616161" fill-rule="evenodd" d="M8 3.5a2.75 2.75 0 0 0-2.75 2.75v.5h-1.75a1 1 0 0 0-1 1v6a2.75 2.75 0 0 0 2.75 2.75h9.5a2.75 2.75 0 0 0 2.75-2.75v-6a1 1 0 0 0-1-1h-1.75v-.5a2.75 2.75 0 0 0-2.75-2.75h-4Zm2 7.849-3.25-2.167v-2.932c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2.932l-3.25 2.167Zm6-2.198v4.599c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-4.599l6 4 6-4Z" />
    </svg>
);

const ChatSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="32" height="32" focusable="false" aria-hidden="true"><path fill="#616161" fill-rule="evenodd" d="M7 15v-2.291a3 3 0 0 1-2.5-2.959v-1.25a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v1.25a3 3 0 0 1-3 3h-2.461l-3.039 2.25Zm3.534-.75h1.966a4.5 4.5 0 0 0 4.5-4.5v-1.25a4.5 4.5 0 0 0-4.5-4.5h-5a4.5 4.5 0 0 0-4.5 4.5v1.25a4.498 4.498 0 0 0 2.5 4.032v1.218a1.5 1.5 0 0 0 2.393 1.206l2.64-1.956Zm-4.534-6.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm.75 2a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z" /></svg>
);

const LinkSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="32" height="32" focusable="false" aria-hidden="true"><path fill="#616161" fill-rule="evenodd" d="M15.842 4.175a3.746 3.746 0 0 0-5.298 0l-2.116 2.117a3.75 3.75 0 0 0 .01 5.313l.338.336a.75.75 0 1 0 1.057-1.064l-.339-.337a2.25 2.25 0 0 1-.005-3.187l2.116-2.117a2.246 2.246 0 1 1 3.173 3.18l-1.052 1.047a.75.75 0 0 0 1.058 1.064l1.052-1.047a3.746 3.746 0 0 0 .006-5.305Zm-11.664 11.67a3.75 3.75 0 0 0 5.304 0l2.121-2.121a3.75 3.75 0 0 0 0-5.303l-.362-.362a.75.75 0 0 0-1.06 1.06l.362.362a2.25 2.25 0 0 1 0 3.182l-2.122 2.122a2.25 2.25 0 1 1-3.182-3.182l1.07-1.07a.75.75 0 1 0-1.062-1.06l-1.069 1.069a3.75 3.75 0 0 0 0 5.303Z" /></svg>
);

const QuestionSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="32" height="32" focusable="false" aria-hidden="true"><path fill="#91d0ff" fill-rule="evenodd" d="M10 7.25c-.69 0-1.25.56-1.25 1.25a.75.75 0 0 1-1.5 0 2.75 2.75 0 1 1 3.758 2.56.61.61 0 0 0-.226.147.154.154 0 0 0-.032.046.75.75 0 0 1-1.5-.003c0-.865.696-1.385 1.208-1.586a1.25 1.25 0 0 0-.458-2.414Z" /><path fill="#91d0ff" d="M10 14.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" /><path fill="#91d0ff" fill-rule="evenodd" d="M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" /></svg>
);

const BarChartSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="32" height="32" focusable="false" aria-hidden="true"><path fill="#616161" d="M9.971 4c-.204 0-.344 0-.465.024a1.25 1.25 0 0 0-.982.982c-.024.121-.024.26-.024.465v9.058c0 .204 0 .344.024.465.099.496.486.883.982.982a2.5 2.5 0 0 0 .465.024h.058c.204 0 .344 0 .465-.024a1.25 1.25 0 0 0 .982-.982 2.5 2.5 0 0 0 .024-.465v-9.058c0-.204 0-.344-.024-.465a1.25 1.25 0 0 0-.982-.982 2.504 2.504 0 0 0-.465-.024h-.058Z" /><path fill="#616161" d="M5.471 9.5c-.204 0-.344 0-.465.024a1.25 1.25 0 0 0-.982.982c-.024.121-.024.26-.024.465v3.558c0 .204 0 .344.024.465.099.496.486.883.982.982a2.5 2.5 0 0 0 .465.024h.058c.204 0 .344 0 .465-.024a1.25 1.25 0 0 0 .982-.982c.024-.121.024-.26.024-.465v-3.558c0-.204 0-.344-.024-.465a1.25 1.25 0 0 0-.982-.982 2.503 2.503 0 0 0-.465-.024h-.058Z" /><path fill="#616161" d="M14.471 6.5c-.204 0-.344 0-.465.024a1.25 1.25 0 0 0-.982.982c-.024.121-.024.26-.024.465v6.558c0 .204 0 .344.024.465.099.496.486.883.982.982.121.024.26.024.465.024h.058c.204 0 .344 0 .465-.024a1.25 1.25 0 0 0 .982-.982c.024-.121.024-.26.024-.465v-6.558c0-.204 0-.344-.024-.465a1.25 1.25 0 0 0-.982-.982 2.504 2.504 0 0 0-.465-.024h-.058Z" /></svg>
);

const CircleCheckSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="32" height="32" focusable="false" aria-hidden="true"><path fill="#616161" d="M13.28 9.03a.75.75 0 0 0-1.06-1.06l-2.97 2.97-1.22-1.22a.75.75 0 0 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l3.5-3.5Z" /><path fill="#616161" fill-rule="evenodd" d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z" /></svg>
);

const StartSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="32" height="32" focusable="false" aria-hidden="true"><path fill="#616161" fill-rule="evenodd" d="M8.872 4.123c.453-.95 1.803-.95 2.256 0l1.39 2.912 3.199.421c1.042.138 1.46 1.422.697 2.146l-2.34 2.222.587 3.172c.192 1.034-.901 1.828-1.825 1.327l-2.836-1.54-2.836 1.54c-.924.501-2.017-.293-1.825-1.327l.587-3.172-2.34-2.222c-.762-.724-.345-2.008.697-2.146l3.2-.421 1.389-2.912Zm1.128 1.119-1.222 2.561a1.25 1.25 0 0 1-.965.701l-2.814.371 2.058 1.954c.307.292.446.718.369 1.134l-.517 2.791 2.495-1.354a1.25 1.25 0 0 1 1.192 0l2.495 1.354-.517-2.79a1.25 1.25 0 0 1 .369-1.135l2.058-1.954-2.814-.37a1.25 1.25 0 0 1-.965-.702l-1.222-2.561Z" /></svg>
);
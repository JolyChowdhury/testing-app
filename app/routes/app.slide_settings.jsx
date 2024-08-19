import {
  Page,
  Button,
  Card,
  Text,
  Layout,
  Select,
  DropZone,
  BlockStack,
  Thumbnail,
  Banner,
  List,
  FormLayout,
  TextField,
  ButtonGroup,
  AppProvider,
} from "@shopify/polaris";
import { useState, useCallback } from "react";
import {
  TextBoldIcon,
  TextItalicIcon,
  TextUnderlineIcon,
  LinkIcon,
  ArrowLeftIcon,
} from "@shopify/polaris-icons";

export default function PageExample() {
  const handleBackClick = () => {
    navigate("");
  };

  const [toggleActive, setToggleActive] = useState(false);
  const handleToggle = () => setToggleActive((prevState) => !prevState);

  const [togglePurchaseActive, setTogglePurchaseActive] = useState(false);

  const handlePurchaseToggle = () =>
    setTogglePurchaseActive((prevState) => !prevState);

  const [toggleBirthdayActive, setToggleBirthdayActive] = useState(false);
  const handleBirthdayToggle = () =>
    setToggleBirthdayActive((prevState) => !prevState);

  const [selected, setSelected] = useState("today");
  const [mainCopy, setMainCopy] = useState("");
  const [finePrint, setFinePrint] = useState("");

  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const options = [
    { label: "Copy", value: "copy" },
    { label: "Yesterday", value: "yesterday" },
  ];
  const handleMainCopyChange = useCallback((value) => setMainCopy(value), []);
  const handlePrintCopyChange = useCallback((value) => setFinePrint(value), []);

  const [files, setFiles] = useState([]);
  const [rejectedFiles, setRejectedFiles] = useState([]);
  const hasError = rejectedFiles.length > 0;

  const handleDrop = useCallback(
    (_droppedFiles, acceptedFiles, rejectedFiles) => {
      setFiles((files) => [...files, ...acceptedFiles]);
      setRejectedFiles(rejectedFiles);
    },
    [],
  );

  const fileUpload = !files.length && <DropZone.FileUpload />;
  const uploadedFiles = files.length > 0 && (
    <BlockStack vertical>
      {files.map((file, index) => (
        <BlockStack alignment="center" key={index}>
          <Thumbnail
            size="small"
            alt={file.name}
            source={window.URL.createObjectURL(file)}
          />
          <div>
            {file.name}{" "}
            <Text variant="bodySm" as="p">
              {file.size} bytes
            </Text>
          </div>
        </BlockStack>
      ))}
    </BlockStack>
  );

  const errorMessage = hasError && (
    <Banner title="The following images couldn’t be uploaded:" tone="critical">
      <List type="bullet">
        {rejectedFiles.map((file, index) => (
          <List.Item key={index}>
            {`"${file.name}" is not supported. File type must be .gif, .jpg, .png or .svg.`}
          </List.Item>
        ))}
      </List>
    </Banner>
  );

  return (
    <Page title="Slide Details">
      <Text>
        <Banner
          title="This servey is currently hidden"
          onDismiss={() => {}}
        ></Banner>
      </Text>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        <Button plain icon={ArrowLeftIcon} onClick={handleBackClick} />
        <div style={{ marginLeft: "10px" }}>
          <Text variant="headingLg" as="h3">
            Back to sliders
          </Text>
        </div>
      </div>
      <Layout>
        <Layout.Section>
          <div style={{ marginBottom: "10px" }}>
            <Card sectioned>
              <Select
                label="Format"
                options={options}
                onChange={handleSelectChange}
                value={selected}
              />
            </Card>
          </div>

          <Text variant="headingMd" as="h5">
            Content
          </Text>
          <div style={{ marginBottom: "10px" }}>
            <Card sectioned>
              <FormLayout>
                <TextField
                  onChange={handleMainCopyChange}
                  label="Main Copy"
                  autoComplete="off"
                  value={mainCopy}
                />

                <Button submit>Submit</Button>
              </FormLayout>

              <Text>Image (Optional)</Text>

              <BlockStack vertical>
                {errorMessage}
                <DropZone accept="image/*" type="image" onDrop={handleDrop}>
                  {uploadedFiles}
                  {fileUpload}
                </DropZone>
              </BlockStack>
              <TextField
                onChange={handlePrintCopyChange}
                label="Fine Print"
                autoComplete="off"
                value={finePrint}
              />
            </Card>
          </div>
          <Text variant="headingMd" as="h5">
            Logic
          </Text>
          <div style={{ marginBottom: "10px" }}>
            <Card sectioned>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ width: 100, height: 114 }}>
                  <DropZone>
                    <DropZone.FileUpload />
                  </DropZone>
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <text>to configure special behaviours</text>
                </div>
              </div>
            </Card>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <Text variant="headingMd" as="h5">
              Settings
            </Text>
            <Card sectioned>
              <div style={{ marginBottom: "10px" }}>
                <Text variant="headingSm" as="h5">
                  Show the title
                </Text>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <AppProvider
                    i18n={{
                      Polaris: {
                        Common: { checkbox: { on: "On", off: "Off" } },
                      },
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Button
                        onClick={handleToggle}
                        plain
                        ariaPressed={toggleActive}
                      >
                        <Text variation="strong">
                          {toggleActive ? "On" : "Off"}
                        </Text>
                      </Button>
                      <div
                        role="switch"
                        aria-checked={toggleActive}
                        onClick={handleToggle}
                        style={{
                          display: "inline-block",
                          width: "50px",
                          height: "25px",
                          background: toggleActive ? "blue" : "#ccc",
                          borderRadius: "25px",
                          position: "relative",
                          cursor: "pointer",
                          marginLeft: "10px",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: "2px",
                            left: toggleActive ? "26px" : "2px",
                            width: "21px",
                            height: "21px",
                            background: "#fff",
                            borderRadius: "50%",
                            transition: "left 0.2s",
                          }}
                        />
                      </div>
                    </div>
                  </AppProvider>
                  <text>Show the title for the side</text>
                </div>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <Text variant="headingSm" as="h5">
                  Show confetti
                </Text>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <AppProvider
                    i18n={{
                      Polaris: {
                        Common: { checkbox: { on: "On", off: "Off" } },
                      },
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Button
                        onClick={handlePurchaseToggle}
                        plain
                        ariaPressed={togglePurchaseActive}
                      >
                        <Text variation="strong">
                          {togglePurchaseActive ? "On" : "Off"}
                        </Text>
                      </Button>
                      <div
                        role="switch"
                        aria-checked={togglePurchaseActive}
                        onClick={handlePurchaseToggle}
                        style={{
                          display: "inline-block",
                          width: "50px",
                          height: "25px",
                          background: togglePurchaseActive ? "blue" : "#ccc",
                          borderRadius: "25px",
                          position: "relative",
                          cursor: "pointer",
                          marginLeft: "10px",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: "2px",
                            left: togglePurchaseActive ? "26px" : "2px",
                            width: "21px",
                            height: "21px",
                            background: "#fff",
                            borderRadius: "50%",
                            transition: "left 0.2s",
                          }}
                        />
                      </div>
                    </div>
                  </AppProvider>
                  <text>Show confetti when the custom appear</text>
                </div>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <Text variant="headingSm" as="h5">
                  Custom Handle
                </Text>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <AppProvider
                    i18n={{
                      Polaris: {
                        Common: { checkbox: { on: "On", off: "Off" } },
                      },
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Button
                        onClick={handleBirthdayToggle}
                        plain
                        ariaPressed={toggleBirthdayActive}
                      >
                        <Text variation="strong">
                          {toggleBirthdayActive ? "On" : "Off"}
                        </Text>
                      </Button>
                      <div
                        role="switch"
                        aria-checked={toggleBirthdayActive}
                        onClick={handleBirthdayToggle}
                        style={{
                          display: "inline-block",
                          width: "50px",
                          height: "25px",
                          background: toggleBirthdayActive ? "blue" : "#ccc",
                          borderRadius: "25px",
                          position: "relative",
                          cursor: "pointer",
                          marginLeft: "10px",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: "2px",
                            left: toggleBirthdayActive ? "26px" : "2px",
                            width: "21px",
                            height: "21px",
                            background: "#fff",
                            borderRadius: "50%",
                            transition: "left 0.2s",
                          }}
                        />
                      </div>
                    </div>
                  </AppProvider>
                  <text>Use custom handle to identify the slide</text>
                </div>
              </div>
              <Button fullWidth>More options</Button>
            </Card>
          </div>
          <div style={{ marginBottom: "40px" }}>
            <Card title="Tags" sectioned>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button disabled>Update slide</Button>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <text>Need help understanding side</text>
                  <Button disabled>Learn more</Button>
                </div>
              </div>
            </Card>
          </div>

          <div
            style={{
              width: "100%",
              padding: "10px 0",
              boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
              marginBottom: "30px",
            }}
          >
            <div style={{ marginLeft: "30px" }}>
              <Text variant="body" as="p">
                Done Editing?
              </Text>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "10px",
                }}
              >
                <Button plain icon={ArrowLeftIcon} onClick={handleBackClick} />
                <div style={{ marginLeft: "10px" }}>
                  <Text variant="body" as="p">
                    Back to sliders
                  </Text>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <ButtonGroup>
                  <Button variant="primary" tone="critical">
                    Delete Slide
                  </Button>
                  <Button variant="primary">Add Slide</Button>
                  <Button>Duplicate Slide</Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <Card title="Tags" sectioned>
            <div
              style={{
                height: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <input style={{ height: "100px", width: "200px" }} />
              <div style={{ marginTop: "10px" }}>
                <Button>Close</Button>
              </div>
            </div>
          </Card>

          <p>
            A preview of this slide is printed in the box above. Make any edits
            in the form to the left
          </p>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

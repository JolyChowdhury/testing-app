import React, { useState, useEffect, useRef } from "react";
import {
  Page,
  BlockStack,
  InlineGrid,
  InlineStack,
  Layout,
  Bleed,
  Box,
  Card,
  Text,
  Button,
  Divider,
  Popover,
  ColorPicker,
  TextField,
} from "@shopify/polaris";

const hsbToHex = ({ hue, saturation, brightness }) => {
  const rgb = hsbToRgb(hue, saturation, brightness);
  return rgbToHex(rgb);
};

const hsbToRgb = (h, s, b) => {
  s /= 100;
  b /= 100;
  const k = (n) => (n + h / 60) % 6;
  const f = (n) => b * (1 - s * Math.max(Math.min(k(n), 4 - k(n), 1), 0));
  return {
    r: Math.round(255 * f(5)),
    g: Math.round(255 * f(3)),
    b: Math.round(255 * f(1)),
  };
};

const rgbToHex = ({ r, g, b }) =>
  `#${((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)
    .toUpperCase()}`;

const ColorPickerComponent = ({ label, color, onChange }) => {
  const [popoverActive, setPopoverActive] = useState(false);
  const [hexColor, setHexColor] = useState(hsbToHex(color));

  const togglePopoverActive = () => setPopoverActive((active) => !active);

  const handleColorChange = (newColor) => {
    setHexColor(hsbToHex(newColor));
    onChange(newColor);
  };

  useEffect(() => {
    setHexColor(hsbToHex(color));
  }, [color]);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Popover
        active={popoverActive}
        activator={
          <Button onClick={togglePopoverActive} plain>
            <div
              style={{
                width: "25px",
                height: "25px",
                backgroundColor: hexColor,
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </Button>
        }
        onClose={togglePopoverActive}
        sectioned
      >
        <ColorPicker color={color} onChange={handleColorChange} />
      </Popover>
      <TextField value={hexColor} onChange={() => {}} readOnly />
    </div>
  );
};

const ColorSettings = ({
  primaryColor,
  secondaryColor,
  textColor,
  onColorChange,
  visible,
}) => {
  return (
    <div style={{ display: visible ? "block" : "none" }}>
      <BlockStack gap="4">
        <div style={{ marginTop: "10px", marginBottom: "6px" }}>
          <Text as="h5" variant="headingLg">
            Primary color
          </Text>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <ColorPickerComponent
            label="Primary color"
            color={primaryColor}
            onChange={(color) => onColorChange("primaryColor", color)}
          />
        </div>
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <Text as="h5" variant="headingLg">
            Secondary color
          </Text>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <ColorPickerComponent
            label="Secondary color"
            color={secondaryColor}
            onChange={(color) => onColorChange("secondaryColor", color)}
          />
        </div>
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <Text as="h5" variant="headingLg">
            Text color
          </Text>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <ColorPickerComponent
            label="Text color"
            color={textColor}
            onChange={(color) => onColorChange("textColor", color)}
          />
        </div>
      </BlockStack>
    </div>
  );
};

export default function CustomerPreview() {
  const [showColorSettings, setShowColorSettings] = useState(false);
  const [primaryColor, setPrimaryColor] = useState({
    hue: 330,
    brightness: 0.8,
    saturation: 0.6,
  });
  const [secondaryColor, setSecondaryColor] = useState({
    hue: 265,
    brightness: 0.6,
    saturation: 0.7,
  });
  const [textColor, setTextColor] = useState({
    hue: 0,
    brightness: 1,
    saturation: 0,
  });

  const handleColorClick = () => {
    setShowColorSettings((prev) => !prev);
  };

  const handleColorChange = (colorType, color) => {
    if (colorType === "primaryColor") {
      setPrimaryColor(color);
    } else if (colorType === "secondaryColor") {
      setSecondaryColor(color);
    } else if (colorType === "textColor") {
      setTextColor(color);
    }
    sendColorUpdate(colorType, color);
  };

  return (
    <Page>
      <BlockStack gap="300">
        <div style={{ marginBottom: "50px" }}>
          <InlineGrid columns={["oneThird", "twoThirds"]}>
            <div style={{ marginRight: "15px" }}>
              <Layout>
                <Layout.Section>
                  <Card>
                    <div style={{ paddingBottom: "15px" }}>
                      <Text as="h2" variant="headingLg">
                        Theme
                      </Text>
                    </div>
                    <Divider />

                    <div
                      style={{
                        height: "100%",
                        textAlign: "center",
                        marginTop: "15px",
                        cursor: "pointer",
                      }}
                      onClick={handleColorClick}
                    >
                      <div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <div
                              style={{ marginRight: "10px", marginTop: "6px" }}
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.588 2.051c-2.056-.259-3.68.458-5 2.23-2.847 3.823-1.715 9.71 2.223 12.064 4.02 2.404 9.32.946 11.563-3.28.536-1.01.729-2.11.575-3.326-.146-1.153-1.173-1.957-2.284-1.812-.12.015-.237.041-.352.078l-.082.026a3.092 3.092 0 01-3.893-2.033 3.124 3.124 0 01-.142-.93c0-1.54-1.124-2.83-2.608-3.017zm.25-1.984c2.49.313 4.358 2.458 4.358 5.001 0 .114.017.226.051.335.182.584.797.908 1.374.724l.082-.027c.23-.073.465-.126.704-.157 2.216-.288 4.242 1.3 4.526 3.545.205 1.619-.06 3.134-.793 4.515-2.816 5.304-9.42 7.01-14.355 4.059-4.914-2.94-6.384-10.164-2.8-14.975C3.727.746 6.054-.283 8.837.067zM6.833 6.929a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM4.5 11a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm3 4a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6.25-1a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5z"
                                  fill="#637381"
                                  fill-rule="nonzero"
                                ></path>
                              </svg>
                            </div>
                            <div>
                              <Text>Colors</Text>
                            </div>
                          </div>
                          <div>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.72 14.53a.75.75 0 0 1 0-1.06l3.47-3.47-3.47-3.47a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div style={{ marginTop: "15px" }}>
                        <ColorSettings
                          primaryColor={primaryColor}
                          secondaryColor={secondaryColor}
                          textColor={textColor}
                          onColorChange={handleColorChange}
                          visible={showColorSettings}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        height: "100%",
                        textAlign: "center",
                        marginTop: "15px",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          textAlign: "center",
                          marginTop: "15px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <div
                              style={{ marginRight: "10px", marginTop: "6px" }}
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10 17c-3.69 0-6.974-2.19-9.83-6.442a1 1 0 010-1.116C3.026 5.19 6.31 3 10 3c3.69 0 6.974 2.19 9.83 6.442a1 1 0 010 1.116C16.974 14.81 13.69 17 10 17zm0-2c2.788 0 5.376-1.63 7.784-5C15.376 6.63 12.788 5 10 5c-2.788 0-5.376 1.63-7.784 5 2.408 3.37 4.996 5 7.784 5zm0-2a3 3 0 110-6 3 3 0 010 6z"
                                  fill="#637381"
                                  fill-rule="nonzero"
                                ></path>
                              </svg>
                            </div>
                            <div>
                              <Text>Visibility</Text>
                            </div>
                          </div>
                          <div style={{ marginTop: "8px" }}>
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 20 20"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.72 14.53a.75.75 0 0 1 0-1.06l3.47-3.47-3.47-3.47a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0Z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        height: "100%",
                        textAlign: "center",
                        marginTop: "15px",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          textAlign: "center",
                          marginTop: "15px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <div
                              style={{ marginRight: "10px", marginTop: "6px" }}
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g fill="none" fill-rule="evenodd">
                                  <path
                                    d="M16.515 11H13a1 1 0 010-2h3.414L15.27 7.935l1.363-1.463 3.048 2.838a1 1 0 01.003 1.461l-3.029 2.839-1.367-1.46L16.515 11zm-12.98 0l1.19 1.114-1.368 1.46-3.029-2.838a1 1 0 01.003-1.462l3.048-2.838L4.742 7.9 3.56 9H7a1 1 0 110 2H3.535zM9 16.497V13a1 1 0 012 0v3.43l1.06-1.154 1.473 1.352-2.796 3.048a1 1 0 01-1.462.013l-2.88-3.029 1.45-1.378L9 16.497zm2-12.994V7a1 1 0 01-2 0V3.57L7.94 4.723 6.467 3.372 9.263.324a1 1 0 011.462-.013l2.88 3.029-1.45 1.378L11 3.503z"
                                    fill="#637381"
                                    fill-rule="nonzero"
                                  ></path>
                                </g>
                              </svg>
                            </div>
                            <div>
                              <Text>Placement</Text>
                            </div>
                          </div>
                          <div style={{ marginTop: "8px" }}>
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 20 20"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.72 14.53a.75.75 0 0 1 0-1.06l3.47-3.47-3.47-3.47a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0Z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Layout.Section>
              </Layout>
            </div>
            <div style={{ marginRight: "15px" }}>
              <Layout>
                <Layout.Section>
                  <Card roundedAbove="sm">
                    <BlockStack gap="200">
                      <Bleed marginBlock="400" marginInline="400">
                        <Box background="bg-surface-hover" padding="400">
                          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                          <Text as="h2" variant="headingLg">
                            Preview
                          </Text>
                        <Button
                          onClick={() => {}}
                          accessibilityLabel="Add variant"
                          >
                          Save
                        </Button>
                        </div>
                          </Box>
                      </Bleed>
                    </BlockStack>
                    <div
                      style={{
                        width: "100%",
                        marginTop:"50px",
                        height: "600px",
                        border: "none",
                        position: "relative",
                        left: "18%",
                      }}
                    >
                      <iframe
                        src="http://localhost/CustomWidget/widget.html"
                        style={{
                          width: "100%",
                          height: "100%",
                          border: "none",
                        }}
                        scrolling="no"
                        frameBorder="0"
                      />
                    </div>
                    </Card>
                </Layout.Section>
              </Layout>
            </div>
          </InlineGrid>
        </div>
      </BlockStack>
    </Page>
  );
}

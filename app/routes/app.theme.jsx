import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Page,
  BlockStack,
  InlineGrid,
  InlineStack,
  Layout,
  Bleed,
  DropZone,
  Box,
  Card,
  ChoiceList,
  Text,
  Button,
  Icon,
  Divider,
  Popover,
  ColorPicker,
  TextField,
  hsbToHex,
  hexToRgb,
  rgbToHsb,
} from "@shopify/polaris";
import { ChevronRightIcon } from "@shopify/polaris-icons";
import Widget from "../componant/widget";
import ButtonWidget from "../componant/ButtonWidget";
import { useLoaderData, useActionData, useSubmit } from "@remix-run/react";
import { authenticate } from "../shopify.server";
import ColorPickerComponent from "../componant/colorPickerComponant";
import { json } from "@remix-run/node";
import { getWidgetSettingsByShop, updateOrCreateWidgetSettings } from "../service/widget_settings";

export async function loader({ request }) {
  const { admin, session } = await authenticate.admin(request);
  const { shop } = session;

  const getWidgetSettings = await getWidgetSettingsByShop(shop);
  
  return json(getWidgetSettings);
}

export async function action({ request }) {
  const { admin, session } = await authenticate.admin(request);
  const { shop } = session;

  let submitData = await request.formData();
  submitData = Object.fromEntries(submitData);

  let widgetSettingsData = {
    shopId: shop,
    primaryColor: submitData.primaryColor,
    secondaryColor: submitData.secondaryColor,
    textColor: submitData.textColor
  }

  const settingsResponse = await updateOrCreateWidgetSettings(widgetSettingsData);

  return { success: true };
}

export default function CustomerWidget() {

  const widgetSaveData = useLoaderData();

  const [RewardName, setRewardName] = useState("Reward");
  const handlesetRewardName = useCallback(
    (newValue) => setRewardName(newValue),
    [],
  );
  const [selectedVisibility, setSelectedVisibility] = useState(["hidden"]);
  const handleVisibility = useCallback(
    (value) => setSelectedVisibility(value),
    [],
  );

  const [selectedButton, setSelectedButton] = useState(["icon-text"]);
  const handleButton = useCallback((value) => setSelectedButton(value), []);

  const defaultPrimaryColor = {
    hue: 197.55,
    saturation: 0.83,
    brightness: 0.88
  };
  const [primaryColor, setPrimaryColor] = useState(() => {
    return widgetSaveData?.theme?.primaryColor ? hexToHsba(widgetSaveData.theme.primaryColor) : defaultPrimaryColor;
  });

  const defaultSecondaryColor = {
    hue: 71.92,
    saturation: 0.8,
    brightness: 0.76
  };
  const [secondaryColor, setSecondaryColor] = useState(() => {
    return widgetSaveData?.theme?.secondaryColor ? hexToHsba(widgetSaveData.theme.secondaryColor) : defaultSecondaryColor;
  });

  const defaultTextColor = {
    hue: 0,
    saturation: 0,
    brightness: 0
  };
  const [textColor, setTextColor] = useState(() => {
    return widgetSaveData?.theme?.textColor ? hexToHsba(widgetSaveData.theme.textColor) : defaultTextColor;
  });

  const [primaryHexColor, setPrimaryHexColor] = useState(hsbToHex(primaryColor));
  const [secondaryHexColor, setSecondaryHexColor] = useState(widgetSaveData?.theme.secondaryColor || hsbToHex(secondaryColor));
  const [textHexColor, setTextHexColor] = useState(widgetSaveData?.theme.textColor || hsbToHex(textColor));

  // const [showPrimaryColorPicker, setShowPrimaryColorPicker] = useState(false);
  // const [showSecondaryColorPicker, setShowSecondaryColorPicker] = useState(false);
  // const [showTextColorPicker, setShowTextColorPicker] = useState(false);

  // const togglePrimaryColorPicker = useCallback(() => {
  //   setShowPrimaryColorPicker((prev) => !prev);
  // }, []);

  // const toggleSecondaryColorPicker = useCallback(() => {
  //   setShowSecondaryColorPicker((prev) => !prev);
  // }, []);

  // const toggleTextColorPicker = useCallback(() => {
  //   setShowTextColorPicker((prev) => !prev);
  // }, []);

  const [style, setStyle] = useState({
    background: {
      primary: hsbToHex(primaryColor),
      secondary: hsbToHex(secondaryColor)
    },
    text: {
      color: hsbToHex(textColor)
    }
  });

  const handlePrimaryColorChange = useCallback((newColor) => {
    setPrimaryColor(newColor);
    setPrimaryHexColor(hsbToHex(newColor));

    // Update style with the new primary color but keep the secondary color
    setStyle((prevStyle) => ({
      ...prevStyle, // Preserve the entire previous style object
      background: {
        ...prevStyle.background, // Keep the secondary color intact
        primary: hsbToHex(newColor) // Update only the primary color
      }
    }));
  }, []);

  const handleSecondaryColorChange = useCallback((newColor) => {
    setSecondaryColor(newColor);
    setSecondaryHexColor(hsbToHex(newColor));

    // Update style with the new secondry color but keep the primary color
    setStyle((prevStyle) => ({
      ...prevStyle, // Preserve the entire previous style object
      background: {
        ...prevStyle.background, // Keep the primary color intact
        secondary: hsbToHex(newColor) // Update only the secondry color
      }
    }));
  }, []);

  const handleTextColorChange = useCallback((newColor) => {
    setTextColor(newColor);
    setTextHexColor(hsbToHex(newColor));

    // Update style with the new text color only
    setStyle((prevStyle) => ({
      ...prevStyle, // Preserve the entire previous style object
      text: {
        ...prevStyle.text, // Keep the other property intact if any
        color: hsbToHex(newColor) // Update only the primary color
      }
    }));
  }, []);

  const formValidationResult = useActionData();
  const [isSaving, setIsSaving] = useState(false);
  const submit = useSubmit();

  async function handleWidgetSettingStore() {
    setIsSaving(true);
    const data = {
      primaryColor: primaryHexColor,
      secondaryColor: secondaryHexColor,
      textColor: textHexColor
    };

    submit(data, { method: "post" });
  }

  useEffect(() => {
    if(formValidationResult?.success){
      shopify.toast.show('Theme settings saved!');
      setIsSaving(false);
    }
  }, [formValidationResult]);

  const ThemeOption = ({ icon, text }) => {
    return (
      <div
        style={{
          marginTop: "20px",
        }}
      >
        <div>
          <InlineStack blockAlign="center" gap="300">
            {icon}
            <Text variant="headingMd" as="h5">
              {text}
            </Text>
          </InlineStack>
        </div>
      </div>
    );
  };


  // const ColorPickerComponent = ({
  //   label,
  //   color,
  //   setColor,
  //   colorPickerVisible,
  //   toggleColorPicker,
  //   handleNewColorChange,
  //   pickerPosition,
  //   newFieldColor,
  // }) => {
  //   const colorPickerRef = useRef(null);
  //   const handleClickOutside = useCallback((event) => {
  //     if (colorPickerRef.current && !colorPickerRef.current.contains(event.target)) {
  //       toggleColorPicker(false);
  //     }
  //   }, [toggleColorPicker]);
  
  //   useEffect(() => {
  //     if (colorPickerVisible) {
  //       document.addEventListener("mousedown", handleClickOutside);
  //     } else {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     }
  
  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [colorPickerVisible, handleClickOutside]);
  //   return (
  //     <div>
  //       <Text variant="headingMd">{label}</Text>
  //       <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
  //         <div style={{ width: "100%" }}>
  //           <TextField value={color} onChange={setColor} />
  //         </div>
  //         <Box>
  //           <div
  //             style={{
  //               position: "relative",
  //               width: "40px",
  //               height: "40px",
  //               backgroundColor: color,
  //               cursor: "pointer",
  //             }}
  //             onClick={toggleColorPicker}
  //           />
  //         </Box>
  //         {colorPickerVisible && (
  //           <div
  //           ref={colorPickerRef} 
  //             style={{
  //               position: "absolute",
  //               zIndex: "99",
  //               top: pickerPosition,
  //               right: "5%",
  //             }}
  //             onClick={(e) => e.stopPropagation()}
  //           >
  //             <ColorPicker onChange={handleNewColorChange} color={newFieldColor} />
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <Page
      backAction={{ content: "branding", url: "/app/branding" }}
      title="Widget"
    >
      <BlockStack gap="300">
        <div style={{ marginBottom: "50px" }}>
          <Layout>
            <Layout.Section variant="oneThird">
              <Card>
                <Bleed marginBlock="400" marginInline="400">
                  <Box background="bg-surface-hover" padding="400">
                    <Text as="h2" variant="headingLg">
                      Theme
                    </Text>
                  </Box>
                </Bleed>

                <Box paddingBlock="200">
                  <ThemeOption
                    icon={
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.588 2.051c-2.056-.259-3.68.458-5 2.23-2.847 3.823-1.715 9.71 2.223 12.064 4.02 2.404 9.32.946 11.563-3.28.536-1.01.729-2.11.575-3.326-.146-1.153-1.173-1.957-2.284-1.812-.12.015-.237.041-.352.078l-.082.026a3.092 3.092 0 01-3.893-2.033 3.124 3.124 0 01-.142-.93c0-1.54-1.124-2.83-2.608-3.017zm.25-1.984c2.49.313 4.358 2.458 4.358 5.001 0 .114.017.226.051.335.182.584.797.908 1.374.724l.082-.027c.23-.073.465-.126.704-.157 2.216-.288 4.242 1.3 4.526 3.545.205 1.619-.06 3.134-.793 4.515-2.816 5.304-9.42 7.01-14.355 4.059-4.914-2.94-6.384-10.164-2.8-14.975C3.727.746 6.054-.283 8.837.067zM6.833 6.929a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM4.5 11a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm3 4a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6.25-1a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5z"
                          fill="#637381"
                          fillRule="nonzero"
                        ></path>
                      </svg>
                    }
                    text="Colors"
                  />
                </Box>
                <BlockStack gap="200">
                  <Box paddingBlock="200">
                    <div>
                      <ColorPickerComponent
                        label="Primary color"
                        color={primaryHexColor}
                        setColor={setPrimaryHexColor}
                        // colorPickerVisible={showPrimaryColorPicker}
                        // toggleColorPicker={togglePrimaryColorPicker}
                        handleNewColorChange={handlePrimaryColorChange}
                        newFieldColor={primaryColor}
                        pickerPosition="20%"
                      />
                    </div>
                    <div>
                      <ColorPickerComponent
                        label="Secondary color"
                        color={secondaryHexColor}
                        setColor={setSecondaryHexColor}
                        // colorPickerVisible={showSecondaryColorPicker}
                        // toggleColorPicker={toggleSecondaryColorPicker}
                        handleNewColorChange={handleSecondaryColorChange}
                        newFieldColor={secondaryColor}
                        pickerPosition="27%"
                      />
                    </div>
                    <div>
                      <ColorPickerComponent
                        label="Text color"
                        color={textHexColor}
                        setColor={setTextHexColor}
                        // colorPickerVisible={showTextColorPicker}
                        // toggleColorPicker={toggleTextColorPicker}
                        handleNewColorChange={handleTextColorChange}
                        newFieldColor={textColor}
                        pickerPosition="35%"
                      />
                    </div>
                  </Box>
                  <Divider />
                </BlockStack>

                <BlockStack gap="200">
                  <ThemeOption
                    icon={
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 17c-3.69 0-6.974-2.19-9.83-6.442a1 1 0 010-1.116C3.026 5.19 6.31 3 10 3c3.69 0 6.974 2.19 9.83 6.442a1 1 0 010 1.116C16.974 14.81 13.69 17 10 17zm0-2c2.788 0 5.376-1.63 7.784-5C15.376 6.63 12.788 5 10 5c-2.788 0-5.376 1.63-7.784 5 2.408 3.37 4.996 5 7.784 5zm0-2a3 3 0 110-6 3 3 0 010 6z"
                          fill="#637381"
                          fillRule="nonzero"
                        ></path>
                      </svg>
                    }
                    text="Visibility"
                  />
                  <ChoiceList
                    title="Choose where you want to display the widget on your storefront"
                    choices={[
                      { label: "Hide on mobile", value: "hidden" },
                      {
                        label: "Show widget on all pages",
                        value: "show-pages",
                      },
                      {
                        label: "Show widget on specific pages",
                        value: "specific-pages",
                      },
                    ]}
                    selected={selectedVisibility}
                    onChange={handleVisibility}
                  />
                  <Divider />
                  <BlockStack gap="400">
                    <ThemeOption
                      icon={
                        <svg
                          width="20"
                          height="20"
                          fill="#637381"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.75 4a3.75 3.75 0 0 0-3.75 3.75v2.5a3.75 3.75 0 0 0 3.75 3.75h1.5a.75.75 0 0 0 0-1.5h-1.5a2.25 2.25 0 0 1-2.25-2.25v-2.5a2.25 2.25 0 0 1 2.25-2.25h6.5a2.25 2.25 0 0 1 2.25 2.25v.5a.75.75 0 0 0 1.5 0v-.5a3.75 3.75 0 0 0-3.75-3.75h-6.5Z" />
                          <path d="M9.464 8.464a.75.75 0 0 1 .78-.176l6.01 2.12a.75.75 0 0 1 .281 1.238l-1.237 1.238 1.414 1.414a.75.75 0 0 1 0 1.06l-.353.354a.75.75 0 0 1-1.06 0l-1.415-1.414-1.238 1.238a.75.75 0 0 1-1.237-.281l-2.121-6.01a.75.75 0 0 1 .176-.78Z" />
                        </svg>
                      }
                      text="Button and icon"
                    />
                    <ChoiceList
                      title="Button type"
                      choices={[
                        { label: "Icon and text", value: "icon-text" },
                        { label: "Icon only", value: "show-pages" },
                        { label: "Text only", value: "specific-pages" },
                      ]}
                      selected={selectedButton}
                      onChange={handleButton}
                    />
                    <Text>Choose icon</Text>
                    <InlineStack blockAlign="center" align="space-between">
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          border: "1px dotted #d1d1d1",
                          borderRadius: "10px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <svg
                          width={"40px"}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9.716 14.806c.035.005.07.008.106.011l1.4 2.44c.378.66 1.324.673 1.72.024l.479-.781h1.226c.772 0 1.253-.837.864-1.504l-1.167-2c.446-.476.67-1.16.504-1.88-.056-.237.046-.482.252-.61 1.3-.81 1.3-2.702 0-3.511-.206-.128-.308-.374-.252-.61.346-1.491-.992-2.83-2.483-2.482-.236.055-.482-.047-.61-.253-.81-1.3-2.7-1.3-3.51 0-.128.206-.374.308-.61.253-1.492-.347-2.83.99-2.482 2.482.055.236-.047.482-.253.61-1.3.81-1.3 2.7 0 3.51.206.128.308.374.253.61-.135.577-.017 1.131.265 1.573l-1.346 2.308c-.39.667.092 1.504.863 1.504h1.164l.55.825c.415.623 1.342.585 1.706-.07l1.361-2.45Zm-1.31-.73c-.058-.07-.111-.146-.161-.226-.128-.206-.374-.307-.61-.252-.35.08-.69.07-1.003-.014l-.826 1.416h.56c.335 0 .647.167.832.445l.244.365.964-1.735Zm4.582-.428.789 1.352h-.637c-.348 0-.671.181-.853.478l-.184.301-.807-1.407c.174-.141.33-.315.46-.522.127-.206.373-.307.61-.252.211.049.42.064.622.05Zm-3.47-.59c.222.356.742.356.964 0 .468-.752 1.361-1.122 2.223-.921.41.095.777-.273.681-.682-.2-.862.17-1.756.921-2.223.357-.222.357-.742 0-.964-.75-.467-1.121-1.361-.92-2.223.095-.41-.273-.777-.682-.681-.862.2-1.755-.17-2.223-.921-.222-.357-.742-.357-.964 0-.467.75-1.361 1.121-2.223.92-.41-.095-.777.273-.681.682.2.862-.17 1.756-.921 2.223-.357.222-.357.742 0 .964.75.467 1.121 1.361.92 2.223-.095.41.273.777.682.681.862-.2 1.756.17 2.223.921Z"
                          />
                        </svg>
                      </div>
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          border: "1px dotted #d1d1d1",
                          borderRadius: "10px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <svg
                          width={"40px"}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.749 11.957c2.545-.294 4.501-2.066 4.501-4.207 0-2.347-2.35-4.25-5.25-4.25s-5.25 1.903-5.25 4.25c0 2.141 1.956 3.913 4.501 4.207a.763.763 0 0 0-.001.043v4.25a.75.75 0 0 0 1.5 0v-4.25l-.001-.043Zm-.749-1.457c2.383 0 3.75-1.512 3.75-2.75s-1.367-2.75-3.75-2.75-3.75 1.512-3.75 2.75 1.367 2.75 3.75 2.75Z"
                          />
                          <path
                            fillRule="evenodd"
                            d="M8.5 15c0 .446-.083.872-.235 1.265a3.5 3.5 0 0 1-4.53-4.53 3.5 3.5 0 0 1 4.765 3.265Zm-3.5-2a2 2 0 0 1 2 2 2 2 0 0 1-2-2Z"
                          />
                          <path
                            fillRule="evenodd"
                            d="M11.5 15c0 .446.083.872.235 1.265a3.5 3.5 0 0 0 4.53-4.53 3.5 3.5 0 0 0-4.765 3.265Zm3.5-2a2 2 0 0 0-2 2 2 2 0 0 0 2-2Z"
                          />
                        </svg>
                      </div>
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          border: "1px dotted #d1d1d1",
                          borderRadius: "10px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <svg
                          width={"40px"}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M11.128 4.123c-.453-.95-1.803-.95-2.256 0l-1.39 2.912-3.199.421c-1.042.138-1.46 1.422-.697 2.146l2.34 2.222-.587 3.172c-.192 1.034.901 1.828 1.825 1.327l2.836-1.54 2.836 1.54c.924.501 2.017-.293 1.825-1.327l-.587-3.172 2.34-2.222c.762-.724.345-2.008-.697-2.146l-3.2-.421-1.389-2.912Z" />
                        </svg>
                      </div>
                      <div style={{ width: 40, height: 40 }}>
                        <DropZone>
                          <DropZone.FileUpload />
                        </DropZone>
                      </div>
                    </InlineStack>
                    <TextField
                      label="Button text"
                      value={RewardName}
                      onChange={handlesetRewardName}
                      autoComplete="off"
                    />
                  </BlockStack>
                </BlockStack>

              </Card>
            </Layout.Section>
            <Layout.Section>
              <Card roundedAbove="sm">
                <BlockStack gap="1600">
                  <Bleed marginBlock="400" marginInline="400">
                    <Box background="bg-surface-hover" padding="400">
                      <InlineStack blockAlign="center" align="space-between">
                        <Text as="h2" variant="headingLg">
                          Preview
                        </Text>
                        <Button
                          loading={isSaving}
                          disabled={isSaving}
                          onClick={handleWidgetSettingStore}
                        >
                          Save
                        </Button>
                      </InlineStack>
                    </Box>
                  </Bleed>
                </BlockStack>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "20px",
                    height: "700px",
                    border: "none",
                  }}
                >
                  <BlockStack gap="800">
                    <Widget style={style} />
                    <InlineStack align="end">
                      <ButtonWidget style={style} />
                    </InlineStack>
                  </BlockStack>
                </div>
              </Card>
            </Layout.Section>
          </Layout>
        </div>
      </BlockStack>
    </Page>
  );

  function hexToHsba(hex_color) {
    return rgbToHsb(hexToRgb(hex_color));
  }
}

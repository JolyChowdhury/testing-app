import React, { useState, useEffect, useCallback, useRef } from "react";
import { Box, Text, ColorPicker, TextField } from "@shopify/polaris";

const ColorPickerComponent = ({
  label,
  color,
  setColor,
  handleNewColorChange,
  pickerPosition,
  newFieldColor,
}) => {
  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const colorPickerRef = useRef(null);
  const colorBoxRef = useRef(null);
  const toggleColorPicker = () => {
    setColorPickerVisible((prevVisible) => !prevVisible);
  };
  const handleClickOutside = useCallback((event) => {
    if (
      colorPickerRef.current &&
      !colorPickerRef.current.contains(event.target) &&
      !colorBoxRef.current.contains(event.target) 
    ) {
      setColorPickerVisible(false); 
    }
  }, []);

  useEffect(() => {
    if (colorPickerVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [colorPickerVisible, handleClickOutside]);

  return (
    <div>
      <Text variant="headingMd">{label}</Text>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ width: "100%" }}>
          <TextField value={color} onChange={setColor} />
        </div>
        <Box>
          <div
            ref={colorBoxRef}
            style={{
              position: "relative",
              width: "40px",
              height: "40px",
              backgroundColor: color,
              cursor: "pointer",
            }}
            onClick={toggleColorPicker} 
          />
        </Box>
        {colorPickerVisible && (
          <div
            ref={colorPickerRef}
            style={{
              position: "absolute",
              zIndex: 99,
              top: pickerPosition,
              right: "5%",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <ColorPicker onChange={handleNewColorChange} color={newFieldColor} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorPickerComponent;

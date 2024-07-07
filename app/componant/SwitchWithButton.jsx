import { Button, Text } from "@shopify/polaris";
import React, { useState } from "react";
import SwitchButton from "./switch";

const ButtonOfSwitches = ({
  numberofSwitches = 5,
  singleSwitchKey = "switch1",
}) => {
  const createInitialSwitchStates = (num) => {
    const states = {};
    for (let i = 1; i <= num; i++) {
      states[`switch${i}`] = false;
    }
    return states;
  };

  const [switchStates, setSwitchStates] = useState(
    createInitialSwitchStates(numberofSwitches),
  );

  const handleSwitchChange = (key, isActive) => {
    console.log(
      ` ${singleSwitchKey} is now ${isActive ? "Active" : "Inactive"}`,
    );
    setSwitchStates((prevStates) => ({
      ...prevStates,
      [key]: isActive,
    }));
  };

  const handleToggle = (key) => {
    setSwitchStates((prevStates) => ({
      ...prevStates,
      [key]: !prevStates[key],
    }));
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          onClick={() => handleToggle(singleSwitchKey)}
          ariaPressed={switchStates[singleSwitchKey]}
        >
          <Text variation="strong">
            {switchStates[singleSwitchKey] ? "Active" : "Inactive"}
          </Text>
        </Button>
        <SwitchButton
          initialValue={switchStates[singleSwitchKey]}
          onChange={(isActive) => handleSwitchChange(singleSwitchKey, isActive)}
        />
      </div>
    </div>
  );
};

export default ButtonOfSwitches;

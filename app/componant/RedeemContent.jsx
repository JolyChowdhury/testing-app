// RedeemContent.js
import { Button, Text, AppProvider } from "@shopify/polaris";
import { useNavigate } from "react-router-dom";
import SwitchWithButton from "./SwitchWithButton";

export default function RedeemContent() {
  const navigate = useNavigate();
  
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "20px",
        marginTop: "20px",
        borderTop: "1px solid rgb(217, 217, 217)",
      }}
    >
      <div style={{ marginRight: "10px" }}>
        <Text variant="headingMd" as="h5">
          Sign Up reward
        </Text>
        <Text variant="bodyLg" as="p">
          Offer a welcome reward upon a user registration
        </Text>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "10px",
          marginTop: "20px",
        }}
      >
        <div style={{ marginRight: "20px" }}>
          <Button onClick={() => navigate("/app/sign_up_program?tab=redeem")}>
            Edit
          </Button>
        </div>
        <AppProvider
          i18n={{
            Polaris: {
              Common: { checkbox: { on: "On", off: "Off" } },
            },
          }}
        >
          <SwitchWithButton
            numberofSwitches={5}
            singleSwitchKey="Sign Up reward"
          />
        </AppProvider>
      </div>
    </div>
  );
}

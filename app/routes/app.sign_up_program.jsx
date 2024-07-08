// SignUpProgram.jsx
import { Page, Button, Layout, Text } from "@shopify/polaris";
import { ArrowLeftIcon } from "@shopify/polaris-icons";
import { useNavigate } from "react-router-dom";
import TabsComponent from '../componant/TabsComponent';
import { tabsData } from '../componant/tabsdata';

export default function SignUpProgram() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/app/reward');
  };

  const defaultTabContent = (
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
          <Button onClick={() => {}}>Edit</Button>
        </div>
        <AppProvider
          i18n={{
            Polaris: { Common: { checkbox: { on: "On", off: "Off" } } },
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

  return (
    <Page
      title="Reward Program"
      subtitle="Set reward points rules, points redeem rules"
      secondaryActions={<Button variant="tertiary">Status: Free Plan</Button>}
    >
      <Layout>
        <Layout.Section>
          <Button plain icon={ArrowLeftIcon} onClick={goBack}>Back</Button>
          <TabsComponent tabsData={tabsData} defaultTabContent={defaultTabContent} />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
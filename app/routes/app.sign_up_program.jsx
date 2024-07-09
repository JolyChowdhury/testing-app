// SignUpProgram.jsx
import { Page, Button, Layout, Card, Form, BlockStack, Text } from "@shopify/polaris";
import { ArrowLeftIcon } from "@shopify/polaris-icons";
import { useNavigate } from "react-router-dom";
import TabsComponent from '../componant/TabsComponent';

export default function SignUpProgram() {
  const navigate = useNavigate();

  const handleBackClick  = () => {
    navigate('/app/reward');
  };

  

  return (
    <Page
      title="Reward Program"
      subtitle="Set reward points rules, points redeem rules"
      secondaryActions={<Button variant="tertiary">Status: Free Plan</Button>}
    >
      <Layout>
        <Layout.Section>
        <TabsComponent hideContentInitially={true} />
        </Layout.Section>
        <Layout.Section>
          <Card sectioned>
            <Form method="POST">
              <div style={{ marginBottom: "20px" }}>
                <BlockStack gap={{ xs: "800", sm: "400" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Button plain icon={ArrowLeftIcon} onClick={handleBackClick} />
                      <div style={{ marginLeft: "10px" }}>
                        <Text variant="headingLg" as="h3">
                          Rewards on Purchase
                        </Text>
                      </div>
                    </div>
                    <Button submit>Create</Button>
                  </div>
                </BlockStack>
              </div>
            </Form>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
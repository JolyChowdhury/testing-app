import { useState, useCallback } from "react";
import {
  AppProvider,
  Card,
  FooterHelp,
  BlockStack,
  Text,
  Button,
  Page,
  InlineStack,
  Collapsible,
  Grid,
  Box,
  RangeSlider,
  Icon,
  Divider,
  Badge,
} from "@shopify/polaris";
import { StatusActiveIcon, ChevronDownIcon, ChevronUpIcon } from "@shopify/polaris-icons";

export default function PricingPlan() {
  const [ShowCard, setShowCard] = useState(false);

  // const handleFooterHelpClick = useCallback(() => setShowCard((ShowCard) => ShowCard));

  const handleFooterHelpClick = () => {
    setShowCard(!ShowCard);
};
  const [rangeValue, setRangeValue] = useState(32);

  const handleRangeSliderChange = useCallback(
    (value) => setRangeValue(value),
    [],
  );

  return (
    <Page title="Pricing plan" backAction={{ url: "/app/point_expiry" }}>
      <AppProvider i18n={{}}>
        <div style={{ padding: "20px 0" }}>
          <Grid columns={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}>
            <Grid.Cell>
              <Card>
                <BlockStack>
                  <Text as="h5" variant="headingLg">
                    GROWTH
                  </Text>
                  <div
                    style={{
                      marginTop: "20px",
                      display: "flex",
                      marginBottom: "15px",
                    }}
                  >
                    <Text as="h3" variant="heading2xl">
                      $39
                    </Text>
                    <p>/month</p>
                  </div>
                  <RangeSlider
                    label="Pay as you pricing - up to 1,500 monthly orders."
                    value={rangeValue}
                    onChange={handleRangeSliderChange}
                    output
                  />
                  <div style={{ marginTop: "10px" }}>
                    <Text fontWeight="bold" as="p">
                      Suitable for small businesses
                    </Text>
                  </div>
                  <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                    <Text as="h5" variant="headingLg">
                      Everything in Free Forever and ...
                    </Text>
                  </div>

                  <BlockStack gap="200">
                    <SubscriptionList text="Monthly order limit: 500" />
                    <SubscriptionList text="Advanced points & rewards program" />
                    <SubscriptionList text="Manage users" />
                    <SubscriptionList text="Display methods: widget, loyalty page, hyperlink" />
                    <SubscriptionList text="All 250+ displayed languages" />
                  </BlockStack>
                  <div style={{ margin: "10px 0" }}>
                    <Button fullWidth variant="primary" tone="success">
                      Start 3 days free trial
                    </Button>
                  </div>
                </BlockStack>
              </Card>
            </Grid.Cell>
            <Grid.Cell>
              <Card>
                <BlockStack>
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <Text as="h5" variant="headingLg">
                      ADVANCED
                    </Text>
                    <Badge tone="info">Most popular</Badge>
                  </div>
                  <div
                    style={{
                      marginTop: "20px",
                      display: "flex",
                      marginBottom: "15px",
                    }}
                  >
                    <Text as="h3" variant="heading2xl">
                      $125
                    </Text>
                    <p>/month</p>
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    <Text fontWeight="bold" as="p">
                      Suitable for medium businesses
                    </Text>
                  </div>
                  <div style={{ marginTop: "20px", marginBottom: "10px" }}>
                    <Text as="h5" variant="headingLg">
                      Everything in Free Forever and ...
                    </Text>
                  </div>
                  <BlockStack gap="200">
                    <SubscriptionList text="Monthly order limit: Unlimited" />
                    <SubscriptionList text="VIP tiers"/>
                    <SubscriptionList text="Unlock custom CSS" />
                    <SubscriptionList text="All 250+ displayed languages" />
                    <SubscriptionList text="Manage users" />
                    <SubscriptionList text="Advanced custom development" />
                    <SubscriptionList text="Support priority" />
                  </BlockStack>

                  <div style={{ margin: "10px 0" }}>
                    <Button fullWidth variant="primary" tone="success">
                      Start 3 days free trial
                    </Button>
                  </div>
                </BlockStack>
              </Card>
            </Grid.Cell>
          </Grid>
        </div>
      </AppProvider>

      <Card>
        <BlockStack>
          <Text as="p" variant="bodyLg">
            Free
          </Text>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <div style={{ display: "flex" }}>
              <Text as="h3" variant="heading2xl">
                $0
              </Text>
              <p>/month</p>
            </div>
            <div>
              <Button disabled>Your current plan</Button>
            </div>
          </div>

          <div style={{ marginTop: "10px" }}>
            <Text fontWeight="bold" as="p">
              Suitable for start-ups
            </Text>
          </div>
        </BlockStack>
      </Card>
      <div style={{ margin: "20px 0" }}>
      <Card>
        <BlockStack align="center">
          <Text as="p" variant="bodyLg">
          Just getting started with your business? We have a free plan with some basics.
          </Text>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <div style={{ display: "flex" }}>
              <Text as="h3" variant="heading2xl">
                $0
              </Text>
              <p>/month</p>
            </div>
            <div>
              <Button disabled>Your current plan</Button>
            </div>
          </div>

          <div style={{ marginTop: "10px" }}>
            <Text fontWeight="bold" as="p">
              Suitable for start-ups
            </Text>
          </div>
        </BlockStack>
      </Card>
      </div>
      <div style={{ height: "400px", margin: "20px 0 100px 0" }}>
        <Card sectioned>
          <div style={{ margin: "5px 0 20px 0" }}>
            <Text as="h3" variant="headingLg">
              Frequently asked questions
            </Text>
          </div>
          <Divider />
          {faqItems.map((item, index) => (
            <FAQCollapsible key={index} question={item.question} answer={item.answer} />
          ))}
        </Card>
        <div style={{ margin: "20px 0", cursor: "pointer" }}>
          <FooterHelp>
            <Button variant="tertiary" onClick={handleFooterHelpClick}>
            <InlineStack gap="100" wrap={true} blockAlign="center">
              <Text as="span">Compare plans</Text>
              <Icon
                source={ChevronDownIcon}
                tone="base"
              />
            </InlineStack>
            </Button>
          </FooterHelp>
        </div>
        
        { ShowCard && ( 
        <Card>
          <Text as="h2" variant="bodyMd">
            Content inside a card
          </Text>
        </Card>
        )}
      </div>
    </Page>
  );
}








const SubscriptionList = ({ text }) => (
  <InlineStack gap="100" wrap={false} blockAlign="center">
    <Box>
      <Icon source={StatusActiveIcon} tone="base" />
    </Box>
    <Text variant="bodySm" as="p">
      {text}
    </Text>
  </InlineStack>
);


const FAQCollapsible = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((open) => !open);

  return (
    <>
      <div style={{ margin: "20px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }} onClick={handleToggle} aria-expanded={open} aria-controls={question}>
          <span>{question}</span>
        <div>
          <Icon source={open ? ChevronUpIcon : ChevronDownIcon} />
        </div>
        </div>
        <Collapsible
          open={open}
          id={question}
          transition={{
            duration: "500ms",
            timingFunction: "ease-in-out",
          }}
          expandOnPrint
        >
          <BlockStack>
            <Text as="p" variant="bodyMd">{answer}</Text>
          </BlockStack>
        </Collapsible>
      </div>
      <Divider />
    </>
  );
};



  const faqItems = [
    {
      question: 'What are monthly order limits?',
      answer: 'If you go over the scale plan limit, you may need to upgrade to a higher plan or pay for additional orders.'
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'If you go over the scale plan limit, you may need to upgrade to a higher plan or pay for additional orders.'
    },
    {
      question: 'Are there any distinct features between the different plans?',
      answer: 'If you go over the scale plan limit, you may need to upgrade to a higher plan or pay for additional orders.'
    },
    {
      question: 'Can I cancel my subscription at any time?',
      answer: 'Yes, you can cancel your subscription at any time through your account settings.'
    }
  ];
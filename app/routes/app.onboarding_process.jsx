import React, { useState, useCallback } from "react";
import {
  Page,
  ProgressBar,
  Card,
  Box,
  Text,
  Divider,
  Badge,
  InlineStack,
  ChoiceList,
  Button,
} from "@shopify/polaris";

export default function OnboardingProcess() {
  const [selectedReward, setSelectedReward] = useState([]);
  const [selectedCustomerReferral, setSelectedCustomerReferral] = useState([]);
  const [selectedFriendReferral, setSelectedFriendReferral] = useState([]);
  const [rewardCompleted, setRewardCompleted] = useState(false);
  const [referralCompleted, setReferralCompleted] = useState(false);

  const handleRewardChange = useCallback((value) => {
    setSelectedReward(value);
  }, []);

  const handleCustomerReferralChange = useCallback((value) => {
    setSelectedCustomerReferral(value);
  }, []);

  const handleFriendReferralChange = useCallback((value) => {
    setSelectedFriendReferral(value);
  }, []);

  const handleContinueReward = useCallback(() => {
    if (selectedReward.length > 0) {
      setRewardCompleted(true);
    }
  }, [selectedReward]);

  const handleContinueReferral = useCallback(() => {
    if (
      selectedCustomerReferral.length > 0 &&
      selectedFriendReferral.length > 0
    ) {
      setReferralCompleted(true);
    }
  }, [selectedCustomerReferral, selectedFriendReferral]);

  const DotSvg = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M6 10C6 10.8284 5.32843 11.5 4.5 11.5C3.67157 11.5 3 10.8284 3 10C3 9.17157 3.67157 8.5 4.5 8.5C5.32843 8.5 6 9.17157 6 10Z"
        fill="#4A4A4A"
      />
      <path
        d="M11.5 10C11.5 10.8284 10.8284 11.5 10 11.5C9.17157 11.5 8.5 10.8284 8.5 10C8.5 9.17157 9.17157 8.5 10 8.5C10.8284 8.5 11.5 9.17157 11.5 10Z"
        fill="#4A4A4A"
      />
      <path
        d="M15.5 11.5C16.3284 11.5 17 10.8284 17 10C17 9.17157 16.3284 8.5 15.5 8.5C14.6716 8.5 14 9.17157 14 10C14 10.8284 14.6716 11.5 15.5 11.5Z"
        fill="#4A4A4A"
      />
    </svg>
  );

  const choices = [
    {
      label: (
        <span>
          1% of purchase value <Badge tone="info">Recommended</Badge>
        </span>
      ),
      value: "1%",
    },
    { label: "3% of purchase value", value: "3%" },
    { label: "5% of purchase value", value: "5%" },
  ];

  const calculateProgress = () => {
    let progress = 0;
    if (rewardCompleted) {
      progress += 50;
    }
    if (referralCompleted) {
      progress += 50;
    }
    return progress;
  };

  const stepsCompleted = () => {
    let completed = 0;
    if (rewardCompleted) completed += 1;
    if (referralCompleted) completed += 1;
    return completed;
  };

  return (
    <Page>
      <Card roundedAbove="sm">
        <Box padding="200">
          <InlineStack wrap={false} align="space-between" blockAlign="center">
            <InlineStack wrap={false} blockAlign="center" gap="400">
              <Text as="h2" variant="headingLg">
                Welcome to Reward Race
              </Text>
            </InlineStack>
            <DotSvg />
          </InlineStack>
          <Text as="p" variant="bodyMd">
            Complete the onboarding process to get started
          </Text>

          <div
            style={{
              marginBottom: "32px",
              marginTop: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text as="h2" variant="headingSm" fontWeight="bold">
              {stepsCompleted()} out of 2 steps are completed
            </Text>
            <div style={{ width: 700, marginLeft: "auto" }}>
              <ProgressBar progress={calculateProgress()} tone="primary" />
            </div>
          </div>
          <Divider />

          <div
            style={{
              background: "var(--p-color-bg-fill-tertiary)",
              cursor: "pointer",
              padding: "15px",
              borderRadius: "10px",
              marginTop: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ marginRight: "15px", marginTop: "5px" }}>
                {rewardCompleted ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <rect width="20" height="20" rx="10" fill="#303030" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.8047 6.19526C15.0651 6.45561 15.0651 6.87772 14.8047 7.13807L9.02696 12.9158C8.76661 13.1762 8.3445 13.1762 8.08415 12.9158L5.19526 10.027C4.93491 9.76661 4.93491 9.3445 5.19526 9.08415C5.45561 8.8238 5.87772 8.8238 6.13807 9.08415L8.55556 11.5016L13.8619 6.19526C14.1223 5.93491 14.5444 5.93491 14.8047 6.19526Z"
                      fill="white"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="9"
                      stroke="#6D7175"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                  </svg>
                )}
              </div>
              <Text as="p" variant="headingMd">
                Reward Program
              </Text>
            </div>

            {!rewardCompleted && (
              <div style={{ marginLeft: "35px", marginTop: "10px" }}>
                <Text as="p" variant="body">
                  How much reward you want to give back as a reward to your
                  customer
                </Text>
                <ChoiceList
                  choices={choices}
                  selected={selectedReward}
                  onChange={handleRewardChange}
                />
                <div
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <Button
                    onClick={handleContinueReward}
                    variant="primary"
                    disabled={!selectedReward.length}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}
          </div>

          {rewardCompleted && (
            <div
              style={{
                background: "var(--p-color-bg-fill-tertiary)",
                cursor: "pointer",
                padding: "15px",
                borderRadius: "10px",
                marginTop: "30px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "15px", marginTop: "5px" }}>
                  {referralCompleted ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <rect width="20" height="20" rx="10" fill="#303030" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.8047 6.19526C15.0651 6.45561 15.0651 6.87772 14.8047 7.13807L9.02696 12.9158C8.76661 13.1762 8.3445 13.1762 8.08415 12.9158L5.19526 10.027C4.93491 9.76661 4.93491 9.3445 5.19526 9.08415C5.45561 8.8238 5.87772 8.8238 6.13807 9.08415L8.55556 11.5016L13.8619 6.19526C14.1223 5.93491 14.5444 5.93491 14.8047 6.19526Z"
                        fill="white"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <circle
                        cx="10"
                        cy="10"
                        r="9"
                        stroke="#6D7175"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                      />
                    </svg>
                  )}
                </div>
                <Text as="p" variant="headingMd">
                  Referral Program
                </Text>
              </div>

              {!referralCompleted && (
                <div>
                  <div
                    style={{
                      marginLeft: "35px",
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <Text as="p" variant="body">
                      How much rewards you want to offer to the customer:
                    </Text>
                    <ChoiceList
                      choices={[
                        { label: "$3 worth of points.", value: "3%" },
                        { label: "$5 worth of points.", value: "5%" },
                        { label: "$10 worth of points.", value: "10%" },
                      ]}
                      selected={selectedCustomerReferral}
                      onChange={handleCustomerReferralChange}
                    />
                  </div>
                  <div
                    style={{
                      marginLeft: "35px",
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <Text as="p" variant="body">
                      How much rewards you want to offer to the refferred
                      friend:
                    </Text>
                    <ChoiceList
                      choices={[
                        { label: "$3 worth of points.", value: "3%" },
                        { label: "$5 worth of points.", value: "5%" },
                        { label: "$10 worth of points.", value: "10%" },
                      ]}
                      selected={selectedFriendReferral}
                      onChange={handleFriendReferralChange}
                    />
                  </div>
                  <div
                    style={{
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <Button
                      onClick={handleContinueReferral}
                      variant="primary"
                      disabled={
                        !selectedCustomerReferral.length ||
                        !selectedFriendReferral.length
                      }
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </Box>
      </Card>
    </Page>
  );
}

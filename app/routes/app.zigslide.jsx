import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Pie } from "react-chartjs-2";
import { Page, Card, Text, Box, InlineStack, BlockStack, Divider, Icon, ProgressBar, InlineGrid, Badge, Tooltip } from "@shopify/polaris";
import {
  Chart as ChartJS,
  ArcElement,
  Legend,
} from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  ArrowRightIcon, InfoIcon
} from '@shopify/polaris-icons';

ChartJS.register(ArcElement, Legend, ChartDataLabels);

const PieChartExample = ({ onDataUpdate }) => {
  const data = useMemo(() => ({
    labels: ['Red', 'Blue', 'Green'],
    datasets: [
      {
        label: 'Votes',
        data: [3, 3, 3],
        backgroundColor: ['#FF6384', '#36A2EB', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#4BC0C0'],
      },
    ],
  }), []);

  useEffect(() => {
    if (onDataUpdate) {
      onDataUpdate(data.datasets[0].data);
    }
  }, [data, onDataUpdate]);

  const options = useMemo(() => ({
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: '#000000',
        anchor: 'end',
        align: 'end',
        offset: 10,
        padding: {
          top: 10,
          left: 10,
          right: 10,
        },
        formatter: (value, context) => {
          const label = context.chart.data.labels[context.dataIndex];
          const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
          const percentage = ((value / total) * 100).toFixed(1);
          return `${label}: ${percentage}% (${value} votes)`;
        },
        clip: false,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    layout: {
      padding: {
        bottom: 100,
      },
    },
  }), []);

  return (
    <Pie data={data} options={options} />
  );
};

const CustomProgressBar = ({ count, label, percentage, progress }) => {
  return (
    <BlockStack gap="200">
      <InlineStack align="space-between" blockAlign="center">
        <InlineStack align="space-between" blockAlign="center" gap="1600">
          <Text as="h4" variant="headingMd">{count}</Text>
          <Text as="h4" variant="headingMd">{label}</Text>
        </InlineStack>
        <Text as="h4" variant="headingMd">{percentage}</Text>
      </InlineStack>
      <div style={{ width: '100%' }}>
        <ProgressBar progress={progress} size="small" />
      </div>
    </BlockStack>
  );
};

export default function SlideDashboard() {
  const [progressData, setProgressData] = useState([0, 0, 0]);
  const handleDataUpdate = useCallback((data) => {
    const total = data.reduce((acc, val) => acc + val, 0);
    const percentages = data.map(value => ((value / total) * 100).toFixed(1));
    setProgressData(percentages);
  }, []);

  return (
    <Page title="Analytics">
      <Box paddingBlockEnd="800">
        <BlockStack gap="200">
          <InlineStack align="center">
            <Text as="h4" variant="headingLg">Slide Results</Text>
          </InlineStack>
          <Card>
            <BlockStack gap="200">
              <Text as="h4" variant="headingMd">TYPE</Text>
              <InlineStack align="start" gap="200" blockAlign="center">
                <div style={{ width: "20px", height: "20px", position: "relative", backgroundColor: "#b3c2d7", borderRadius: "5px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="32" height="32" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path fill="#616161" fill-rule="evenodd" d="M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z"></path></svg>
                </div>
                <Box padding="200" background="bg-fill-secondary" borderRadius="100">
                  <Text as="h4" variant="headingMd">Multi Choice</Text>
                </Box>
              </InlineStack>
              <Text as="h4" variant="headingMd">TITLE</Text>
              <Text as="h4" variant="headingMd">What colors do you prefer?</Text>
              <Divider />
              <InlineStack align="center">
                <div style={{ width: '100%', height: '400px' }}>
                  <PieChartExample onDataUpdate={handleDataUpdate} />
                </div>
              </InlineStack>
              <Divider />
              <Text as="h4" variant="headingMd">RESPONSES</Text>
              <CustomProgressBar
                count="3"
                label="Red"
                percentage={`${progressData[0] || 0}%`}
                progress={progressData[0] || 0}
              />
              <CustomProgressBar
                count="3"
                label="Green"
                percentage={`${progressData[1] || 0}%`}
                progress={progressData[1] || 0}
              />
              <CustomProgressBar
                count="3"
                label="Blue"
                percentage={`${progressData[2] || 0}%`}
                progress={progressData[2] || 0}
              />
              <BlockStack gap="600">
                <CustomProgressBar
                  count="3"
                  label="Orange"
                  percentage="0%"
                  progress={0}
                />
                <Box style={{
                  padding: "10px",
                  backgroundColor: '#f0f0f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '4px'
                }}>
                  <InlineStack blockAlign="center" gap="200">
                    <Text as="h4" variant="headingMd">See who responded</Text>
                    <Icon
                      source={ArrowRightIcon}
                      tone="base"
                    />
                  </InlineStack>
                </Box>
                <Divider />
              </BlockStack>
              <InlineGrid columns={3}>
                  <BlockStack gap="200" inlineAlign="center">
                    <InlineStack blockAlign="center" gap="100">
                      <Text variant="headingSm" as="h6">
                        VIEW COUNT
                      </Text>
                      <Tooltip content="This title will be used for your reference so pick something simple that you can easily identify.">
                        <Icon source={InfoIcon} tone="subdued" />
                      </Tooltip>
                    </InlineStack>
                    <InlineStack gap="100" wrap={false} blockAlign="center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="32" height="32" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                        <path fill="#b3c2d7" fill-rule="evenodd" d="M13 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-1.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path>
                        <path fill="#b3c2d7" fill-rule="evenodd" d="M10 4c-2.476 0-4.348 1.23-5.577 2.532a9.266 9.266 0 0 0-1.4 1.922 5.98 5.98 0 0 0-.37.818c-.082.227-.153.488-.153.728s.071.501.152.728c.088.246.213.524.371.818.317.587.784 1.27 1.4 1.922 1.229 1.302 3.1 2.532 5.577 2.532 2.476 0 4.348-1.23 5.577-2.532a9.265 9.265 0 0 0 1.4-1.922 5.98 5.98 0 0 0 .37-.818c.082-.227.153-.488.153-.728s-.071-.501-.152-.728a5.984 5.984 0 0 0-.371-.818 9.269 9.269 0 0 0-1.4-1.922c-1.229-1.302-3.1-2.532-5.577-2.532Zm-5.999 6.002v-.004c.004-.02.017-.09.064-.223a4.5 4.5 0 0 1 .278-.608 7.768 7.768 0 0 1 1.17-1.605c1.042-1.104 2.545-2.062 4.487-2.062 1.942 0 3.445.958 4.486 2.062a7.77 7.77 0 0 1 1.17 1.605c.13.24.221.447.279.608.047.132.06.203.064.223v.004c-.004.02-.017.09-.064.223a4.503 4.503 0 0 1-.278.608 7.768 7.768 0 0 1-1.17 1.605c-1.042 1.104-2.545 2.062-4.487 2.062-1.942 0-3.445-.958-4.486-2.062a7.766 7.766 0 0 1-1.17-1.605 4.5 4.5 0 0 1-.279-.608c-.047-.132-.06-.203-.064-.223Z"></path>
                      </svg>
                      <Text variant="headingLg" as="h5">
                        0
                      </Text>
                    </InlineStack>
                  </BlockStack>

                <BlockStack>
                  <InlineStack align="center" blockAlign="center">
                    <Box
                      style={{
                        height: '60px',
                        width: '1px',
                        backgroundColor: '#cccccc',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "center"
                      }}
                    />
                  </InlineStack>
                </BlockStack>

                  <BlockStack gap="200" inlineAlign="center">
                    <InlineStack>
                      <Badge tone="info">FIXED-CHOICE</Badge>
                    </InlineStack>
                    <InlineStack blockAlign="center" gap="100">
                      <Text variant="headingSm" as="h6">
                        RESPONSES
                      </Text>
                      <Tooltip content="This title will be used for your reference so pick something simple that you can easily identify.">
                        <Icon source={InfoIcon} tone="subdued" />
                      </Tooltip>
                    </InlineStack>
                    <InlineStack gap="100" wrap={false} blockAlign="center">
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          position: "relative",
                          backgroundColor: "#b3c2d7",
                          borderRadius: "5px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="32" height="32" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                          <path fill="#616161" fill-rule="evenodd" d="M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z"></path>
                        </svg>
                      </div>
                      <Text variant="headingLg" as="h5">
                        9
                      </Text>
                    </InlineStack>
                  </BlockStack>
              </InlineGrid>

            </BlockStack>
          </Card>
        </BlockStack>
      </Box>
    </Page>
  );
}

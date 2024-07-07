import React, { useState, useCallback } from 'react';
import { Tabs, Button, Text } from '@shopify/polaris';
import { useNavigate } from 'react-router-dom';

const excludeRoutes = ['app/sign_up_program', 'app/signup-program'];

function shouldExcludeRoute(currentRoute) {
  return excludeRoutes.some(route => currentRoute.includes(route));
}

const TabsComponent = ({ currentRoute, initialSelected }) => {
  const [selected, setSelected] = useState(initialSelected);

  const [showContent, setShowContent] = useState(!shouldExcludeRoute(currentRoute));
  const navigate = useNavigate();

  const handleTabChange = useCallback((selectedTabIndex) => {
    const selectedTabId = tabs[selectedTabIndex].id;
    console.log( selectedTabId);
    setSelected(selectedTabId);
    setShowContent(true); 
  }, []);

  const handleNavigation = (tabIndex, path) => {
    navigate(path, { state: { selectedTab: tabIndex } });
  };

  const tabs = [
    { id: "reward", content: "Ways to earn points" },
    { id: "ways-to-redeem", content: "Ways to redeem points" },
    { id: "rules", content: "Point rules" },
    { id: "activity", content: "Activity" },
    { id: "expire", content: "Points Expiry" },
  ];

  const tabContent = [
    <div key="reward">
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
          <Text variant="headingMd" as="h5">Sign Up reward</Text>
          <Text variant="bodyLg" as="p">Offer a welcome reward upon a user registration</Text>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px", marginTop: "20px" }}>
          <div style={{ marginRight: "20px" }}>
            <Button onClick={() => handleNavigation(0, '/app/sign_up_program')}>Edit</Button>
          </div>
        </div>
      </div>
    </div>,
    <div key="ways-to-redeem">
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
          <Text variant="headingMd" as="h5">Purchase discount</Text>
          <Text variant="bodyLg" as="p">e.g (100 points = $1)</Text>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px", marginTop: "20px" }}>
          <div style={{ marginRight: "20px" }}>
            <Button onClick={() => handleNavigation(1, '/signup-program')}>Edit</Button>
          </div>
        </div>
      </div>
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
          <Text variant="headingMd" as="h5">Free Shipping</Text>
          <Text variant="bodyLg" as="p">Enjoy free shipping on all orders as a loyalty member</Text>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px", marginTop: "20px" }}>
          <div style={{ marginRight: "20px" }}>
            <Button onClick={() => handleNavigation(1, '/signup-program')}>Edit</Button>
          </div>
        </div>
      </div>
    </div>,
    <div key="rules"></div>,
    <div key="activity"></div>,
    <div key="expire"></div>
  ];

  return (
    <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
      {tabContent[selected]}
      {/* {showContent && tabContent[selected]} */}
    </Tabs>
  );
};

export default TabsComponent;

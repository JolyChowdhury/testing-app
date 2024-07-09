// import { Tabs, Card, Text, Button, AppProvider } from "@shopify/polaris";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import SwitchWithButton from "./SwitchWithButton";

// const tabsData = [
//   { id: "reward", content: "Reward" },
//   { id: "redeem", content: "Redeem" },
//   { id: "activity", content: "Activity" },
// ];

// export default function TabsComponent({ hideContentInitially = true }) {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const initialTab = queryParams.get("tab");
//   const initialTabIndex = tabsData.findIndex((tab) => tab.id === initialTab);

//   const [selectedTab, setSelectedTab] = useState(
//     initialTabIndex >= 0 ? initialTabIndex : 0,
//   );
//   const [contentVisible, setContentVisible] = useState(!hideContentInitially);

//   const handleTabChange = (selectedTabIndex) => {
//     setSelectedTab(selectedTabIndex);
//     const tabId = tabsData[selectedTabIndex].id;
//     navigate(`?tab=${tabId}`);
//     setContentVisible(true); // Show content when a tab is clicked
//   };

//   useEffect(() => {
//     if (initialTabIndex >= 0) {
//       setSelectedTab(initialTabIndex);
//     }
//   }, [initialTabIndex]);

//   return (
//     <>
//       <Tabs tabs={tabsData} selected={selectedTab} onSelect={handleTabChange} />
//       {contentVisible && (
//         <div className="tab-content">
//           {selectedTab === 0 && (
//             <div key="reward">
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   marginBottom: "20px",
//                   marginTop: "20px",
//                   borderTop: "1px solid rgb(217, 217, 217)",
//                 }}
//               >
//                 <div style={{ marginRight: "10px" }}>
//                   <Text variant="headingMd" as="h5">
//                     Rewards on Purchase
//                   </Text>
//                   <Text variant="bodyLg" as="p">
//                     Offer to give reward points on purchase from the store
//                   </Text>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     marginBottom: "10px",
//                     marginTop: "20px",
//                   }}
//                 >
//                   <div style={{ marginRight: "20px" }}>
//                     <Button
//                       onClick={() =>
//                         navigate("/app/ways_to_earn_purchased_reward")
//                       }
//                     >
//                       Edit
//                     </Button>
//                   </div>
//                   <AppProvider
//                     i18n={{
//                       Polaris: {
//                         Common: { checkbox: { on: "On", off: "Off" } },
//                       },
//                     }}
//                   >
//                     <SwitchWithButton
//                       numberofSwitches={5}
//                       singleSwitchKey="Rewards on Purchase"
//                     />
//                   </AppProvider>
//                 </div>
//               </div>
//             </div>
//           )}
//           {selectedTab === 1 && (
//             <div key="redeem">
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   marginBottom: "20px",
//                   marginTop: "20px",
//                   borderTop: "1px solid rgb(217, 217, 217)",
//                 }}
//               >
//                 <div style={{ marginRight: "10px" }}>
//                   <Text variant="headingMd" as="h5">
//                     Sign Up reward
//                   </Text>
//                   <Text variant="bodyLg" as="p">
//                     Offer a welcome reward upon a user registration
//                   </Text>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     marginBottom: "10px",
//                     marginTop: "20px",
//                   }}
//                 >
//                   <div style={{ marginRight: "20px" }}>
//                     <Button onClick={() => navigate("/app/sign_up_program")}>
//                       Edit
//                     </Button>
//                   </div>
//                   <AppProvider
//                     i18n={{
//                       Polaris: {
//                         Common: { checkbox: { on: "On", off: "Off" } },
//                       },
//                     }}
//                   >
//                     <SwitchWithButton
//                       numberofSwitches={5}
//                       singleSwitchKey="Sign Up reward"
//                     />
//                   </AppProvider>
//                 </div>
//               </div>
//             </div>
//           )}
//           {selectedTab === 2 && (
//             <div key="activity">
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   marginBottom: "20px",
//                   marginTop: "20px",
//                   borderTop: "1px solid rgb(217, 217, 217)",
//                 }}
//               >
//                 <div style={{ marginRight: "10px" }}>
//                   <Text variant="headingMd" as="h5">
//                     Sign Up reward
//                   </Text>
//                   <Text variant="bodyLg" as="p">
//                     Offer a welcome reward upon a user registration
//                   </Text>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     marginBottom: "10px",
//                     marginTop: "20px",
//                   }}
//                 >
//                   <div style={{ marginRight: "20px" }}>
//                     <Button
//                       onClick={() =>
//                         navigate("/app/ways_to_earn_purchased_reward")
//                       }
//                     >
//                       Edit
//                     </Button>
//                   </div>
//                   <AppProvider
//                     i18n={{
//                       Polaris: {
//                         Common: { checkbox: { on: "On", off: "Off" } },
//                       },
//                     }}
//                   >
//                     <SwitchWithButton
//                       numberofSwitches={5}
//                       singleSwitchKey="Sign Up reward"
//                     />
//                   </AppProvider>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </>
//   );
// }








import { Tabs,Card, SkeletonTabs } from "@shopify/polaris";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import RewardsContent from "./RewardsContent";
import RedeemContent  from "./RedeemContent";
import ActivityContent  from "./ActivityContent";


const tabsData = [
  { id: "reward", content: "Reward" },
  { id: "redeem", content: "Redeem" },
  { id: "activity", content: "Activity" },
];

export default function TabsComponent({ hideContentInitially = true }) {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialTab = queryParams.get("tab");
  const initialTabIndex = tabsData.findIndex((tab) => tab.id === initialTab);

  const [selectedTab, setSelectedTab] = useState(
    initialTabIndex >= 0 ? initialTabIndex : 0
  );
  const [contentVisible, setContentVisible] = useState(!hideContentInitially);
  const [isLoading, setIsLoading] = useState(false);

  const handleTabChange = (selectedTabIndex) => {
    setIsLoading(true);
    setSelectedTab(selectedTabIndex);
    const tabId = tabsData[selectedTabIndex].id;
    navigate(`/app/reward?tab=${tabId}`);
    setTimeout(() => {
      setContentVisible(true);
      setIsLoading(false);
    }, 500); 
  };

  useEffect(() => {
    if (initialTabIndex >= 0) {
      setSelectedTab(initialTabIndex);
    }
  }, [initialTabIndex]);

  const renderTabContent = () => {
    if (isLoading) {
      return (
          <SkeletonTabs />
      );
    }
    switch (selectedTab) {
      case 0:
        return <RewardsContent />;
      case 1:
        return <RedeemContent />;
      case 2:
        return <ActivityContent />;
      default:
        return null;
    }
  };

  return (
    <>
    <Card>
      <Tabs tabs={tabsData} selected={selectedTab} onSelect={handleTabChange} />
      {contentVisible && (
        <div className="tab-content">
          {renderTabContent()}
        </div>
      )}
      </Card>
    </>
  );
}





























{
  /* const tabContent = [
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
          <Text variant="headingMd" as="h5">
            Rewards on Purchase
          </Text>
          <Text variant="bodyLg" as="p">
            Offer to give reward points on purchase from the store
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
            <Button onClick={() => navigate("/app/ways_to_earn_purchased_reward")}>Edit</Button>
          </div>
          <AppProvider
            i18n={{
              Polaris: { Common: { checkbox: { on: "On", off: "Off" } } },
            }}
          >
            <SwitchWithButton
              numberofSwitches={5}
              singleSwitchKey="Rewards on Purchase"
            />
          </AppProvider>
        </div>
      </div>
    </div>,
    <div key="redeem">
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
            <Button onClick={() => navigate("/app/sign_up_program")}>Edit</Button>
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
    </div>,
    <div key="activity">
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
            <Button onClick={() => navigate("/app/sign_up_program")}>Edit</Button>
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
    </div>
  ]; */
}

{
  /* return (
    <>
      <Tabs tabs={tabsData} selected={selectedTab} onSelect={handleTabChange} />
      <Card sectioned>
        {tabContent[selectedTab]}
      </Card>
    </>
  );
} */
}

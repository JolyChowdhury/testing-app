// // tabsData.js
// import React from "react";
// import { Text, Button, AppProvider } from "@shopify/polaris";
// import SwitchWithButton from "./SwitchWithButton";
// import { useNavigate } from "react-router-dom";

// // const navigate = useNavigate();
// const handleSignUpProgram = () => {
//   const navigate = useNavigate();
//   navigate("/app/sign_up_program");
// };
// const handleWaysToPurchaseClick = () => {
//   navigate("/app/ways_to_earn_purchased_reward");
// };
// const handleBirthdayPurchaseClick = () => {
//   navigate("/app/birthday_reward");
// };
// const tabsData = [
//   { id: "reward", content: "Reward" },
//   { id: "redeem", content: "Redeem" },
//   { id: "activity", content: "Activity" },
// ];

// const createTabContent = (navigate) => [
//   <div key="reward">
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         marginBottom: "20px",
//         marginTop: "20px",
//         borderTop: "1px solid rgb(217, 217, 217)",
//       }}
//     >
//       <div style={{ marginRight: "10px" }}>
//         <Text variant="headingMd" as="h5">
//           Sign Up reward
//         </Text>
//         <Text variant="bodyLg" as="p">
//           Offer a welcome reward upon a user registration
//         </Text>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           marginBottom: "10px",
//           marginTop: "20px",
//         }}
//       >
//         <div style={{ marginRight: "20px" }}>
//           <Button onClick={handleSignUpProgram}>Edit</Button>
//         </div>
//         <AppProvider
//           i18n={{
//             Polaris: { Common: { checkbox: { on: "On", off: "Off" } } },
//           }}
//         >
//           <SwitchWithButton
//             numberofSwitches={5}
//             singleSwitchKey="Sign Up reward"
//           />
//         </AppProvider>
//       </div>
//     </div>
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         marginBottom: "20px",
//         marginTop: "20px",
//         borderTop: "1px solid rgb(217, 217, 217)",
//       }}
//     >
//       <div style={{ marginRight: "10px" }}>
//         <Text variant="headingMd" as="h5">
//           Rewards on Purchase
//         </Text>
//         <Text variant="bodyLg" as="p">
//           Offer to give reward points on purchase from the store
//         </Text>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           marginBottom: "10px",
//           marginTop: "20px",
//         }}
//       >
//         <div style={{ marginRight: "20px" }}>
//           <Button onClick={handleWaysToPurchaseClick}>Edit</Button>
//         </div>
//         <AppProvider
//           i18n={{
//             Polaris: { Common: { checkbox: { on: "On", off: "Off" } } },
//           }}
//         >
//           <SwitchWithButton
//             numberofSwitches={5}
//             singleSwitchKey="Rewards on Purchase"
//           />
//         </AppProvider>
//       </div>
//     </div>
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         marginBottom: "20px",
//         marginTop: "20px",
//         borderTop: "1px solid rgb(217, 217, 217)",
//       }}
//     >
//       <div style={{ marginRight: "10px" }}>
//         <Text variant="headingMd" as="h5">
//           Birthday reward
//         </Text>
//         <Text variant="bodyLg" as="p">
//           Offer reward for the birthday of loyal customer
//         </Text>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           marginBottom: "10px",
//           marginTop: "20px",
//         }}
//       >
//         <div style={{ marginRight: "20px" }}>
//           <Button onClick={handleBirthdayPurchaseClick}>Edit</Button>
//         </div>
//         <AppProvider
//           i18n={{
//             Polaris: { Common: { checkbox: { on: "On", off: "Off" } } },
//           }}
//         >
//           <SwitchWithButton
//             numberofSwitches={5}
//             singleSwitchKey="Birthday reward"
//           />
//         </AppProvider>
//       </div>
//     </div>
//   </div>,
//   <div key="redeem">
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         marginBottom: "20px",
//         marginTop: "20px",
//         borderTop: "1px solid rgb(217, 217, 217)",
//       }}
//     >
//       <div style={{ marginRight: "10px" }}>
//         <Text variant="headingMd" as="h5">
//           Sign Up reward
//         </Text>
//         <Text variant="bodyLg" as="p">
//           Offer a welcome reward upon a user registration
//         </Text>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           marginBottom: "10px",
//           marginTop: "20px",
//         }}
//       >
//         <div style={{ marginRight: "20px" }}>
//           <Button onClick={handleSignUpProgram}>Edit</Button>
//         </div>
//         <AppProvider
//           i18n={{
//             Polaris: { Common: { checkbox: { on: "On", off: "Off" } } },
//           }}
//         >
//           <SwitchWithButton
//             numberofSwitches={5}
//             singleSwitchKey="Sign Up reward"
//           />
//         </AppProvider>
//       </div>
//     </div>
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         marginBottom: "20px",
//         marginTop: "20px",
//         borderTop: "1px solid rgb(217, 217, 217)",
//       }}
//     >
//       <div style={{ marginRight: "10px" }}>
//         <Text variant="headingMd" as="h5">
//           Rewards on Purchase
//         </Text>
//         <Text variant="bodyLg" as="p">
//           Offer to give reward points on purchase from the store
//         </Text>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           marginBottom: "10px",
//           marginTop: "20px",
//         }}
//       >
//         <div style={{ marginRight: "20px" }}>
//           <Button onClick={handleWaysToPurchaseClick}>Edit</Button>
//         </div>
//         <AppProvider
//           i18n={{
//             Polaris: { Common: { checkbox: { on: "On", off: "Off" } } },
//           }}
//         >
//           <SwitchWithButton
//             numberofSwitches={5}
//             singleSwitchKey="Rewards on Purchase"
//           />
//         </AppProvider>
//       </div>
//     </div>
//   </div>,
//   <div key="activity">
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         marginBottom: "20px",
//         marginTop: "20px",
//         borderTop: "1px solid rgb(217, 217, 217)",
//       }}
//     >
//       <div style={{ marginRight: "10px" }}>
//         <Text variant="headingMd" as="h5">
//           Sign Up reward
//         </Text>
//         <Text variant="bodyLg" as="p">
//           Offer a welcome reward upon a user registration
//         </Text>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           marginBottom: "10px",
//           marginTop: "20px",
//         }}
//       >
//         <div style={{ marginRight: "20px" }}>
//           <Button onClick={handleSignUpProgram}>Edit</Button>
//         </div>
//         <AppProvider
//           i18n={{
//             Polaris: { Common: { checkbox: { on: "On", off: "Off" } } },
//           }}
//         >
//           <SwitchWithButton
//             numberofSwitches={5}
//             singleSwitchKey="Sign Up reward"
//           />
//         </AppProvider>
//       </div>
//     </div>
//   </div>,
// ];

// import {
//   Page,
//   Button,
//   Text,
//   Tabs,
//   Card,
//   Layout,
//   Divider,
//   BlockStack,
//   AppProvider,
// } from "@shopify/polaris";
// import { useState, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import { Modal, TitleBar, useAppBridge } from "@shopify/app-bridge-react";
// import SwitchWithButton from "../componant/SwitchWithButton";
// import CustomTab from "../componant/CustomTab";

// export default function rewardProgram() {
//   // Popup modal state
//   const SocialMediaModal = useAppBridge();
//   const handleModalToggle = () => {
//     SocialMediaModal.modal.show("my-modal");
//   };

//   const navigate = useNavigate();

//   // Tab navigation handlers
//   const handleSignUpProgram = () => {
//     navigate("/app/sign_up_program",);
//   };
//   const handleWaysToPurchaseClick = () => {
//     navigate("/app/ways_to_earn_purchased_reward", {
//       state: { selectedTabIndex: selected },
//     });
//   };
//   const handleBirthdayPurchaseClick = () => {
//     navigate("/app/birthday_reward", { state: { selectedTabIndex: selected } });
//   };
//   const handleRewardFacebookClick = () => {
//     navigate("/app/reward_facebook", { state: { selectedTabIndex: selected } });
//   };
//   const handleRewardInstagramClick = () => {
//     navigate("/app/reward_instagram", {
//       state: { selectedTabIndex: selected },
//     });
//   };
//   const handleRewardTwitterClick = () => {
//     navigate("/app/reward_twitter", { state: { selectedTabIndex: selected } });
//   };
//   const handleShareFacebookClick = () => {
//     navigate("/app/reward_share_facebook", {
//       state: { selectedTabIndex: selected },
//     });
//   };
//   const handleShareXClick = () => {
//     navigate("/app/reward_share_X", { state: { selectedTabIndex: selected } });
//   };

//   const handlePurchaseClick = () => {
//     navigate("/app/purchase_reward", { state: { selectedTabIndex: selected } });
//   };
//   const handleFreeShippingClick = () => {
//     navigate("/app/free_shipping", { state: { selectedTabIndex: selected } });
//   };

//   // Tab state and handler
//   const [selected, setSelected] = useState(0);
//   const handleTabChange = useCallback(
//     (selectedTabIndex) => {
//       setSelected(selectedTabIndex);
//       switch (selectedTabIndex) {
//         case 0:
//           break;
//         case 1:
//           break;
//         case 2:
//           break;
//         case 3:
//           break;
//         case 4:
//           break;
//         default:
//           break;
//       }
//     },
//     [navigate],
//   );

//   const tabs = [
//     { id: "reward", content: "Ways to earn points", text: "points"},
//     {
//       id: "ways-to-redeem",
//       content: "Ways to redeem points"
//     },
//     {
//       id: "rules",
//       content: "Point rules"
//     },
//     { id: "activity", content: "Activity"},

//     { id: "expire", content: "Points Expiry" },
//   ];

//   const tabContent = [
//     <div key="reward">
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           marginBottom: "20px",
//           marginTop: "20px",
//           borderTop: "1px solid rgb(217, 217, 217)",
//         }}
//       >
//         <div style={{ marginRight: "10px" }}>
//           <Text variant="headingMd" as="h5">
//             Sign Up reward
//           </Text>
//           <Text variant="bodyLg" as="p">
//             Offer a welcome reward upon a user registration
//           </Text>
//         </div>
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             marginBottom: "10px",
//             marginTop: "20px",
//           }}
//         >
//           <div style={{ marginRight: "20px" }}>
//             <Button onClick={handleSignUpProgram} >Edit</Button>
//           </div>
//           <AppProvider
//             i18n={{
//               Polaris: { Common: { checkbox: { on: "On", off: "Off" } } },
//             }}
//           >
//             <SwitchWithButton numberofSwitches={10} singleSwitchKey="switch1" />
//           </AppProvider>
//         </div>
//       </div>
//       {/* <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           marginBottom: "20px",
//           marginTop: "20px",
//           borderTop: "1px solid rgb(217, 217, 217)",
//         }}
//       >
//         <div style={{ marginRight: "10px" }}>
//           <Text variant="headingMd" as="h5">
//             Rewards on Purchase
//           </Text>
//           <Text variant="bodyLg" as="p">
//             Offer to give reward points on purchase from the store
//           </Text>
//         </div>
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             marginBottom: "10px",
//             marginTop: "20px",
//           }}
//         >
//           <div style={{ marginRight: "20px" }}>
//             <Button onClick={handleWaysToPurchaseClick}>Edit</Button>
//           </div>
//           <AppProvider
//             i18n={{
//               Polaris: { Common: { checkbox: { on: "On", off: "Off" } } },
//             }}
//           >
//             <div style={{ display: "flex", alignItems: "center" }}>
//               <Button
//                 onClick={handlePurchaseToggle}
//                 plain
//                 ariaPressed={togglePurchaseActive}
//               >
//                 <Text variation="strong">
//                   {togglePurchaseActive ? "Active" : "Inactive"}
//                 </Text>
//               </Button>
//               <div
//                 role="switch"
//                 aria-checked={togglePurchaseActive}
//                 onClick={handlePurchaseToggle}
//                 style={{
//                   display: "inline-block",
//                   width: "50px",
//                   height: "25px",
//                   background: togglePurchaseActive ? "#4caf50" : "#ccc",
//                   borderRadius: "25px",
//                   position: "relative",
//                   cursor: "pointer",
//                   marginLeft: "10px",
//                 }}
//               >
//                 <div
//                   style={{
//                     position: "absolute",
//                     top: "2px",
//                     left: togglePurchaseActive ? "26px" : "2px",
//                     width: "21px",
//                     height: "21px",
//                     background: "#fff",
//                     borderRadius: "50%",
//                     transition: "left 0.2s",
//                   }}
//                 />
//               </div>
//             </div>
//           </AppProvider>
//         </div>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           marginBottom: "20px",
//           marginTop: "20px",
//           borderTop: "1px solid rgb(217, 217, 217)",
//         }}
//       >
//         <div style={{ marginRight: "10px" }}>
//           <Text variant="headingMd" as="h5">
//             Birthday reward
//           </Text>
//           <Text variant="bodyLg" as="p">
//             Offer reward for the birthday of loyal customer
//           </Text>
//         </div>
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             marginBottom: "10px",
//             marginTop: "20px",
//           }}
//         >
//           <div style={{ marginRight: "20px" }}>
//             <Button onClick={handleBirthdayPurchaseClick}>Edit</Button>
//           </div>
//           <AppProvider
//             i18n={{
//               Polaris: { Common: { checkbox: { on: "On", off: "Off" } } },
//             }}
//           >
//             <div style={{ display: "flex", alignItems: "center" }}>
//               <Button
//                 onClick={handleBirthdayToggle}
//                 plain
//                 ariaPressed={toggleBirthdayActive}
//               >
//                 <Text variation="strong">
//                   {toggleBirthdayActive ? "Active" : "Inactive"}
//                 </Text>
//               </Button>
//               <div
//                 role="switch"
//                 aria-checked={toggleBirthdayActive}
//                 onClick={handleBirthdayToggle}
//                 style={{
//                   display: "inline-block",
//                   width: "50px",
//                   height: "25px",
//                   background: toggleBirthdayActive ? "#4caf50" : "#ccc",
//                   borderRadius: "25px",
//                   position: "relative",
//                   cursor: "pointer",
//                   marginLeft: "10px",
//                 }}
//               >
//                 <div
//                   style={{
//                     position: "absolute",
//                     top: "2px",
//                     left: toggleBirthdayActive ? "26px" : "2px",
//                     width: "21px",
//                     height: "21px",
//                     background: "#fff",
//                     borderRadius: "50%",
//                     transition: "left 0.2s",
//                   }}
//                 />
//               </div>
//             </div>
//           </AppProvider>
//         </div>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           marginBottom: "20px",
//           marginTop: "20px",
//           borderTop: "1px solid rgb(217, 217, 217)",
//         }}
//       >
//         <div style={{ marginRight: "10px" }}>
//           <Text variant="headingMd" as="h5">
//             Social media reward
//           </Text>
//           <Text variant="bodyLg" as="p">
//             Offer reward for sharing post about your store
//           </Text>
//         </div>
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             marginBottom: "10px",
//             marginTop: "20px",
//           }}
//         >
//           <div style={{ marginRight: "20px" }}>
//             <Button onClick={handleModalToggle}>Manage</Button>
//           </div>
//         </div>

//         <Modal id="my-modal">
//           <TitleBar title="Social media reward"></TitleBar>
//           <div
//             style={{
//               paddingBottom: "15px",
//               paddingLeft: "15px",
//               paddingRight: "15px",
//             }}
//           >
//             <BlockStack gap="200">
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   marginTop: "10px",
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "start",
//                   }}
//                 >
//                   <div style={{}}>
//                     <svg
//                       width={"40px"}
//                       height={"40px"}
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fill-rule="evenodd"
//                         d="M12.539 14.57a9.25 9.25 0 0 1-4.074-.838l-.307-.141a3.751 3.751 0 0 0-1.158-.32v-5.222a1.5 1.5 0 0 0 .15-.099 6.489 6.489 0 0 0 2.475-3.95 1.41 1.41 0 0 1 1.378 1.557l-.133 1.26a1.75 1.75 0 0 0 1.74 1.933h1.595c.758 0 1.342.67 1.239 1.42l-.338 2.449a2.25 2.25 0 0 1-2.176 1.942l-.391.01Zm-7.039-6.32h-1v5h1v-5Zm2.34 6.845a10.75 10.75 0 0 0 4.735.975l.391-.01a3.75 3.75 0 0 0 3.626-3.236l.337-2.448a2.75 2.75 0 0 0-2.724-3.126h-1.594a.25.25 0 0 1-.249-.276l.133-1.26a2.91 2.91 0 0 0-2.894-3.214h-.364c-.5 0-.928.357-1.017.849l-.055.303a4.989 4.989 0 0 1-1.915 3.098h-2c-.69 0-1.25.56-1.25 1.25v5.5c0 .69.56 1.25 1.25 1.25h2.345c.324 0 .644.07.938.205l.307.14Z"
//                       />
//                     </svg>
//                   </div>
//                   <a
//                     style={{
//                       marginLeft: "10px",
//                       color: "black",
//                       textDecoration: "none",
//                       cursor: "pointer",
//                     }}
//                     href="https://www.facebook.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Like on Facebook
//                   </a>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "start",
//                   }}
//                 >
//                   <Button onClick={handleRewardFacebookClick}>Edit</Button>
//                   <AppProvider
//                     i18n={{
//                       Polaris: {
//                         Common: { checkbox: { on: "On", off: "Off" } },
//                       },
//                     }}
//                   >
//                     <div
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         marginLeft: "10px",
//                       }}
//                     >
//                       <Button
//                         onClick={handleLikeFacebookToggle}
//                         plain
//                         ariaPressed={toggleLikeFacebookActive}
//                       >
//                         <Text variation="strong">
//                           {toggleLikeFacebookActive ? "Active" : "Inactive"}
//                         </Text>
//                       </Button>
//                       <div
//                         role="switch"
//                         aria-checked={toggleLikeFacebookActive}
//                         onClick={handleLikeFacebookToggle}
//                         style={{
//                           display: "inline-block",
//                           width: "50px",
//                           height: "25px",
//                           background: toggleLikeFacebookActive
//                             ? "#4caf50"
//                             : "#ccc",
//                           borderRadius: "25px",
//                           position: "relative",
//                           cursor: "pointer",
//                           marginLeft: "10px",
//                         }}
//                       >
//                         <div
//                           style={{
//                             position: "absolute",
//                             top: "2px",
//                             left: toggleLikeFacebookActive ? "26px" : "2px",
//                             width: "21px",
//                             height: "21px",
//                             background: "#fff",
//                             borderRadius: "50%",
//                             transition: "left 0.2s",
//                           }}
//                         />
//                       </div>
//                     </div>
//                   </AppProvider>
//                 </div>
//               </div>
//               <Divider />
//             </BlockStack>
//             <BlockStack gap="200">
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   marginTop: "10px",
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "start",
//                   }}
//                 >
//                   <div style={{}}>
//                     <svg
//                       width={"40px"}
//                       height={"40px"}
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fill-rule="evenodd"
//                         d="M10 3c-1.901 0-2.14.008-2.886.042-.745.034-1.254.153-1.7.326-.466.175-.89.45-1.24.807-.355.35-.63.773-.807 1.24-.172.445-.29.954-.325 1.7-.034.746-.042.983-.042 2.885 0 1.902.008 2.14.042 2.886.034.745.153 1.254.326 1.7.175.466.45.89.807 1.24.35.355.773.63 1.24.807.445.172.954.29 1.7.325.746.034.984.042 2.885.042 1.901 0 2.14-.008 2.886-.042.745-.034 1.254-.153 1.7-.326.466-.175.89-.45 1.24-.807.355-.35.63-.773.807-1.24.172-.445.29-.954.325-1.7.034-.746.042-.984.042-2.885 0-1.901-.008-2.14-.042-2.886-.034-.745-.153-1.254-.326-1.7a3.432 3.432 0 0 0-.807-1.24 3.433 3.433 0 0 0-1.24-.807c-.445-.172-.954-.29-1.7-.325-.746-.034-.983-.042-2.885-.042Zm0 1.261c1.869 0 2.09.007 2.829.041.682.031 1.053.145 1.3.241.326.127.56.279.805.523.245.245.396.479.523.805.096.247.21.618.241 1.3.034.738.04.96.04 2.829 0 1.869-.006 2.09-.04 2.829-.031.682-.145 1.053-.241 1.3a2.173 2.173 0 0 1-.523.805c-.226.232-.501.41-.805.523-.247.096-.618.21-1.3.241-.738.034-.96.04-2.829.04-1.87 0-2.09-.006-2.829-.04-.682-.031-1.053-.145-1.3-.241a2.168 2.168 0 0 1-.805-.523 2.17 2.17 0 0 1-.523-.805c-.096-.247-.21-.618-.241-1.3-.034-.738-.04-.96-.04-2.829 0-1.869.006-2.09.04-2.829.031-.682.145-1.053.241-1.3.127-.326.279-.56.523-.805.226-.232.501-.41.805-.523.247-.096.618-.21 1.3-.241.738-.034.96-.04 2.829-.04Z"
//                       />
//                       <path
//                         fill-rule="evenodd"
//                         d="M10 12.336a2.335 2.335 0 1 1 0-4.67 2.335 2.335 0 0 1 0 4.67Zm0-5.934a3.598 3.598 0 1 0 0 7.196 3.598 3.598 0 0 0 0-7.196Zm4.645-.065a.85.85 0 1 1-1.701 0 .85.85 0 0 1 1.7 0Z"
//                       />
//                     </svg>
//                   </div>
//                   <a
//                     style={{
//                       marginLeft: "10px",
//                       color: "black",
//                       textDecoration: "none",
//                       cursor: "pointer",
//                     }}
//                     href="https://www.facebook.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Like on instagram
//                   </a>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "start",
//                   }}
//                 >
//                   <Button onClick={handleRewardInstagramClick}>Edit</Button>
//                   <AppProvider
//                     i18n={{
//                       Polaris: {
//                         Common: { checkbox: { on: "On", off: "Off" } },
//                       },
//                     }}
//                   >
//                     <div
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         marginLeft: "10px",
//                       }}
//                     >
//                       <Button
//                         onClick={handleInstagramToggle}
//                         plain
//                         ariaPressed={toggleInstagramActive}
//                       >
//                         <Text variation="strong">
//                           {toggleInstagramActive ? "Active" : "Inactive"}
//                         </Text>
//                       </Button>
//                       <div
//                         role="switch"
//                         aria-checked={toggleInstagramActive}
//                         onClick={handleInstagramToggle}
//                         style={{
//                           display: "inline-block",
//                           width: "50px",
//                           height: "25px",
//                           background: toggleInstagramActive
//                             ? "#4caf50"
//                             : "#ccc",
//                           borderRadius: "25px",
//                           position: "relative",
//                           cursor: "pointer",
//                           marginLeft: "10px",
//                         }}
//                       >
//                         <div
//                           style={{
//                             position: "absolute",
//                             top: "2px",
//                             left: toggleInstagramActive ? "26px" : "2px",
//                             width: "21px",
//                             height: "21px",
//                             background: "#fff",
//                             borderRadius: "50%",
//                             transition: "left 0.2s",
//                           }}
//                         />
//                       </div>
//                     </div>
//                   </AppProvider>
//                 </div>
//               </div>
//               <Divider />
//             </BlockStack>
//             <BlockStack gap="200">
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   marginTop: "10px",
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "start",
//                   }}
//                 >
//                   <div style={{}}>
//                     <svg
//                       width={"40px"}
//                       height={"40px"}
//                       xmlns="http://www.w3.org/2000/svg"
//                       xmlns:xlink="http://www.w3.org/1999/xlink"
//                       fill="#000000"
//                       version="1.1"
//                       id="Layer_1"
//                       viewBox="0 0 310 310"
//                       xml:space="preserve"
//                     >
//                       <g id="XMLID_826_">
//                         <path
//                           id="XMLID_827_"
//                           d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73   c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783   c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598   C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467   c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977   c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889   c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597   c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961   c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895   c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367   c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998   C307.394,57.037,305.009,56.486,302.973,57.388z"
//                         />
//                       </g>
//                     </svg>
//                   </div>
//                   <a
//                     style={{
//                       marginLeft: "10px",
//                       color: "black",
//                       textDecoration: "none",
//                       cursor: "pointer",
//                     }}
//                     href="https://www.facebook.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Like on Twitter
//                   </a>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "start",
//                   }}
//                 >
//                   <Button onClick={handleRewardTwitterClick}>Edit</Button>
//                   <AppProvider
//                     i18n={{
//                       Polaris: {
//                         Common: { checkbox: { on: "On", off: "Off" } },
//                       },
//                     }}
//                   >
//                     <div
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         marginLeft: "10px",
//                       }}
//                     >
//                       <Button
//                         onClick={handleTwitterToggle}
//                         plain
//                         ariaPressed={toggleTwitterActive}
//                       >
//                         <Text variation="strong">
//                           {toggleTwitterActive ? "Active" : "Inactive"}
//                         </Text>
//                       </Button>
//                       <div
//                         role="switch"
//                         aria-checked={toggleTwitterActive}
//                         onClick={handleTwitterToggle}
//                         style={{
//                           display: "inline-block",
//                           width: "50px",
//                           height: "25px",
//                           background: toggleTwitterActive ? "#4caf50" : "#ccc",
//                           borderRadius: "25px",
//                           position: "relative",
//                           cursor: "pointer",
//                           marginLeft: "10px",
//                         }}
//                       >
//                         <div
//                           style={{
//                             position: "absolute",
//                             top: "2px",
//                             left: toggleTwitterActive ? "26px" : "2px",
//                             width: "21px",
//                             height: "21px",
//                             background: "#fff",
//                             borderRadius: "50%",
//                             transition: "left 0.2s",
//                           }}
//                         />
//                       </div>
//                     </div>
//                   </AppProvider>
//                 </div>
//               </div>
//               <Divider />
//             </BlockStack>
//             <BlockStack gap="200">
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   marginTop: "10px",
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "start",
//                   }}
//                 >
//                   <div style={{}}>
//                     <svg
//                       width={"40px"}
//                       height={"40px"}
//                       xmlns="http://www.w3.org/2000/svg"
//                       xmlns:xlink="http://www.w3.org/1999/xlink"
//                       xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
//                       viewBox="-1 0 26 26"
//                       version="1.1"
//                     >
//                       <g
//                         id="Page-1"
//                         stroke="none"
//                         stroke-width="1"
//                         fill="none"
//                         fill-rule="evenodd"
//                         sketch:type="MSPage"
//                       >
//                         <g
//                           id="Icon-Set-Filled"
//                           sketch:type="MSLayerGroup"
//                           transform="translate(-314.000000, -728.000000)"
//                           fill="#000000"
//                         >
//                           <path
//                             d="M333,744 C331.23,744 329.685,744.925 328.796,746.312 L323.441,743.252 C323.787,742.572 324,741.814 324,741 C324,740.497 323.903,740.021 323.765,739.563 L329.336,736.38 C330.249,737.37 331.547,738 333,738 C335.762,738 338,735.762 338,733 C338,730.238 335.762,728 333,728 C330.238,728 328,730.238 328,733 C328,733.503 328.097,733.979 328.235,734.438 L322.664,737.62 C321.751,736.631 320.453,736 319,736 C316.238,736 314,738.238 314,741 C314,743.762 316.238,746 319,746 C320.14,746 321.179,745.604 322.02,744.962 L328.055,748.46 C328.035,748.64 328,748.814 328,749 C328,751.762 330.238,754 333,754 C335.762,754 338,751.762 338,749 C338,746.238 335.762,744 333,744"
//                             id="share"
//                             sketch:type="MSShapeGroup"
//                           ></path>
//                         </g>
//                       </g>
//                     </svg>
//                   </div>
//                   <a
//                     style={{
//                       marginLeft: "10px",
//                       color: "black",
//                       textDecoration: "none",
//                       cursor: "pointer",
//                     }}
//                     href="https://www.facebook.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Share on Facebook
//                   </a>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "start",
//                   }}
//                 >
//                   <Button onClick={handleShareFacebookClick}>Edit</Button>
//                   <AppProvider
//                     i18n={{
//                       Polaris: {
//                         Common: { checkbox: { on: "On", off: "Off" } },
//                       },
//                     }}
//                   >
//                     <div
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         marginLeft: "10px",
//                       }}
//                     >
//                       <Button
//                         onClick={handleShareFacebookToggle}
//                         plain
//                         ariaPressed={toggleShareFacebookActive}
//                       >
//                         <Text variation="strong">
//                           {toggleShareFacebookActive ? "Active" : "Inactive"}
//                         </Text>
//                       </Button>
//                       <div
//                         role="switch"
//                         aria-checked={toggleShareFacebookActive}
//                         onClick={handleShareFacebookToggle}
//                         style={{
//                           display: "inline-block",
//                           width: "50px",
//                           height: "25px",
//                           background: toggleShareFacebookActive
//                             ? "#4caf50"
//                             : "#ccc",
//                           borderRadius: "25px",
//                           position: "relative",
//                           cursor: "pointer",
//                           marginLeft: "10px",
//                         }}
//                       >
//                         <div
//                           style={{
//                             position: "absolute",
//                             top: "2px",
//                             left: toggleShareFacebookActive ? "26px" : "2px",
//                             width: "21px",
//                             height: "21px",
//                             background: "#fff",
//                             borderRadius: "50%",
//                             transition: "left 0.2s",
//                           }}
//                         />
//                       </div>
//                     </div>
//                   </AppProvider>
//                 </div>
//               </div>
//               <Divider />
//             </BlockStack>
//             <BlockStack gap="200">
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   marginTop: "10px",
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "start",
//                   }}
//                 >
//                   <div style={{}}>
//                     <svg
//                       width={"40px"}
//                       height={"40px"}
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fill-rule="evenodd"
//                         d="M12.906 17h4l-5.302-7.814 5.302-6.186h-1.414l-4.523 5.252-3.563-5.252h-4.156l5.444 7.894-5.258 6.106h1.47l4.433-5.172 3.567 5.172Zm-7.275-12.75 7.931 11.5h.985l-7.803-11.5h-1.113Z"
//                       />
//                     </svg>
//                   </div>
//                   <a
//                     style={{
//                       marginLeft: "10px",
//                       color: "black",
//                       textDecoration: "none",
//                       cursor: "pointer",
//                     }}
//                     href="https://www.facebook.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Share on X
//                   </a>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "start",
//                   }}
//                 >
//                   <Button onClick={handleShareXClick}>Edit</Button>
//                   <AppProvider
//                     i18n={{
//                       Polaris: {
//                         Common: { checkbox: { on: "On", off: "Off" } },
//                       },
//                     }}
//                   >
//                     <div
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         marginLeft: "10px",
//                       }}
//                     >
//                       <Button
//                         onClick={handleShareXToggle}
//                         plain
//                         ariaPressed={toggleShareXActive}
//                       >
//                         <Text variation="strong">
//                           {toggleShareXActive ? "Active" : "Inactive"}
//                         </Text>
//                       </Button>
//                       <div
//                         role="switch"
//                         aria-checked={toggleShareXActive}
//                         onClick={handleShareXToggle}
//                         style={{
//                           display: "inline-block",
//                           width: "50px",
//                           height: "25px",
//                           background: toggleShareXActive ? "#4caf50" : "#ccc",
//                           borderRadius: "25px",
//                           position: "relative",
//                           cursor: "pointer",
//                           marginLeft: "10px",
//                         }}
//                       >
//                         <div
//                           style={{
//                             position: "absolute",
//                             top: "2px",
//                             left: toggleShareXActive ? "26px" : "2px",
//                             width: "21px",
//                             height: "21px",
//                             background: "#fff",
//                             borderRadius: "50%",
//                             transition: "left 0.2s",
//                           }}
//                         />
//                       </div>
//                     </div>
//                   </AppProvider>
//                 </div>
//               </div>
//             </BlockStack>
//           </div>
//         </Modal>
//       </div> */}
//     </div>,
//     <div key="ways-to-redeem">
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
//           Purchase discount
//         </Text>
//         <Text variant="bodyLg" as="p">
//           e.g ( 100 points =$1 )
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
//           <Button onClick={handlePurchaseClick}>Edit</Button>
//         </div>
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
//           Free Shipping
//         </Text>
//         <Text variant="bodyLg" as="p">
//           Enjoy free shipping on all orders as a loyalty member
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
//           <Button onClick={handleFreeShippingClick}>Edit</Button>
//         </div>
//       </div>
//     </div>
//   </div>,
//   <div key="rules"></div>,
//   <div key="activity"></div>,
//   ];

//   return (
//     <Page
//       title="Reward Program"
//       subtitle="Set reward points rules, points redeem rules"
//       secondaryActions={<Button variant="tertiary">Status: Free Plan</Button>}
//     >
//       <Layout>
//         <Layout.Section>
//           <Card sectioned>
//             <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
//               {tabContent[selected]}
//             </Tabs>
//           </Card>
//         </Layout.Section>
//       </Layout>
//     </Page>
//   );
// }

















// render for real live reward race and switch button fixed

// import {
//   Page,
//   Button,
//   Text,
//   Tabs,
//   Card,
//   Layout,
//   Divider,
//   BlockStack,
//   AppProvider,
// } from "@shopify/polaris";
// import { useState, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import { Modal, TitleBar, useAppBridge } from "@shopify/app-bridge-react";
// import SwitchWithButton from "../componant/SwitchWithButton";

// export default function rewardProgram() {
//   // Popup modal state
//   const SocialMediaModal = useAppBridge();
//   const handleModalToggle = () => {
//     SocialMediaModal.modal.show("my-modal");
//   };

//   const navigate = useNavigate();

//   // Tab navigation handlers
//   const handleSignUpProgram = () => {
//     navigate("/app/sign_up_program", { state: { selectedTabIndex: selected } });
//   };
//   const handleWaysToPurchaseClick = () => {
//     navigate("/app/ways_to_earn_purchased_reward", {
//       state: { selectedTabIndex: selected },
//     });
//   };
//   const handleBirthdayPurchaseClick = () => {
//     navigate("/app/birthday_reward", { state: { selectedTabIndex: selected } });
//   };
//   const handleRewardFacebookClick = () => {
//     navigate("/app/reward_facebook", { state: { selectedTabIndex: selected } });
//   };
//   const handleRewardInstagramClick = () => {
//     navigate("/app/reward_instagram", {
//       state: { selectedTabIndex: selected },
//     });
//   };
//   const handleRewardTwitterClick = () => {
//     navigate("/app/reward_twitter", { state: { selectedTabIndex: selected } });
//   };
//   const handleShareFacebookClick = () => {
//     navigate("/app/reward_share_facebook", {
//       state: { selectedTabIndex: selected },
//     });
//   };
//   const handleShareXClick = () => {
//     navigate("/app/reward_share_X", { state: { selectedTabIndex: selected } });
//   };

//   // Tab state and handler
//   const [selected, setSelected] = useState(0);
//   const handleTabChange = useCallback(
//     (selectedTabIndex) => {
//       setSelected(selectedTabIndex);
//       switch (selectedTabIndex) {
//         case 0:
//           navigate("/app/reward");
//           break;
//         case 1:
//           navigate("/app/ways-to-redeem");
//           break;
//         case 2:
//           navigate("/app/point_rules");
//           break;
//         case 3:
//           navigate("/app/activity");
//           break;
//         case 4:
//           navigate("/app/point_expiry");
//           break;
//         default:
//           break;
//       }
//     },
//     [navigate],
//   );

//   const tabs = [
//     { id: "reward", content: "Ways to earn points" },
//     {
//       id: "ways-to-redeem",
//       content: "Ways to redeem points",
//     },
//     {
//       id: "prospects-1",
//       content: "Point rules",
//     },
//     { id: "activity", content: "Activity" },

//     { id: "expire", content: "Points Expiry" },
//   ];

  // const tabContent = [
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

//   return (
//     <Page
//       title="Reward Program"
//       subtitle="Set reward points rules, points redeem rules"
//       secondaryActions={<Button variant="tertiary">Status: Free Plan</Button>}
//     >
//       <Layout>
//         <Layout.Section>
//           <Card sectioned>
//             <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
//               {tabContent[selected]}
//             </Tabs>
//           </Card>
//         </Layout.Section>
//       </Layout>
//     </Page>
//   );
// }





// render with tab componant
//   return (
//     <Page
//       title="Reward Program"
//       subtitle="Set reward points rules, points redeem rules"
//       secondaryActions={<Button variant="tertiary">Status: Free Plan</Button>}
//     >
//       <Layout>
//         <Layout.Section>
//           <Card sectioned>
//             <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
//               {tabContent[selected]}
//             </Tabs>
//           </Card>
//         </Layout.Section>
//       </Layout>
//     </Page>
//   );
// }



// import React from 'react';
// import TabsComponent from '../componant/TabsComponent';

// const Reward = () => {
//   return (
//     <div>
//       <TabsComponent initialSelected={0} />
//     </div>
//   );
// };

// export default Reward;


// Reward.jsx
import { Page, Button, Layout } from "@shopify/polaris";
import TabsComponent from '../componant/TabsComponent';

export default function Reward() {
  return (
    <Page
      title="Reward Program"
      subtitle="Set reward points rules, points redeem rules"
      secondaryActions={<Button variant="tertiary">Status: Free Plan</Button>}
    >
      <Layout>
        <Layout.Section>
        <TabsComponent hideContentInitially={false}/>
        </Layout.Section>
      </Layout>
    </Page>
  );
}


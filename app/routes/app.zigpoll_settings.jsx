// import { Page, PageActions, Card, Icon, InlineStack, Bleed, Button,ChoiceList, Text, TextField, Box, Tooltip, BlockStack } from '@shopify/polaris';
// import React from 'react';
// import { DeleteIcon, SettingsIcon, InfoIcon } from '@shopify/polaris-icons';
// import SwitchButton from "../component/switch"
// import { useState, useCallback } from 'react';


// const SettingsSVG = () => {
//     return (
//         <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1">
//             <path d="M512 661.994667q61.994667 0 106.005333-44.010667t44.010667-106.005333-44.010667-106.005333-106.005333-44.010667-106.005333 44.010667-44.010667 106.005333 44.010667 106.005333 106.005333 44.010667zM829.994667 554.005333l90.005333 69.994667q13.994667 10.005333 4.010667 28.010667l-85.994667 148.010667q-8 13.994667-26.005333 8l-106.005333-42.005333q-42.005333 29.994667-72 42.005333l-16 112q-4.010667 18.005333-20.010667 18.005333l-172.010667 0q-16 0-20.010667-18.005333l-16-112q-37.994667-16-72-42.005333l-106.005333 42.005333q-18.005333 5.994667-26.005333-8l-85.994667-148.010667q-10.005333-18.005333 4.010667-28.010667l90.005333-69.994667q-2.005333-13.994667-2.005333-42.005333t2.005333-42.005333l-90.005333-69.994667q-13.994667-10.005333-4.010667-28.010667l85.994667-148.010667q8-13.994667 26.005333-8l106.005333 42.005333q42.005333-29.994667 72-42.005333l16-112q4.010667-18.005333 20.010667-18.005333l172.010667 0q16 0 20.010667 18.005333l16 112q37.994667 16 72 42.005333l106.005333-42.005333q18.005333-5.994667 26.005333 8l85.994667 148.010667q10.005333 18.005333-4.010667 28.010667l-90.005333 69.994667q2.005333 13.994667 2.005333 42.005333t-2.005333 42.005333z" fill="#b5c4d3" />
//         </svg>
//     );
// }
// const SubmissionSVG = () => {
//     return (
//         <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M608 320h-64v64h22.4c5.3 0 9.6 3.6 9.6 8v16c0 4.4-4.3 8-9.6 8H73.6c-5.3 0-9.6-3.6-9.6-8v-16c0-4.4 4.3-8 9.6-8H96v-64H32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h576c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32zm-96 64V64.3c0-17.9-14.5-32.3-32.3-32.3H160.4C142.5 32 128 46.5 128 64.3V384h384zM211.2 202l25.5-25.3c4.2-4.2 11-4.2 15.2 .1l41.3 41.6 95.2-94.4c4.2-4.2 11-4.2 15.2 .1l25.3 25.5c4.2 4.2 4.2 11-.1 15.2L300.5 292c-4.2 4.2-11 4.2-15.2-.1l-74.1-74.7c-4.3-4.2-4.2-11 0-15.2z" fill="#b5c4d3"/></svg>
//     );
// }

// const TooltipHeading = ({ heading, tooltipText }) => (
//     <>
//         <Box>
//             <InlineStack gap="200" wrap={false} blockAlign="center">
//                 <Text variant="bodySm" as="p" fontWeight="semibold">
//                     {heading}
//                 </Text>

//                 {tooltipText && (
//                     <Tooltip content={tooltipText}>
//                         <Icon
//                             source={InfoIcon}
//                             tone="subdued"
//                         />
//                     </Tooltip>
//                 )}
//             </InlineStack>
//         </Box>
//     </>
// );

// const SwitchWithText = ({ text, initialValue = false, heading }) => {
//     const [isActive, setIsActive] = useState(initialValue);
  
//     const handleToggle = (newState) => {
//       setIsActive(newState);
//       console.log(`Switch "${text}" is now ${newState ? 'On' : 'Off'}`);
//     };
  
//     return (
//       <Box>
//         <BlockStack gap="100">
//           <Text variant="bodySm" as="p" fontWeight="semibold">
//             {text}
//           </Text>
//           <InlineStack gap="200" wrap={false} blockAlign="center">
//             <SwitchButton initialValue={initialValue} onChange={handleToggle} />
//             <Text variant="bodySm" as="p" fontWeight="semibold">
//               {heading}
//             </Text>
//           </InlineStack>
//         </BlockStack>
//       </Box>
//     );
//   };
// const SwitchWithTooltip = ({ heading, tooltipText , initialValue = false, text }) => {
//     const [isActive, setIsActive] = useState(initialValue);
  
//     const handleToggle = (newState) => {
//       setIsActive(newState);
//       console.log(`Switch "${text}" is now ${newState ? 'On' : 'Off'}`);
//     };
  
//     return (
//       <Box>
//         <BlockStack gap="100">
//         <InlineStack gap="200" wrap={false} blockAlign="center">
//             <Text variant="bodySm" as="p" fontWeight="semibold">
//                 {heading}
//             </Text>
//             {tooltipText && (
//                 <Tooltip content={tooltipText}>
//                     <Icon
//                         source={InfoIcon}
//                         tone="subdued"
//                     />
//                 </Tooltip>
//             )}
//         </InlineStack>
        
//           <InlineStack gap="200" wrap={false} blockAlign="center">
//             <SwitchButton initialValue={initialValue} onChange={handleToggle} />
//             <Text variant="bodySm" as="p" fontWeight="semibold">
//               {text}
//             </Text>
//           </InlineStack>
//         </BlockStack>
//       </Box>
//     );
//   };


  

// export default function zigpollGeneralSettings() {

//     const [value, setValue] = useState('Post Purchase Survey');
//     const [selectedChoicelist, setSelectedChoicelist] = useState(['Circle']);
//     const [showMoreOptions, setShowMoreOptions] = useState(false);

//     const handleChoiceChange = useCallback((value) => setSelectedChoicelist(value), [],);

//     const handleChange = useCallback(
//         (newValue) => setValue(newValue),
//         [],
//     );
//     const toggleMoreOptions = () => setShowMoreOptions((prev) => !prev);


//     return (
//         <Page
//             narrowWidth
//         >
//             <BlockStack gap="50">
//                 <InlineStack blockAlign='center' gap="200">
//                     <SettingsSVG />
//                     <Text variant="headingXl" fontWeight="regular" as="h3">
//                     General Settings
//                     </Text>
//                 </InlineStack>
//                 <div style={{marginLeft:"15px", marginBottom:"15px"}}>
//                 <Text variant="headingMd" as="h5">
//                     Adjust your survey's title and behavior.
//                 </Text>
//                 </div>
//                 </BlockStack>
//             <Card>
//                 <BlockStack gap="200">
//                     <TextField
//                         label="SURVEY TITLE"
//                         value={value}
//                         onChange={handleChange}
//                         autoComplete="off"
//                     />
//                     <TooltipHeading heading="PROGRESS INDICATOR" tooltipText="Control how the amount of progress to the respondant is displayed. If you use branching logic, we recommend using the circle indicator." />
//                     <BlockStack gap="400">

//                     <ChoiceList
//                         choices={[
//                             { label: 'Circle', value: 'Circle' },
//                             { label: 'Counter', value: 'Counter' },
//                             { label: 'None', value: 'None' },
//                         ]}
//                         selected={selectedChoicelist}
//                         onChange={handleChoiceChange}
//                     />
                    
//                     <SwitchWithText initialValue={true} text="ALLOW EDITS" heading="Allow users to edit their answers after submitting."
//                     />
//                     <SwitchWithText initialValue={true} text="AUTOMATICALLY ADVANCE SLIDES" heading="Automatically move to the next slide on selection."
//                     />
                     
//                     {showMoreOptions && (
//                         <>
//                         <BlockStack gap="600">
//                             <SwitchWithText
//                                 initialValue={false}
//                                 text="ANONYMOUS MODE"
//                                 heading="Do not collect any information from participants."
//                             />
//                             <SwitchWithText
//                                 initialValue={true}
//                                 text="HIDE X BUTTON"
//                                 heading="Hide the X button on the top right of the survey."
//                             />
//                             <SwitchWithText
//                                 initialValue={false}
//                                 text="HIDE CLOSE BUTTON"
//                                 heading="Hide the close button at the end of the survey."
//                             />
//                             <SwitchWithText
//                                 initialValue={false}
//                                 text="HIDE BACK BUTTON"
//                                 heading="Prevent the back button from appearing on this survey."
//                             />
//                             </BlockStack>
//                         </>
//                     )}
//                    </BlockStack>
//                     <div style={{marginTop:"20px"}}>
//                     <Bleed marginBlock="400" marginInline="400">
//                         <Box background="bg-surface-brand-active" padding="400">
//                         <div style={{textAlign:"center", fontWeight:"700", fontSize:"16px", cursor:"pointer"}} onClick={toggleMoreOptions} >
//                                 {showMoreOptions ? 'Less options' : 'More options'}
//                             </div>
//                         </Box>
//                     </Bleed>
//                     </div>
//                 </BlockStack>
//             </Card>
//             <div style={{margin:"15px 0"}}>
//             <BlockStack gap="50">
//                 <InlineStack blockAlign='center' gap="200">
//                     <SubmissionSVG />
//                     <Text variant="headingXl" fontWeight="regular" as="h3">
//                     Submission Rules
//                     </Text>
//                 </InlineStack>
//                 <div style={{marginLeft:"15px"}}>
//                 <Text variant="headingMd" as="h5">
//                 Manage the rules for filling out your survey.
//                 </Text>
//                 </div>
//             </BlockStack>
//             </div>  
//             <Card>
//                 <BlockStack gap="400">
//                     <SwitchWithTooltip initialValue={true}
//                      heading="ALLOW RESUBMISSIONS"
//                      tooltipText="This is useful for contact us style forms where you want to collect feedback without any limits."
//                      text="Let users fill out the survey multiple times."
//                     />
//                     <SwitchWithTooltip initialValue={false}
//                      heading="RESET SESSION"
//                      tooltipText="This is useful for kiosk style forms where you want to collect feedback from a single survey using a tablet or other device."
//                      text="Each submission will be treated as a new participant."
//                     />
//                     <SwitchWithTooltip initialValue={true}
//                      heading="URL DEPENDANT"
//                      tooltipText="This will treat each survey as unique if it is visited on a new url. This is useful if you have dynamic pages and want to run the same survey multiple times depending on the context. For example: running a survey on a post purchase page."
//                      text="The survey will restart when viewed in a new URL."
//                     />
//                 </BlockStack>
//             </Card>
//         </Page>
//     );
// }
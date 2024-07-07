// import {
//   Box,
//   Card,
//   Layout,
//   useIndexResourceState,
//   IndexTable,
//   Page,
//   Text,
//   BlockStack,
// } from "@shopify/polaris";
// import { TitleBar } from "@shopify/app-bridge-react";
// import db from "../db.server";
// import { useLoaderData } from "@remix-run/react";
// import { json } from "@remix-run/node";


// export async function loader(){

//   const allCustomers = await db.CustomerPoint.findMany({
//     take: 10,
//     select: {
//       id: true,
//       customerFirstName: true,
//       customerLastName: true,
//       email: true,
//       points: true,
//     },
//     orderBy: {
//       id: 'desc',
//     },
//   });
  
//   return json(allCustomers);
// }

// export default function customerData(){

//   const customers = useLoaderData();

//   const resourceName = {
//       singular: 'customer',
//       plural: 'customers',
//   };

//   const {selectedResources, allResourcesSelected, handleSelectionChange} =
//   useIndexResourceState(customers);

//   const rowMarkup = customers.map(
//   (
//       {id, customerFirstName, customerLastName, email, points},
//       index,
//   ) => (
//       <IndexTable.Row
//       id={id}
//       key={id}
//       selected={selectedResources.includes(id)}
//       position={index}
//       >
//           <IndexTable.Cell>{id}</IndexTable.Cell>
//           <IndexTable.Cell>{customerFirstName}</IndexTable.Cell>
//           <IndexTable.Cell>{customerLastName}</IndexTable.Cell>
//           <IndexTable.Cell>{email}</IndexTable.Cell>
//           <IndexTable.Cell>{points}</IndexTable.Cell>
//       </IndexTable.Row>
//   ),
//   );

//   return(
//       <Page>
//           <TitleBar title="Customer" />
//           <Layout>
//               <Layout.Section>
//               <Card>
//               <IndexTable
//                   resourceName={resourceName}
//                   itemCount={customers.length}
//                   selectedItemsCount={
//                   allResourcesSelected ? 'All' : selectedResources.length
//                   }
//                   onSelectionChange={handleSelectionChange}
//                   headings={[
//                   {title: 'Id'},
//                   {title: 'First Name'},
//                   {title: 'Last Name'},
//                   {title: 'Email'},
//                   {title: 'Point'},
//                   ]}
//                   pagination={{
//                       hasNext: true,
//                       onNext: () => {},
//                   }}
//               >
//                   {rowMarkup}
//               </IndexTable>
//               </Card>
//               </Layout.Section>
//           </Layout>
//       </Page>
//   );
// }



import {
  IndexTable,
  Card,
  useIndexResourceState,
  Text,
  Badge,
  Page,
  Box,
  Button,
  Popover,
  ActionList,
  Icon,
} from '@shopify/polaris';
import { ImportIcon, CheckSmallIcon, ExportIcon } from '@shopify/polaris-icons';
import { useState, useCallback } from 'react';


 export default function CustomerDataIndex() {
    const [active, setActive] = useState(false);

    const toggleActive = useCallback(() => setActive((active) => !active), []);

    const activator = (
        <Button variant="tertiary" size="large" onClick={toggleActive} disclosure sections>
        Import/Export
        </Button>
    );

    const orders = [
      {
        id: '1020',
        customer: '#000',
        name: 'Jaydon Stanton',
        email: 'hello@gmail.com',
        joiningDate: '01/01/2024',
        pointsEarned: <Badge progress="complete">2000</Badge>,
        redeemed: <Badge progress="incomplete">500</Badge>,
        tierStatus: <Badge progress="incomplete">Gold</Badge>,
      },
      {
        id: '1030',
        customer: '#000',
        name: 'Jaydon Stanton',
        email: 'hello@gmail.com',
        joiningDate: '01/01/2024',
        pointsEarned: <Badge progress="complete">2000</Badge>,
        redeemed: <Badge progress="incomplete">500</Badge>,
        tierStatus: <Badge progress="incomplete">Gold</Badge>,
      },
      {
        id: '1040',
        customer: '#000',
        name: 'Jaydon Stanton',
        email: 'hello@gmail.com',
        joiningDate: '01/01/2024',
        pointsEarned: <Badge progress="complete">2000</Badge>,
        redeemed: <Badge progress="incomplete">500</Badge>,
        tierStatus: <Badge progress="incomplete">Gold</Badge>,
      },
      {
        id: '1050',
        customer: '#000',
        name: 'Jaydon Stanton',
        email: 'hello@gmail.com',
        joiningDate: '01/01/2024',
        pointsEarned: <Badge progress="complete">2000</Badge>,
        redeemed: <Badge progress="incomplete">500</Badge>,
        tierStatus: <Badge progress="incomplete">Gold</Badge>,
      },
      {
        id: '1060',
        customer: '#000',
        name: 'Jaydon Stanton',
        email: 'hello@gmail.com',
        joiningDate: '01/01/2024',
        pointsEarned: <Badge progress="complete">2000</Badge>,
        redeemed: <Badge progress="incomplete">500</Badge>,
        tierStatus: <Badge progress="incomplete">Gold</Badge>,
      },
      {
        id: '1070',
        customer: '#000',
        name: 'Jaydon Stanton',
        email: 'hello@gmail.com',
        joiningDate: '01/01/2024',
        pointsEarned: <Badge progress="complete">2000</Badge>,
        redeemed: <Badge progress="incomplete">500</Badge>,
        tierStatus: <Badge progress="incomplete">Gold</Badge>,
      },
      {
        id: '1080',
        customer: '#000',
        name: 'Jaydon Stanton',
        email: 'hello@gmail.com',
        joiningDate: '01/01/2024',
        pointsEarned: <Badge progress="complete">2000</Badge>,
        redeemed: <Badge progress="incomplete">500</Badge>,
        tierStatus: <Badge progress="incomplete">Gold</Badge>,
      },
      {
        id: '1090',
        customer: '#000',
        name: 'Jaydon Stanton',
        email: 'hello@gmail.com',
        joiningDate: '01/01/2024',
        pointsEarned: <Badge progress="complete">2000</Badge>,
        redeemed: <Badge progress="incomplete">500</Badge>,
        tierStatus: <Badge progress="incomplete">Gold</Badge>,
      },
    ];
    const resourceName = {
      singular: 'order',
      plural: 'orders',
    };

    const {selectedResources, allResourcesSelected, handleSelectionChange} =
      useIndexResourceState(orders);

  
    const rowMarkup = orders.map(
      (
        {id, customer, name, email, joiningDate, pointsEarned, redeemed, tierStatus},
        index,
      ) => (
        <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
          position={index}
        >
          <IndexTable.Cell>
            <Text variant="bodyMd" fontWeight="bold" as="span">
              {customer}
            </Text>
          </IndexTable.Cell>
          <IndexTable.Cell>{name}</IndexTable.Cell>
          <IndexTable.Cell>{email}</IndexTable.Cell>
          <IndexTable.Cell>{joiningDate}</IndexTable.Cell>
          <IndexTable.Cell>{pointsEarned}</IndexTable.Cell>
          <IndexTable.Cell>{redeemed}</IndexTable.Cell>
          <IndexTable.Cell>{tierStatus}</IndexTable.Cell>
        </IndexTable.Row>
      ),
    );
  
    return (
        <Page  fullWidth>
            
      <Box paddingBlock="200">
      <div style={{ display: 'flex', height: '30px', alignItems: 'center' }}>
            <Text as="h2" variant="headingLg">
                Customers
            </Text>
                    
            <div style={{height: '30px', textAlign:"end", marginLeft: 'auto'}}>
              <Popover
                active={active}
                activator={activator}
                autofocusTarget="first-node"
                onClose={toggleActive}
              >
                <ActionList
                actionRole="menuitem"
                items={[
                    {
                    active: true,
                    content: 'Import file',
                    icon: ImportIcon,
                    suffix: <Icon source={CheckSmallIcon} />,
                    },
                    {content: 'Export file', icon: ExportIcon},
                ]}
                />
              </Popover>
            </div>
        </div>
        <div style={{height: '40px'}}>
        <Text as="p" variant="bodyMd" style={{ marginLeft: '10px'}}>
              View all customers and activities
          </Text>
          </div>
      </Box>
        
      <Card>
        <IndexTable
          resourceName={resourceName}
          itemCount={orders.length}
          selectedItemsCount={
            allResourcesSelected ? 'All' : selectedResources.length
          }
          onSelectionChange={handleSelectionChange}
          headings={[
            {title: 'Customers'},
            {title: 'Name'},
            {title: 'Email'},
            {title: 'Joining Date'},
            {title: 'Points Earned'},
            {title: 'Redeemed'},
            {title: 'Tier status'},
          ]}
        >
          {rowMarkup}
        </IndexTable>
      </Card>
      </Page>
    );
  }





import { Tabs } from '@shopify/polaris'
import React from 'react'

const CustomTab = ({ tabs, tabContent }) => {
  return (
    <>
      <Tabs tabs={tabs}>
        {tabContent}
      </Tabs>
    </>
  )
}

export default CustomTab
import React, { useState } from 'react';
import {  Text} from '@shopify/polaris';

const SwitchButton = ({ label, initialValue = false, onChange }) => {
  const [active, setActive] = useState(initialValue);

  const handleToggle = () => {
    setActive(prevState => !prevState);
    if (onChange) {
      onChange(!active);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: '10px' }}>
        <Text>{label}</Text>
      </div>
      <div
        role="switch"
        aria-checked={active}
        onClick={handleToggle}
        style={{
          display: 'inline-block',
          width: '50px',
          height: '25px',
          background: active ? '#4caf50' : '#ccc',
          borderRadius: '25px',
          position: 'relative',
          cursor: 'pointer',
          marginLeft: '10px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '2px',
            left: active ? '26px' : '2px',
            width: '21px',
            height: '21px',
            background: '#fff',
            borderRadius: '50%',
            transition: 'left 0.2s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            color: active ? '#4caf50' : '#ccc',
          }}
        >
          {/* {active ? 'On' : 'Off'} */}
        </div>
      </div>
    </div>
  );
};
export default SwitchButton;

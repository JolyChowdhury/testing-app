import React, { useState } from 'react';
import { Text } from '@shopify/polaris';

const SwitchButton = ({ label, initialValue = false, onChange, onClick, showText = true  }) => {
  const [active, setActive] = useState(initialValue);

  const handleToggle = (event) => {
    event.stopPropagation();
    const newState = !active;
    setActive(newState);
    if (onChange) {
      onChange(newState);
    }
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {label && <div style={{ marginRight: '10px' }}><Text>{label}</Text></div>}
      <div
        role="switch"
        aria-checked={active}
        onClick={handleToggle}
        style={{
          display: 'inline-block',
          width: '50px',
          height: '25px',
          background: active ? '#303030' : '#ccc',
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
            color: active ? '#303030' : '#ccc',
          }}
        >
          {showText && (active ? 'On' : 'Off')}
        </div>
      </div>
    </div>
  );
};

export default SwitchButton;

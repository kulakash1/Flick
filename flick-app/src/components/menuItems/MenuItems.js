import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';

const MenuItems = (props) => {
  
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  // Specific onClick functions for each menu item
  const handleClickOption1 = () => {
    console.log('Home clicked');
  };

  const handleClickOption2 = () => {
    console.log('Movie Critic clicked');
  };

  const handleClickOption3 = () => {
    console.log('Food Critic clicked');
  };

  const handleClickOption20 = () => {
    console.log('History clicked');
  };

  const handleClickOption21 = () => {
    console.log('Setting clicked');
  };

  const handleClickOption22 = () => {
    console.log('Logout clicked');
  };

  const handleClickOption5 = () => {
    console.log('Option 5 clicked');
  };

  const handleClickOption6 = () => {
    console.log('Option 6 clicked');
  };

  const handleClickOption7 = () => {
    console.log('Option 7 clicked');
  };

  const handleClickOption8 = () => {
    console.log('Option 8 clicked');
  };

  const handleClickOption9 = () => {
    console.log('Option 9 clicked');
  };

  const handleClickOption10 = () => {
    console.log('Option 10 clicked');
  };

  const handleClickOption11 = () => {
    console.log('Option 11 clicked');
  };

  const handleClickOption12 = () => {
    console.log('Option 12 clicked');
  };

  // Items array with specific onClick handlers for each item
  const items = [
    {
      key: '0',
      icon: <PieChartOutlined />,
      label: 'Menu',
      onClick: toggleCollapsed,
    },
    {
      key: '1',
      icon: <PieChartOutlined />,
      label: 'Home',
      onClick: handleClickOption1,
    },
    {
      key: '2',
      icon: <DesktopOutlined />,
      label: 'Movie Critic',
      onClick: handleClickOption2,
    },
    {
      key: '3',
      icon: <ContainerOutlined />,
      label: 'Food Critic',
      onClick: handleClickOption3,
    },
    {
      key: '20',
      icon: <ContainerOutlined />,
      label: 'History',
      onClick: handleClickOption20,
    },
    {
      key: '21',
      icon: <ContainerOutlined />,
      label: 'Setting',
      onClick: handleClickOption21,
    },
    {
      key: '22',
      icon: <ContainerOutlined />,
      label: 'Logout',
      onClick: handleClickOption22,
    },
    {
      key: 'sub1',
      label: 'Profile Options',
      icon: <MailOutlined />,
      children: [
        {
          key: '5',
          label: 'Option 5',
          onClick: handleClickOption5,
        },
        {
          key: '6',
          label: 'Option 6',
          onClick: handleClickOption6,
        },
        {
          key: '7',
          label: 'Option 7',
          onClick: handleClickOption7,
        },
        {
          key: '8',
          label: 'Option 8',
          onClick: handleClickOption8,
        },
      ],
    },
    {
      key: 'sub2',
      label: 'Navigation Two',
      icon: <AppstoreOutlined />,
      children: [
        {
          key: '9',
          label: 'Option 9',
          onClick: handleClickOption9,
        },
        {
          key: '10',
          label: 'Option 10',
          onClick: handleClickOption10,
        },
        {
          key: 'sub3',
          label: 'Submenu',
          children: [
            {
              key: '11',
              label: 'Option 11',
              onClick: handleClickOption11,
            },
            {
              key: '12',
              label: 'Option 12',
              onClick: handleClickOption12,
            },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <Menu
        className={`bg-[#FF6978] h-screen ${collapsed ? 'w-[100px]' : 'w-1/2'}`}
        defaultSelectedKeys={['0']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items} // Use items array with specific onClick handlers
      />
    </div>
  );
};

export default MenuItems;

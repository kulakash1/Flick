import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import HomePage from '../home/testFol/TestFile';

const { Header, Sider, Content } = Layout;

const MenuItemsOption = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
    {
      key: '1',
      icon: collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />,
      label: 'Toggle',
      onClick: toggleCollapse,
    },
    {
      key: '2',
      icon: <UserOutlined />,
      label: 'nav 1',
    },
    {
      key: '3',
      icon: <VideoCameraOutlined />,
      label: 'nav 2',
    },
    {
      key: '4',
      icon: <UploadOutlined />,
      label: 'nav 3',
    },
  ];

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggleCollapse}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <HomePage />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MenuItemsOption;

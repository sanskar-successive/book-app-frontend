// import React from "react";
// import Header from "../../components/header/Header";
// import Sidebar from "../../components/sidebar/Sidebar";
// import { Outlet } from "react-router-dom";

// const Layout = () => {
//   return (
//     <div>
//       <Header data-testid="top-header" />
//       <Sidebar data-testid="left-sidebar"  />
//       <Outlet data-testid="outlet" />
//     </div>
//   );
// };
// export default Layout;


import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import LayoutHeader from './components/header/Header';
import Sidebar from './components/sider/Sidebar';
import List from '../../module/book/pages/listPage/List';
import PageContent from './components/content/Content';
const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});
const PageLayout = ({content}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      {/* <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header> */}

      <LayoutHeader/>
      <Layout>
        {/* <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider> */}

        <Sidebar/>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
        
          {/* <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >

            {content}
          </Content> */}

          <PageContent>{content}</PageContent>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default PageLayout;

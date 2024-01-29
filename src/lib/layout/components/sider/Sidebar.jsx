import React from 'react'
import { Anchor, Breadcrumb, Layout, Menu, theme } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
const { Sider } = Layout;


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

const siderItems = [
    "booklist", "addbook", "uploadfile", "bulkuploads"
].map((item) => {
    return {

        href: `/upload-file`,
        title: item,
    }
})


const Sidebar = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Sider
            width={200}
            style={{
                background: colorBgContainer,
            }}
        >
            {/* <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{
                    height: '100%',
                    borderRight: 0,
                }}
                items={items2}
            /> */}

            <Anchor items={siderItems} />

        </Sider>

        // <Sider
        //     style={{
        //         overflow: 'auto',
        //         height: '100vh',
        //         position: 'fixed',
        //         left: 0,
        //         top: 0,
        //         bottom: 0,
        //     }}
        // >
        //     <Anchor items={siderItems} />
        // </Sider>
    )
}

export default Sidebar
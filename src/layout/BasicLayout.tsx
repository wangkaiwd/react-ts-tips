import { Avatar, Button, Layout, Menu, MenuProps, Space, theme } from 'antd';
import { useSnapshot } from 'valtio';
import user, { updateUserName } from '../store/user';
import styles from './index.module.less';
import React, { Suspense, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { menuItems } from '../router/routes';
import Logo from '../components/PageFallback/Logo/Logo';

const { Sider, Header, Content } = Layout;
const BasicLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();
  const snapUser = useSnapshot(user);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const onClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key);
  };
  const onChangeUserName = () => {
    updateUserName(snapUser.name + 1);
  };
  return (
    <div className={styles.App}>
      <Layout className={styles.page}>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <Logo/>
          <Menu onClick={onClick} theme="dark" selectedKeys={[pathname]} mode="inline" items={menuItems}/>
        </Sider>
        <Layout className="site-layout">
          <Header style={{ background: colorBgContainer }}>
            <Space>
              <Avatar>{snapUser.name}</Avatar>
              <Button onClick={onChangeUserName}>change user name</Button>
            </Space>
          </Header>
          <Content className={styles.content}>
            <Suspense>
              <Outlet/>
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default BasicLayout;

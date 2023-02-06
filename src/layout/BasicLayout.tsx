import { Layout, Menu, MenuProps, theme } from 'antd';
import { useSnapshot } from 'valtio';
import user, { updateUserName } from '../store/user';
import styles from './index.module.less';
import React, { Suspense, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { menuItems } from '../router/routes';
import PageFallback from '../components/PageFallback/PageFallback';

const { Sider, Header, Content } = Layout;
const BasicLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();
  const snap = useSnapshot(user);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const onClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key);
  };
  return (
    <div className={styles.App}>
      <Layout className={styles.page}>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <Menu onClick={onClick} theme="dark" selectedKeys={[pathname]} mode="inline" items={menuItems}/>
        </Sider>
        <Layout className="site-layout">
          <Header style={{ background: colorBgContainer }}>
            Header
          </Header>
          <Content className={styles.content}>
            <Suspense fallback={<PageFallback/>}>
              <Outlet/>
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default BasicLayout;

import { Layout } from 'antd';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { HiMiniInformationCircle } from "react-icons/hi2";
import { BiWorld } from "react-icons/bi";


const { Header, Sider, Content } = Layout;

import type { CSSProperties, ReactNode } from 'react';
import { SidebarButton } from '../SidebarButton';

export type AppLayoutProps = {
  collapsed?: boolean;
  children: ReactNode;
};
const ROUTES = [
  "/",
  "/charts",
  "/information",
  "/about"
]
export const AppLayout = ({ collapsed = false, children }: AppLayoutProps) => {

  const currentRoute = window.location.pathname;

  const styles = {
    sider: {
      width: collapsed ? 80 : 200,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#34ebb4",
    } as CSSProperties,
    header: {} as CSSProperties,
    content: {} as CSSProperties,
    siderPartOne: {
      height: "56px",
      width: "100%",
      marginBottom: "16px",
    } as CSSProperties,
    siderTopIcons: {
      height: "120px",
      width: "100%",
      marginBottom: "16px",
    } as CSSProperties,
    siderSeperator: {
      flex: 1,
      width: "100%",
      marginBottom: "16px",
    } as CSSProperties,
    siderMidIcons: {
      height: "280px",
      width: "100%",
      marginBottom: "16px",
    } as CSSProperties,
    headerLeft: {
      width: "300px",
      borderRadius: "8px",
      fontWeight: "600",
      fontSize: "18px",
      marginLeft: "28px",
    } as CSSProperties,
    headerSeperator: {
      flex: 1,
    } as CSSProperties,
    headerRight: {
      height: "32px",
      width: "120px",
      borderRadius: "8px",
      marginRight: "84px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
    } as CSSProperties,
    buttonContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    } as CSSProperties
  }

  return (
    <Layout
      style={{
        height: "100vh",
        position: "relative",
        overflow: "auto",
      }}
    >

      <Layout>
        <Sider width={"64px"} style={styles.sider}>
          <div style={styles.siderPartOne}>
            <div style={styles.buttonContainer}>
              <SidebarButton
                icon={<BiWorld color='white' size={20} />}
                label={collapsed ? undefined : ""}
                onClick={() => { }}
                selected={false}
              />
            </div>
          </div>
          <div style={styles.siderTopIcons}>
            <div style={styles.buttonContainer}>
              <SidebarButton
                icon={<FaMapMarkerAlt color='white' size={20} />}
                label={collapsed ? undefined : "Harita"}
                onClick={() => { }}
                selected={ROUTES[0] === currentRoute}
              />
            </div>
            <div style={styles.buttonContainer}>
              <SidebarButton
                icon={<FaChartLine color='white' size={20} />}
                label={collapsed ? undefined : "Grafikler"}
                onClick={() => { }}
                selected={ROUTES[1] === currentRoute}
              />
            </div>
          </div>
          <div style={{
            ...styles.siderSeperator,
            flex: 1,
          }}></div>
          <div style={styles.siderMidIcons}>
            <div style={styles.buttonContainer}>
              <SidebarButton
                icon={<HiMiniInformationCircle color='white' size={20} />}
                label={collapsed ? undefined : "Bilgi"}
                onClick={() => { }}
                selected={ROUTES[2] === currentRoute}
              />
            </div>
            <div style={styles.buttonContainer}>
              <SidebarButton
                icon={<FaMapMarkerAlt color='white' size={20} />}
                label={collapsed ? undefined : "Hakkında"}
                onClick={() => { }}
                selected={ROUTES[3] === currentRoute}
              />
            </div>
          </div>
          <div style={{
            ...styles.siderSeperator,
            flex: 3,
          }}></div>
        </Sider>
        <Layout>
          <Header
            style={{
              zIndex: 1000,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0px 16px",
              height: "56px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
              position: "fixed",
              backgroundColor: "white",
              top: 0,
              width: "100%",
              transition: "all 0.2s",
            }}
          >
            <div style={styles.headerLeft}>
              Atıksu Takip Uygulaması
            </div>
            <div style={styles.headerSeperator}></div>
            <div style={styles.headerRight}>
              <img src="https://img.icons8.com/ios-filled/50/000000/user.png" alt="Avatar" style={{ width: 32, height: 32, borderRadius: "50%" }} />
            </div>
          </Header>
          <Content
            style={{
              marginTop: "56px",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
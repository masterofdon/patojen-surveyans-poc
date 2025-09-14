import { Tooltip } from "antd";

export type SidebarButtonProps = {
  icon?: React.ReactNode;
  label?: string;
  onClick?: () => void;
  selected?: boolean;
};
export const SidebarButton = ({ icon, label, onClick, selected = false }: SidebarButtonProps) => {
  const styles = {
    container : {
      width: "56px",
      height: "56px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "background-color 0.3s",
      hover: {
        backgroundColor: "rgba(255, 255, 255, 0.1)"
      },
      backgroundColor: selected ? "rgba(0, 0, 0, 0.4)" : "transparent",
    } as React.CSSProperties
  }
  return (
    <div style={styles.container} onClick={onClick}>
      <Tooltip
        title={label}
      >
        {icon}
      </Tooltip>
    </div>
  );
};
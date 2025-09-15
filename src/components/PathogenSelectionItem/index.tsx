import type { Patogen } from "../../types";

export type PathogenSelectionItemProps = {
  patogen: Patogen;
  onClick: (patogen: Patogen) => void;
  selected?: boolean;
};
export const PathogenSelectionItem = ({ patogen, onClick, selected }: PathogenSelectionItemProps) => {
  const styles = {
    container: {
      padding: "8px 12px",
      borderBottom: "1px solid #eee",
      cursor: "pointer",
      backgroundColor: selected ? "#000" : "#d2d2d2",
      color: selected ? "#fff" : "#000",
      borderRadius: "8px",
    } as React.CSSProperties,
  }
  return (
    <div style={styles.container} onClick={() => onClick(patogen)}>
      {patogen.name}
    </div>
  );
}
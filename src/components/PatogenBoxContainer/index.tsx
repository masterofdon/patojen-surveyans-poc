import { PatogenBox, type PatogenBoxProps } from "../PatogenBox";

export type PatogenBoxContainerProps = {
  patogens: PatogenBoxProps['patogen'][];
  onClick?: PatogenBoxProps['onClick'];
};
export const PatogenBoxContainer = ({ patogens, onClick }: PatogenBoxContainerProps) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      overflowY: 'auto',
      maxHeight: '90vh',
      padding: '8px',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
    } as React.CSSProperties,
  };
  return (
    <div style={styles.container}>
      {patogens.map((patogen) => (
        <PatogenBox
          key={patogen.name} patogen={patogen}
          onClick={onClick}
        />
      ))}
    </div>
  );
};
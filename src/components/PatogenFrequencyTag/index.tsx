import { FrequencyText } from "../../util/severity-color-utils";

export const PatogenFrequencyTag = ({ frequency }: { frequency: number }) => {
  const getColor = (frequency: number) => {
    if (frequency === 0) return "red";
    if (frequency === 1) return "orange";
    if (frequency === 2) return "blue";
    return "red";
  };

  const styles = {
    tag: {
      display: 'inline-block',
      padding: '4px 8px',
      borderRadius: '12px',
      backgroundColor: getColor(frequency),
      color: 'white',
    },
  };

  return <span style={styles.tag}>{FrequencyText(frequency)}</span>;
};
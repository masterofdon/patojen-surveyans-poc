import type { Patogen } from "../../types";
import { FrequencyColor } from "../../util/severity-color-utils";
import { PatogenFrequencyTag } from "../PatogenFrequencyTag";

export type PatogenBoxProps = {
  patogen: Patogen;
  onClick?: (patogen: Patogen) => void;
};
export const PatogenBox = ({ patogen, onClick }: PatogenBoxProps) => {
  // Get the base color and add 33 alpha for background
  const baseColor = FrequencyColor(patogen.frequency);
  // Convert hex to rgba with alpha 0.2 (33 in hex)
  const hexToRgba33 = (hex: string) => {
    // Remove # if present
    hex = hex.replace('#', '');
    if (hex.length === 3) {
      hex = hex.split('').map(x => x + x).join('');
    }
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r},${g},${b},0.2)`;
  };
  const styles = {
    container: {
      backgroundColor: hexToRgba33(baseColor),
    } as React.CSSProperties,
  };
  return (
    <div style={styles.container} className="patogen-box" onClick={() => onClick?.(patogen)}>
      <h2>{patogen.name}</h2>
      <PatogenFrequencyTag frequency={patogen.frequency} />
      <p>{patogen.description}</p>
    </div>
  );
};
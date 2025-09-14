

export const FrequencyColor = (frequency: number) => {
  if (frequency === 0) return "#fc6b03";
  if (frequency === 1) return "#f0c31f";
  if (frequency === 2) return "#39b5db";
  return "#808080";
};

export const FrequencyText = (frequency: number) => {
  if (frequency === 0) return "Yüksek";
  if (frequency === 1) return "Orta";
  if (frequency === 2) return "Düşük";
  return "Tespit Edilmedi";
}
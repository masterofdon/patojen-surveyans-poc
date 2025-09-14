
export type Patogen = {
  name: string;
  type: string;
  description: string;
  healthRisks: string[];
  detectionMethods: string[];
  sources: string[];
  severity: string;
  frequency: number;
  measurements: Measurement[];
}
export type Measurement = {
  id: number;
  name : string;
  latitude: number;
  longitude: number;
  frequency: number;
}
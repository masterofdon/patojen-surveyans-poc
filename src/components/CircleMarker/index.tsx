import { Marker } from 'react-map-gl/mapbox';
export type CircleMarkerProps = {
  color?: string;
  latitude?: number;
  longitude?: number;
};
export const CircleMarker = ({ color = "red", latitude = 39.9334, longitude = 32.8597 }: CircleMarkerProps) => {
  return (
    <Marker latitude={latitude} longitude={longitude}>
      <div style={{
        width: 18,
        height: 18,
        borderRadius: "50%",
        background: color,
        border: "2px solid white",
        boxShadow: "0 0 4px rgba(0,0,0,0.3)"
      }} />
    </Marker>
  );
}
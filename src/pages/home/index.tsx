import Map, { Marker } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState, type CSSProperties } from 'react';
import { PatogenBoxContainer } from '../../components/PatogenBoxContainer';
import PATOGENS from '../../data/patogens.json';
import type { Patogen } from '../../types';
import { FrequencyColor } from '../../util/severity-color-utils';

export const HomePage = () => {

  const [selectedPatogen, setSelectedPatogen] = useState<Patogen>(PATOGENS[0]);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "stretch",
      height: "100%",
      width: "100%",
    } as CSSProperties,
    patogenContainer: {
      width: "22%",
      minWidth: "320px",
      padding: "4px 24px"
    } as CSSProperties,
    mapContainer: {
      flex: 1,
    } as CSSProperties
  }
  return (
    <div style={styles.container}>
      <div style={styles.patogenContainer}>
        <PatogenBoxContainer
          patogens={PATOGENS}
          onClick={setSelectedPatogen} />
      </div>
      <div style={styles.mapContainer}>

        <Map
          mapboxAccessToken="pk.eyJ1IjoiYWVyZGVtZWtpbiIsImEiOiJjajhtdGRxb2ExMmE5MnZqczljOXA0MDJhIn0.Fo8sD9jDikhVUu72blwRUA"
          initialViewState={{
            latitude: 39.11,
            longitude: 34.452,
            zoom: 5.5
          }}
          style={{ width: "100%", height: "100%" }}
          mapStyle="mapbox://styles/mapbox/light-v11"
        >
          <div style={{
            width: "500px",
            height: "200px",
            backgroundColor: "white",
            position: "absolute",
            bottom: 40,
            right: 20,
            borderRadius: 8,
            boxShadow: "0 0 8px rgba(0,0,0,0.2)",
            padding: 16,
            zIndex: 1,
          }}>
            <h2 style={{ margin: 0 }}>{selectedPatogen.name}</h2>
            <p style={{ margin: "8px 0 0 0", color: "#555" }}>{selectedPatogen.description}</p>
            <div style={{ marginTop: 12, display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
              {selectedPatogen.healthRisks.map((risk, idx) => (
                <span key={idx} style={{
                  backgroundColor: FrequencyColor(selectedPatogen.frequency),
                  color: "white",
                  padding: "4px 8px",
                  borderRadius: 4,
                  fontSize: 12,
                }}>{risk}</span>
              ))}
            </div>
          </div>
          {selectedPatogen.measurements.map(m => (
            <Marker key={m.id} latitude={m.latitude} longitude={m.longitude}>
              <div style={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                backgroundColor: FrequencyColor(m.frequency),
                border: "2px solid white",
                boxShadow: "0 0 4px rgba(0,0,0,0.3)"
              }} />
            </Marker>
          ))}
        </Map>
      </div>
    </div>
  );
}
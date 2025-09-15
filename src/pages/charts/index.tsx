import { useState } from "react";
import type { Patogen } from "../../types";
import { Tabs } from "antd";
import PATOGENS from '../../data/patogens.json';
import { PathogenSelectionItem } from "../../components/PathogenSelectionItem";
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

export const ChartsPage = () => {
  const [selectedPatogen, setSelectedPatogen] = useState<Patogen>(PATOGENS[0]);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(PATOGENS[0].variations ? PATOGENS[0].variations[0] : null);

  const TAB_MENU_ITEMS = [
    {
      key: '1',
      label: 'Solunum Yolu',
    },
    {
      key: '2',
      label: 'Gastrointestinal',
    },
    {
      key: '3',
      label: 'Diğer',
    }
  ]
  const styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "stretch",
      height: "100%",
      width: "100%",
    } as React.CSSProperties,
    leftFiltersContainer: {
      width: "360px",
      borderRight: "1px solid #eee",
      padding: "16px",
    } as React.CSSProperties,
    rightChartsContainer: {
      flex: 1,
      padding: "16px",
      backgroundColor: "#fafafa",
    } as React.CSSProperties,
    tabsContainer: {
      borderBottom: "1px solid #eee",
      padding: "8px 0",
    } as React.CSSProperties,
  };

  // Grafik verilerini Türkçeleştir ve tüm yıl aylarını ekle
  const data = {
    labels: [
      'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
      'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
    ],
    datasets: [
      {
        label: 'Patojen Varyantı 1',
        data: [65, 59, 80, 81, 56, 55, 40, 70, 60, 75, 68, 72],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Patojen Varyantı 2',
        data: [28, 48, 40, 19, 86, 27, 90, 55, 62, 80, 77, 69],
        fill: false,
        borderColor: 'rgb(153, 102, 255)',
        tension: 0.1
      }
    ]
  }

  return (
    <section style={styles.container}>
      <div style={styles.leftFiltersContainer}>
        <div style={styles.tabsContainer}>
          <Tabs
            defaultActiveKey="1"
            items={TAB_MENU_ITEMS}
          />
        </div>
        <div>
          <h3>Patojenler</h3>
          <div style={{ display: "flex", flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
            {PATOGENS.map((patogen) => (
              <PathogenSelectionItem
                key={patogen.uuid}
                patogen={patogen}
                onClick={setSelectedPatogen}
                selected={patogen.uuid === selectedPatogen.uuid}
              />
            ))}
          </div>
        </div>
        <div>

        </div>
      </div>
      <div style={styles.rightChartsContainer}>
        <Line
          id="line-chart"
          key={selectedVariant || 'default'}
          data={data}
        />
      </div>
    </section>
  );
};
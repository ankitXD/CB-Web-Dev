import { useState, useEffect, useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register the components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const API_URL = 'https://api.coindesk.com/v1/bpi/historical/close.json?currency=';

function App() {
  const [data, setData] = useState({});
  const [currency, setCurrency] = useState('USD');
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_URL} ${currency}`);
        const result = await response.json();
        setData(result.bpi);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };

    fetchData();
  }, [currency]);

  // Memoized processed data
  const chartData = useMemo(() => {
    return {
      labels: Object.keys(data),
      datasets: [
        {
          label: `Price in ${currency}`,
          data: Object.values(data),
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
          tension: 0.1,
        },
      ],
    };
  }, [data, currency]);

  return (
    <div>
      <h1>Cryptocurrency Dashboard</h1>
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>

      {loading ? (
        <p>Loading data...</p>
      ) : (
        <Line data={chartData} />
      )}
    </div>
  );
}

export default App;
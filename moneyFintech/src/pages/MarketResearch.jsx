





// import React, { useState } from "react";
// import axios from "axios";
// import { Pie, Bar } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

// // Register the chart types you need
// ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

// const MarketResearch = () => {
//   const [formData, setFormData] = useState({
//     initialInvestment: '',
//     currentPortfolioValue: '',
//     startDate: '',
//     endDate: '',
//     stocksAllocation: '',
//     bondsAllocation: '',
//     cryptoAllocation: '',
//     strategyName: '',
//     profitLoss: ''
//   });

//   const [chartData, setChartData] = useState(null);
//   const [portfolioStats, setPortfolioStats] = useState(null);

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Send data to the backend
//       const response = await axios.post("http://localhost:5000/api/portfolio", formData);

//       // Show portfolio data
//       setPortfolioStats(response.data.portfolio);

//       // Prepare data for the graphs
//       const pieChartData = {
//         labels: ["Stocks", "Bonds", "Crypto"],
//         datasets: [
//           {
//             data: [
//               formData.stocksAllocation,
//               formData.bondsAllocation,
//               formData.cryptoAllocation
//             ],
//             backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe"],
//             hoverBackgroundColor: ["#ff6384", "#36a2eb", "#cc65fe"],
//           },
//         ],
//       };

//       const barChartData = {
//         labels: ["Initial Investment", "Current Portfolio Value"],
//         datasets: [
//           {
//             label: "Portfolio Value",
//             data: [
//               formData.initialInvestment,
//               formData.currentPortfolioValue
//             ],
//             backgroundColor: ["#ff6384", "#36a2eb"],
//           },
//         ],
//       };

//       setChartData({ pieChartData, barChartData });

//     } catch (error) {
//       console.error("Error submitting portfolio data:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Market Research - Portfolio Input</h2>

//       <form onSubmit={handleSubmit}>
//         <label>Initial Investment:</label>
//         <input
//           type="number"
//           name="initialInvestment"
//           value={formData.initialInvestment}
//           onChange={handleInputChange}
//         />

//         <label>Current Portfolio Value:</label>
//         <input
//           type="number"
//           name="currentPortfolioValue"
//           value={formData.currentPortfolioValue}
//           onChange={handleInputChange}
//         />

//         <label>Start Date:</label>
//         <input
//           type="date"
//           name="startDate"
//           value={formData.startDate}
//           onChange={handleInputChange}
//         />

//         <label>End Date:</label>
//         <input
//           type="date"
//           name="endDate"
//           value={formData.endDate}
//           onChange={handleInputChange}
//         />

//         <label>Stocks Allocation (%):</label>
//         <input
//           type="number"
//           name="stocksAllocation"
//           value={formData.stocksAllocation}
//           onChange={handleInputChange}
//         />

//         <label>Bonds Allocation (%):</label>
//         <input
//           type="number"
//           name="bondsAllocation"
//           value={formData.bondsAllocation}
//           onChange={handleInputChange}
//         />

//         <label>Crypto Allocation (%):</label>
//         <input
//           type="number"
//           name="cryptoAllocation"
//           value={formData.cryptoAllocation}
//           onChange={handleInputChange}
//         />

//         <label>Strategy Name (Optional):</label>
//         <input
//           type="text"
//           name="strategyName"
//           value={formData.strategyName}
//           onChange={handleInputChange}
//         />

//         <label>Profit/Loss (Optional):</label>
//         <input
//           type="number"
//           name="profitLoss"
//           value={formData.profitLoss}
//           onChange={handleInputChange}
//         />

//         <button type="submit">Submit</button>
//       </form>

//       {chartData && (
//         <div>
//           <h3>Asset Allocation (Pie Chart)</h3>
//           <Pie data={chartData.pieChartData} />

//           <h3>Portfolio Value Comparison (Bar Graph)</h3>
//           <Bar data={chartData.barChartData} />
//         </div>
//       )}

//       {portfolioStats && (
//         <div>
//           <h3>Strategy Report</h3>
//           <p><strong>Strategy Name:</strong> {portfolioStats.strategyName}</p>
//           <p><strong>Initial Investment:</strong> {portfolioStats.initialInvestment}</p>
//           <p><strong>Current Portfolio Value:</strong> {portfolioStats.currentPortfolioValue}</p>
//           <p><strong>Profit/Loss:</strong> {portfolioStats.profitLoss}</p>
//           {/* Add ROI, CAGR, and Drawdown calculations here */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MarketResearch;






// import React, { useState } from "react";
// import axios from "axios";
// import { Pie, Bar } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

// // Register the chart types you need
// ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

// const MarketResearch = () => {
//   const [formData, setFormData] = useState({
//     initialInvestment: '',
//     currentPortfolioValue: '',
//     startDate: '',
//     endDate: '',
//     stocksAllocation: '',
//     bondsAllocation: '',
//     cryptoAllocation: '',
//     strategyName: '',
//     profitLoss: ''
//   });

//   const [chartData, setChartData] = useState(null);
//   const [portfolioStats, setPortfolioStats] = useState(null);

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Send data to the backend
//       const response = await axios.post("http://localhost:5000/api/portfolio", formData);

//       // Show portfolio data
//       setPortfolioStats(response.data.portfolio);

//       // Prepare data for the graphs
//       const pieChartData = {
//         labels: ["Stocks", "Bonds", "Crypto"],
//         datasets: [
//           {
//             data: [
//               formData.stocksAllocation,
//               formData.bondsAllocation,
//               formData.cryptoAllocation
//             ],
//             backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe"],
//             hoverBackgroundColor: ["#ff6384", "#36a2eb", "#cc65fe"],
//           },
//         ],
//       };

//       const barChartData = {
//         labels: ["Initial Investment", "Current Portfolio Value"],
//         datasets: [
//           {
//             label: "Portfolio Value",
//             data: [
//               formData.initialInvestment,
//               formData.currentPortfolioValue
//             ],
//             backgroundColor: ["#ff6384", "#36a2eb"],
//           },
//         ],
//       };

//       setChartData({ pieChartData, barChartData });

//     } catch (error) {
//       console.error("Error submitting portfolio data:", error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-3xl font-bold text-center mb-6">Market Research - Portfolio Input</h2>

//       <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
//         <div className="flex flex-col">
//           <label className="text-sm font-semibold">Initial Investment:</label>
//           <input
//             type="number"
//             name="initialInvestment"
//             value={formData.initialInvestment}
//             onChange={handleInputChange}
//             className="p-2 border border-gray-300 rounded-md mt-1"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="text-sm font-semibold">Current Portfolio Value:</label>
//           <input
//             type="number"
//             name="currentPortfolioValue"
//             value={formData.currentPortfolioValue}
//             onChange={handleInputChange}
//             className="p-2 border border-gray-300 rounded-md mt-1"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="text-sm font-semibold">Start Date:</label>
//           <input
//             type="date"
//             name="startDate"
//             value={formData.startDate}
//             onChange={handleInputChange}
//             className="p-2 border border-gray-300 rounded-md mt-1"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="text-sm font-semibold">End Date:</label>
//           <input
//             type="date"
//             name="endDate"
//             value={formData.endDate}
//             onChange={handleInputChange}
//             className="p-2 border border-gray-300 rounded-md mt-1"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="text-sm font-semibold">Stocks Allocation (%):</label>
//           <input
//             type="number"
//             name="stocksAllocation"
//             value={formData.stocksAllocation}
//             onChange={handleInputChange}
//             className="p-2 border border-gray-300 rounded-md mt-1"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="text-sm font-semibold">Bonds Allocation (%):</label>
//           <input
//             type="number"
//             name="bondsAllocation"
//             value={formData.bondsAllocation}
//             onChange={handleInputChange}
//             className="p-2 border border-gray-300 rounded-md mt-1"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="text-sm font-semibold">Crypto Allocation (%):</label>
//           <input
//             type="number"
//             name="cryptoAllocation"
//             value={formData.cryptoAllocation}
//             onChange={handleInputChange}
//             className="p-2 border border-gray-300 rounded-md mt-1"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="text-sm font-semibold">Strategy Name (Optional):</label>
//           <input
//             type="text"
//             name="strategyName"
//             value={formData.strategyName}
//             onChange={handleInputChange}
//             className="p-2 border border-gray-300 rounded-md mt-1"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="text-sm font-semibold">Profit/Loss (Optional):</label>
//           <input
//             type="number"
//             name="profitLoss"
//             value={formData.profitLoss}
//             onChange={handleInputChange}
//             className="p-2 border border-gray-300 rounded-md mt-1"
//           />
//         </div>

//         <button type="submit" className="col-span-2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mt-4">Submit</button>
//       </form>

//       {chartData && (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="p-4 bg-white shadow-md rounded-lg">
//             <h3 className="text-xl font-semibold mb-4">Asset Allocation (Pie Chart)</h3>
//             <Pie data={chartData.pieChartData} />
//           </div>

//           <div className="p-4 bg-white shadow-md rounded-lg">
//             <h3 className="text-xl font-semibold mb-4">Portfolio Value Comparison (Bar Graph)</h3>
//             <Bar data={chartData.barChartData} />
//           </div>
//         </div>
//       )}

//       {portfolioStats && (
//         <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
//           <h3 className="text-xl font-semibold mb-4">Strategy Report</h3>
//           <p><strong>Strategy Name:</strong> {portfolioStats.strategyName}</p>
//           <p><strong>Initial Investment:</strong> {portfolioStats.initialInvestment}</p>
//           <p><strong>Current Portfolio Value:</strong> {portfolioStats.currentPortfolioValue}</p>
//           <p><strong>Profit/Loss:</strong> {portfolioStats.profitLoss}</p>
//           {/* Add ROI, CAGR, and Drawdown calculations here */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MarketResearch;

import React, { useState } from "react";
import { usePortfolio } from "../portfolioContext"; // Import usePortfolio hook
import axios from "axios";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

// Register the chart types you need
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const MarketResearch = () => {
  // Access portfolio data from context and update function
  const { portfolioData, updatePortfolioData } = usePortfolio();
  const [chartData, setChartData] = useState(null);

  // Handle input field changes and update the portfolio data in context
  const handleInputChange = (e) => {
    updatePortfolioData({
      ...portfolioData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send portfolio data to the backend
      const response = await axios.post("http://localhost:5000/api/portfolio", portfolioData);

      // Prepare data for the pie and bar charts
      const pieChartData = {
        labels: ["Stocks", "Bonds", "Crypto"],
        datasets: [
          {
            data: [
              portfolioData.stocksAllocation,
              portfolioData.bondsAllocation,
              portfolioData.cryptoAllocation,
            ],
            backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe"],
            hoverBackgroundColor: ["#ff6384", "#36a2eb", "#cc65fe"],
          },
        ],
      };

      const barChartData = {
        labels: ["Initial Investment", "Current Portfolio Value"],
        datasets: [
          {
            label: "Portfolio Value",
            data: [portfolioData.initialInvestment, portfolioData.currentPortfolioValue],
            backgroundColor: ["#ff6384", "#36a2eb"],
          },
        ],
      };

      // Update the chart data
      setChartData({ pieChartData, barChartData });

    } catch (error) {
      console.error("Error submitting portfolio data:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Market Research - Portfolio Input</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col">
          <label className="text-sm font-semibold">Initial Investment:</label>
          <input
            type="number"
            name="initialInvestment"
            value={portfolioData.initialInvestment}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded-md mt-1"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold">Current Portfolio Value:</label>
          <input
            type="number"
            name="currentPortfolioValue"
            value={portfolioData.currentPortfolioValue}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded-md mt-1"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold">Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={portfolioData.startDate}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded-md mt-1"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold">End Date:</label>
          <input
            type="date"
            name="endDate"
            value={portfolioData.endDate}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded-md mt-1"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold">Stocks Allocation (%):</label>
          <input
            type="number"
            name="stocksAllocation"
            value={portfolioData.stocksAllocation}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded-md mt-1"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold">Bonds Allocation (%):</label>
          <input
            type="number"
            name="bondsAllocation"
            value={portfolioData.bondsAllocation}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded-md mt-1"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold">Crypto Allocation (%):</label>
          <input
            type="number"
            name="cryptoAllocation"
            value={portfolioData.cryptoAllocation}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded-md mt-1"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold">Strategy Name (Optional):</label>
          <input
            type="text"
            name="strategyName"
            value={portfolioData.strategyName}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded-md mt-1"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold">Profit/Loss (Optional):</label>
          <input
            type="number"
            name="profitLoss"
            value={portfolioData.profitLoss}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded-md mt-1"
          />
        </div>

        <button type="submit" className="col-span-2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mt-4">
          Submit
        </button>
      </form>

      {chartData && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Asset Allocation (Pie Chart)</h3>
            <Pie data={chartData.pieChartData} />
          </div>

          <div className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Portfolio Value Comparison (Bar Graph)</h3>
            <Bar data={chartData.barChartData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketResearch;

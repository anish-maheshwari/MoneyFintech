// import React from 'react';

// const StrategyPerformanceReport = () => {
//   // Simulated Data
//   const initialInvestment = 10000;
//   const endingValue = 15000;
//   const years = 3;
//   const peakValue = 16000;
//   const lowestValue = 12000;

//   const ROI = ((endingValue - initialInvestment) / initialInvestment) * 100;
//   const CAGR = (Math.pow(endingValue / initialInvestment, 1 / years) - 1) * 100;
//   const drawdown = ((peakValue - lowestValue) / peakValue) * 100;

//   // Dummy Market Updates
//   const marketUpdates = [
//     "The S&P 500 index rose by 3% last week, driven by gains in tech stocks.",
//     "Oil prices hit a three-month high as OPEC announces production cuts.",
//   ];

//   // Dummy Trades
//   const trades = [
//     { symbol: "ABC", buyPrice: 100, sellPrice: 120, quantity: 50 },
//     { symbol: "XYZ", buyPrice: 200, sellPrice: 220, quantity: 30 },
//   ];

//   return (
//     <div className="p-8 bg-gray-50 font-sans">
//       <h1 className="text-3xl font-semibold text-center text-gray-700 mb-8">Strategy Performance Overview</h1>

//       <div className="flex justify-around mb-12">
//         <div className="bg-white p-6 rounded-lg shadow-lg w-48 text-center">
//           <h3 className="text-xl font-semibold text-gray-700 mb-4">ROI</h3>
//           <p className="text-3xl font-bold text-green-500">{ROI.toFixed(2)}%</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-lg w-48 text-center">
//           <h3 className="text-xl font-semibold text-gray-700 mb-4">CAGR</h3>
//           <p className="text-3xl font-bold text-blue-500">{CAGR.toFixed(2)}%</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-lg w-48 text-center">
//           <h3 className="text-xl font-semibold text-gray-700 mb-4">Drawdown</h3>
//           <p className="text-3xl font-bold text-red-500">{drawdown.toFixed(2)}%</p>
//         </div>
//       </div>

//       <section className="mb-12">
//         <h2 className="text-2xl font-semibold text-gray-700 mb-4">Market Updates</h2>
//         <ul className="space-y-4">
//           {marketUpdates.map((update, index) => (
//             <li key={index} className="bg-white p-4 rounded-lg shadow-sm text-lg text-gray-600">
//               <span role="img" aria-label="news" className="mr-2">📰</span>
//               {update}
//             </li>
//           ))}
//         </ul>
//       </section>

//       <section>
//         <h2 className="text-2xl font-semibold text-gray-700 mb-4">Recent Trades</h2>
//         <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
//           <thead className="bg-gray-800 text-white">
//             <tr>
//               <th className="px-6 py-4 text-left text-lg font-semibold">Symbol</th>
//               <th className="px-6 py-4 text-left text-lg font-semibold">Buy Price</th>
//               <th className="px-6 py-4 text-left text-lg font-semibold">Sell Price</th>
//               <th className="px-6 py-4 text-left text-lg font-semibold">Quantity</th>
//               <th className="px-6 py-4 text-left text-lg font-semibold">Profit/Loss</th>
//             </tr>
//           </thead>
//           <tbody>
//             {trades.map((trade, index) => {
//               const profitLoss = (trade.sellPrice - trade.buyPrice) * trade.quantity;
//               return (
//                 <tr key={index} className="border-b hover:bg-gray-100">
//                   <td className="px-6 py-4 text-lg text-gray-700">{trade.symbol}</td>
//                   <td className="px-6 py-4 text-lg text-gray-700">${trade.buyPrice}</td>
//                   <td className="px-6 py-4 text-lg text-gray-700">${trade.sellPrice}</td>
//                   <td className="px-6 py-4 text-lg text-gray-700">{trade.quantity}</td>
//                   <td className={`px-6 py-4 text-lg font-semibold ${profitLoss >= 0 ? 'text-green-500' : 'text-red-500'}`}>
//                     {profitLoss >= 0 ? `+${profitLoss}` : profitLoss}
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </section>
//     </div>
//   );
// };

// export default StrategyPerformanceReport;








import React, { useEffect, useState } from 'react';
import { usePortfolio } from  "../../portfolioContext.jsx"; // Import usePortfolio hook



const StrategyPerformanceReport = () => {
  // Access portfolio data from the context
  const { portfolioData } = usePortfolio();

  const [performanceMetrics, setPerformanceMetrics] = useState(null);

  useEffect(() => {
    // Calculate performance metrics when portfolio data is available
    if (portfolioData.initialInvestment && portfolioData.currentPortfolioValue) {
      const roi = calculateROI(
        portfolioData.initialInvestment,
        portfolioData.currentPortfolioValue
      );

      const years = calculateYears(portfolioData.startDate, portfolioData.endDate);
      const cagr = calculateCAGR(
        portfolioData.initialInvestment,
        portfolioData.currentPortfolioValue,
        years
      );

      const drawdown = calculateDrawdown(portfolioData.initialInvestment, portfolioData.currentPortfolioValue);

      setPerformanceMetrics({ roi, cagr, drawdown });
    }
  }, [portfolioData]);

  // ROI (Return on Investment) Calculation
  const calculateROI = (initialInvestment, currentPortfolioValue) => {
    return ((currentPortfolioValue - initialInvestment) / initialInvestment) * 100;
  };

  // CAGR (Compound Annual Growth Rate) Calculation
  const calculateCAGR = (initialInvestment, currentPortfolioValue, years) => {
    return ((currentPortfolioValue / initialInvestment) ** (1 / years) - 1) * 100;
  };

  // Calculate the years between start and end date
  const calculateYears = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const years = (end - start) / (1000 * 60 * 60 * 24 * 365); // Convert milliseconds to years
    return years;
  };

  // Drawdown Calculation: Maximum loss from peak to trough during the investment period
  const calculateDrawdown = (initialInvestment, currentPortfolioValue) => {
    const drawdown = ((currentPortfolioValue - initialInvestment) / initialInvestment) * 100;
    return drawdown < 0 ? drawdown : 0; // Return the negative value if there's a loss
  };

  // Format the date to a readable format
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };


 // Dummy Market Updates
 const marketUpdates = [
  { date: "2023-03-01", text: "The S&P 500 index rose by 3% last week, driven by gains in tech stocks." },
  { date: "2023-03-05", text: "Oil prices hit a three-month high as OPEC announces production cuts." },
  { date: "2023-03-10", text: "The US Dollar strengthens as the Federal Reserve raises interest rates." }
];

// Dummy Trades
const trades = [
  { symbol: "ABC", buyPrice: 100, sellPrice: 120, quantity: 50, date: "2023-01-15" },
  { symbol: "XYZ", buyPrice: 200, sellPrice: 220, quantity: 30, date: "2023-02-10" },
  { symbol: "DEF", buyPrice: 150, sellPrice: 160, quantity: 40, date: "2023-03-01" }
];


  return (
    <div className="p-8 bg-gray-50 font-sans">
      <h1 className="text-3xl font-semibold text-center text-gray-700 mb-8">Strategy Performance Overview</h1>

      {/* Performance Metrics */}
      <div className="flex justify-around mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg w-48 text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">ROI</h3>
          <p className="text-3xl font-bold text-green-500">{performanceMetrics?.roi.toFixed(2)}%</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-48 text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">CAGR</h3>
          <p className="text-3xl font-bold text-blue-500">{performanceMetrics?.cagr.toFixed(2)}%</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-48 text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Drawdown</h3>
          <p className="text-3xl font-bold text-red-500">{performanceMetrics?.drawdown.toFixed(2)}%</p>
        </div>
      </div>

      {/* Portfolio Information */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Portfolio Information</h2>
        <div className="bg-white p-6 rounded-lg shadow-md text-lg">
          <p><strong>Strategy Name:</strong> {portfolioData.strategyName || "N/A"}</p>
          <p><strong>Initial Investment:</strong> ${portfolioData.initialInvestment}</p>
          <p><strong>Current Portfolio Value:</strong> ${portfolioData.currentPortfolioValue}</p>
          <p><strong>Profit/Loss:</strong> ${portfolioData.profitLoss || "N/A"}</p>
          <p><strong>Start Date:</strong> {formatDate(portfolioData.startDate)}</p>
          <p><strong>End Date:</strong> {formatDate(portfolioData.endDate)}</p>
        </div>
      </section>
{/* start */}
     
   {/* Market Updates */}
   <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Market Updates</h2>
        <ul className="space-y-4">
          {marketUpdates.map((update, index) => (
            <li key={index} className="bg-white p-4 rounded-lg shadow-sm text-lg text-gray-600">
              <span role="img" aria-label="news" className="mr-2">📰</span>
              <span className="font-bold">{formatDate(update.date)}:</span> {update.text}
            </li>
          ))}
        </ul>
      </section>

      {/* Recent Trades */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Recent Trades</h2>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-4 text-left text-lg font-semibold">Symbol</th>
              <th className="px-6 py-4 text-left text-lg font-semibold">Buy Price</th>
              <th className="px-6 py-4 text-left text-lg font-semibold">Sell Price</th>
              <th className="px-6 py-4 text-left text-lg font-semibold">Quantity</th>
              <th className="px-6 py-4 text-left text-lg font-semibold">Profit/Loss</th>
              <th className="px-6 py-4 text-left text-lg font-semibold">Trade Date</th>
            </tr>
          </thead>
          <tbody>
            {trades.map((trade, index) => {
              const profitLoss = (trade.sellPrice - trade.buyPrice) * trade.quantity;
              return (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="px-6 py-4 text-lg text-gray-700">{trade.symbol}</td>
                  <td className="px-6 py-4 text-lg text-gray-700">${trade.buyPrice}</td>
                  <td className="px-6 py-4 text-lg text-gray-700">${trade.sellPrice}</td>
                  <td className="px-6 py-4 text-lg text-gray-700">{trade.quantity}</td>
                  <td className={`px-6 py-4 text-lg font-semibold ${profitLoss >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {profitLoss >= 0 ? `+${profitLoss}` : profitLoss}
                  </td>
                  <td className="px-6 py-4 text-lg text-gray-700">{formatDate(trade.date)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>




     {/* end */}
    </div>
  );
};

export default StrategyPerformanceReport;

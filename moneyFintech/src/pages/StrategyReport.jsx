// const StrategyReport = ()=>{
//     return (
//     <h1>helloStra</h1>
//     )
// }
// export default StrategyReport;

// import { Link } from "react-router-dom";
// import React from 'react';

// export default function LandingPage() {
//   return (
//     <div className="bg-white">
      
//         <div
//           aria-hidden="true"
//           className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//         >
//           <div
//             style={{
//               clipPath:
//                 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//             }}
//             className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
//           />
//         </div>
//         <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
//           <div className="hidden sm:mb-8 sm:flex sm:justify-center">
//             <div className="relative rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
//               Announcing our next round of funding.{' '}
//               <a href="#" className="font-semibold text-indigo-600">
//                 Read more <span aria-hidden="true">&rarr;</span>
//               </a>
//             </div>
//           </div>
//           <div className="text-center">
//             <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
//               Data to enrich your online business
//             </h1>
//             <p className="mt-8 text-lg leading-8 text-gray-600">
//               Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
//               fugiat veniam occaecat.
//             </p>
//             <div className="mt-10 flex items-center justify-center gap-x-6">
             
//             </div>
//           </div>
//         </div>
//         <div
//           aria-hidden="true"
//           className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
//         >
//           <div
//             style={{
//               clipPath:
//                 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//             }}
//             className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
//           />
//         </div>
//       </div>
   
//   );
// }


import React from 'react';
import StrategyPerformanceReport from '../components/ui/strategyPerformanceReport'; 

const StrategyPerformancePage = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Strategy Performance Report</h1>
      <StrategyPerformanceReport />
    </div>
  );
};

export default StrategyPerformancePage;








// import React, { useEffect, useState } from "react";
// import { usePortfolio } from "../portfolioContext"; // Import usePortfolio hook

// const StrategyReport = () => {
//   const { portfolioData } = usePortfolio(); // Access portfolio data from context
//   const [performanceMetrics, setPerformanceMetrics] = useState(null);

//   useEffect(() => {
//     // Calculate performance metrics when portfolio data is available
//     if (portfolioData.initialInvestment && portfolioData.currentPortfolioValue) {
//       const roi = calculateROI(
//         portfolioData.initialInvestment,
//         portfolioData.currentPortfolioValue
//       );

//       const years = calculateYears(portfolioData.startDate, portfolioData.endDate);
//       const cagr = calculateCAGR(
//         portfolioData.initialInvestment,
//         portfolioData.currentPortfolioValue,
//         years
//       );

//       const drawdown = calculateDrawdown(portfolioData.initialInvestment, portfolioData.currentPortfolioValue);

//       setPerformanceMetrics({ roi, cagr, drawdown });
//     }
//   }, [portfolioData]);

//   // ROI (Return on Investment) Calculation
//   const calculateROI = (initialInvestment, currentPortfolioValue) => {
//     return ((currentPortfolioValue - initialInvestment) / initialInvestment) * 100;
//   };

//   // CAGR (Compound Annual Growth Rate) Calculation
//   const calculateCAGR = (initialInvestment, currentPortfolioValue, years) => {
//     return ((currentPortfolioValue / initialInvestment) ** (1 / years) - 1) * 100;
//   };

//   // Calculate the years between start and end date
//   const calculateYears = (startDate, endDate) => {
//     const start = new Date(startDate);
//     const end = new Date(endDate);
//     const years = (end - start) / (1000 * 60 * 60 * 24 * 365); // Convert milliseconds to years
//     return years;
//   };

//   // Drawdown Calculation: Maximum loss from peak to trough during the investment period
//   const calculateDrawdown = (initialInvestment, currentPortfolioValue) => {
//     const drawdown = ((currentPortfolioValue - initialInvestment) / initialInvestment) * 100;
//     return drawdown < 0 ? drawdown : 0; // Return the negative value if there's a loss
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-3xl font-bold text-center mb-6">Strategy Report</h2>

//       {portfolioData ? (
//         <div className="bg-white shadow-md rounded-lg p-6">
//           <h3 className="text-2xl font-semibold mb-4">Portfolio Information</h3>
//           <p><strong>Strategy Name:</strong> {portfolioData.strategyName || "N/A"}</p>
//           <p><strong>Initial Investment:</strong> ${portfolioData.initialInvestment}</p>
//           <p><strong>Current Portfolio Value:</strong> ${portfolioData.currentPortfolioValue}</p>
//           <p><strong>Profit/Loss:</strong> ${portfolioData.profitLoss || "N/A"}</p>

//           {performanceMetrics && (
//             <div className="mt-6">
//               <h3 className="text-xl font-semibold mb-4">Performance Metrics</h3>
//               <p><strong>ROI:</strong> {performanceMetrics.roi.toFixed(2)}%</p>
//               <p><strong>CAGR:</strong> {performanceMetrics.cagr.toFixed(2)}%</p>
//               <p><strong>Drawdown:</strong> {performanceMetrics.drawdown.toFixed(2)}%</p>
//             </div>
//           )}
//         </div>
//       ) : (
//         <p>No portfolio data found. Please input your portfolio information in the previous step.</p>
//       )}
//     </div>
//   );
// };

// export default StrategyReport;



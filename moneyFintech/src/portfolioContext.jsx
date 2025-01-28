
import { createContext, useState, useContext } from "react";

// Create a Context for Portfolio data
const PortfolioContext = createContext();

// Custom hook to use PortfolioContext
export const usePortfolio = () => {
  return useContext(PortfolioContext);
};

// PortfolioProvider component to provide the context value to the rest of the app
export const PortfolioProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState({
    initialInvestment: '',
    currentPortfolioValue: '',
    startDate: '',
    endDate: '',
    stocksAllocation: '',
    bondsAllocation: '',
    cryptoAllocation: '',
    strategyName: '',
    profitLoss: '',
  });

  const updatePortfolioData = (data) => {
    setPortfolioData(data);
  };

  return (
    <PortfolioContext.Provider value={{ portfolioData, updatePortfolioData }}>
      {children}
    </PortfolioContext.Provider>
  );
};

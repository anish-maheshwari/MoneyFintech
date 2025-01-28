const Portfolio = require("../models/portfolio");

// Add a new portfolio entry
const addPortfolio = async (req, res) => {
  try {
    const { 
      initialInvestment, currentPortfolioValue, startDate, endDate,
      stocksAllocation, bondsAllocation, cryptoAllocation, strategyName, profitLoss 
    } = req.body;

    const newPortfolio = new Portfolio({
      initialInvestment,
      currentPortfolioValue,
      startDate,
      endDate,
      stocksAllocation,
      bondsAllocation,
      cryptoAllocation,
      strategyName,
      profitLoss
    });

    await newPortfolio.save();
    res.status(201).json({ message: "Portfolio added successfully", portfolio: newPortfolio });
  } catch (error) {
    res.status(500).json({ message: "Error adding portfolio", error });
  }
};

// Get all portfolios
const getAllPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.find();
    res.status(200).json(portfolios);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving portfolios", error });
  }
};

// Get portfolio by strategy name (optional filter)
const getPortfolioByStrategy = async (req, res) => {
  try {
    const { strategyName } = req.params;
    const portfolio = await Portfolio.find({ strategyName });
    res.status(200).json(portfolio);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving portfolio", error });
  }
};

module.exports = { addPortfolio, getAllPortfolios, getPortfolioByStrategy };

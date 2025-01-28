const express = require("express");
const router = express.Router();
const { addPortfolio, getAllPortfolios, getPortfolioByStrategy } = require("../controllers/portfolioController");

// Add a new portfolio
router.post("/portfolio", addPortfolio);

// Get all portfolios
router.get("/portfolio", getAllPortfolios);

// Get portfolio by strategy name (optional)
router.get("/portfolio/strategy/:strategyName", getPortfolioByStrategy);

module.exports = router;

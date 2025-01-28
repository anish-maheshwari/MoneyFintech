const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  initialInvestment: { type: Number, required: true },
  currentPortfolioValue: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  stocksAllocation: { type: Number, min: 0, max: 100, required: true },
  bondsAllocation: { type: Number, min: 0, max: 100, required: true },
  cryptoAllocation: { type: Number, min: 0, max: 100, required: true },
  strategyName: { type: String },
  profitLoss: { type: Number }
});

module.exports = mongoose.model("Portfolio", portfolioSchema);

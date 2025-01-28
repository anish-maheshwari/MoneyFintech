MoneyAI - Financial Portfolio Analyzer
MoneyAI is a financial analytics tool designed to help users analyze and visualize their investment portfolios, including asset allocation, profit/loss, and key financial metrics like ROI, CAGR, and drawdown. The application provides visual reports through pie charts and bar graphs to help users understand their financial performance.


Prerequisites
Before you can run the project on your local machine, ensure you have the following installed:

Node.js (v14 or higher) - Download Node.js
MongoDB Atlas Account - Create a MongoDB Atlas account
npm (Node Package Manager) - It is bundled with Node.js.
Git (optional, but recommended) - Download Git


START

open command prompt                                                                 STEP 1
mkdir temp                                                                          STEP 2
cd temp                                                                             STEP 3
git clone https://github.com/anish-maheshwari/MoneyFintech.git                      STEP 4
cd MoneyFintech                                                                     STEP 5

Set up Environment Variables                                                        STEP 6

for safety purpose i have not shared .env file so you have to created yout own and 
set the MONGO_URL named variable to your Mongodb Atlas cluster address
Create a .env file in the root of the project directory to store your MongoDB connection string. Replace USERNAME and PASSWORD with your actual MongoDB credentials
MONGO_URL=mongodb+srv://USERNAME:PASSWORD@cluster0.cjfxcfo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0;



npm run setup-project                                                              STEP 7

npm run dev                                                                        STEP 8

go to chrome and seach this url   http://localhost:5173/                           STEP 9






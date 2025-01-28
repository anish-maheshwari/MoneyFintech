// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import {BrowserRouter,createBrowserRouter,RouterProvider} from "react-router-dom";

// import HomeLayout from "./pages/HomeLayout.jsx";
// import Landing from "./pages/Landing.jsx";
// import MarketResearch from "./pages/MarketResearch.jsx";
// import StrategyReport from "./pages/StrategyReport.jsx";
// import NotFound from "./pages/NotFound.jsx";




// const router = createBrowserRouter([
//   {
//     path : "/",
//     element: <HomeLayout/>,
//     errorElement: <NotFound />,
//     children:[
//       {
//         index:true,
//         element:<Landing />
//       },
//       {
//         path:'strategyReport',
//         element:<StrategyReport />

//       },{
//         path:'marketResearch',
//         element:<MarketResearch />
//       }
//     ]
//   }
// ]);

// const App = ()=>{
//   return (
//   <RouterProvider router = {router}/>
//   )

// }

// export default App






import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import { PortfolioProvider } from "./portfolioContext.jsx"; // Import the PortfolioProvider

import HomeLayout from "./pages/HomeLayout.jsx";
import Landing from "./pages/Landing.jsx";
import MarketResearch from "./pages/MarketResearch.jsx";
import StrategyReport from "./pages/StrategyReport.jsx";
import NotFound from "./pages/NotFound.jsx";

// Define the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "strategyReport",
        element: <StrategyReport />,
      },
      {
        path: "marketResearch",
        element: <MarketResearch />,
      },
    ],
  },
]);

// Wrap the app with PortfolioProvider to provide context
const App = () => {
  return (
    <PortfolioProvider>
      <RouterProvider router={router} />
    </PortfolioProvider>
  );
};

export default App;


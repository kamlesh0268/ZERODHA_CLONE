// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Dashboard from "./Dashboard";
// import Menu from "./Menu";
// import Holdings from "./Holdings";
// import Positions from "./Positions";
// import Summary from "./Summary";
// import Orders from "./Orders";
// import Funds from "./Funds";
// const App = () => {
//     return (
//         <>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/" element={<Menu />} />
//                     { <Route exact path="/summary" element={<Summary />} /> }
//                     { <Route path="/orders" element={<Orders />} /> }
//                     { <Route path="/holdings" element={<Holdings />} /> }
//                     { <Route path="/positions" element={<Positions />} /> }
//                     { <Route path="/funds" element={<Funds />} /> }
//                     {/* { <Route path="/apps" element={<App />} /> } */}
//                     <Route path="/menu" element={<Menu />} />
//                 </Routes>
//             </BrowserRouter>
//         </>
//     )
// }

// export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Menu from "./Menu";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Summary from "./Summary";
import Orders from "./Orders";
import Funds from "./Funds";
import Home from "./Home"; // ✅ Added

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />  {/* ✅ Updated */}
                    <Route exact path="/summary" element={<Summary />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/holdings" element={<Holdings />} />
                    <Route path="/positions" element={<Positions />} />
                    <Route path="/funds" element={<Funds />} />
                    <Route path="/menu" element={<Menu />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;

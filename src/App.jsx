import React, { useEffect } from "react";
import "./App.css";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Sidebar";
import Ecommerce from "./pages/Ecommerce";
import Orders from "./pages/Orders";
import Calendar from "./pages/Calendar";
import ColorPicker from "./pages/ColorPicker";
import Editor from "./pages/Editor";
import Kanban from "./pages/Kanban";
import Employees from "./pages/Employees";
import Customer from "./pages/Customer";
import Area from "./pages/Charts/Area";
import Bar from "./pages/Charts/Bar";
import ColorMapping from "./pages/Charts/ColorMapping";
import Financial from "./pages/Charts/Financial";
import Line from "./pages/Charts/Line";
import Pie from "./pages/Charts/Pie";
import Pyramid from "./pages/Charts/Pyramid";
import Stacked from "./pages/Charts/Stacked";

const App = () => {
  const activeMenu = true;

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {/* Sidebar */}
          {activeMenu ? (
            <div className="w-72 fixed  sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          {/* Navbar */}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full
               ${activeMenu ? " md:ml-72" : " flex-2 "}}`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
          </div>

          {/* Routing */}
          <Routes>
            <Route path="/" element={<Ecommerce />} />
            <Route path="/ecommerce" element={<Ecommerce />} />

            <Route path="/orders" element={<Orders />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/customers" element={<Customer />} />

            <Route path="/kanban" element={<Kanban />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/color-picker" element={<ColorPicker />} />

            <Route path="/line" element={<Line />} />
            <Route path="/area" element={<Area />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/financial" element={<Financial />} />
            <Route path="/color-mapping" element={<ColorMapping />} />
            <Route path="/pyramid" element={<Pyramid />} />
            <Route path="/stacked" element={<Stacked />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

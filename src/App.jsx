import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Docs from "./components/Apps/Documents";
import "./App.css";

const Home = () => <h1>Home Page</h1>;
const GPT = () => <h1>GPT Page</h1>;
const Documents = () => <Docs />;
const Images = () => <h1>Images Page</h1>;
const Agents = () => <h1>Agents Page</h1>;

const App = () => {
  const [buttons, setButtons] = useState([...Array(5)]);

  return (
    <Router>
      <div className="dashboard">
        <header className="header">
          {buttons.map((_, index) => (
            <div key={index} className="button"></div>
          ))}
        </header>
        <aside className="sidebar">
          <div className="sideHeader"></div>
          <ul className="menu-apps">
            <li>
              <Link to="/CRM">
                <img src="/svg/menu.svg" alt="" />
              </Link>
            </li>
            <li>
              <Link to="/apps">
                <img src="/svg/app.svg" alt="" />
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <img src="/svg/slideshow.svg" alt="" />
              </Link>
            </li>
            <li>
              <Link to="/agents">
                <img src="/svg/box-2.svg" alt="" />
              </Link>
            </li>
          </ul>
          <div className="sideFooter"></div>
        </aside>
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CRM" element={<GPT />} />
            <Route path="/apps" element={<Documents />} />
            <Route path="/dashboard" element={<Images />} />
            <Route path="/agents" element={<Agents />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faSquarePollHorizontal,
  faLayerGroup,
  faAtom
} from "@fortawesome/free-solid-svg-icons";

import Docs from "./components/Apps/Documents";
import "./App.css";

const Home = () => <h1>Home Page</h1>;
const GPT = () => <h1>GPT Page</h1>;
const Documents = () => <Docs/>;
const Images = () => <h1>Images Page</h1>;
const Agents = () => <h1>Agents Page</h1>;

const App = () => {
  const [buttons, setButtons] = useState([...Array(5)]);

  return (
    <Router>
      <div className="container">
        <header className="header">
          {buttons.map((_, index) => (
            <div key={index} className="button"></div>
          ))}
        </header>
        <aside className="sidebar">
          <div className="sideHeader"></div>
          <ul className="menu-apps">
            <li>
              <Link to="/GPT">
                <FontAwesomeIcon icon={faSquarePollHorizontal} />
              </Link>
            </li>
            <li>
              <Link to="/Documents">
                <FontAwesomeIcon icon={faLayerGroup} />
              </Link>
            </li>
            <li>
              <Link to="/Images">
              <FontAwesomeIcon icon={faChartLine} />
              </Link>
            </li>
            <li>
              <Link to="/Agents">
                <FontAwesomeIcon icon={faAtom} />
              </Link>
            </li>
          </ul>
          <div className="sideFooter"></div>
        </aside>
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/GPT" element={<GPT />} />
            <Route path="/Documents" element={<Documents />} />
            <Route path="/Images" element={<Images />} />
            <Route path="/Agents" element={<Agents />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

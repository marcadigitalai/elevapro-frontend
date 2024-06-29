import React, { useState } from "react";
import "../../styles/Components/Tabs.css";

const Tabs = () => {
  const title = {
    tab1: "Gerador de Imagens",
    tab2: "Escrita com IA",
    tab3: "Assistente de IA",
  };

  const [activeTab, setActiveTab] = useState("tab2");
  const [activeTile, setTitle] = useState(title[activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setTitle(title[tab]);
  };

  return (
    <>
      <h2 className="tab-title">{activeTile}</h2>

      <div className="tabs">
        <div
          className={`tab ${activeTab === "tab1" ? "active" : ""}`}
          onClick={() => handleTabClick("tab1")}
        >
          <img src="/svg/brush-2.svg" alt="Tab 1" />
        </div>
        <div
          className={`tab ${activeTab === "tab2" ? "active" : ""}`}
          onClick={() => handleTabClick("tab2")}
        >
          <img src="/svg/align-center.svg" alt="Tab 2" />
        </div>
        <div
          className={`tab ${activeTab === "tab3" ? "active" : ""}`}
          onClick={() => handleTabClick("tab3")}
        >
          <img src="/svg/message-2.svg" alt="Tab 3" />
        </div>
      </div>
    </>
  );
};

export default Tabs;

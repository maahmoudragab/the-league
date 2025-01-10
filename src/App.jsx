import { useState } from "react";
import Matches from "./components/Matches";
import Stats from "./components/Stats";

function App() {
  const [activeComponent, setActiveComponent] = useState("matches");

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">بطولة كأس الرابطه للتحدي</h1>
        <div className="buttons">
          <button
            className={activeComponent === "matches" ? "active" : ""}
            onClick={() => setActiveComponent("matches")}
          >
            المباريات
          </button>
          <button
            className={activeComponent === "stats" ? "active" : ""}
            onClick={() => setActiveComponent("stats")}
          >
            الأحصائيات
          </button>
        </div>
      </div>
      <div className="content">
        {activeComponent === "matches" ? <Matches /> : <Stats />}
      </div>
    </div>
  );
}

export default App;

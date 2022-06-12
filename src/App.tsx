import React from "react";

import RobotList from "./components/Robots/RobotList";
import { robots } from "./data/robots";

const App: React.FC = () => {
  return (
    <div>
      <RobotList robots={robots} />
    </div>
  );
};

export default App;

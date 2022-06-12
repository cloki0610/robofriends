import React from "react";

import RobotCard from "./components/Robots/RobotCard";

import { robots } from "./data/robots";
import { IRobot } from "./interface/IRobot";

const App: React.FC = () => {
  return (
    <div>
      {robots.map((robot: IRobot) => {
        return (
          <RobotCard
            id={robot.id}
            name={robot.name}
            username={robot.username}
            email={robot.email}
          />
        );
      })}
    </div>
  );
};

export default App;

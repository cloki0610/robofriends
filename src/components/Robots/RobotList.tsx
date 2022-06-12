import React from "react";

import RobotCard from "./RobotCard";

import { IRobot } from "../../interface/IRobot";

const RobotList: React.FC<{ robots: IRobot[] }> = ({ robots }) => {
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

export default RobotList;

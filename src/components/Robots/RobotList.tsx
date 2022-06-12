import React from "react";

import RobotCard from "./RobotCard";

import { IRobot } from "../../interface/IRobot";

const RobotList: React.FC<{ robots: IRobot[] }> = ({ robots }) => {
  return (
    <>
      {robots.map((robot: IRobot) => {
        return (
          <RobotCard
            key={robot.id}
            id={robot.id}
            name={robot.name}
            username={robot.username}
            email={robot.email}
          />
        );
      })}
    </>
  );
};

export default RobotList;

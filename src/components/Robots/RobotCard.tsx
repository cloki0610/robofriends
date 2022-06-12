import React from "react";
import Card from "../UI/Card";
import { IRobot } from "../../interface/IRobot";

const RobotCard: React.FC<IRobot> = ({ id, name, username, email }) => {
  return (
    <Card>
      <img src={`https://robohash.org/${id}?200x200`} alt={username} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </Card>
  );
};

export default RobotCard;

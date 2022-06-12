import React, { useState } from "react";

import RobotList from "./components/Robots/RobotList";
import SearchBox from "./components/SearchBox/SearchBox";
import { robots } from "./data/robots";
import { IRobot } from "./interface/IRobot";

const App: React.FC = () => {
  const [robotsArray, setRobotsArray] = useState<IRobot[]>(robots);
  const [searchfield, setSearchfield] = useState<string>("");

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filteredArray = robots.filter((robot) =>
      robot.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchfield(event.target.value);
    setRobotsArray(filteredArray);
  };

  return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} searchfield={searchfield} />
      <RobotList robots={robotsArray} />
    </div>
  );
};

export default App;

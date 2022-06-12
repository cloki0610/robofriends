import React, { useState } from "react";

import RobotList from "./components/Robots/RobotList";
import SearchBox from "./components/SearchBox/SearchBox";
import { robots } from "./data/robots";
import { IRobot } from "./interface/IRobot";

const App: React.FC = () => {
  const [searchfield, setSearchfield] = useState<string>("");
  const filteredArray: IRobot[] = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchfield.toLowerCase())
  );

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchfield(event.target.value);
  };

  return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} searchfield={searchfield} />
      <RobotList robots={filteredArray} />
    </div>
  );
};

export default App;

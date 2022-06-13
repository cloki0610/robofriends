import React, { useState, useEffect } from "react";

import RobotList from "./components/Robots/RobotList";
import SearchBox from "./components/SearchBox/SearchBox";
import Scroll from "./components/UI/Scroll";
import { IRobot } from "./interface/IRobot";
import classes from "./App.module.css";

const App: React.FC = () => {
  const [searchfield, setSearchfield] = useState<string>("");
  const [robotsArray, setRobotsArray] = useState<IRobot[]>([]);
  const filteredArray: IRobot[] = robotsArray.filter((robot) =>
    robot.name.toLowerCase().includes(searchfield.toLowerCase())
  );

  useEffect(() => {
    const fetchRobots: () => Promise<void> = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setRobotsArray(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRobots();
  }, []);

  const onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchfield(event.target.value);
  };

  if (robotsArray.length === 0) {
    return (
      <div className="tc">
        <h1 className={`${classes.title} f1`}>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className="tc">
        <h1 className={`${classes.title} f1`}>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} searchfield={searchfield} />
        <Scroll>
          <RobotList robots={filteredArray} />
        </Scroll>
      </div>
    );
  }
};

export default App;

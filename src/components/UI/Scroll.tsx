import React from "react";
import classes from "./Scroll.module.css";

type Props = {
  children: React.ReactNode;
};

const Scroll: React.FC<Props> = ({ children }) => {
  return <div className={classes.scroll}>{children}</div>;
};

export default Scroll;

import React from "react";

type Props = {
  children: React.ReactNode;
};

const Card: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      {children}
    </div>
  );
};

export default Card;

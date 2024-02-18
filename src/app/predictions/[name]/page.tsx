import React from "react";

const Name = ({ params }: any) => {
  const name = params.name;
  return <div>{name}</div>;
};

export default Name;

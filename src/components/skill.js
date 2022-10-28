import * as React from "react";

const Skill = ({ name, description, level }) => {
  return (
    <dl>
      <dt>{name}</dt>
      <dd>{description}</dd>
      <dd>{level}</dd>
    </dl>
  );
};

export default Skill;

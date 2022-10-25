import * as React from "react";
import { Container } from "theme-ui";

const Skill = ({ name, description, level }) => {
  return (
    <Container
      sx={{
        mb: "4",
        mt: "4",
      }}
    >
      <dl>
        <dt>{name}</dt>
        <dd>{description}</dd>
        <dd>{level}</dd>
      </dl>
    </Container>
  );
};

export default Skill;

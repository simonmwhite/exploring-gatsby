import * as React from "react";
import { Container, Box } from "theme-ui";
import { SiDrupal, SiLinkedin, SiCodepen, SiGithub } from "react-icons/si";

const Social = () => {
  return (
    <Container
      sx={{
        mb: "4",
        mt: "4",
      }}
    >
      <Box>
        <SiDrupal />
      </Box>
      <Box>
        <SiLinkedin />
      </Box>
      <Box>
        <SiCodepen />
      </Box>
      <Box>
        <SiGithub />
      </Box>
    </Container>
  );
};

export default Social;

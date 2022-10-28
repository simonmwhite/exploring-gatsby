import React from "react";
import { Container, Box, Grid, jsx } from "theme-ui";
import { SiDrupal, SiLinkedin, SiCodepen, SiGithub } from "react-icons/si";

/** @jsx jsx */

const Social = () => {
  return (
    <Container
      sx={{
        mb: "4",
        mt: "4",
      }}
    >
      <Grid gap={2} columns={[2, null, 4]} sx={{ justifyItems: "center" }}>
        <Box className="gradient-border">
          <a
            href="https://www.drupal.org/u/whitewebs"
            target={"_blank"}
            rel={"noreferrer"}
            sx={{ display: "block" }}
          >
            <SiDrupal sx={{ width: 50, height: 50 }} />
          </a>
        </Box>
        <Box className="gradient-border">
          <a
            href="https://www.linkedin.com/in/simonmwhite"
            target={"_blank"}
            rel={"noreferrer"}
            sx={{ display: "block" }}
          >
            <SiLinkedin sx={{ width: 50, height: 50 }} />
          </a>
        </Box>
        <Box className="gradient-border">
          <a
            href="https://codepen.io/simonmwhite"
            target={"_blank"}
            rel={"noreferrer"}
            sx={{ display: "block" }}
          >
            <SiCodepen sx={{ width: 50, height: 50 }} />
          </a>
        </Box>
        <Box className="gradient-border">
          <a
            href="https://github.com/simonmwhite"
            target={"_blank"}
            rel={"noreferrer"}
            sx={{ display: "block" }}
          >
            <SiGithub sx={{ width: 50, height: 50 }} />
          </a>
        </Box>
      </Grid>
    </Container>
  );
};

export default Social;

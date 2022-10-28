import * as React from "react";
import { SiCreativecommons, SiGatsby } from "react-icons/si";
import { Box, Container, jsx } from "theme-ui";
/** @jsx jsx */

const Footer = () => {
  return (
    <footer>
      <Container>
        <SiCreativecommons
          sx={{
            mx: "auto",
          }}
        />
        <Box>
          {new Date().getFullYear()} &middot; Built with
          {` `}
          <SiGatsby>
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </SiGatsby>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;

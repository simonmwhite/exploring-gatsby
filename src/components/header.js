/** @jsx jsx */
import * as React from "react";
import PropTypes from "prop-types";
import { Image, Link, Flex, NavLink, jsx, Box } from "theme-ui";
import { keyframes } from "@emotion/react";

const cyclegradient = keyframes`
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

const Header = ({ siteTitle }) => (
  <>
    <div
      sx={{
        position: "relative",
        padding: 0,
        borderTop: "var(--borderWidth)",
        "--borderWidth": 5,
        "::after": {
          position: "absolute",
          zIndex: 1,
          top: "0",
          left: "0",
          width: "100%",
          height: "5px",
          content: '""',
          animation: `${cyclegradient} 10s ease alternate infinite`,
          background: `
    linear-gradient(
      60deg,
      #f79533,
      #f37055,
      #ef4e7b,
      #a166ab,
      #5073b8,
      #1098ad,
      #07b39b,
      #6fba82)`,
          backgroundSize: "5000px 5000px",
        },
      }}
    ></div>
    <header
      sx={{
        margin: "0 auto",
        padding: "var(--space-4) var(--size-gutter)",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        top: "0",
        left: "0",
        right: "0",
      }}
    >
      <Link href="/">
        <Image
          alt="whitewebs logo"
          variant="images.headerLogo"
          src="data:image/png;base64,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"
        />
      </Link>
      <Box as={"span"}>whitewebs</Box>
      <Flex as="nav">
        <NavLink href="/!" p={2}>
          Home
        </NavLink>
        <NavLink href="about" p={2}>
          About
        </NavLink>
        <NavLink href="portfolio" p={2}>
          Portfolio
        </NavLink>
        <NavLink href="contact" p={2}>
          Contact
        </NavLink>
      </Flex>
    </header>
  </>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

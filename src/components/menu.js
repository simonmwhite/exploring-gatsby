import React from "react";
import { Flex, NavLink } from "theme-ui";

const Menu = () => {
  return (
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
  );
};

export default Menu;

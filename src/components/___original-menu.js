import React, { useState } from "react";
import { Flex, NavLink, MenuButton } from "theme-ui";

const Menu = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      <MenuButton
        className={isActive ? "overlay" : null}
        aria-label="Toggle Menu"
        sx={{
          backgroundColor: "red",
          display: ["initial", "none"],
        }}
        onClick={toggleClass}
      />
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
    </>
  );
};

export default Menu;

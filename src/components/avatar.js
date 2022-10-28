import React from "react";
import { Image, Paragraph, Box, Container, Heading } from "theme-ui";
import Me from "../images/me.jpg";

const MyAvatar = ({ title, description }) => {
  return (
    <>
      <Container>
        <Box>
          <Image
            src={Me}
            variant="images.avatar"
            sx={{
              objectFit: "cover",
              mx: "auto",
              mb: "4",
              mt: "6",
              display: "block",
            }}
          />
          <Heading as="h1">{title}</Heading>
        </Box>
        <Paragraph variant="leadParagraph">{description}</Paragraph>
      </Container>
    </>
  );
};

export default MyAvatar;

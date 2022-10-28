/** @jsx jsx */
// React imports.
import * as React from "react";
// Theme UI imports.
import { Grid, Heading, jsx } from "theme-ui";
// Component imports.
import Layout from "../components/layout";
import Seo from "../components/seo";
import Skill from "../components/skill";
import MyAvatar from "../components/avatar";
import Social from "../components/social";
import Section from "../components/section";
// JSON imports.
import skills from "../content/skills.json";
import avatar from "../content/avatar.json";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Section sx={{ mb: 4 }}>
      <MyAvatar title={avatar[0].title} description={avatar[0].description} />
    </Section>
    <Section sx={{ mb: 4 }}>
      <Heading as={"h2"}>In my toolbox</Heading>
      <Grid
        sx={{
          display: "grid-inline",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr 1fr",
          gap: "10px 10px",
        }}
      >
        {skills.map(({ name, description, level }, index) => {
          return (
            <Skill
              key={index}
              name={name}
              description={description}
              level={level}
            />
          );
        })}
      </Grid>
    </Section>
    <Section sx={{ mb: 4 }}>
      <Social />
    </Section>
  </Layout>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;

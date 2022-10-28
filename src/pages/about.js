/** @jsx jsx */
// React imports.
import * as React from "react";
// Theme UI imports.
import { Box, Grid, jsx, Paragraph } from "theme-ui";
// Component imports.
import Layout from "../components/layout";
import Seo from "../components/seo";
import Section from "../components/section";
import Social from "../components/social";

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <Section sx={{ backgroundColor: "primary" }}>
      <Paragraph></Paragraph>
    </Section>
    <section sx={{ mb: 4 }}>
      <Social />
    </section>
  </Layout>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="About" />;

export default AboutPage;

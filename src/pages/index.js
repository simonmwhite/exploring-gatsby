// React imports.
import * as React from "react";
// Component imports.
import Layout from "../components/layout";
import Seo from "../components/seo";
import Skill from "../components/skill";
import MyAvatar from "../components/avatar";
import Social from "../components/social";
// JSON imports.
import skills from "../content/skills.json";
import avatar from "../content/avatar.json";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section>
      {avatar.map(({ title, description }, index) => {
        return <MyAvatar key={index} title={title} description={description} />;
      })}
    </section>
    <section>
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
    </section>
    <section>
      <Social />
    </section>
  </Layout>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;

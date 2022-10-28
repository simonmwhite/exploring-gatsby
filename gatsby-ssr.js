/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

exports.onRenderBody = ({ setHtmlAttributes, setBodyAttributes }) => {
  setHtmlAttributes({ lang: `en` });
  setBodyAttributes({ className: `hello` });
};

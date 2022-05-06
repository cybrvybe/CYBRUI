module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from "react";

import { ${componentName}Props } from "./${componentName}.types";

import "./${componentName}.scss";

export default function ${componentName} (props: ${componentName}Props) {
  return (
    <div data-testid="${componentName}" className="foo-bar">{props.foo}</div>
  )
};

`,
  extension: `.tsx`,
});

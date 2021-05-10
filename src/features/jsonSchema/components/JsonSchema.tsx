import React from "react";
import { masterSchema } from "../schema/masterSchema";

const JsonSchema = (): JSX.Element => {
  const mappedSchema = Object.keys(masterSchema).map((obj, id) => {
    const {
      composite: { title, description, type, required, properties },
    } = masterSchema;
    const mappedRequired = required && required.map((x) => `"${x}"`);
    const mappedProperties = Object.keys(properties).map((x: string) =>
      Object.keys(properties[x]).map(
        (y) => `
    {${x}: {
     ${y}: ${properties[x][y]}   
    }}
    
    `
      )
    );

    return (
      <>{`{
        title: "${title}",
        description: "${description}",
        type: "${type}",
        required: [${mappedRequired}],
        properties: ${mappedProperties}
    }`}</>
    );
  });

  return <div>{mappedSchema}</div>;
};

export default JsonSchema;

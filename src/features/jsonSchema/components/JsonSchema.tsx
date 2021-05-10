import React from "react";
import { masterSchema } from "../schema/masterSchema";
import { Code } from "@chakra-ui/react";

const JsonSchema = (): JSX.Element => {
  const displayedSchemaAsJson = JSON.stringify(masterSchema());

  return (
    <div>
      <Code colorScheme="orange" w="320px" variant="outline">
        {displayedSchemaAsJson}
      </Code>
    </div>
  );
};

export default JsonSchema;

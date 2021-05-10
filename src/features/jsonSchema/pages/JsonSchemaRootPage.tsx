import React from "react";
import DisplayCard from "../../core/displayCard/DisplayCard";
import JsonSchema from "../components/JsonSchema";
const JsonSchemaRootPage = (): JSX.Element => {
  return <DisplayCard children={<JsonSchema />} />;
};

export default JsonSchemaRootPage;

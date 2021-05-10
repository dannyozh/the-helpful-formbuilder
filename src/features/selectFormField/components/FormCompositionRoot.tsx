import React from "react";
import Form from "@rjsf/material-ui";
import { JSONSchema7 } from "json-schema";
import { stringFormSchema } from "./stringFormSchema";

const FormCompositionRoot = (): JSX.Element => {
  const formBuilderSchema = {
    title: "Build your form",
    properties: {
      ...stringFormSchema,
    },
  };
  const onSubmit = ({ formData }) => {
    console.log("submitted", formData);
  };
  return <Form schema={formBuilderSchema as JSONSchema7} onSubmit={onSubmit} />;
};

export default FormCompositionRoot;

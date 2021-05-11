import React from "react";
import Form from "@rjsf/material-ui";
import { JSONSchema7 } from "json-schema";
import { stringFormSchema } from "./stringFormSchema";

interface ISubmittedStringFieldValues {
  fieldTitle: string;
  minLength: number;
  required: boolean;
}

const FormCompositionRoot = (): JSX.Element => {
  const formBuilderSchema = {
    title: "Build your form",
    properties: {
      ...stringFormSchema,
    },
  };
  const onSubmit = ({ formData }: { formData: ISubmittedStringFieldValues }) => {
    console.log("submitted", formData);
  };
  return <Form schema={formBuilderSchema as JSONSchema7} onSubmit={onSubmit} />;
};

export default FormCompositionRoot;

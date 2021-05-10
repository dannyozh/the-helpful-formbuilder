import React from "react";
// import Form from "@rjsf/core";
import { JSONSchema7 } from "json-schema";
// import { Theme as AntDTheme } from '@rjsf/antd';
import Form from "@rjsf/material-ui";
// import Form from '@rjsf/antd'
import { masterSchema } from "../../jsonSchema/schema/masterSchema";

const RenderedForm = (): JSX.Element => {
  const uiSchema = {
    firstName: {
      "ui:autofocus": true,
      "ui:emptyValue": "",
      "ui:autocomplete": "family-name",
    },
    lastName: {
      "ui:emptyValue": "",
      "ui:autocomplete": "given-name",
    },
    age: {
      "ui:widget": "updown",
      "ui:title": "Age of person",
      "ui:description": "(earthian year)",
    },
    bio: {
      "ui:widget": "textarea",
    },
    password: {
      "ui:widget": "password",
      "ui:help": "Hint: Make it strong!",
    },
    date: {
      "ui:widget": "alt-datetime",
    },
    telephone: {
      "ui:options": {
        inputType: "tel",
      },
    },
  };

  return <Form schema={masterSchema.composite as JSONSchema7} />;
};

export default RenderedForm;

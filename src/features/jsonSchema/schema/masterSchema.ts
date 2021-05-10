interface IPropertiesSchema {
  title: string;
  type: string;
  default?: string;
  minLength?: number;
}

export interface IMasterSchema {
  title: string;
  description: string;
  type: string;
  required: string[];
  properties: {
    [key: string]: IPropertiesSchema;
  };
}

export const masterSchema = (): IMasterSchema => {
  return {
    title: "A registration form",
    description: "A simple form example",
    type: "object",
    required: ["firstName", "lastName"],
    properties: {
      firstName: {
        type: "string",
        title: "First name",
        default: "Chuck",
      },
      lastName: {
        type: "string",
        title: "Last name",
      },
      telephone: {
        type: "string",
        title: "Telephone",
        minLength: 10,
      },
    },
  };
};

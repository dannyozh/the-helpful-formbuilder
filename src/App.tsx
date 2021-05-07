import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import RootLayout from "./features/layouts/Rootlayout";
import mainAppTheme from "./theme/index";
import JsonSchemaRootPage from "./features/jsonSchema/pages/JsonSchemaRootPage";
import SelectFormFieldRootPage from "./features/selectFormField/pages/SelectFormFieldRootPage";
import RenderedFormRootPage from "./features/renderedForm/pages/RenderedFormRootPage";

export const App = () => (
  <ChakraProvider theme={mainAppTheme}>
    <RootLayout jsonSchemaBox={<JsonSchemaRootPage />} selectedFormField={<SelectFormFieldRootPage />} renderedForm={<RenderedFormRootPage />} />
  </ChakraProvider>
);

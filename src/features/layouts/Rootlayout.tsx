import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

interface IRootlLayout {
  jsonSchemaBox?: JSX.Element;
  selectedFormField?: JSX.Element;
  renderedForm?: JSX.Element;
}

const RootLayout = (props: IRootlLayout): JSX.Element => {
  const { jsonSchemaBox, selectedFormField, renderedForm } = props;
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" templateRows="repeat(2, 1fr)" templateColumns="repeat(6, 1fr)" gap={4}>
        {/* <Text>{children}</Text> */}
        <GridItem rowSpan={2} colSpan={1} bg="tomato" />
        <GridItem colSpan={2} bg="papayawhip" id="big grid" display="flex" alignItems="center" justifyContent="center">
          {jsonSchemaBox}
        </GridItem>
        <GridItem colSpan={3} bg="papayawhip" display="flex" alignItems="center" justifyContent="center">
          {selectedFormField}
        </GridItem>
        <GridItem colSpan={5} bg="papayawhip" display="flex" alignItems="center" justifyContent="center">
          {renderedForm}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default RootLayout;

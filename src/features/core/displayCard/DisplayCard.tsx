import { Box } from "@chakra-ui/react";
import React from "react";

interface IDisplayCard {
  children: React.ReactNode;
}

const DisplayCard = (props: IDisplayCard): JSX.Element => {
  const { children } = props;
  return (
    <Box borderRadius="md" bg="#FFFFF6" color="black" p={4} w="80%" height="90%">
      {children}
    </Box>
  );
};

export default DisplayCard;

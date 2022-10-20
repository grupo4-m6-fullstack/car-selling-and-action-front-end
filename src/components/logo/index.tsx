import {
  Box,
  ChakraProps,
  Text,
} from "@chakra-ui/react";

const Logo = (props: ChakraProps) => {
  return (
    <Box {...props}>
      <Text
        fontSize={"lg"}
        fontWeight={"bold"}
        bg={
          "-webkit-linear-gradient(45deg,#0B0D0D, #4529E6 60%)"
        }
        backgroundClip={"text"}
        textColor={"transparent"}>
        Motors shop
      </Text>
    </Box>
  );
};

export default Logo;

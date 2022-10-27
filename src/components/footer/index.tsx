import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";

export default function SmallWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue(
        "gray.900",
        "gray.900"
      )}
      color={useColorModeValue(
        "white",
        "gray.200"
      )}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{
          base: "center",
          md: "space-between",
        }}
        align={{ base: "center", md: "center" }}>
        <Text>Motors shop</Text>
        <Text>
          © 2022 - Todos os direitos reservado
        </Text>
        <Stack direction={"row"} spacing={6}>
          <ChevronUpIcon />
        </Stack>
      </Container>
    </Box>
  );
}

import { Flex } from "@chakra-ui/react";
import Header from "../../components/header";

const Home = () => {
  return (
    <Flex h={"100vh"} flexDirection={"column"}>
      <Header />
    </Flex>
  );
};

export default Home;

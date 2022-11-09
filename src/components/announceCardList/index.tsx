import { Flex, Heading } from "@chakra-ui/react";
import Card, { AnnounceProps } from "../card";

interface AnnounceListProp {
  announceList: AnnounceProps[];
}
const AnnounceCardList = ({ announceList }: AnnounceListProp) => {
  return (
    <Flex flexDirection={"column"} w={"100vw"}>
      {announceList.some((a) => a.type.toLowerCase() === "car") ? (
        <Flex flexDirection={"column"} w={"100%"} marginBottom={"200px"}>
          <Heading fontSize={"24px"} marginBottom={"60px"}>
            Carro
          </Heading>
          <Flex
            as={"ul"}
            gap={"50px"}
            w={"100%"}
            overflow={"auto"}
            wrap={"nowrap"}
          >
            {announceList
              .filter((a) => a.type.toLowerCase() === "car")
              .map((announce) => (
                <Card announce={announce} />
              ))}
          </Flex>
        </Flex>
      ) : null}
      {announceList.some((a) => a.type.toLowerCase() === "motorcycle") ? (
        <Flex flexDirection={"column"} w={"100%"}>
          <Heading fontSize={"24px"} marginBottom={"60px"}>
            Moto
          </Heading>
          <Flex
            as={"ul"}
            gap={"50px"}
            w={"100%"}
            overflow={"auto"}
            wrap={"nowrap"}
          >
            {announceList
              .filter((a) => a.type.toLowerCase() === "motorcycle")
              .map((announce) => (
                <Card announce={announce} />
              ))}
          </Flex>
        </Flex>
      ) : null}
    </Flex>
  );
};

export default AnnounceCardList;

import { Avatar, Flex, Heading, Image, Text, Button } from "@chakra-ui/react";

export interface AnnounceProps {
  title: string;
  year: number;
  km: number;
  price: string;
  description: string;
  cover_image: string;
  isActive: boolean;
  type: string;
  user: UserProps;
}
interface UserProps {
  name: string;
}

interface AnnounceProp {
  announce: AnnounceProps;
}

const Card = ({ announce }: AnnounceProp) => {
  const value = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(Number(announce.price));

  const userOwner = true;

  return (
    <Flex
      position={"relative"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      w={"312px"}
      minW={"312px"}
      as="li"
    >
      <Flex
        w={"100%"}
        height={"152px"}
        marginBottom={"16px"}
        overflow={"hidden"}
        _hover={{
          border: "2px solid",
          borderColor: "brand.400",
        }}
      >
        {userOwner && (
          <Flex
            position={"absolute"}
            w={"100%"}
            height={"152px"}
            bg={"transparent"}
            _hover={{ display: "none" }}
            transition="1s"
          >
            <Flex
              position={"absolute"}
              bg={announce.isActive ? "brand.400" : "grey.600"}
              top="11px"
              left="16px"
              padding={"0px 8px 0px 8px"}
              justifyContent={"center"}
              transition="1s"
            >
              {announce.isActive ? (
                <Text fontSize={"14px"} color={"white"} fontWeight={"semibold"}>
                  Ativo
                </Text>
              ) : (
                <Text fontSize={"14px"} color={"white"} fontWeight={"semibold"}>
                  Inativo
                </Text>
              )}
            </Flex>
          </Flex>
        )}
        <Flex
          as="figure"
          w={"100%"}
          height={"152px"}
          bg={"grey.300"}
          alignItems={"center"}
          justifyContent={"center"}
          _hover={{
            transform: "scale(1.2)",
            border: "2px solid",
            borderColor: "purple",
          }}
          transition="1s"
        >
          <Image
            src={announce.cover_image}
            w={"auto"}
            h={"auto"}
            maxHeight={"152px"}
            maxWidth={"100%"}
          />
        </Flex>
      </Flex>
      <Flex w={"100%"} marginBottom={"16px"}>
        <Heading
          fontSize={"16px"}
          fontStyle={"semiBold"}
          whiteSpace="nowrap"
          overflow={"hidden"}
          display="block"
          textOverflow={"ellipsis"}
        >
          {announce.title}
        </Heading>
      </Flex>
      <Flex w={"100%"} marginBottom={"16px"}>
        <Text
          fontSize={"14px"}
          color={"grey.800"}
          display="block"
          textOverflow={"ellipsis"}
          overflow={"hidden"}
          wordBreak="break-word"
          lineHeight="24px"
          maxHeight={"48px"}
        >
          {announce.description}
        </Text>
      </Flex>
      <Flex w={"100%"} alignItems={"center"} marginBottom={"16px"}>
        <Avatar name={announce.user.name} boxSize={"2em"} marginRight="8px" />
        <Text fontSize={"14px"} color="grey.800">
          {announce.user.name}
        </Text>
      </Flex>
      <Flex
        w={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        marginBottom={"16px"}
      >
        <Flex>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            bg={"brand.100"}
            borderRadius="4px"
            padding={"0px 8px 0px 8px"}
            h={"32px"}
            marginRight="12px"
          >
            <Text
              color={"brand.400"}
              fontSize="14px"
              fontStyle={"normal"}
              fontWeight={"semibold"}
            >
              {announce.km} KM
            </Text>
          </Flex>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            bg={"brand.100"}
            borderRadius="4px"
            padding={"0px 8px 0px 8px"}
            h={"32px"}
          >
            <Text
              color={"brand.400"}
              fontSize="14px"
              fontStyle={"normal"}
              fontWeight={"semibold"}
            >
              {announce.year}
            </Text>
          </Flex>
        </Flex>
        <Flex>
          <Text
            as="span"
            color={"grey.900"}
            fontSize="16px"
            fontWeight={"semibold"}
          >
            {value}
          </Text>
        </Flex>
      </Flex>
      {userOwner && (
        <Flex w={"100%"}>
          <Button variant="outline1" marginRight={"16px"}>
            Editar
          </Button>
          <Button variant="outline1">Ver como</Button>
        </Flex>
      )}
    </Flex>
  );
};

export default Card;

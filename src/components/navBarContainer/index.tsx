import { Flex } from "@chakra-ui/react";

interface INavBar {
  children: JSX.Element[] | JSX.Element;
}

const NavBarContainer = ({
  children,
  ...rest
}: INavBar) => {
  return (
    <Flex
      as={"nav"}
      align={"center"}
      justify={"space-between"}
      wrap={"wrap"}
      w={"100%"}
      mb={8}
      p={8}
      bg={"white"}
      color={"grey.1000"}
      {...rest}>
      {children}
    </Flex>
  );
};

export default NavBarContainer;

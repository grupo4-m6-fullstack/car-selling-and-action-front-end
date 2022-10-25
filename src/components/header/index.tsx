import {
  Box,
  Button,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import Logo from "../logo";
import MenuItem from "../menuItem";
import MenuToggle from "../menuToggle";
import NavBarContainer from "../navBarContainer";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer
      bgColor={"white"}>
      <Logo></Logo>
      <MenuToggle
        toggle={toggle}
        isOpen={isOpen}></MenuToggle>
      <Box
        border={"1px dashed black"}
        display={{
          base: isOpen ? "block" : "none",
          md: "block",
        }}
        flexBasis={{
          base: "100%",
          md: "auto",
        }}>
        <Flex
          flexDirection={[
            "column",
            "column",
            "row",
            "row",
          ]}
          h={["11rem", "11rem", "4rem", "4rem"]}
          w={["100%", "100%", "20rem"]}
          align={"center"}
          justify={[
            "space-between",
            "space-between",
            "space-between",
            "flex-end",
          ]}
          border={"1px dashed black"}
          pt={[4, 4, 0, 0]}>
          <MenuItem to='/'>Carros</MenuItem>
          <MenuItem to='/'>Motos</MenuItem>
          <MenuItem to='/'>Leilão</MenuItem>
          <MenuItem to='/login' isLast>
            <Button variant={"outline2"}>
              Fazer login
            </Button>
          </MenuItem>
        </Flex>
      </Box>
    </NavBarContainer>
  );
};

export default Header;

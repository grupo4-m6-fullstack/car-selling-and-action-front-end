import {
  Box,
  Button,
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
    <NavBarContainer>
      <Logo></Logo>
      <MenuToggle
        toggle={toggle}
        isOpen={isOpen}></MenuToggle>
      <Box
        display={{
          base: isOpen ? "block" : "none",
          md: "block",
        }}
        flexBasis={{
          base: "100%",
          md: "auto",
        }}>
        <Stack
          spacing={8}
          align={"center"}
          justify={[
            "center",
            "space-between",
            "flex-end",
            "flex-end",
          ]}
          pt={[4, 4, 0, 0]}>
          <MenuItem to='/'>Carros</MenuItem>
          <MenuItem to='/'>Motos</MenuItem>
          <MenuItem to='/'>Leilão</MenuItem>
          <MenuItem to='/login' isLast>
            <Button variant={"outline2"}>
              Fazer login
            </Button>
          </MenuItem>
        </Stack>
      </Box>
    </NavBarContainer>
  );
};

export default Header;

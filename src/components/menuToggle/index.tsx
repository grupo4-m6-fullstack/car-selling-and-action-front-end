import { Box } from "@chakra-ui/react";
import { GoThreeBars, GoX } from "react-icons/go";

interface IMenuToggleProps {
  toggle: () => void;
  isOpen: boolean;
}

const MenuToggle = ({
  toggle,
  isOpen,
}: IMenuToggleProps) => {
  return (
    <Box
      display={{ base: "block", md: "none" }}
      onClick={toggle}>
      {isOpen ? <GoX /> : <GoThreeBars />}
    </Box>
  );
};

export default MenuToggle;

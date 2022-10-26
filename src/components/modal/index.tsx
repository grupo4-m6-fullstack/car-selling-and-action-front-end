import {
  Modal,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react";

interface IBaseModalProps {
  children: JSX.Element;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const BasicModal = ({
  children,
  isOpen,
  onOpen,
  onClose,
}: IBaseModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>{children}</ModalContent>
    </Modal>
  );
};

export default BasicModal;

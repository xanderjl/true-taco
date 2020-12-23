import React from "react"
import PropTypes from "prop-types"
import {
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react"

const ImageModal = ({ image, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalContent maxW="max-content" h="90vh" margin="3rem 1.25rem" bg="transparent">
          <ModalCloseButton color="white" />
          <Image maxW="4xl" h="100%" src={image} objectFit="contain" objectPosition="top" />
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}

ImageModal.propTypes = {
  image: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.any.isRequired,
}

export default ImageModal

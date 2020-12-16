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
        <ModalContent maxW="4xl" margin="3rem 1.25rem">
          <ModalCloseButton color="white" />
          <Image src={image} />
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

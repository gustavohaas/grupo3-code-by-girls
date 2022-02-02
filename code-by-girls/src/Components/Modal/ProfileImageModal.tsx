import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react';
import { useProfile } from '../../Providers/Profile';
import { useState } from "react";
import { useLogin } from '../../Providers/Login';

interface ProfileImageModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ProfileImageModal = ({ isOpen, onClose }: ProfileImageModalProps) => {

    const { editImage, profileId } = useProfile();
    const { data } = useLogin();

    const [value, setValue] = useState("");

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent w={["290px", "340px", "360px", "400px"]}>
            <ModalHeader 
                textAlign="center"
                fontWeight="700"
                bgColor="purple.300"
                color="gray.50"
            >Alterar imagem</ModalHeader>
            <ModalCloseButton color="gray.50" />
            <ModalBody>
                <FormControl>
                    <FormLabel fontWeight="700" margin="0px 0px 2px 5px">
                    Nome do grupo
                    </FormLabel>
                    <Input
                    onChangeCapture={(e) =>
                        setValue(e.currentTarget.value)
                    }
                    placeholder="Inserir url da imagem"
                    _hover={{ borderColor: "purple.500" }}
                    />
                </FormControl>
            </ModalBody>

            <ModalFooter>
                <Button
                    w="75%"
                    _hover={{ bgColor: "purple.400" }}
                    bgColor="purple.300"
                    color="gray.50"
                    mr={3}
                    onClick={() => editImage( profileId, value, data.accessToken )}
                >
                    Atualizar imagem
                </Button>
                <Button
                    onClick={onClose}
                    _hover={{ bgColor: "gray.600", color: "gray.50" }}
                >
                    Cancel
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
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

interface ProfileLinkedinModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ProfileLinkedinModal = ({ isOpen, onClose }: ProfileLinkedinModalProps) => {

    const { editLinkedin, profileId } = useProfile();
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
            >Alterar Linkedin</ModalHeader>
            <ModalCloseButton color="gray.50" />
            <ModalBody>
                <FormControl>
                    <FormLabel fontWeight="700" margin="0px 0px 2px 5px">
                    URL do linkedin
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
                    onClick={() => editLinkedin(profileId, value, data.accessToken, data.user.id)}
                >
                    Atualizar Linkedin
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
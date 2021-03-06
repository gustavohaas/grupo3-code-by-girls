import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";

import {
  useState,
  useEffect,
  useCallback,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";
import { FieldErrors } from "react-hook-form";
import { IconType } from "react-icons/lib";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldErrors | null;
  icon?: IconType;
  placeholder?: string;
}

type inputVariationOptions = {
  [key: string]: string;
};

const inputVariation: inputVariationOptions = {
  error: "red.500",
  default: "gray.200",
  focus: "purple.500",
  filled: "green.500",
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { error = null, name, icon: Icon, label, placeholder, ...rest },
  ref
) => {
  const [variation, setVariation] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    if (error) {
      return setVariation("error");
    }
  }, [error]);

  const handleInputFocus = useCallback(() => {
    if (!error) {
      setVariation("focus");
    }
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      return setVariation("filled");
    }
  }, [error, value]);

  return (
    <FormControl isInvalid={!!error}>
      {!!label && (
        <FormLabel mb="1px" color="gray.400" paddingLeft="10px">
          {label}
        </FormLabel>
      )}

      <InputGroup flexDirection="column">
        {Icon && (
          <InputLeftElement
            color={inputVariation[variation]}
            mt="2.5"
            paddingLeft="10px"
          >
            <Icon />
          </InputLeftElement>
        )}

        <ChakraInput
          name={name}
          placeholder={placeholder}
          {...rest}
          onFocus={handleInputFocus}
          onChangeCapture={(e) => setValue(e.currentTarget.value)}
          onBlurCapture={handleInputBlur}
          color={inputVariation[variation]}
          borderColor={inputVariation[variation]}
          bg="gray.50"
          variant="outline"
          _hover={{ bgColor: "gray.100", borderColor: "purple.300" }}
          _placeholder={{
            color: "gray.300",
            fontSize: "0.9rem",
            paddingLeft: "1rem",
          }}
          size="lg"
          h="57px"
          ref={ref}
        />

        {!!error && (
          <FormErrorMessage
            w="95%"
            fontSize="0.8rem"
            justifyContent="flex-end"
            textAlign="right"
            mt="1px"
          >
            {error.message}
          </FormErrorMessage>
        )}
      </InputGroup>
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
